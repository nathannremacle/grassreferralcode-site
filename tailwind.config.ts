import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* Grass Media Kit — https://www.grass.io/media-kit */
      colors: {
        grass: {
          primary: "#ABF600",
          secondary: "#F2FED1",
          bg: "#F3F3F3",
          "text-secondary": "#404040",
          white: "#FFFFFF",
          black: "#111111",
        },
      },
      fontFamily: {
        karla: ["var(--font-karla)", "Karla", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
