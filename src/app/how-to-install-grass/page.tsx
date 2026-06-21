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
  title: "How to Install Grass — Desktop Node & Chrome Extension Guide 2026",
  description: `Step-by-step guide to install Grass desktop node and Chrome extension in 2026. Desktop node earns 2x points. Use referral code ${REFERRAL_CODE} for ${BONUS_POINTS.toLocaleString()} bonus points.`,
  alternates: {
    canonical: "/how-to-install-grass",
  },
  openGraph: {
    url: `${SITE_URL}/how-to-install-grass`,
    title: "How to Install Grass — Desktop Node & Chrome Extension Guide 2026",
    description: `Complete installation guide for Grass. Desktop node = 2x points. Code ${REFERRAL_CODE} for ${BONUS_POINTS.toLocaleString()} bonus.`,
  },
};

export default function HowToInstallGrassPage() {
  return (
    <>
      <SubPageHeader />
      <article className="min-h-screen bg-grass-bg text-grass-black font-karla">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6 sm:px-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-grass-text-secondary">
          <li><Link href="/" className="text-grass-primary-dark hover:underline">Home</Link></li>
          <li>/</li>
          <li className="text-grass-black font-medium">How to Install Grass</li>
        </ol>
      </nav>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="space-y-10">
          {/* Hero */}
          <section>
            <h1 className="text-3xl font-bold tracking-tight text-grass-black sm:text-4xl">
              How to Install Grass — Desktop Node &amp; Chrome Extension Guide
            </h1>
            <p className="mt-4 text-lg text-grass-text-secondary" data-answer="direct">
              To install Grass, sign up at <a href={REFERRAL_LINK} rel="noopener noreferrer" className="font-medium text-grass-primary-dark underline">{REFERRAL_LINK}</a> with referral code <code className="rounded bg-grass-secondary px-1 font-mono">{REFERRAL_CODE}</code>, then download the desktop node (recommended, 2x points) or Chrome extension. You&apos;ll get {BONUS_POINTS.toLocaleString()} bonus points after {BONUS_CONDITION_HOURS} hours of uptime.
            </p>
          </section>

          {/* Step 1 */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-white p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-grass-primary text-lg font-bold text-grass-black">1</span>
              <h2 className="text-2xl font-bold tracking-tight text-grass-black">
                Create your Grass account with referral code
              </h2>
            </div>
            <div className="mt-4 space-y-3 text-grass-text-secondary">
              <p>
                Go to <a href={REFERRAL_LINK} rel="noopener noreferrer" className="font-medium text-grass-primary-dark underline">the Grass sign-up page</a>. The referral code <code className="rounded bg-grass-secondary px-1 font-mono">{REFERRAL_CODE}</code> is pre-filled in the link.
              </p>
              <p>
                Enter your email address and create a password. Click &quot;Sign Up&quot; to create your account. The referral code ensures you&apos;re eligible for the {BONUS_POINTS.toLocaleString()} bonus points.
              </p>
            </div>
          </section>

          {/* Step 2 — Desktop Node */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-secondary/40 p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-grass-primary text-lg font-bold text-grass-black">2</span>
              <h2 className="text-2xl font-bold tracking-tight text-grass-black">
                Install the Grass desktop node (recommended — 2x points)
              </h2>
            </div>
            <div className="mt-4 space-y-3 text-grass-text-secondary">
              <p>
                <strong className="text-grass-black">The Grass desktop node earns 2x points</strong> compared to the Chrome extension. This is the recommended installation for maximum earnings.
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>After signing up, go to the Grass dashboard at <a href="https://app.grass.io" rel="noopener noreferrer" className="font-medium text-grass-primary-dark underline">app.grass.io</a></li>
                <li>Click the &quot;Download&quot; button in the dashboard</li>
                <li>Select your operating system: <strong>Windows</strong>, <strong>macOS</strong>, or <strong>Linux</strong></li>
                <li>Run the installer and follow the on-screen instructions</li>
                <li>Log in with the same email and password you used to sign up</li>
                <li>The node starts running automatically — you&apos;ll see your connection status in the system tray</li>
              </ol>
            </div>
          </section>

          {/* Alternative: Chrome Extension */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-white p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-grass-primary text-lg font-bold text-grass-black">2b</span>
              <h2 className="text-2xl font-bold tracking-tight text-grass-black">
                Alternative: Install the Chrome extension
              </h2>
            </div>
            <div className="mt-4 space-y-3 text-grass-text-secondary">
              <p>
                If you can&apos;t install the desktop node, the Chrome extension works too (but earns 1x points instead of 2x).
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Open the Chrome Web Store and search for &quot;Grass&quot;</li>
                <li>Click &quot;Add to Chrome&quot;</li>
                <li>Log in with your Grass account credentials</li>
                <li>The extension runs in the background while you browse</li>
              </ol>
            </div>
          </section>

          {/* Step 3 */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-white p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-grass-primary text-lg font-bold text-grass-black">3</span>
              <h2 className="text-2xl font-bold tracking-tight text-grass-black">
                Reach {BONUS_CONDITION_HOURS} hours and unlock your bonus
              </h2>
            </div>
            <div className="mt-4 space-y-3 text-grass-text-secondary">
              <p>
                Keep the Grass app running. After {BONUS_CONDITION_HOURS} cumulative hours, your <strong className="text-grass-black">{BONUS_POINTS.toLocaleString()} bonus points</strong> are credited automatically.
              </p>
              <p>
                You can track your uptime and points in the Grass dashboard at <a href="https://app.grass.io" rel="noopener noreferrer" className="font-medium text-grass-primary-dark underline">app.grass.io</a>.
              </p>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-grass-black">
              Troubleshooting common issues
            </h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-grass-secondary bg-grass-bg p-4">
                <h3 className="font-semibold text-grass-black">Grass 429 &quot;too many requests&quot; error</h3>
                <p className="mt-1 text-sm text-grass-text-secondary">
                  This means too many connection attempts. Use one node per network. Wait a few minutes before reconnecting.
                </p>
              </div>
              <div className="rounded-xl border border-grass-secondary bg-grass-bg p-4">
                <h3 className="font-semibold text-grass-black">Points showing as zero</h3>
                <p className="mt-1 text-sm text-grass-text-secondary">
                  Display resets between epochs are a temporary bug. Your points are stored server-side. Refresh or check back later.
                </p>
              </div>
              <div className="rounded-xl border border-grass-secondary bg-grass-bg p-4">
                <h3 className="font-semibold text-grass-black">Mobile app &quot;ghost connection&quot;</h3>
                <p className="mt-1 text-sm text-grass-text-secondary">
                  If the mobile app shows connected but doesn&apos;t earn, try force-closing and reopening. The desktop node is more reliable for consistent earnings.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-secondary/40 p-6 text-center sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-grass-black">
              Ready to get started?
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
