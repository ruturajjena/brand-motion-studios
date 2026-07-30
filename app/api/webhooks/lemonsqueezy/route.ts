import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { getSupabaseServiceClient } from "@/lib/supabase/service";
import { planForVariantId } from "@/lib/lemonsqueezy";
import type { PlanId } from "@/lib/products";

type LemonSqueezyEvent = {
  meta: {
    event_name: string;
    custom_data?: { supabase_user_id?: string; plan?: string };
  };
  data: {
    id: string;
    attributes: Record<string, unknown>;
  };
};

const ACTIVE_STATUSES = new Set(["on_trial", "active"]);
const PAST_DUE_STATUSES = new Set(["past_due", "unpaid", "paused"]);

/**
 * Lemon Squeezy → entitlements sync. Grants/revokes All-Access based on the
 * `supabase_user_id` custom data set at checkout (app/api/checkout/route.ts).
 * Registered in the Lemon Squeezy dashboard as: <site>/api/webhooks/lemonsqueezy
 */
export async function POST(req: Request) {
  const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET;
  const signature = req.headers.get("x-signature");
  if (!secret || !signature) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const body = await req.text();
  const digest = crypto.createHmac("sha256", secret).update(body).digest("hex");
  const valid =
    digest.length === signature.length &&
    crypto.timingSafeEqual(Buffer.from(digest, "utf8"), Buffer.from(signature, "utf8"));
  if (!valid) {
    console.error("Lemon Squeezy webhook signature verification failed");
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(body) as LemonSqueezyEvent;
  const supabase = getSupabaseServiceClient();
  const attributes = event.data.attributes;
  const userId = event.meta.custom_data?.supabase_user_id;
  const plan =
    (event.meta.custom_data?.plan as PlanId | undefined) ??
    (planForVariantId(attributes.variant_id as number) as PlanId | undefined);

  switch (event.meta.event_name) {
    // One-time (lifetime) purchases are plain orders, never subscriptions.
    case "order_created": {
      if (userId && plan === "lifetime" && attributes.status === "paid") {
        await supabase.from("entitlements").upsert({
          user_id: userId,
          plan,
          status: "active",
          lemonsqueezy_customer_id: String(attributes.customer_id ?? ""),
          lemonsqueezy_order_id: event.data.id,
          updated_at: new Date().toISOString(),
        });
      }
      break;
    }

    case "subscription_created":
    case "subscription_updated":
    case "subscription_resumed":
    case "subscription_unpaused": {
      if (userId && plan) {
        const status = attributes.status as string;
        await supabase.from("entitlements").upsert({
          user_id: userId,
          plan,
          status: ACTIVE_STATUSES.has(status)
            ? "active"
            : PAST_DUE_STATUSES.has(status)
              ? "past_due"
              : "canceled",
          lemonsqueezy_customer_id: String(attributes.customer_id ?? ""),
          lemonsqueezy_subscription_id: event.data.id,
          updated_at: new Date().toISOString(),
        });
      }
      break;
    }

    case "subscription_cancelled":
    case "subscription_expired": {
      await supabase
        .from("entitlements")
        .update({ status: "canceled", updated_at: new Date().toISOString() })
        .eq("lemonsqueezy_subscription_id", event.data.id);
      break;
    }

    default:
      break;
  }

  return NextResponse.json({ received: true });
}
