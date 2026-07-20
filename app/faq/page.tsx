export const metadata = { title: "FAQ" };

const faqs = [
  {
    q: "What exactly do I get when I buy a prompt pack?",
    a: "The complete, unabridged prompt behind the website you previewed — structure, copy voice, art direction and motion spec — shown instantly on the success page with a copy button, plus your Stripe email receipt. Paste it into your AI tool of choice and build.",
  },
  {
    q: "What does a source code purchase include?",
    a: "The complete build of that website — clean, commented code you own outright, delivered to your purchase email. Most builds are static HTML/CSS/JS with no build step, deployable on any host.",
  },
  {
    q: "What's the difference between Monthly, Yearly and Lifetime?",
    a: "All three unlock every prompt pack and source download in the store, plus new drops while active. Monthly and Yearly renew automatically (cancel anytime); Yearly works out to roughly two months free. Lifetime is a single payment for permanent access to everything we ever release.",
  },
  {
    q: "Can I use what I buy in client and commercial projects?",
    a: "Yes — every purchase includes a commercial license for your own or one client project. Reselling or redistributing the prompts or source files themselves is not allowed.",
  },
  {
    q: "Do I need an account?",
    a: "Not yet. Purchases deliver instantly via the success page and email. Member accounts for All-Access holders are coming soon — your purchase email will be your key.",
  },
  {
    q: "What if a prompt doesn't give me the same result?",
    a: "AI output varies between tools and runs — that's the nature of it. Every pack includes the reference build to steer against, and the art-direction language that gets consistent results. If a pack is broken or missing content, email us and we'll fix it or refund you.",
  },
  {
    q: "How do refunds work?",
    a: "Digital goods are delivered instantly, so all sales are generally final. If something is genuinely wrong — broken delivery, missing files, double charge — email studiosbrandmotion@gmail.com within 7 days and we'll make it right.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-20">
      <div className="text-center" data-reveal>
        <h1 className="font-display text-5xl font-bold tracking-tight">
          <span className="grad-text">Questions, answered.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-dim">
          Everything about buying, licensing and All-Access.
        </p>
      </div>

      <div className="mt-12 space-y-3">
        {faqs.map((f, i) => (
          <details
            key={f.q}
            data-reveal
            style={{ "--reveal-delay": `${i * 0.06}s` } as React.CSSProperties}
            className="group rounded-2xl border border-line bg-surface px-6 py-1 transition hover:border-line-strong"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="text-gold transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="pb-5 text-sm leading-relaxed text-ink-dim">{f.a}</p>
          </details>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-ink-faint" data-reveal>
        Still stuck? Reach us at{" "}
        <a
          href="mailto:studiosbrandmotion@gmail.com"
          className="text-gold transition hover:text-gold-bright"
        >
          studiosbrandmotion@gmail.com
        </a>
      </p>
    </div>
  );
}
