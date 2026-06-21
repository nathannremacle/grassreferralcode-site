import type { Metadata } from "next";
import { Karla } from "next/font/google";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
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
  title: {
    default: "Grass Referral Code 2026 ✅ 5,000 Free Bonus Points | Verified & Working",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "✅ Verified Grass referral code for 2026 — get 5,000 bonus points after 100h. Working sign-up link for app.grass.io. Updated June 2026. Desktop node = 2x points.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "--oruELeHCRaGrujEpWx5dyE3XDdhISc3SsUIzRreQs",
    other: { "msvalidate.01": "1B090C601BEC723EBE06ED47FA491984" },
  },
  openGraph: {
    url: SITE_URL,
    title: "Grass Referral Code 2026 ✅ 5,000 Free Bonus Points | Verified & Working",
    description: "Verified Grass referral code and sign-up link. 5,000 bonus points after 100h. Desktop node = 2x earnings. Updated June 2026.",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Grass Referral Code 2026 ✅ 5,000 Free Bonus Points",
    description: "Verified Grass referral code and sign-up link. 5,000 bonus points after 100h. Desktop node = 2x earnings.",
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
