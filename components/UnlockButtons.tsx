"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import {
  ITEM_LABELS,
  PLANS,
  formatPrice,
  type Item,
} from "@/lib/products";

const monthly = PLANS.find((p) => p.id === "monthly")!;

type Props = {
  slug: string;
  name: string;
  prices: { prompt?: number; source?: number };
  size?: "sm" | "lg";
};

/**
 * The two gated actions under every preview — "Copy prompt" and
 * "Source code". Clicking one opens the paywall: pay once for that
 * item, or start the All-Access subscription.
 */
export default function UnlockButtons({ slug, name, prices, size = "sm" }: Props) {
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState<"once" | "sub" | null>(null);
  const [error, setError] = useState<string | null>(null);

  const items = (Object.keys(ITEM_LABELS) as Item[]).filter((i) => prices[i]);

  async function checkout(body: Record<string, string>, kind: "once" | "sub") {
    setLoading(kind);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error ?? "Checkout failed");
      window.location.assign(data.url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Checkout failed");
      setLoading(null);
    }
  }

  const btnBase =
    size === "lg"
      ? "rounded-full px-6 py-3 text-base"
      : "rounded-full px-4 py-2 text-sm";

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {items.map((i, idx) => (
          <button
            key={i}
            onClick={() => {
              setError(null);
              setItem(i);
            }}
            className={`${btnBase} ${
              idx === 0
                ? "btn-gold"
                : "border border-line text-ink-dim transition hover:border-line-strong hover:text-ink"
            } flex-1 whitespace-nowrap font-medium`}
          >
            {ITEM_LABELS[i]} · {formatPrice(prices[i]!)}
          </button>
        ))}
      </div>

      {item &&
        createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => item && !loading && setItem(null)}
        >
          <div
            className="glass glass-panel w-full max-w-md p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">
                  Unlock
                </p>
                <h3 className="mt-1 font-display text-xl font-bold">
                  {name} — {item === "prompt" ? "Prompt pack" : "Source code"}
                </h3>
              </div>
              <button
                onClick={() => setItem(null)}
                aria-label="Close"
                className="text-ink-faint transition hover:text-ink"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-3">
              <button
                onClick={() => checkout({ slug, item }, "once")}
                disabled={loading !== null}
                className="btn-gold w-full rounded-xl px-5 py-4 text-left disabled:opacity-60"
              >
                <span className="block font-display text-lg font-bold">
                  {loading === "once" ? "Redirecting…" : `Buy once — ${formatPrice(prices[item]!)}`}
                </span>
                <span className="text-sm opacity-80">
                  {item === "prompt"
                    ? "Instant access to the full prompt after payment"
                    : "Full source delivered to your email"}
                </span>
              </button>

              <button
                onClick={() => checkout({ plan: monthly.id }, "sub")}
                disabled={loading !== null}
                className="w-full rounded-xl border border-line-strong px-5 py-4 text-left transition hover:bg-surface-2 disabled:opacity-60"
              >
                <span className="block font-display text-lg font-bold text-gold-bright">
                  {loading === "sub"
                    ? "Redirecting…"
                    : `All-Access — ${formatPrice(monthly.price)}/mo`}
                </span>
                <span className="text-sm text-ink-dim">
                  Every prompt & source in the store, plus new drops.
                </span>
              </button>
            </div>

            {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
            <p className="mt-4 text-center text-xs text-ink-faint">
              Secure checkout by Stripe · cancel anytime ·{" "}
              <a href="/pricing" className="text-gold hover:text-gold-bright">
                yearly & lifetime plans →
              </a>
            </p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
