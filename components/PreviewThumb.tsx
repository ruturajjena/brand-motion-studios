import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Product } from "@/lib/products";

/**
 * Design preview box (getlayers-style thumbnail).
 *
 * Upload a screen recording to public/previews/<slug>.mp4 (or .webm) and it
 * plays automatically (muted loop) — the 1280x800 screenshot in the same
 * folder is the poster/fallback. No recording yet → screenshot only.
 */
export default function PreviewThumb({ product }: { product: Product }) {
  const dir = join(process.cwd(), "public", "previews");
  const video = [".mp4", ".webm"]
    .map((ext) => `${product.slug}${ext}`)
    .find((f) => existsSync(join(dir, f)));
  const poster = existsSync(join(dir, `${product.slug}.webp`))
    ? `/previews/${product.slug}.webp`
    : undefined;

  return (
    <div className="preview-thumb relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-black">
      {video ? (
        <video
          src={`/previews/${video}`}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-top"
        />
      ) : poster ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={`${product.name} design preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </>
      ) : (
        /* No media yet — token-swatch tile */
        <div className="flex h-full w-full flex-col justify-between bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(212,175,55,0.22),transparent_60%)] p-5">
          <div className="flex gap-2">
            {["#d4af37", "#f0d488", "#cdd1d8", "#0e0e10"].map((c) => (
              <span
                key={c}
                className="h-8 w-8 rounded-full border border-line"
                style={{ background: c }}
              />
            ))}
          </div>
          <div>
            <p className="font-display text-2xl font-bold grad-text w-fit">Aa</p>
            <div className="mt-2 h-1.5 w-2/3 rounded-full bg-gradient-to-r from-gold-bright via-gold to-transparent" />
            <div className="mt-1.5 h-1.5 w-1/3 rounded-full bg-surface-2" />
          </div>
        </div>
      )}
    </div>
  );
}
