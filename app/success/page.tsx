import { readFile } from "node:fs/promises";
import { join } from "node:path";
import Link from "next/link";
import PromptReveal from "@/components/PromptReveal";
import { ALL_ACCESS, getProduct } from "@/lib/products";
import { getStripe } from "@/lib/stripe";

export const metadata = { title: "Purchase complete" };

async function loadPrompt(slug: string): Promise<string | null> {
  try {
    return await readFile(
      join(process.cwd(), "content", "prompts", `${slug}.txt`),
      "utf8"
    );
  } catch {
    return null;
  }
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  let paid = false;
  let email: string | null = null;
  let plan: string | undefined;
  let item: string | undefined;
  let productName: string | null = null;
  let promptText: string | null = null;

  if (session_id) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(session_id);
      paid = session.payment_status === "paid";
      email = session.customer_details?.email ?? null;
      plan = session.metadata?.plan;
      item = session.metadata?.item;
      const slug = session.metadata?.slug;
      if (paid && slug) {
        productName = getProduct(slug)?.name ?? null;
        if (item === "prompt") promptText = await loadPrompt(slug);
      }
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
            <span className="grad-text">
              {plan === "all-access" ? "Welcome to All-Access." : "You're in."}
            </span>
          </h1>

          {plan === "all-access" ? (
            <p className="mt-4 max-w-lg text-ink-dim">
              Your {ALL_ACCESS.name} is active. {ALL_ACCESS.blurb} We&apos;ll
              send your access details to{" "}
              <span className="text-ink">{email ?? "your email"}</span> right
              away.
            </p>
          ) : (
            <p className="mt-4 max-w-lg text-ink-dim">
              {productName ? (
                <>
                  Your purchase of <span className="text-ink">{productName}</span>{" "}
                  {item === "source" ? "(source code)" : "(prompt pack)"} is
                  confirmed.
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
          )}

          {promptText ? (
            <PromptReveal text={promptText} />
          ) : paid && item === "source" ? (
            <p className="mt-2 text-sm text-ink-faint">
              Your source files will be delivered to the same email within a few
              hours — usually much faster.
            </p>
          ) : null}
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
