"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import type { PreviewMedia } from "@/lib/media";
import type { Product } from "@/lib/products";

export type Entry = { product: Product; media: PreviewMedia };

/**
 * The product grid + in-place detail modal. Shared by the store (with a filter
 * bar wrapped around it) and the homepage archive. Clicking a card opens the
 * product in a modal rather than navigating away.
 */
export default function ProductGrid({
  entries,
  signedIn,
  reveal = "rise",
  gapClass = "gap-5",
}: {
  entries: Entry[];
  signedIn: boolean;
  reveal?: "rise" | "reveal";
  gapClass?: string;
}) {
  const [active, setActive] = useState<Entry | null>(null);

  return (
    <>
      <div className={`grid ${gapClass} sm:grid-cols-2 xl:grid-cols-3`}>
        {entries.map(({ product, media }, i) => (
          <div
            key={product.slug}
            className={reveal === "rise" ? "rise" : undefined}
            data-reveal={reveal === "reveal" ? "" : undefined}
            style={{ "--reveal-delay": `${(i % 3) * 0.08}s` } as React.CSSProperties}
          >
            <ProductCard
              product={product}
              media={media}
              onOpen={() => setActive({ product, media })}
            />
          </div>
        ))}
      </div>

      {active && (
        <ProductModal
          product={active.product}
          media={active.media}
          signedIn={signedIn}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
