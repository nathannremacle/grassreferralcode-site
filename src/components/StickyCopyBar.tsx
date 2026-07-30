"use client";

import { useState } from "react";
import { REFERRAL_CODE, BONUS_POINTS } from "@/lib/constants";

export default function StickyCopyBar() {
  const [copied, setCopied] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(REFERRAL_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Failed to copy referral code:", err);
    }
  };

  return (
    <aside
      aria-label="Floating Referral Code"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-xl animate-fade-in-up"
    >
      <div className="relative bg-slate-900/95 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-3 sm:p-4 shadow-2xl shadow-emerald-950/50 flex items-center justify-between gap-3 text-white">
        {/* Left Section: Info & Badge */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
            🎁
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                +{BONUS_POINTS.toLocaleString()} Bonus Points
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                • Verified Code
              </span>
            </div>
            <p className="text-sm font-medium text-slate-200 truncate mt-0.5">
              Grass Referral Code:{" "}
              <code className="font-mono font-bold text-emerald-300 bg-slate-800/90 px-1.5 py-0.5 rounded border border-emerald-500/30">
                {REFERRAL_CODE}
              </code>
            </p>
          </div>
        </div>

        {/* Right Section: Copy Button & Close */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopy}
            type="button"
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 flex items-center gap-1.5 shadow-md ${
              copied
                ? "bg-emerald-500 text-slate-950 scale-105"
                : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 hover:shadow-emerald-500/25 active:scale-95"
            }`}
          >
            {copied ? (
              <>
                <svg
                  className="w-4 h-4 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>Copié !</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5"
                  />
                </svg>
                <span>Copier le Code</span>
              </>
            )}
          </button>

          <button
            onClick={() => setDismissed(true)}
            type="button"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Masquer la barre"
            aria-label="Masquer la barre"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}
