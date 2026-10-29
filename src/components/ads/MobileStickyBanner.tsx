"use client";

import { useState } from "react";
import { AdBanner } from "./AdBanner";
import { adKey } from "./ad-config";

/**
 * Mobile-only sticky 320x50 bar pinned to the bottom edge of the viewport.
 * Hidden from md upward, dismissable for the current page view. Renders
 * nothing when NEXT_PUBLIC_AD_MOBILE_320X50 is missing or "0".
 */
export function MobileStickyBanner() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  if (!adKey("320x50")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 md:hidden">
      <div className="relative mx-auto max-w-md pr-8">
        <AdBanner size="320x50" />
        <button
          type="button"
          aria-label="Close ad"
          onClick={() => setDismissed(true)}
          className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full border border-gray-300 bg-white px-2 py-0.5 text-sm leading-none text-gray-500"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
