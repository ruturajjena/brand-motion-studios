import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { getSupabaseServiceClient } from "@/lib/supabase/service";
import type { PlanId } from "@/lib/products";

/**
 * Stripe → entitlements sync. Grants/revokes All-Access based on the
 * `supabase_user_id` metadata set at checkout (app/api/checkout/route.ts).
 * Registered in the Stripe dashboard as: <site>/api/webhooks/stripe
 */
export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = req.headers.get("stripe-signature");
  if (!secret || !signature) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const body = await req.text();
  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(body, signature, secret);
  } catch (e) {
    console.error("Stripe webhook signature verification failed:", e);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = getSupabaseServiceClient();

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.client_reference_id ?? session.metadata?.supabase_user_id;
      const plan = session.metadata?.plan as PlanId | undefined;
      if (userId && plan) {
        await supabase.from("entitlements").upsert({
          user_id: userId,
          plan,
          status: "active",
          stripe_customer_id: (session.customer as string) ?? null,
          stripe_subscription_id: (session.subscription as string) ?? null,
          updated_at: new Date().toISOString(),
        });
      }
      break;
    }

    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      const status =
        event.type === "customer.subscription.deleted"
          ? "canceled"
          : sub.status === "active" || sub.status === "trialing"
            ? "active"
            : "past_due";
      await supabase
        .from("entitlements")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("stripe_subscription_id", sub.id);
      break;
    }

    default:
      break;
  }

  return NextResponse.json({ received: true });
}
