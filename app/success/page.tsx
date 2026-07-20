import Link from "next/link";
import { getProduct } from "@/lib/products";
import { getStripe } from "@/lib/stripe";

export const metadata = { title: "Purchase complete" };

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  let paid = false;
  let productName: string | null = null;
  let email: string | null = null;

  if (session_id) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(session_id);
      paid = session.payment_status === "paid";
      email = session.customer_details?.email ?? null;
      const slug = session.metadata?.slug;
      if (slug) productName = getProduct(slug)?.name ?? null;
    } catch {
      paid = false;
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-6 py-28 text-center">
      {paid ? (
        <>
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-line-strong text-3xl">
            ✓
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold">
            <span className="grad-text">You&apos;re in.</span>
          </h1>
          <p className="mt-4 text-ink-dim">
            {productName ? (
              <>
                Your purchase of <span className="text-ink">{productName}</span>{" "}
                is confirmed.
              </>
            ) : (
              "Your purchase is confirmed."
            )}{" "}
            {email && (
              <>
                A receipt has been sent to{" "}
                <span className="text-ink">{email}</span>.
              </>
            )}
          </p>
          <p className="mt-2 text-sm text-ink-faint">
            We&apos;ll deliver your files to the same email within a few hours —
            usually much faster.
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
