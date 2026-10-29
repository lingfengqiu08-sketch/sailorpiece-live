/**
 * Adsterra ad-unit config.
 *
 * Keys are injected at build time through the site's deployment environment
 * (Vercel project environment variables) — never committed to the repo.
 * Every NEXT_PUBLIC_* reference must stay a static literal so Next.js inlines
 * it into the bundle; a missing key makes the slot render nothing.
 */
export type BannerSize = "320x50" | "300x250" | "728x90";

const ENV_VALUES: Record<BannerSize, string | undefined> = {
  "320x50": process.env.NEXT_PUBLIC_AD_MOBILE_320X50,
  "300x250": process.env.NEXT_PUBLIC_AD_BANNER_300X250,
  "728x90": process.env.NEXT_PUBLIC_AD_BANNER_728X90,
};

const DIMENSIONS: Record<BannerSize, { width: number; height: number }> = {
  "320x50": { width: 320, height: 50 },
  "300x250": { width: 300, height: 250 },
  "728x90": { width: 728, height: 90 },
};

export function adKey(size: BannerSize): string | null {
  const value = ENV_VALUES[size];
  return value && value !== "0" ? value : null;
}

export function adDimensions(size: BannerSize): { width: number; height: number } {
  return DIMENSIONS[size];
}

/** iframe html file name, e.g. /ads/banner-300x250.html */
export function adSrc(size: BannerSize): string {
  return `/ads/banner-${size}.html`;
}
