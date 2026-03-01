/**
 * Grass Media Kit — https://www.grass.io/media-kit
 * Homepage visuals — https://www.grass.io
 * Official logos, colors, typography, and homepage-style assets.
 */

const BASE = "https://www.grass.io/images/media-kit";

export const GRASS_MEDIA_KIT = {
  logos: {
    horizontal: {
      svg: `${BASE}/logos/grass-horizontal-logo.svg`,
      png: `${BASE}/logos/grass-horizontal-logo.png`,
    },
    vertical: {
      svg: `${BASE}/logos/grass-vertical-logo.svg`,
      png: `${BASE}/logos/grass-vertical-logo.png`,
    },
    logomark: {
      svg: `${BASE}/logos/grass-logomark.svg`,
      png: `${BASE}/logos/grass-logomark.png`,
    },
    logotext: {
      svg: `${BASE}/logos/grass-logotext.svg`,
      png: `${BASE}/logos/grass-logotext.png`,
    },
  },
  /** Color proportion: 55% primary, 35% secondary, 10% other */
  colors: {
    primary: "#ABF600",
    secondary: "#F2FED1",
    background: "#F3F3F3",
    textSecondary: "#404040",
    white: "#FFFFFF",
    black: "#111111",
  },
  /** Official typeface: Karla — weights 200–800 */
  typography: "Karla",
  /** Homepage-style: "Trusted by over 8.5M users worldwide" — https://www.grass.io */
  homepage: {
    trustedByLabel: "Trusted by over 8.5M users worldwide",
  },
} as const;
