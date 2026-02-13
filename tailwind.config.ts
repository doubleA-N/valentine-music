import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "warm-red": "#D94F3F",
        "warm-coral": "#E8614D",
        "sage-green": "#8DB580",
        "cozy-brown": "#A0724A",
        "dark-brown": "#5C3D2E",
        "cream": "#FFF5E6",
        "soft-yellow": "#F9D949",
      },
      fontFamily: {
        mali: ["var(--font-mali)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
