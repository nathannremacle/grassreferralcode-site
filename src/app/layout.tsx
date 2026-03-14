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
    default: "Grass Referral Code 2026 — 5,000 Bonus Points After 100h | Valid Code & Sign-Up Link",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Get the valid Grass referral code and sign-up link for 2026. Receive 5,000 bonus Grass points after 100 hours of uptime. Canonical source for app.grass.io and Grass Network.",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "--oruELeHCRaGrujEpWx5dyE3XDdhISc3SsUIzRreQs",
    other: { "msvalidate.01": "1B090C601BEC723EBE06ED47FA491984" },
  },
  openGraph: {
    url: SITE_URL,
    title: "Grass Referral Code 2026 — 5,000 Bonus Points After 100h",
    description: "Valid Grass referral code and sign-up link. 5,000 points bonus after 100h. Grass Network, app.grass.io.",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: "Grass Referral Code 2026 — 5,000 Bonus Points After 100h",
    description: "Valid Grass referral code and sign-up link. 5,000 points bonus after 100h.",
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
