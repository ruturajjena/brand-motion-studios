import { NextResponse } from "next/server";
import { getProduct } from "@/lib/products";
import { getStripe } from "@/lib/stripe";

export async function POST(req: Request) {
  let slug: unknown;
  try {
    ({ slug } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const product = typeof slug === "string" ? getProduct(slug) : undefined;
  if (!product) {
    return NextResponse.json({ error: "Unknown product" }, { status: 404 });
  }

  const origin =
    req.headers.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://brandmotion.in";

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: product.price,
            product_data: {
              name: product.name,
              description: product.tagline,
            },
          },
        },
      ],
      metadata: { slug: product.slug },
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
