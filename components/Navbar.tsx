import Link from "next/link";

const links = [
  { href: "/store", label: "Store" },
  { href: "/store?category=prompts", label: "Prompts" },
  { href: "/store?category=design", label: "Design" },
  { href: "/store?category=source-code", label: "Source Code" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          <span className="gold-text">Brand</span>
          <span className="text-silver">Motion</span>
        </Link>
        <div className="hidden items-center gap-7 text-sm text-ink-dim sm:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="transition hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/store"
          className="btn-gold rounded-full px-4 py-2 text-sm sm:px-5"
        >
          Browse the store
        </Link>
      </nav>
    </header>
  );
}
