import PreviewThumb from "@/components/PreviewThumb";
import TiltCard from "@/components/TiltCard";
import type { PreviewMedia } from "@/lib/media";
import type { Product } from "@/lib/products";

export default function ProductCard({
  product,
  media,
  onOpen,
}: {
  product: Product;
  media: PreviewMedia;
  onOpen: () => void;
}) {
  return (
    <TiltCard className="h-full">
      <button
        type="button"
        onClick={onOpen}
        className="card group flex h-full w-full flex-col overflow-hidden rounded-2xl text-left"
      >
        <PreviewThumb name={product.name} media={media} />
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-gold-bright">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-ink-dim">{product.tagline}</p>
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
          <div className="mt-auto flex items-center justify-between gap-3 pt-4">
            <span className="text-xs uppercase tracking-wider text-gold">
              All-Access
            </span>
            <span className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-dim transition group-hover:border-line-strong group-hover:text-ink">
              View project →
            </span>
          </div>
        </div>
      </button>
    </TiltCard>
  );
}
