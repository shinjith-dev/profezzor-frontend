import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  safelist: ["hidden"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--col-bg) / <alpha-value>)",
        surface: "hsl(var(--col-surface) / <alpha-value>)",
        overlay: "hsl(var(--col-overlay) / <alpha-value>)",
        muted: "hsl(var(--col-muted) / <alpha-value>)",
        subtle: "hsl(var(--col-subtle) / <alpha-value>)",
        fg: "hsl(var(--col-fg) / <alpha-value>)",
        love: "hsl(var(--col-love) / <alpha-value>)",
        gold: "hsl(var(--col-gold) / <alpha-value>)",
        rose: "hsl(var(--col-rose) / <alpha-value>)",
        pine: "hsl(var(--col-pine) / <alpha-value>)",
        foam: "hsl(var(--col-foam) / <alpha-value>)",
        iris: "hsl(var(--col-iris) / <alpha-value>)",
        "highlight-low": "hsl(var(--col-highlight-low) / <alpha-value>)",
        "highlight-med": "hsl(var(--col-highlight-med) / <alpha-value>)",
        "highlight-high": "hsl(var(--col-highlight-high) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
