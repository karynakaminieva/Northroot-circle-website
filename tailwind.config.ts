import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F1720",
        "ink-soft": "#1A2530",
        paper: "#F5F1EA",
        "paper-2": "#ECE6DA",
        "paper-3": "#DFD6C3",
        olive: "#BFBF6C",
        "olive-deep": "#9C9C50",
        "olive-soft": "#DCDCA8",
        sky: "#D1DFFA",
        "sky-2": "#B7CBF4",
        "sky-ink": "#4D6FA8",
        moss: "#3F5A3A",
        "moss-2": "#6A8259",
        "grey-90": "#1B1B1B",
        "grey-70": "#404040",
        "grey-50": "#7A7A7A",
        "grey-30": "#B8B8B8",
        "grey-15": "#D8D5CE",
        "grey-08": "#E8E4DB",
        positive: "#2E7D4F",
        warning: "#B98A2E",
        danger: "#A03A22",
      },
      fontFamily: {
        display: ['"Alumni Sans SC"', "Oswald", "Impact", "sans-serif"],
        sans: ["Inter", "Helvetica Neue", "-apple-system", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "Menlo", "monospace"],
      },
      maxWidth: {
        page: "1484px",
      },
      letterSpacing: {
        tight: "-0.05em",
        snug: "-0.02em",
        wide: "0.08em",
        eyebrow: "0.18em",
      },
      transitionTimingFunction: {
        nr: "cubic-bezier(0.22, 0.61, 0.36, 1)",
        "nr-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
