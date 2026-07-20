import { existsSync } from "node:fs";
import { join } from "node:path";

export type PreviewMedia = {
  /** /previews/<slug>.mp4|webm when a screen recording has been uploaded */
  video?: string;
  /** /previews/<slug>.webp screenshot — card image / video poster */
  poster?: string;
};

/** Server-only: resolve which preview media exists for a product slug. */
export function getPreviewMedia(slug: string): PreviewMedia {
  const dir = join(process.cwd(), "public", "previews");
  const video = [".mp4", ".webm"]
    .map((ext) => `${slug}${ext}`)
    .find((f) => existsSync(join(dir, f)));
  return {
    video: video ? `/previews/${video}` : undefined,
    poster: existsSync(join(dir, `${slug}.webp`))
      ? `/previews/${slug}.webp`
      : undefined,
  };
}
