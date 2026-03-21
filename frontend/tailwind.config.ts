import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#066046",
        "background-light": "#f8faf9",
        "background-dark": "#10221d",
        "accent-sage": "#e9f2ef",
        "emerald-sanctuary": "#064E3B",
        "mystic-overlay": "rgba(10, 20, 18, 0.45)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "emerald-deep": "#064E3B",
        "emerald-light": "#10B981",
        "sage-bg": "#F1F5F2",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "headline": ["Manrope"],
        "serif": ["Playfair Display", "serif"],
        "body": ["Inter"],
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px",
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 20s ease-in-out infinite",
        "fade-in-delayed": "fadeIn 3s ease-out 1s both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "scale(1.05) translate(0, 0)" },
          "50%": { transform: "scale(1.1) translate(-1%, -1%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
} satisfies Config;
