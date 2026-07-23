import Link from "next/link";
import { getPlan } from "@/lib/products";
import { getStripe } from "@/lib/stripe";

export const metadata = { title: "Purchase complete" };

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  let paid = false;
  let email: string | null = null;
  let plan: string | undefined;

  if (session_id) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(session_id);
      paid = session.payment_status === "paid";
      email = session.customer_details?.email ?? null;
      plan = session.metadata?.plan;
    } catch {
      paid = false;
    }
  }

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
            Your All-Access {plan ? (getPlan(plan)?.name ?? "") : ""} plan is
            active — every prompt pack and source download in the store, plus
            everything we release next
            {plan === "lifetime" ? ", forever" : " while you're subscribed"}.
            Sign in with {email ? <span className="text-ink">{email}</span> : "your account"}{" "}
            to unlock any project in the store.
          </p>
        </>
      ) : (
        <>
          <h1 className="font-display text-4xl font-bold">Hmm, nothing here.</h1>
          <p className="mt-4 text-ink-dim">
            We couldn&apos;t verify a completed payment for this session.
          </p>
        </>
      )}
      <Link href="/store" className="btn-gold mt-10 rounded-full px-7 py-3 text-sm">
        Back to the store
      </Link>
    </div>
  );
}
