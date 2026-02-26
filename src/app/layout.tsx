import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grass Referral Code 2026 — Valid referral code and bonus points",
  description:
    "Official Grass referral code, valid February 2026. Bonus: 5000 points after 100h. Affiliate link and Token Unlock, Season 2 airdrop updates.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
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
