import Link from "next/link";
import PreviewThumb from "@/components/PreviewThumb";
import UnlockButtons from "@/components/UnlockButtons";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card group flex flex-col rounded-2xl p-3">
      <Link href={`/store/${product.slug}`} className="block">
        <PreviewThumb product={product} />
      </Link>
      <div className="flex flex-1 flex-col p-3">
        <Link href={`/store/${product.slug}`} className="block">
          <h3 className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-gold-bright">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-ink-dim">{product.tagline}</p>
        </Link>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-2.5 py-1 text-[11px] uppercase tracking-wider text-ink-faint"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <UnlockButtons
            slug={product.slug}
            name={product.name}
            prices={product.prices}
          />
        </div>
      </div>
    </div>
  );
}
