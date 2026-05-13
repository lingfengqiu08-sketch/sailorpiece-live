"use client";

import { useEffect, useRef, useState } from "react";
import { levelBucket, trackEvent } from "@/lib/analytics";

const STORAGE_KEY = "sp:user_level";

export function LevelEligibilityFilter({
  onChange,
}: {
  onChange: (level: number | null) => void;
}) {
  const [raw, setRaw] = useState<string>("");
  const changedByUser = useRef(false);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && /^\d+$/.test(stored)) {
        setRaw(stored);
        onChange(Number(stored));
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!changedByUser.current) return;

    const id = window.setTimeout(() => {
      const level = raw === "" ? null : Number(raw);
      trackEvent("level_filter_change", {
        has_level: level !== null,
        level_bucket: levelBucket(level),
      });
    }, 700);

    return () => window.clearTimeout(id);
  }, [raw]);

  function handleChange(value: string) {
    const sanitised = value.replace(/[^\d]/g, "").slice(0, 6);
    changedByUser.current = true;
    setRaw(sanitised);
    if (sanitised === "") {
      try { localStorage.removeItem(STORAGE_KEY); } catch {}
      onChange(null);
    } else {
      try { localStorage.setItem(STORAGE_KEY, sanitised); } catch {}
      onChange(Number(sanitised));
    }
  }

  function clear() {
    changedByUser.current = true;
    setRaw("");
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
    onChange(null);
  }

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="level-input" className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
        Your level
      </label>
      <input
        id="level-input"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        value={raw}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="e.g. 8500"
        className="w-28 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--color-accent)]"
      />
      {raw && (
        <button
          onClick={clear}
          type="button"
          className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
        >
          Clear
        </button>
      )}
    </div>
  );
}
