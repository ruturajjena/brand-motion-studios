"use client";

import { useMemo, useState } from "react";
import ProductGrid, { type Entry } from "@/components/ProductGrid";

/** Lowercase + strip accents so "cafe" matches "Café". */
const fold = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

/**
 * Store layout: a filter bar on top (category pills left, search right) and
 * the product grid below. Clicking a card opens the product in a modal in
 * place rather than navigating to a detail page.
 */
export default function StoreBrowser({
  entries,
  signedIn,
}: {
  entries: Entry[];
  signedIn: boolean;
}) {
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

  const pill = (active: boolean) =>
    `shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition ${
      active
        ? "border-gold/50 bg-surface-2 text-gold-bright"
        : "border-line text-ink-dim hover:border-line-strong hover:text-ink"
    }`;

  return (
    <div>
      {/* Filter bar — pills left, search right; stacks on mobile */}
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0">
          <button onClick={() => setTag(null)} className={pill(tag === null)}>
            All <span className="text-ink-faint">{entries.length}</span>
          </button>
          {tags.map(([t, count]) => (
            <button
              key={t}
              onClick={() => setTag(tag === t ? null : t)}
              className={`${pill(tag === t)} capitalize`}
            >
              {t} <span className="text-ink-faint">{count}</span>
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex shrink-0 items-center gap-2 rounded-xl border border-line bg-surface px-2 py-1.5 transition focus-within:border-line-strong sm:w-64"
        >
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search designs…"
            className="min-w-0 flex-1 bg-transparent px-2 text-sm text-ink outline-none placeholder:text-ink-faint"
          />
          <button
            type="submit"
            aria-label="Search"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-ink-dim transition hover:text-gold-bright"
          >
            ⌕
          </button>
        </form>
      </div>

      {/* Grid */}
      <div className="mt-8">
        {filtered.length ? (
          <ProductGrid entries={filtered} signedIn={signedIn} />
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
