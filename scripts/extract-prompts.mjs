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

/** Prompts that only ever got a card in the prompts.html library page —
 * no standalone showcase HTML — keyed by the <pre id="..."> to extract. */
const inlineFromLibrary = {
  "7star-luxury-hotel": "prompt-7star-hotel-website",
  "luxury-watch-website": "prompt-luxury-watch-website",
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

const libraryHtml = readFileSync(join(ROOT, "public", "prompts.html"), "utf8");
for (const [slug, id] of Object.entries(inlineFromLibrary)) {
  const re = new RegExp(`<pre[^>]*id="${id}"[^>]*>([\\s\\S]*?)</pre>`);
  const m = libraryHtml.match(re);
  if (!m) {
    console.warn(`! ${slug}: id="${id}" not found in prompts.html`);
    continue;
  }
  writeFileSync(join(OUT, `${slug}.txt`), decode(m[1]).trim() + "\n");
  console.log(`✓ ${slug} (from prompts.html#${id})`);
}
