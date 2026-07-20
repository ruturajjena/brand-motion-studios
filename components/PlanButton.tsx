"use client";

import { useState } from "react";
import type { PlanId } from "@/lib/products";

export default function PlanButton({
  plan,
  highlight,
}: {
  plan: PlanId;
  highlight?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function checkout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error ?? "Checkout failed");
      window.location.assign(data.url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Checkout failed");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={checkout}
        disabled={loading}
        className={`w-full rounded-full px-6 py-3 font-medium disabled:opacity-60 ${
          highlight
            ? "btn-gold"
            : "border border-line text-ink-dim transition hover:border-line-strong hover:text-ink"
        }`}
      >
        {loading ? "Redirecting…" : "Get started"}
      </button>
      {error && <p className="mt-2 text-center text-sm text-red-400">{error}</p>}
    </div>
  );
}
