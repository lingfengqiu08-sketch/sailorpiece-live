import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { AdBanner, MobileStickyBanner, NativeBannerAd } from "@/components/ads";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sailor Piece Codes, Wiki, Tier List & Official Links",
    template: "%s | Sailor Piece Guide",
  },
  description:
    "Active Sailor Piece codes verified daily, plus race / fruit / sword tier lists, wiki guide basics, official Trello, Discord and Roblox links.",
  applicationName: SITE_NAME,
  keywords: [
    "sailor piece codes",
    "sailor piece tier list",
    "sailor piece wiki",
    "sailor piece trello",
    "sailor piece discord",
    "sailor piece guide",
    "sailor piece races",
    "sailor piece roblox",
  ],
  authors: [{ name: SITE_NAME }],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Bottom padding only exists when the mobile sticky ad is actually rendered.
  const hasMobileAd = Boolean(process.env.NEXT_PUBLIC_AD_MOBILE_320X50);

  return (
    <html lang="en">
      <body className={hasMobileAd ? "pb-14 md:pb-0" : undefined}>
        <Header />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
          <NativeBannerAd className="mb-8" />
          {children}
          <AdBanner size="300x250" className="mt-10" />
        </main>
        <Footer />
        <MobileStickyBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
