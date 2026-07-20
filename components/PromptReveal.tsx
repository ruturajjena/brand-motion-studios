"use client";

import { useState } from "react";

export default function PromptReveal({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mt-8 w-full overflow-hidden rounded-2xl border border-line-strong bg-bg-soft text-left">
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="text-sm text-ink-faint">Your prompt pack</span>
        <button
          onClick={copy}
          className="btn-gold rounded-full px-4 py-1.5 text-sm"
        >
          {copied ? "Copied ✓" : "Copy prompt"}
        </button>
      </div>
      <pre className="max-h-[420px] overflow-auto whitespace-pre-wrap px-5 py-4 font-mono text-[13px] leading-relaxed text-ink-dim">
        {text}
      </pre>
    </div>
  );
}
