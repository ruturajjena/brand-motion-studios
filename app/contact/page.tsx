export const metadata = { title: "Contact Us" };

const channels = [
  {
    title: "Purchases & support",
    body: "Delivery issues, refunds, license questions — include your Stripe receipt email.",
    action: "studiosbrandmotion@gmail.com",
    href: "mailto:studiosbrandmotion@gmail.com?subject=Store%20support",
  },
  {
    title: "Custom builds",
    body: "Want us to design and build something one-of-a-kind for your brand?",
    action: "Start a project",
    href: "mailto:studiosbrandmotion@gmail.com?subject=Custom%20project",
  },
  {
    title: "Partnerships",
    body: "Collabs, licensing our packs at volume, or featuring your product.",
    action: "Say hello",
    href: "mailto:studiosbrandmotion@gmail.com?subject=Partnership",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20">
      <div className="text-center" data-reveal>
        <h1 className="font-display text-5xl font-bold tracking-tight">
          <span className="grad-text">Talk to the studio.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-dim">
          Real humans, usually within a day.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {channels.map((c, i) => (
          <a
            key={c.title}
            href={c.href}
            data-reveal
            style={{ "--reveal-delay": `${i * 0.1}s` } as React.CSSProperties}
            className="card flex flex-col rounded-2xl p-7"
          >
            <h2 className="font-display text-lg font-bold">{c.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-dim">
              {c.body}
            </p>
            <span className="mt-5 text-sm font-medium text-gold">
              {c.action} →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
