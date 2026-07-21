"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "glass";
  className?: string;
};

/**
 * Glass/gold button with magnetic pull toward the cursor, a light reflection
 * that tracks the pointer, and a soft golden hover glow. Falls back to a
 * static button under reduced motion (pointer handlers simply no-op there —
 * transforms are cleared on leave).
 */
export default function MagneticButton({
  href,
  children,
  variant = "gold",
  className = "",
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;
    const dx = (mx - r.width / 2) / r.width;
    const dy = (my - r.height / 2) / r.height;
    el.style.transform = `translate(${dx * 14}px, ${dy * 10}px)`;
    el.style.setProperty("--rx", `${(mx / r.width) * 100}%`);
    el.style.setProperty("--ry", `${(my / r.height) * 100}%`);
  }
  function onLeave() {
    const el = ref.current;
    if (el) el.style.transform = "";
  }

  return (
    <Link
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`magnetic magnetic--${variant} ${className}`}
    >
      <span className="magnetic__label">{children}</span>
      <span className="magnetic__sheen" aria-hidden />
    </Link>
  );
}
