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
  title: "Grass Airdrop Season 2 & Season 3 — Points, Eligibility & Claim Guide 2026",
  description: `Grass Season 2 airdrop guide: eligibility, points conversion, claim dates, and how to prepare for Season 3. Use referral code ${REFERRAL_CODE} for ${BONUS_POINTS.toLocaleString()} bonus points.`,
  alternates: {
    canonical: "/grass-airdrop-season-2",
  },
  openGraph: {
    url: `${SITE_URL}/grass-airdrop-season-2`,
    title: "Grass Airdrop Season 2 & Season 3 — Points & Eligibility Guide 2026",
    description: `Everything about Grass airdrops. Code ${REFERRAL_CODE} for ${BONUS_POINTS.toLocaleString()} bonus points.`,
  },
};

export default function GrassAirdropPage() {
  return (
    <>
      <SubPageHeader />
      <article className="min-h-screen bg-grass-bg text-grass-black font-karla">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6 sm:px-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-grass-text-secondary">
          <li><Link href="/" className="text-grass-primary-dark hover:underline">Home</Link></li>
          <li>/</li>
          <li className="text-grass-black font-medium">Grass Airdrop</li>
        </ol>
      </nav>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="space-y-10">
          {/* Hero */}
          <section>
            <h1 className="text-3xl font-bold tracking-tight text-grass-black sm:text-4xl">
              Grass Airdrop Season 2 &amp; Season 3 — Complete Guide 2026
            </h1>
            <p className="mt-4 text-lg text-grass-text-secondary" data-answer="direct">
              The Grass Season 2 airdrop distributed approximately 170 million $GRASS tokens to eligible users in H1 2026. Season 3 is expected to continue rewarding consistent uptime and Grass Points accumulation. Use referral code <code className="rounded bg-grass-secondary px-1 font-mono">{REFERRAL_CODE}</code> to get {BONUS_POINTS.toLocaleString()} bonus points and maximize your eligibility.
            </p>
          </section>

          {/* Season 2 Summary */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-grass-black">
              Grass Season 2 airdrop — What happened
            </h2>
            <div className="mt-4 space-y-3 text-grass-text-secondary">
              <p>
                Season 2 was the second major $GRASS token distribution following the initial airdrop (Season 1). Here are the key facts:
              </p>
              <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-grass-secondary bg-grass-bg p-4">
                  <dt className="text-sm font-medium text-grass-text-secondary">Tokens distributed</dt>
                  <dd className="mt-1 text-xl font-bold text-grass-primary-dark">~170M $GRASS</dd>
                </div>
                <div className="rounded-xl border border-grass-secondary bg-grass-bg p-4">
                  <dt className="text-sm font-medium text-grass-text-secondary">Eligibility</dt>
                  <dd className="mt-1 text-xl font-bold text-grass-primary-dark">Points + uptime</dd>
                </div>
                <div className="rounded-xl border border-grass-secondary bg-grass-bg p-4">
                  <dt className="text-sm font-medium text-grass-text-secondary">Token unlock</dt>
                  <dd className="mt-1 text-xl font-bold text-grass-primary-dark">Early 2026</dd>
                </div>
                <div className="rounded-xl border border-grass-secondary bg-grass-bg p-4">
                  <dt className="text-sm font-medium text-grass-text-secondary">Referral bonus counted?</dt>
                  <dd className="mt-1 text-xl font-bold text-grass-primary-dark">Yes ✓</dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Points Conversion */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-grass-black">
              Grass points conversion — How points turn into tokens
            </h2>
            <p className="mt-3 text-grass-text-secondary" data-answer="direct">
              Grass Points are the primary metric for airdrop eligibility. The more points you accumulate through uptime, referrals, and bonuses, the higher your allocation in token distributions. Points from referral bonuses (like the {BONUS_POINTS.toLocaleString()} from code <code className="rounded bg-grass-secondary px-1 font-mono">{REFERRAL_CODE}</code>) count toward eligibility.
            </p>
            <div className="mt-4 space-y-2 text-grass-text-secondary">
              <p><strong className="text-grass-black">Uptime Points:</strong> Earned by staying connected. Desktop node earns 2x vs Chrome extension.</p>
              <p><strong className="text-grass-black">Network Points:</strong> Earned when your bandwidth is actively used for traffic.</p>
              <p><strong className="text-grass-black">Referral Points:</strong> {BONUS_POINTS.toLocaleString()} sign-up bonus + 20% of referred users&apos; points.</p>
            </div>
          </section>

          {/* Season 3 */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-secondary/40 p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-grass-black">
              Grass Season 3 airdrop — What to expect
            </h2>
            <div className="mt-4 space-y-3 text-grass-text-secondary">
              <p data-answer="direct">
                Grass has confirmed ongoing seasons beyond Season 2. Season 3 is expected to follow a similar structure, rewarding consistent uptime and Grass Points accumulation. The best strategy to prepare is:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Sign up now with referral code <code className="rounded bg-grass-secondary px-1 font-mono">{REFERRAL_CODE}</code> to get {BONUS_POINTS.toLocaleString()} bonus points</li>
                <li><Link href="/how-to-install-grass" className="font-medium text-grass-primary-dark underline">Install the desktop node</Link> for 2x points earning rate</li>
                <li>Keep Grass running consistently to maximize your uptime and points</li>
                <li>Refer friends to earn 2,500 points + 20% of their ongoing points</li>
              </ol>
            </div>
          </section>

          {/* Eligibility Checker */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-grass-black">
              How to check your Grass airdrop eligibility
            </h2>
            <div className="mt-4 space-y-3 text-grass-text-secondary">
              <p>
                To check your eligibility for Grass airdrops:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Log in to your Grass dashboard at <a href="https://app.grass.io" rel="noopener noreferrer" className="font-medium text-grass-primary-dark underline">app.grass.io</a></li>
                <li>Check your total Grass Points, uptime hours, and network points</li>
                <li>Verify that your referral code was applied (look for the {BONUS_POINTS.toLocaleString()} bonus)</li>
                <li>Keep running the app consistently — eligibility favors regular users</li>
              </ol>
              <p>
                Don&apos;t have an account yet? <a href={REFERRAL_LINK} rel="noopener noreferrer" className="font-medium text-grass-primary-dark underline">Sign up with referral code {REFERRAL_CODE}</a> to start building your eligibility now.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-grass-black">
              Airdrop FAQ
            </h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-grass-secondary bg-grass-bg p-4">
                <h3 className="font-semibold text-grass-black">When is the Grass Season 3 claim date?</h3>
                <p className="mt-1 text-sm text-grass-text-secondary">
                  Grass has not announced an exact claim date for Season 3. Based on previous seasons, expect announcements in H2 2026. Start accumulating points now with referral code <code className="rounded bg-grass-secondary px-1 font-mono">{REFERRAL_CODE}</code>.
                </p>
              </div>
              <div className="rounded-xl border border-grass-secondary bg-grass-bg p-4">
                <h3 className="font-semibold text-grass-black">Do referral bonus points count for airdrops?</h3>
                <p className="mt-1 text-sm text-grass-text-secondary">
                  Yes. The {BONUS_POINTS.toLocaleString()} referral bonus points from code <code className="rounded bg-grass-secondary px-1 font-mono">{REFERRAL_CODE}</code> count toward your total Grass Points and airdrop eligibility.
                </p>
              </div>
              <div className="rounded-xl border border-grass-secondary bg-grass-bg p-4">
                <h3 className="font-semibold text-grass-black">Can I still qualify for the next airdrop?</h3>
                <p className="mt-1 text-sm text-grass-text-secondary">
                  Yes. Sign up now via <a href={REFERRAL_LINK} rel="noopener noreferrer" className="font-medium text-grass-primary-dark underline">{REFERRAL_LINK}</a>, install the <Link href="/how-to-install-grass" className="font-medium text-grass-primary-dark underline">desktop node</Link>, and start earning points. Eligibility favors consistent uptime.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-secondary/40 p-6 text-center sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-grass-black">
              Maximize your airdrop eligibility
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
