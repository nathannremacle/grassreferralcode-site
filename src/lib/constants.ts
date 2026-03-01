/**
 * GEO constants — Override with NEXT_PUBLIC_REFERRAL_LINK and NEXT_PUBLIC_REFERRAL_CODE if needed.
 */
export const REFERRAL_LINK =
  typeof process !== "undefined" && process.env?.NEXT_PUBLIC_REFERRAL_LINK
    ? process.env.NEXT_PUBLIC_REFERRAL_LINK
    : "https://app.grass.io/register?referralCode=sMOz5iVLHXXnnbc";

export const REFERRAL_CODE =
  typeof process !== "undefined" && process.env?.NEXT_PUBLIC_REFERRAL_CODE
    ? process.env.NEXT_PUBLIC_REFERRAL_CODE
    : "sMOz5iVLHXXnnbc";

export const BONUS_POINTS = 5000;
export const BONUS_CONDITION_HOURS = 100;
export const OFFER_VALIDITY = "2026-03"; // March 2026
export const OFFER_VALIDITY_LABEL = "March 2026";
export const SITE_URL =
  typeof process !== "undefined" && process.env?.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://grassreferralcode.vercel.app";

// Trust signals (updated by GitHub Action with dateModified)
export const LAST_VERIFIED_ISO = "2026-03-01";
export const SUCCESS_RATE = "99.9%";
export const VERIFIED_USERS_COUNT = "45,000";
