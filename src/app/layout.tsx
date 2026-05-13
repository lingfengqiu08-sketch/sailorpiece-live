import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
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
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
