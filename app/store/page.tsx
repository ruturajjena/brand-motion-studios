import StoreBrowser from "@/components/StoreBrowser";
import { getPreviewMedia } from "@/lib/media";
import { PRODUCTS } from "@/lib/products";

export const metadata = { title: "Store" };

export default function StorePage() {
  const entries = PRODUCTS.map((product) => ({
    product,
    media: getPreviewMedia(product.slug),
  }));

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-14">
      <div data-reveal>
        <h1 className="font-display text-4xl font-bold">
          <span className="grad-text">Everything in the store</span>
        </h1>
        <p className="mt-3 max-w-xl text-ink-dim">
          Every website comes with a preview of the real build. One
          All-Access plan unlocks the prompt and complete source behind
          every one of them.
        </p>
      </div>
      <div className="mt-10">
        <StoreBrowser entries={entries} />
      </div>
    </div>
  );
}
