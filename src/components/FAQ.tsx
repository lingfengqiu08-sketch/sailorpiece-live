"use client";

import { useState } from "react";

export interface FAQItem {
  q: string;
  a: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <details
          key={i}
          open={open === i}
          onToggle={(e) => {
            if ((e.target as HTMLDetailsElement).open) setOpen(i);
            else if (open === i) setOpen(null);
          }}
          className="surface p-4"
        >
          <summary className="font-semibold cursor-pointer select-none list-none flex items-start justify-between gap-3">
            <span>{item.q}</span>
            <span className="text-[var(--color-text-muted)]">+</span>
          </summary>
          <p className="mt-3 text-sm text-[var(--color-text-muted)] leading-relaxed">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
