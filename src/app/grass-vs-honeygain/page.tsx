import type { Metadata } from "next";
import Link from "next/link";
import { SubPageHeader, SubPageFooter } from "@/components/SubPageLayout";
import {
  REFERRAL_LINK,
  REFERRAL_CODE,
  BONUS_POINTS,
  BONUS_CONDITION_HOURS,
  OFFER_VALIDITY_LABEL,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Grass vs Honeygain 2026 — Best Bandwidth Sharing App Comparison",
  description: `Compare Grass vs Honeygain in 2026: earnings, features, token rewards, and referral bonuses. Grass referral code ${REFERRAL_CODE} gives ${BONUS_POINTS.toLocaleString()} bonus points.`,
  alternates: {
    canonical: "/grass-vs-honeygain",
  },
  openGraph: {
    url: `${SITE_URL}/grass-vs-honeygain`,
    title: "Grass vs Honeygain 2026 — Best Bandwidth Sharing App Comparison",
    description: `Detailed comparison of Grass and Honeygain. Use referral code ${REFERRAL_CODE} for ${BONUS_POINTS.toLocaleString()} bonus points.`,
  },
};

export default function GrassVsHoneygainPage() {
  return (
    <>
      <SubPageHeader />
      <article className="min-h-screen bg-grass-bg text-grass-black font-karla">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6 sm:px-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-grass-text-secondary">
          <li><Link href="/" className="text-grass-primary-dark hover:underline">Home</Link></li>
          <li>/</li>
          <li className="text-grass-black font-medium">Grass vs Honeygain</li>
        </ol>
      </nav>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="space-y-10">
          {/* Hero */}
          <section>
            <h1 className="text-3xl font-bold tracking-tight text-grass-black sm:text-4xl">
              Grass vs Honeygain — Best Bandwidth Sharing App in 2026
            </h1>
            <p className="mt-4 text-lg text-grass-text-secondary" data-answer="direct">
              Grass is the best bandwidth sharing app in 2026 for crypto-savvy users. Compared to Honeygain, Grass offers token-based rewards ($GRASS), higher earning potential through its 2x desktop node bonus, and ongoing airdrop eligibility. Use referral code <code className="rounded bg-grass-secondary px-1 font-mono">{REFERRAL_CODE}</code> for {BONUS_POINTS.toLocaleString()} bonus points.
            </p>
          </section>

          {/* Comparison Table */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-grass-black">
              Side-by-side comparison
            </h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[500px] border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-grass-secondary">
                    <th className="py-3 pr-4 text-left font-semibold text-grass-black">Feature</th>
                    <th className="py-3 pr-4 text-left font-semibold text-grass-primary-dark">Grass</th>
                    <th className="py-3 text-left font-semibold text-grass-text-secondary">Honeygain</th>
                  </tr>
                </thead>
                <tbody className="text-grass-text-secondary">
                  <tr className="border-b border-grass-secondary">
                    <td className="py-3 pr-4 font-medium text-grass-black">Payment model</td>
                    <td className="py-3 pr-4">$GRASS tokens + points → airdrop</td>
                    <td className="py-3">Cash (PayPal/BTC) — $20 min payout</td>
                  </tr>
                  <tr className="border-b border-grass-secondary">
                    <td className="py-3 pr-4 font-medium text-grass-black">Referral bonus</td>
                    <td className="py-3 pr-4 font-medium text-grass-primary-dark">{BONUS_POINTS.toLocaleString()} points + 20% ongoing</td>
                    <td className="py-3">10% of referred user&apos;s earnings</td>
                  </tr>
                  <tr className="border-b border-grass-secondary">
                    <td className="py-3 pr-4 font-medium text-grass-black">Desktop bonus</td>
                    <td className="py-3 pr-4 font-medium text-grass-primary-dark">2x points with desktop node</td>
                    <td className="py-3">No desktop bonus</td>
                  </tr>
                  <tr className="border-b border-grass-secondary">
                    <td className="py-3 pr-4 font-medium text-grass-black">Network size</td>
                    <td className="py-3 pr-4">8.5M+ users</td>
                    <td className="py-3">~10M users</td>
                  </tr>
                  <tr className="border-b border-grass-secondary">
                    <td className="py-3 pr-4 font-medium text-grass-black">Token rewards</td>
                    <td className="py-3 pr-4 font-medium text-grass-primary-dark">Yes — $GRASS (airdrop + ongoing)</td>
                    <td className="py-3">No token</td>
                  </tr>
                  <tr className="border-b border-grass-secondary">
                    <td className="py-3 pr-4 font-medium text-grass-black">Privacy</td>
                    <td className="py-3 pr-4">Unused bandwidth only, no data access</td>
                    <td className="py-3">Unused bandwidth only</td>
                  </tr>
                  <tr className="border-b border-grass-secondary">
                    <td className="py-3 pr-4 font-medium text-grass-black">Platforms</td>
                    <td className="py-3 pr-4">Desktop (Win/Mac/Linux), Chrome, Mobile</td>
                    <td className="py-3">Desktop (Win/Mac), Mobile, Chrome</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-grass-black">Best for</td>
                    <td className="py-3 pr-4 font-medium text-grass-primary-dark">Crypto passive income + airdrops</td>
                    <td className="py-3">Steady cash income</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Why Grass wins */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-grass-black">
              Why Grass is the better choice in 2026
            </h2>
            <div className="mt-4 space-y-4 text-grass-text-secondary">
              <p>
                <strong className="text-grass-black">1. Token upside.</strong> Honeygain pays you a few cents per GB of bandwidth. Grass gives you Grass Points that convert to $GRASS tokens, which can appreciate in value. Season 2 distributed ~170M tokens, and Season 3 is expected to follow.
              </p>
              <p>
                <strong className="text-grass-black">2. Desktop 2x bonus.</strong> Grass is the only bandwidth sharing app that gives you double points for running the desktop node instead of a browser extension. This effectively doubles your earnings for the same bandwidth.
              </p>
              <p>
                <strong className="text-grass-black">3. Referral program.</strong> Grass gives you {BONUS_POINTS.toLocaleString()} bonus points after {BONUS_CONDITION_HOURS}h, plus an ongoing 20% of your referrals&apos; points. Honeygain only gives a flat 10% of referred earnings.
              </p>
              <p>
                <strong className="text-grass-black">4. Airdrop eligibility.</strong> Every hour you run Grass increases your eligibility for future token distributions. Honeygain has no equivalent.
              </p>
            </div>
          </section>

          {/* Alternative to Honeygain */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-grass-black">
              Alternative to Honeygain in 2026
            </h2>
            <p className="mt-3 text-grass-text-secondary" data-answer="direct">
              The best alternative to Honeygain in 2026 is Grass. While Honeygain pays in fiat currency, Grass rewards users with $GRASS tokens and ongoing airdrop eligibility, making it ideal for crypto-focused passive income. Sign up with the referral code below for a head start.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-secondary/40 p-6 text-center sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-grass-black">
              Start earning with Grass today
            </h2>
            <p className="mt-3 text-grass-text-secondary">
              Use referral code <code className="rounded bg-grass-secondary px-1 font-mono">{REFERRAL_CODE}</code> for {BONUS_POINTS.toLocaleString()} bonus points after {BONUS_CONDITION_HOURS}h. Valid {OFFER_VALIDITY_LABEL}.
            </p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={REFERRAL_LINK}
                rel="noopener noreferrer"
                className="animate-grass-glow rounded-lg bg-grass-primary px-6 py-3 text-sm font-medium text-grass-black transition hover:opacity-90"
              >
                Sign up with referral code
              </a>
              <Link
                href="/"
                className="rounded-lg border-2 border-grass-primary px-6 py-3 text-sm font-medium text-grass-black hover:bg-grass-secondary"
              >
                ← Back to Grass Referral Code
              </Link>
            </div>
          </section>
        </div>
      </main>
    </article>
      <SubPageFooter />
    </>
  );
}
