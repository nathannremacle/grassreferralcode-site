import Link from "next/link";
import { REFERRAL_LINK } from "@/lib/constants";
import { GRASS_MEDIA_KIT } from "@/lib/media-kit";

/**
 * Shared navigation header for sub-pages.
 * Links back to home, shows install guide link, and sign-up CTA.
 */
export function SubPageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-grass-secondary bg-grass-white/95 backdrop-blur supports-[backdrop-filter]:bg-grass-white/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6" aria-label="Main">
        <Link href="/" className="flex items-center gap-2">
          <img
            src={GRASS_MEDIA_KIT.logos.horizontal.svg}
            alt="Grass Referral Code"
            width={100}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-grass-text-secondary hover:text-grass-black"
          >
            Referral Code
          </Link>
          <Link
            href="/how-to-install-grass"
            className="hidden text-sm font-medium text-grass-text-secondary hover:text-grass-black sm:block"
          >
            Install Guide
          </Link>
          <a
            href={REFERRAL_LINK}
            rel="noopener noreferrer"
            className="rounded-lg bg-grass-primary px-4 py-2 text-sm font-medium text-grass-black transition hover:opacity-90"
          >
            Sign up now
          </a>
        </div>
      </nav>
    </header>
  );
}

/**
 * Shared footer for sub-pages with internal links for SEO.
 */
export function SubPageFooter() {
  return (
    <footer className="mt-16 border-t border-grass-secondary bg-grass-white py-10">
      <div className="mx-auto max-w-3xl px-4 text-center text-sm text-grass-text-secondary sm:px-6">
        <Link href="/" className="inline-block">
          <img
            src={GRASS_MEDIA_KIT.logos.logotext.svg}
            alt="Grass"
            width={80}
            height={24}
            className="mx-auto h-6 w-auto"
          />
        </Link>
        <p className="mt-3">
          <Link href="/" className="text-grass-primary-dark hover:underline">Grass Referral Code</Link>
          {" · "}
          <Link href="/how-to-install-grass" className="text-grass-primary-dark hover:underline">Install Guide</Link>
          {" · "}
          <Link href="/grass-vs-honeygain" className="text-grass-primary-dark hover:underline">Grass vs Honeygain</Link>
          {" · "}
          <Link href="/grass-airdrop-season-2" className="text-grass-primary-dark hover:underline">Airdrop Guide</Link>
        </p>
        <p className="mt-2">
          <a href="https://www.grass.io" rel="noopener noreferrer" className="text-grass-primary-dark hover:underline">Grass</a>
          {" · "}
          <a href="https://www.grass.io/learn" rel="noopener noreferrer" className="text-grass-primary-dark hover:underline">Learn</a>
          {" · "}
          <a href="https://www.grass.io/privacy-policy" rel="noopener noreferrer" className="text-grass-primary-dark hover:underline">Privacy</a>
        </p>
        <p className="mt-6 text-xs text-grass-text-secondary opacity-50 hover:opacity-80 transition-opacity">
          <a href="https://www.init42.be/" target="_blank" rel="noopener" className="hover:underline">Création de site web à Liège par INIT42</a>
        </p>
      </div>
    </footer>
  );
}
