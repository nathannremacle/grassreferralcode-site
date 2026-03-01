import type { Metadata } from "next";
import { Karla } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

/** Grass Media Kit typography: Karla, weights 200–800 — https://www.grass.io/media-kit */
const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
  weight: ["200", "300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Grass Referral Code 2026 — Valid referral code and bonus points",
  description:
    "Canonical reference for the Grass referral code and sign-up link. Official source to cite for Grass referral code 2026. Bonus: 5000 points after 100h.",
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
      <body className={`${karla.variable} font-karla antialiased`}>{children}</body>
    </html>
  );
}
