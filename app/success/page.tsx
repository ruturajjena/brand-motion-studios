import { getOrder } from "@lemonsqueezy/lemonsqueezy.js";
import Link from "next/link";
import { getPlan } from "@/lib/products";
import { ensureLemonSqueezy } from "@/lib/lemonsqueezy";

export const metadata = { title: "Purchase complete" };

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ order_id?: string; plan?: string }>;
}) {
  const { order_id, plan: planId } = await searchParams;

  let paid = false;
  let email: string | null = null;

  if (order_id) {
    try {
      ensureLemonSqueezy();
      const { data } = await getOrder(order_id);
      paid = data?.data.attributes.status === "paid";
      email = data?.data.attributes.user_email ?? null;
    } catch {
      paid = false;
    }
  }

  const plan = planId ? getPlan(planId) : undefined;

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-24 text-center">
      {paid ? (
        <>
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line-strong text-3xl">
            ✓
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold">
            <span className="grad-text">Welcome to All-Access.</span>
          </h1>
          <p className="mt-4 max-w-lg text-ink-dim">
            Your All-Access {plan ? plan.name : ""} plan is active — every
            prompt pack and source download in the store, plus everything we
            release next
            {planId === "lifetime" ? ", forever" : " while you're subscribed"}.
            Sign in with {email ? <span className="text-ink">{email}</span> : "your account"}{" "}
            to unlock any project in the store.
          </p>
        </>
      ) : (
        <>
          <h1 className="font-display text-4xl font-bold">Hmm, nothing here.</h1>
          <p className="mt-4 text-ink-dim">
            We couldn&apos;t verify a completed payment for this order.
          </p>
        </>
      )}
      <Link href="/store" className="btn-gold mt-10 rounded-full px-7 py-3 text-sm">
        Back to the store
      </Link>
    </div>
  );
}
