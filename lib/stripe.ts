import Stripe from "stripe";

let stripe: Stripe | null = null;

/** Lazily construct the Stripe client so builds succeed without env vars. */
export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  if (!stripe) {
    stripe = new Stripe(key);
  }
  return stripe;
}
