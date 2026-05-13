import type { Metadata } from "next";

export const SITE_URL = "https://sailorpiece.live";
export const SITE_NAME = "Sailor Piece Guide";
export const SITE_TWITTER = "@sailorpiecelive";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: opts.title,
      description: opts.description,
      siteName: SITE_NAME,
      // Image is auto-resolved from app/opengraph-image.tsx (Next.js file-based metadata).
      // Pass `ogImage` explicitly to override per-page.
      ...(opts.ogImage ? { images: [{ url: opts.ogImage, width: 1200, height: 630, alt: opts.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      ...(opts.ogImage ? { images: [opts.ogImage] } : {}),
    },
  };
}
