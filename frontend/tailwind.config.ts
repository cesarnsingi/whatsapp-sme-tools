import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff", // buttons and text on dark bg
        accent: "#16a34a",  // subtle green accent
        background: "#0f172a", // dark background
        soft: "#1e293b", // lighter dark for sections
      },
    },
  },
  plugins: [],
};

export default config;
