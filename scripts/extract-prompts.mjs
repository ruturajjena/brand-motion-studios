/**
 * Extracts the prompt text (<pre> blocks) from the legacy prompt pages in
 * public/ into content/prompts/<slug>.txt — the files delivered after a
 * "Copy prompt" purchase. Re-run whenever a legacy page's prompt changes:
 *
 *   node scripts/extract-prompts.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const OUT = join(ROOT, "content", "prompts");
mkdirSync(OUT, { recursive: true });

const pages = {
  "taj-mahal-keynote": "taj-mahal.html",
  "br-velluto-cafe": "cafe.html",
  "irctc-apple-redesign": "irctc-apple-design.html",
  "maison-solea-perfume": "pefume-wesbite.html",
  "sneaker-microsite": "sneaker-prompt.html",
  "violet-car-landing": "violet-car.html",
  "rajmahal-palace": "rajmahal-prompt.html",
};

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, "")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");

for (const [slug, file] of Object.entries(pages)) {
  const html = readFileSync(join(ROOT, "public", file), "utf8");
  const blocks = [...html.matchAll(/<pre[^>]*>([\s\S]*?)<\/pre>/g)].map((m) =>
    decode(m[1]).trim()
  );
  if (!blocks.length) {
    console.warn(`! ${slug}: no <pre> blocks found in ${file}`);
    continue;
  }
  writeFileSync(join(OUT, `${slug}.txt`), blocks.join("\n\n---\n\n") + "\n");
  console.log(`✓ ${slug} (${blocks.length} block${blocks.length > 1 ? "s" : ""})`);
}
