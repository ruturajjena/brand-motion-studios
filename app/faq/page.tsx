export const metadata = { title: "FAQ" };

const faqs = [
  {
    q: "How do I get access to a prompt pack?",
    a: "Sign in (Google, Apple, or email) and subscribe to All-Access. Every product page then shows the complete, unabridged prompt behind that website — structure, copy voice, art direction and motion spec — with a copy button, instantly, for as long as your plan is active.",
  },
  {
    q: "What about source code?",
    a: "All-Access covers the source too. Once you're subscribed, every product page has a \"Request the source code\" button — email us and we'll send the complete, commented build you own outright.",
  },
  {
    q: "What's the difference between Monthly, Yearly and Lifetime?",
    a: "All three unlock every prompt pack and source download in the store, plus new drops while active. Monthly and Yearly renew automatically (cancel anytime); Yearly works out to roughly two months free. Lifetime is a single payment for permanent access to everything we ever release.",
  },
  {
    q: "Can I use what I buy in client and commercial projects?",
    a: "Yes — All-Access includes a commercial license for your own or client projects. Reselling or redistributing the prompts or source files themselves is not allowed.",
  },
  {
    q: "Do I need an account?",
    a: "Yes — sign in with Google, Apple, or email before subscribing. Your account is what ties your All-Access plan to the store, so anything unlocked shows up the moment you're signed in on any device.",
  },
  {
    q: "What if a prompt doesn't give me the same result?",
    a: "AI output varies between tools and runs — that's the nature of it. Every pack includes the reference build to steer against, and the art-direction language that gets consistent results. If a pack is broken or missing content, email us and we'll fix it.",
  },
  {
    q: "How do refunds and cancellations work?",
    a: "Cancel Monthly or Yearly anytime — you keep access until the current period ends, no refund for time already used. Lifetime is a one-time purchase; if something is genuinely wrong — broken delivery, double charge — email studiosbrandmotion@gmail.com within 7 days and we'll make it right.",
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
