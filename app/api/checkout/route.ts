import { NextResponse } from "next/server";
import { ALL_ACCESS, getProduct, type Item } from "@/lib/products";
import { getStripe } from "@/lib/stripe";

const ITEMS: Item[] = ["prompt", "source"];

export async function POST(req: Request) {
  let body: { slug?: unknown; item?: unknown; plan?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const origin =
    req.headers.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://brandmotion.in";

  try {
    // All-Access subscription
    if (body.plan === "all-access") {
      const session = await getStripe().checkout.sessions.create({
        mode: "subscription",
        line_items: [
          {
            quantity: 1,
            price_data: {
              currency: "usd",
              unit_amount: ALL_ACCESS.price,
              recurring: { interval: "month" },
              product_data: {
                name: ALL_ACCESS.name,
                description: ALL_ACCESS.blurb,
              },
            },
          },
        ],
        metadata: { plan: "all-access" },
        success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/store`,
      });
      return NextResponse.json({ url: session.url });
    }

    // One-time item purchase
    const product =
      typeof body.slug === "string" ? getProduct(body.slug) : undefined;
    const item = ITEMS.includes(body.item as Item)
      ? (body.item as Item)
      : undefined;
    const price = product && item ? product.prices[item] : undefined;
    if (!product || !item || !price) {
      return NextResponse.json({ error: "Unknown product" }, { status: 404 });
    }

    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: price,
            product_data: {
              name: `${product.name} — ${item === "prompt" ? "Prompt pack" : "Source code"}`,
              description: product.tagline,
            },
          },
        },
      ],
      metadata: { slug: product.slug, item },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/store/${product.slug}`,
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
