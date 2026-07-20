import Link from "next/link";
import PreviewThumb from "@/components/PreviewThumb";
import TiltCard from "@/components/TiltCard";
import UnlockButtons from "@/components/UnlockButtons";
import type { PreviewMedia } from "@/lib/media";
import type { Product } from "@/lib/products";

export default function ProductCard({
  product,
  media,
}: {
  product: Product;
  media: PreviewMedia;
}) {
  return (
    <TiltCard className="h-full">
      <div className="card group flex h-full flex-col rounded-2xl p-3">
        <Link href={`/store/${product.slug}`} className="block">
          <PreviewThumb name={product.name} media={media} />
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
          <div className="mt-auto pt-4">
            <UnlockButtons
              slug={product.slug}
              name={product.name}
              prices={product.prices}
            />
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
