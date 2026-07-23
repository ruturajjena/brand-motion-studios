import { NextResponse } from "next/server";
import { getPlan } from "@/lib/products";
import { getStripe } from "@/lib/stripe";
import { getServerUser } from "@/lib/supabase/server";

export async function POST(req: Request) {
  let body: { plan?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const plan = typeof body.plan === "string" ? getPlan(body.plan) : undefined;
  if (!plan) {
    return NextResponse.json({ error: "Unknown plan" }, { status: 404 });
  }

  const user = await getServerUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in first" }, { status: 401 });
  }

  const origin =
    req.headers.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://brandmotion.in";

  try {
    const recurring =
      plan.id === "monthly"
        ? { interval: "month" as const }
        : plan.id === "yearly"
          ? { interval: "year" as const }
          : undefined;

    const session = await getStripe().checkout.sessions.create({
      mode: recurring ? "subscription" : "payment",
      client_reference_id: user.id,
      customer_email: user.email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: plan.price,
            ...(recurring ? { recurring } : {}),
            product_data: {
              name: `All-Access — ${plan.name}`,
              description: plan.blurb,
            },
          },
        },
      ],
      metadata: { plan: plan.id, supabase_user_id: user.id },
      subscription_data: recurring ? { metadata: { plan: plan.id, supabase_user_id: user.id } } : undefined,
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing`,
    });
    return NextResponse.json({ url: session.url });
  } catch (e) {
    console.error("Stripe checkout error:", e);
    const message =
      e instanceof Error && e.message.includes("STRIPE_SECRET_KEY")
        ? "Payments are not configured yet"
        : "Could not start checkout";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
