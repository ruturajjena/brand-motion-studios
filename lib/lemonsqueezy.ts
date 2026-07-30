import { lemonSqueezySetup } from "@lemonsqueezy/lemonsqueezy.js";

let configured = false;

/** Lazily configure the Lemon Squeezy SDK so builds succeed without env vars. */
export function ensureLemonSqueezy() {
  const apiKey = process.env.LEMONSQUEEZY_API_KEY;
  if (!apiKey) {
    throw new Error("LEMONSQUEEZY_API_KEY is not set");
  }
  if (!configured) {
    lemonSqueezySetup({
      apiKey,
      onError: (error) => console.error("Lemon Squeezy error:", error),
    });
    configured = true;
  }
}

export function getStoreId(): string {
  const storeId = process.env.LEMONSQUEEZY_STORE_ID;
  if (!storeId) {
    throw new Error("LEMONSQUEEZY_STORE_ID is not set");
  }
  return storeId;
}

/** Maps our internal plan ids to the variant created for them in the Lemon Squeezy dashboard. */
const VARIANT_ENV_VAR: Record<string, string> = {
  monthly: "LEMONSQUEEZY_VARIANT_MONTHLY",
  yearly: "LEMONSQUEEZY_VARIANT_YEARLY",
  lifetime: "LEMONSQUEEZY_VARIANT_LIFETIME",
};

export function getVariantId(plan: string): string {
  const envVar = VARIANT_ENV_VAR[plan];
  const variantId = envVar && process.env[envVar];
  if (!variantId) {
    throw new Error(`${envVar ?? `LEMONSQUEEZY variant for "${plan}"`} is not set`);
  }
  return variantId;
}

/** Reverse lookup: variant id (as it appears in a webhook payload) → our plan id. */
export function planForVariantId(variantId: number | string): string | undefined {
  const id = variantId.toString();
  return Object.entries(VARIANT_ENV_VAR).find(([, envVar]) => process.env[envVar] === id)?.[0];
}
