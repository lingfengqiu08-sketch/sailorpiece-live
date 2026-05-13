"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function CopyCodeButton({
  code,
  label = "Copy",
  onCopied,
}: {
  code: string;
  label?: string;
  onCopied?: (code: string) => void;
}) {
  const [copied, setCopied] = useState(false);

  async function handle() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      onCopied?.(code);
      trackEvent("copy_code", { code });
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore — clipboard may be denied
    }
  }

  return (
    <button
      onClick={handle}
      type="button"
      aria-label={`Copy code ${code}`}
      className={
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold border transition-colors " +
        (copied
          ? "bg-[rgba(25,211,178,0.18)] text-[#2eebc7] border-[rgba(25,211,178,0.55)]"
          : "bg-[var(--color-surface-2)] text-[var(--color-text)] border-[var(--color-border)] hover:border-[color-mix(in_srgb,var(--color-accent)_55%,var(--color-border))]")
      }
    >
      {copied ? "Copied" : label}
    </button>
  );
}
