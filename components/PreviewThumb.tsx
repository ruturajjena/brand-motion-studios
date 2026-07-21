import type { PreviewMedia } from "@/lib/media";

/**
 * Immersive preview media — full-bleed, frameless. Bleeds to the edges of
 * whatever container it sits in (cards clip it with their own radius); a
 * bottom scrim blends the footage into the surface below it.
 */
export default function PreviewThumb({
  name,
  media,
}: {
  name: string;
  media: PreviewMedia;
}) {
  return (
    <div className="preview-thumb relative aspect-[16/10] w-full overflow-hidden bg-black">
      {media.video ? (
        <video
          src={media.video}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-top"
        />
      ) : media.poster ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={media.poster}
          alt={`${name} design preview`}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
    </div>
  );
}
