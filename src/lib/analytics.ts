type AnalyticsValue = string | number | boolean | null | undefined;
type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "config" | "event" | "js",
      target: string | Date,
      params?: Record<string, string | number | boolean>,
    ) => void;
  }
}

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

export function trackPageView(path: string) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (!GA_MEASUREMENT_ID || typeof window === "undefined" || !window.gtag) {
    return;
  }

  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== null && value !== undefined),
  ) as Record<string, string | number | boolean>;

  window.gtag("event", name, cleanParams);
}

export function levelBucket(level: number | null) {
  if (level === null) return "none";
  if (level < 1000) return "0-999";
  if (level < 5000) return "1000-4999";
  if (level < 8500) return "5000-8499";
  return "8500+";
}
