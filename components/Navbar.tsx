"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LoginButton from "@/components/LoginButton";

const links = [
  { href: "/store", label: "Store" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-700 ${
        scrolled
          ? "border-b border-line bg-bg/70 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          <span className="gold-text">Brand</span>
          <span className="text-silver">Motion</span>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-ink-dim md:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="nav-link transition hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LoginButton />
          <Link href="/pricing" className="pill pill--gold !px-5 !py-2 text-sm">
            Get All-Access
          </Link>
        </div>
      </nav>
    </header>
  );
}
