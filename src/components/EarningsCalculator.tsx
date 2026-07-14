"use client";

import React, { useState } from "react";
import { REFERRAL_LINK, REFERRAL_CODE } from "@/lib/constants";

export default function EarningsCalculator() {
  const [hours, setHours] = useState(24);
  const [isDesktop, setIsDesktop] = useState(true);

  // Assumptions for the calculator
  const basePointsPerHour = 100;
  const multiplier = isDesktop ? 2 : 1;
  const dailyPoints = hours * basePointsPerHour * multiplier;
  const monthlyPoints = dailyPoints * 30;
  const bonus = 5000;
  const totalFirstMonth = monthlyPoints + bonus;
  const usdEstimated = ((totalFirstMonth / 100000) * 7.52).toFixed(2);
  return (
    <div className="w-full max-w-lg mx-auto bg-grass-white rounded-2xl shadow-xl overflow-hidden border border-grass-secondary transition-all hover:shadow-2xl">
      <div className="p-6 sm:p-8">
        <h3 className="text-xl font-bold text-grass-black mb-6 text-center">
          Grass Earnings Calculator (2026)
        </h3>

        {/* Uptime Slider */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <label className="text-sm font-semibold text-grass-text-secondary">
              Daily Uptime
            </label>
            <span className="text-lg font-bold text-grass-primary-dark">
              {hours} hours
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="24"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            className="w-full h-2 bg-grass-secondary rounded-lg appearance-none cursor-pointer accent-grass-primary-dark"
          />
        </div>

        {/* Node Type Toggle */}
        <div className="mb-8">
          <label className="text-sm font-semibold text-grass-text-secondary block mb-3">
            Node Type
          </label>
          <div className="flex bg-grass-bg rounded-lg p-1">
            <button
              onClick={() => setIsDesktop(false)}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                !isDesktop
                  ? "bg-grass-white text-grass-black shadow-sm"
                  : "text-grass-text-secondary hover:text-grass-black"
              }`}
            >
              Chrome Ext (1x)
            </button>
            <button
              onClick={() => setIsDesktop(true)}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
                isDesktop
                  ? "bg-grass-primary text-grass-black shadow-sm"
                  : "text-grass-text-secondary hover:text-grass-black"
              }`}
            >
              Desktop Node (2x)
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="bg-grass-bg rounded-xl p-5 mb-6 border border-grass-secondary/50">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-grass-text-secondary">Daily Points:</span>
            <span className="font-mono font-medium">{dailyPoints.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-grass-text-secondary">Monthly Points (30d):</span>
            <span className="font-mono font-medium">{monthlyPoints.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center mb-3 text-grass-primary-dark">
            <span className="text-sm font-medium">Referral Bonus (100h+):</span>
            <span className="font-mono font-bold">+{bonus.toLocaleString()}</span>
          </div>
          <div className="border-t border-grass-secondary pt-3 mt-3 flex justify-between items-center">
            <span className="text-base font-bold text-grass-black">First Month Total:</span>
            <div className="text-right">
              <span className="block text-2xl font-bold font-mono text-grass-primary-dark">
                {totalFirstMonth.toLocaleString()}
              </span>
              <span className="block text-sm text-grass-text-secondary font-medium mt-1">
                ≈ ${usdEstimated} USD
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href={REFERRAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-grass-black text-grass-primary py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
        >
          Claim {bonus.toLocaleString()} Bonus Points
        </a>
        <p className="text-xs text-center text-grass-text-secondary mt-3">
          *Estimates based on typical 2026 network Epoch averages (~$7.52 USD per 100k points). Actual earnings depend on network demand and connection quality. Use code <span className="font-mono font-medium">{REFERRAL_CODE}</span>.
        </p>
      </div>
    </div>
  );
}
