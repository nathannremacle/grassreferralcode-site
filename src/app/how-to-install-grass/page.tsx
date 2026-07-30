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
  title: "How to Install Grass Desktop Node & Chrome Extension (2026 Referral Code)",
  description: `Complete step-by-step guide to install Grass Desktop Node and Chrome extension in 2026. Desktop node earns 2x points. Use referral code ${REFERRAL_CODE} for ${BONUS_POINTS.toLocaleString()} bonus points.`,
  alternates: {
    canonical: "/how-to-install-grass",
  },
  openGraph: {
    url: `${SITE_URL}/how-to-install-grass`,
    title: "How to Install Grass Desktop Node & Chrome Extension (2026 Referral Code)",
    description: `Complete installation guide for Grass. Desktop node = 2x points. Code ${REFERRAL_CODE} for ${BONUS_POINTS.toLocaleString()} bonus.`,
  },
};

export default function HowToInstallGrassPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install Grass Desktop Node and Chrome Extension",
    "description": `Step-by-step guide to installing Grass Desktop Node or Chrome extension to earn passive rewards. Use referral code ${REFERRAL_CODE} for ${BONUS_POINTS.toLocaleString()} bonus points after 100 hours.`,
    "step": [
      {
        "@type": "HowToStep",
        "name": "Sign up with Grass referral code",
        "text": `Create an account at app.grass.io using referral code ${REFERRAL_CODE} to activate your ${BONUS_POINTS.toLocaleString()} bonus points eligibility.`,
        "url": `${SITE_URL}/how-to-install-grass#step-1`
      },
      {
        "@type": "HowToStep",
        "name": "Download Grass Desktop Node (Recommended)",
        "text": "Download the Grass Desktop Node installer for Windows, macOS, or Linux from the official dashboard. The desktop node yields 2x network multiplier.",
        "url": `${SITE_URL}/how-to-install-grass#step-2`
      },
      {
        "@type": "HowToStep",
        "name": "Reach 100 Hours Uptime Benchmark",
        "text": `Keep Grass running in the background for 100 cumulative hours to receive ${BONUS_POINTS.toLocaleString()} bonus points credited directly to your dashboard.`,
        "url": `${SITE_URL}/how-to-install-grass#step-3`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
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
              How to Install Grass — Desktop Node &amp; Chrome Extension Guide (2026)
            </h1>
            <p className="mt-4 text-lg text-grass-text-secondary leading-relaxed" data-answer="direct">
              <strong>Quick Answer:</strong> To install Grass, create an account at <a href={REFERRAL_LINK} rel="noopener noreferrer" className="font-medium text-grass-primary-dark underline">{REFERRAL_LINK}</a> using the verified referral code <code className="rounded bg-grass-secondary px-1.5 py-0.5 font-mono font-bold">{REFERRAL_CODE}</code>. Next, download the <strong>Grass Desktop Node</strong> (recommended for 2x point multiplier) or Chrome extension. You will automatically unlock <strong>{BONUS_POINTS.toLocaleString()} free bonus points</strong> after {BONUS_CONDITION_HOURS} hours of continuous uptime.
            </p>
          </section>

          {/* Desktop Node Referral Code Focus Banner */}
          <section className="rounded-2xl border border-emerald-500/30 bg-emerald-950/10 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              ⚡ Looking for the Grass Desktop Node Referral Code?
            </h2>
            <p className="text-grass-text-secondary text-base mb-4">
              The official Grass Desktop Node requires a valid referral code during account registration to activate your <strong>5,000 bonus points</strong> and <strong>2x earning rate multiplier</strong>.
            </p>
            <div className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-xl border border-emerald-500/20">
              <span className="text-sm font-semibold text-slate-700">Desktop Node Code:</span>
              <code className="font-mono font-bold text-lg text-emerald-600 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
                {REFERRAL_CODE}
              </code>
              <a
                href={REFERRAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-lg transition-colors"
              >
                Apply Code &amp; Download Node →
              </a>
            </div>
          </section>

          {/* Step 1 */}
          <section id="step-1" className="rounded-2xl border border-grass-secondary bg-grass-white p-6 sm:p-8">
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
          <section id="step-2" className="rounded-2xl border border-grass-secondary bg-grass-secondary/40 p-6 sm:p-8">
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

          {/* Comparison Table */}
          <section className="rounded-2xl border border-grass-secondary bg-grass-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold tracking-tight text-grass-black mb-4">
              Grass Desktop Node vs Chrome Extension
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="p-3 font-bold text-slate-800">Feature</th>
                    <th className="p-3 font-bold text-emerald-700 bg-emerald-50">Grass Desktop Node (Recommended)</th>
                    <th className="p-3 font-bold text-slate-700">Chrome Extension</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-medium">Point Multiplier</td>
                    <td className="p-3 font-bold text-emerald-600 bg-emerald-50/50">2x Multiplier (Double Points)</td>
                    <td className="p-3">1x Standard Multiplier</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Daily Point Yield</td>
                    <td className="p-3 font-bold text-emerald-600 bg-emerald-50/50">~4,800 - 6,000 Points/day</td>
                    <td className="p-3">~2,400 Points/day</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Background Operation</td>
                    <td className="p-3 bg-emerald-50/50">System Service (Runs without browser)</td>
                    <td className="p-3">Requires Chrome Browser open</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Bonus Eligibility</td>
                    <td className="p-3 font-bold text-emerald-600 bg-emerald-50/50">Eligible for +5,000 Pts Bonus</td>
                    <td className="p-3">Eligible for +5,000 Pts Bonus</td>
                  </tr>
                </tbody>
              </table>
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
          <section id="step-3" className="rounded-2xl border border-grass-secondary bg-grass-white p-6 sm:p-8">
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

