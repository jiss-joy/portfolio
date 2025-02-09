import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-dm-mono)",
    },
    extend: {
      colors: {
        primary: "#ED6A5A",
        // primary: "#250902",
        // primary: "#1C0221",
        // primary: "#1E1B18",
        // primary: "#1A1423",
        // primary: "#2F242C",
        // primary: "#22181C",
        accent: {
          // DEFAULT: "#D74E09",
          DEFAULT: "#ED6A5A",
          // DEFAULT: "#E15554",
          // DEFAULT: "#F25918",
          // DEFAULT: "#FF5C00",
          // DEFAULT: "#D81E5B",
          // DEFAULT: "#DB2B39",
          hover: "#D74E09",
        },
        background: {
          DEFAULT: "#D1DEDE",
          dark: "#1C0221",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
