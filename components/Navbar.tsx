import Link from "next/link";
import LoginButton from "@/components/LoginButton";

const links = [
  { href: "/store", label: "Store" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6">
        {/* Top-left: sign in + brand */}
        <div className="flex items-center gap-4">
          <LoginButton />
          <Link href="/" className="font-display text-lg font-bold tracking-tight">
            <span className="gold-text">Brand</span>
            <span className="text-silver">Motion</span>
          </Link>
        </div>

        <div className="hidden items-center gap-7 text-sm text-ink-dim md:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="transition hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/pricing"
          className="btn-gold rounded-full px-4 py-2 text-sm sm:px-5"
        >
          Get All-Access
        </Link>
      </nav>
    </header>
  );
}
