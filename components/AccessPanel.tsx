"use client";

import { useState } from "react";
import Link from "next/link";
import PromptReveal from "@/components/PromptReveal";
import SignInModal from "@/components/auth/SignInModal";

type Props = {
  slug: string;
  name: string;
  signedIn: boolean;
  entitled: boolean;
  promptText: string | null;
};

/**
 * The gated area under every product's specs — either the actual prompt
 * (All-Access members) or a CTA toward signing in / subscribing. All
 * entitlement checks happen server-side before this ever renders content;
 * this component only decides what to show, never fetches the prompt itself.
 */
export default function AccessPanel({ slug, name, signedIn, entitled, promptText }: Props) {
  const [open, setOpen] = useState(false);

  if (entitled) {
    return (
      <div>
        {promptText ? (
          <PromptReveal text={promptText} />
        ) : (
          <p className="mt-8 rounded-2xl border border-line-strong bg-bg-soft px-5 py-4 text-sm text-ink-dim">
            The prompt file for this one is still being uploaded — check back
            shortly or email us and we'll send it directly.
          </p>
        )}
        <a
          href={`mailto:studiosbrandmotion@gmail.com?subject=${encodeURIComponent(
            `Source code request — ${name}`
          )}`}
          className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-line-strong px-5 py-3 text-sm font-medium transition hover:bg-surface-2"
        >
          Request the source code →
        </a>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-2xl border border-line-strong bg-bg-soft p-6 text-center">
      <p className="font-display text-lg font-bold">
        <span className="grad-text">Part of All-Access</span>
      </p>
      <p className="mt-2 text-sm text-ink-dim">
        The prompt and source for {name} unlock the moment you subscribe —
        along with everything else in the store.
      </p>
      {signedIn ? (
        <Link
          href="/pricing"
          className="btn-gold mt-5 inline-block w-full rounded-xl px-5 py-3 text-sm font-medium"
        >
          Get All-Access
        </Link>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="btn-gold mt-5 w-full rounded-xl px-5 py-3 text-sm font-medium"
        >
          Sign in to unlock
        </button>
      )}
      <SignInModal
        open={open}
        onClose={() => setOpen(false)}
        onSignedIn={() => window.location.reload()}
      />
    </div>
  );
}
