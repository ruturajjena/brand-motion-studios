import { createCheckout } from "@lemonsqueezy/lemonsqueezy.js";
import { NextResponse } from "next/server";
import { getPlan } from "@/lib/products";
import { ensureLemonSqueezy, getStoreId, getVariantId } from "@/lib/lemonsqueezy";
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
    ensureLemonSqueezy();
    const { data, error } = await createCheckout(getStoreId(), getVariantId(plan.id), {
      checkoutData: {
        email: user.email,
        custom: { supabase_user_id: user.id, plan: plan.id },
      },
      productOptions: {
        redirectUrl: `${origin}/success?order_id={order_id}&plan=${plan.id}`,
      },
    });
    if (error || !data?.data.attributes.url) {
      throw error ?? new Error("No checkout URL returned");
    }
    return NextResponse.json({ url: data.data.attributes.url });
  } catch (e) {
    console.error("Lemon Squeezy checkout error:", e);
    const message =
      e instanceof Error && e.message.includes("LEMONSQUEEZY")
        ? "Payments are not configured yet"
        : "Could not start checkout";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
