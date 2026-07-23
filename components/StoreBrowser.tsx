"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { PreviewMedia } from "@/lib/media";
import type { Product } from "@/lib/products";

type Entry = { product: Product; media: PreviewMedia };

/** Lowercase + strip accents so "cafe" matches "Café". */
const fold = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

/**
 * Store layout: sticky left sidebar (search + categories from tags) and the
 * product grid on the right.
 */
export default function StoreBrowser({ entries }: { entries: Entry[] }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const { product } of entries)
      for (const t of product.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [entries]);

  const filtered = entries.filter(({ product }) => {
    if (tag && !product.tags.includes(tag)) return false;
    if (query) {
      const q = fold(query.trim());
      const hay = fold(
        `${product.name} ${product.tagline} ${product.description} ${product.tags.join(" ")}`
      );
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  const itemBtn = (active: boolean) =>
    `flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
      active
        ? "bg-surface-2 text-gold-bright"
        : "text-ink-dim hover:bg-surface hover:text-ink"
    }`;

  return (
    <div className="flex flex-col gap-10 lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full shrink-0 lg:sticky lg:top-24 lg:h-fit lg:w-60">
        <label className="relative block">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-faint">
            ⌕
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search designs…"
            className="w-full rounded-xl border border-line bg-surface px-9 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink-faint focus:border-line-strong"
          />
        </label>

        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint">
          Categories
        </p>
        <div className="mt-2 space-y-1">
          <button onClick={() => setTag(null)} className={itemBtn(tag === null)}>
            <span>All</span>
            <span className="text-xs text-ink-faint">{entries.length}</span>
          </button>
          {tags.map(([t, count]) => (
            <button
              key={t}
              onClick={() => setTag(tag === t ? null : t)}
              className={`${itemBtn(tag === t)} capitalize`}
            >
              <span>{t}</span>
              <span className="text-xs text-ink-faint">{count}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Grid */}
      <div className="min-w-0 flex-1">
        {filtered.length ? (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map(({ product, media }, i) => (
              <div
                key={product.slug}
                className="rise"
                style={{ "--reveal-delay": `${(i % 3) * 0.08}s` } as React.CSSProperties}
              >
                <ProductCard product={product} media={media} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center rounded-2xl border border-line py-24 text-center">
            <p className="font-display text-xl font-bold text-ink-dim">
              Nothing matches that search.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setTag(null);
              }}
              className="mt-4 text-sm text-gold transition hover:text-gold-bright"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
