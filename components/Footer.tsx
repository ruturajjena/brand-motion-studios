import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-sm text-ink-faint sm:flex-row sm:items-center">
        <div>
          <p className="font-display font-semibold text-ink-dim">
            Brand Motion Studios
          </p>
          <p className="mt-1">Prompts, design systems & source code that move.</p>
        </div>
        <div className="flex gap-6">
          <Link href="/store" className="transition hover:text-ink">
            Store
          </Link>
          <a href="/studio.html" className="transition hover:text-ink">
            Studio services
          </a>
          <a
            href="mailto:studiosbrandmotion@gmail.com"
            className="transition hover:text-ink"
          >
            Contact
          </a>
        </div>
        <p>© {new Date().getFullYear()} Brand Motion Studios</p>
      </div>
    </footer>
  );
}
