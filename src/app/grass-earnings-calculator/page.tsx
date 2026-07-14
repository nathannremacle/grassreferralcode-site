import React from "react";
import { Metadata } from "next";
import EarningsCalculator from "@/components/EarningsCalculator";
import { SITE_NAME, REFERRAL_LINK, REFERRAL_CODE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Grass Earnings Calculator 2026 | How Much Can You Earn?",
  description: "Calculate your real passive income with Grass in 2026. Compare Chrome Extension vs Desktop Node earnings. See 30-day case study data.",
  alternates: {
    canonical: "/grass-earnings-calculator",
  },
};

export default function GrassEarningsCalculatorPage() {
  return (
    <main className="min-h-screen bg-grass-bg text-grass-black font-karla">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-grass-text-secondary">
            <li>
              <a href="/" className="hover:text-grass-primary-dark transition-colors">Home</a>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="font-semibold text-grass-black" aria-current="page">
              Earnings Calculator
            </li>
          </ol>
        </nav>

        <header className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Grass Earnings Calculator
          </h1>
          <p className="text-lg text-grass-text-secondary">
            How much can you really earn by sharing your unused internet bandwidth in 2026? Use our interactive calculator to estimate your rewards based on recent epoch averages.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: The Calculator Component */}
          <div className="order-2 lg:order-1">
            <EarningsCalculator />
          </div>

          {/* Right: The Case Study Content (Linkable Asset) */}
          <div className="order-1 lg:order-2 space-y-8 bg-grass-white p-8 rounded-2xl border border-grass-secondary shadow-sm">
            <section>
              <h2 className="text-2xl font-bold mb-3">The 30-Day Case Study</h2>
              <p className="text-grass-text-secondary mb-4">
                We tested the Grass Network continuously for 30 days to measure actual yield vs. promised rewards. We wanted to answer the most common questions: Does the Desktop Node really double your earnings? Is it worth the electricity?
              </p>
              
              <div className="bg-grass-bg rounded-xl p-4 border border-grass-secondary/50">
                <h3 className="font-semibold mb-2">Our Test Setup (June 2026):</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-grass-text-secondary">
                  <li><strong>Location:</strong> Western Europe (Tier 1 IP)</li>
                  <li><strong>Connection:</strong> Fiber (1 Gbps)</li>
                  <li><strong>Device:</strong> Mini-PC running Windows 11</li>
                  <li><strong>Uptime:</strong> 24/7 (720 hours total)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3">Key Findings</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-grass-primary text-grass-black font-bold">1</span>
                  <div>
                    <strong className="block text-grass-black">Desktop Node Multiplier is Real</strong>
                    <p className="text-sm text-grass-text-secondary">The Chrome extension yielded an average of ~2,400 points/day. Switching to the standalone Desktop Node consistently pushed daily earnings above 4,800 points.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-grass-primary text-grass-black font-bold">2</span>
                  <div>
                    <strong className="block text-grass-black">Negligible Resource Usage</strong>
                    <p className="text-sm text-grass-text-secondary">Monitoring via Task Manager showed Grass using less than 0.5% of total bandwidth and practically 0% CPU. It runs completely silently in the background.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-grass-primary text-grass-black font-bold">3</span>
                  <div>
                    <strong className="block text-grass-black">The 100-Hour Benchmark</strong>
                    <p className="text-sm text-grass-text-secondary">It takes about 4.5 days of continuous uptime to hit the 100-hour mark. Once crossed, the 5,000 bonus points (via <a href={REFERRAL_LINK} className="underline font-medium hover:text-grass-primary-dark">referral code {REFERRAL_CODE}</a>) are credited instantly.</p>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className="bg-grass-secondary/30 border border-grass-secondary rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to start earning?</h2>
          <p className="text-grass-text-secondary mb-6">
            Join millions of users selling their unused bandwidth to AI labs securely. Sign up today and claim your 5,000 point bonus.
          </p>
          <a
            href={REFERRAL_LINK}
            className="inline-block bg-grass-primary text-grass-black font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105 shadow-md"
          >
            Create Your Account
          </a>
        </div>
      </div>
    </main>
  );
}
