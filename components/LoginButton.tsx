"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

/**
 * Sign-in entry point (top-left). Accounts aren't live yet — the modal says
 * so honestly and routes people to their purchase email / All-Access plans.
 */
export default function LoginButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-dim transition hover:border-line-strong hover:text-ink"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M4 20c1.8-3.2 4.6-4.8 8-4.8s6.2 1.6 8 4.8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        Sign in
      </button>

      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <div
              className="glass glass-panel w-full max-w-sm p-7 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display text-xl font-bold">
                <span className="grad-text">Accounts are coming soon</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                All-Access members will sign in here to unlock everything in one
                place. Until then, every purchase is delivered instantly on the
                success page and to your email receipt.
              </p>
              <a
                href="/pricing"
                className="btn-gold mt-6 inline-block rounded-full px-6 py-2.5 text-sm"
              >
                See All-Access plans
              </a>
              <button
                onClick={() => setOpen(false)}
                className="mt-4 block w-full text-xs text-ink-faint transition hover:text-ink"
              >
                Close
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
