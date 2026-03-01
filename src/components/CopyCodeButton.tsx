"use client";

import { useState, useCallback } from "react";

export function CopyCodeButton({
  text,
  label = "COPY REFERRAL CODE",
  "data-referral-code": dataAttr,
  className = "",
}: {
  text: string;
  label?: string;
  "data-referral-code"?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [text]);

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center justify-center rounded-lg bg-grass-black px-6 py-3 text-sm font-medium text-grass-primary transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-grass-primary focus:ring-offset-2 focus:ring-offset-grass-bg ${className}`.trim()}
      aria-label={copied ? "Copied" : "Copy referral code"}
      data-referral-code={dataAttr ?? text}
    >
      {copied ? "Copied!" : label}
    </button>
  );
}
