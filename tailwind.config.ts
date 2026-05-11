import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        electric: {
          DEFAULT: "#0B5FFF",
          light: "#4D8AFF",
        },
        gold: {
          DEFAULT: "#ffde59",
          dark: "#e6c84f",
          light: "#fff0a0",
        },
        cloud: "#F1F5FB",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        "gold-glow": "0 0 24px rgba(255, 222, 89, 0.45)",
        "electric-glow": "0 8px 40px -12px rgba(11, 95, 255, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
