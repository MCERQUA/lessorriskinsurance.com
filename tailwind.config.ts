import type { Config } from "tailwindcss";

/* ============================================================
   LESSOR'S RISK INSURANCE — "Foundation" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to deep navy (primary) / wine-garnet (secondary) / antique gold (accent).
   clay = deep navy · sage = wine/garnet · gold = antique gold · cream = paper · sand = stone
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Backgrounds ===
        cream: "#FBF8F3",          // page background (warm paper)
        sand: "#F1ECE3",           // alt section bg (stone)
        white: "#FFFFFF",          // cards
        // === Primary — Deep Navy (token name: clay) ===
        clay: {
          DEFAULT: "#1B2A4E",      // primary — authoritative deep navy
          dark: "#121D38",
          light: "#2A3E6E",
          50: "#EAEDF4",
          100: "#CCD3E1",
          200: "#9BA8C4",
          300: "#6779A4",
          400: "#3D5080",
          500: "#2A3E6E",
          600: "#1B2A4E",
          700: "#121D38",
          800: "#0C1426",
          900: "#070C18",
        },
        // === Secondary — Wine / Garnet (token name: sage) ===
        sage: {
          DEFAULT: "#7A2E3A",      // secondary — refined wine / garnet
          dark: "#5E222C",
          light: "#9A4551",
          50: "#F6EBED",
          100: "#EAD0D5",
          200: "#D2A1AB",
          300: "#B67280",
          400: "#9A4551",
          500: "#7A2E3A",
          600: "#5E222C",
          700: "#461921",
        },
        // === Accent — Antique Gold (token name: gold) ===
        gold: {
          DEFAULT: "#C9A24B",      // accent — antique gold highlight
          dark: "#A8823A",
          light: "#DCC083",
          50: "#FAF4E6",
          100: "#F2E6C4",
          200: "#E5CE8E",
          300: "#D5B56B",
          400: "#C9A24B",
          500: "#A8823A",
          600: "#856428",
        },
        // === Text ===
        espresso: "#121A2B",       // headings (deep navy-charcoal ink)
        cocoa: "#3A4358",          // body (slate-navy graphite)
        mocha: "#6B7488",          // muted (slate)
        // === Borders / dividers ===
        adobe: "#E0D9CC",          // adobe / warm stone border
        adobeDark: "#CDC4B2",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FBF8F3 0%, #F4EFE4 40%, #F6EFE0 70%, #FBF8F3 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(122,46,58,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(27,42,78,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #1B2A4E 0%, #2A3E6E 100%)",
        "sage-gradient": "linear-gradient(135deg, #7A2E3A 0%, #9A4551 100%)",
        "gold-gradient": "linear-gradient(135deg, #C9A24B 0%, #DCC083 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(27, 42, 78, 0.22), 0 4px 12px -6px rgba(18, 26, 43, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(27, 42, 78, 0.28), 0 10px 30px -10px rgba(18, 26, 43, 0.10)",
        card: "0 2px 8px -2px rgba(18, 26, 43, 0.06), 0 1px 3px -1px rgba(18, 26, 43, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(27, 42, 78, 0.24), 0 8px 20px -8px rgba(18, 26, 43, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(27, 42, 78, 0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "arch-rise": {
          "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" },
          "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
