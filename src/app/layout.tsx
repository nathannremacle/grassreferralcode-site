import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Grass Referral Code 2026 — Valid referral code and bonus points",
  description:
    "Official Grass referral code, valid February 2026. Bonus: 5000 points after 100h. Affiliate link and Token Unlock, Season 2 airdrop updates.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "--oruELeHCRaGrujEpWx5dyE3XDdhISc3SsUIzRreQs",
    other: { "msvalidate.01": "1B090C601BEC723EBE06ED47FA491984" },
  },
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    url: SITE_URL,
    title: "Grass Referral Code 2026 — Valid referral code",
    description: "Grass referral code, 5000 points bonus, valid February 2026.",
    siteName: "Grass Referral Code",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grass Referral Code 2026 — Valid referral code",
    description: "Grass referral code, 5000 points bonus, valid February 2026.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
