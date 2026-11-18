import localFont from "next/font/local";

// Body font — Source Sans 3 (clean, legible for dense coverage copy)
export const bodyFont = localFont({
  src: [
    { path: "./fonts/SourceSans3-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/SourceSans3-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/SourceSans3-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/SourceSans3-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

// Heading font — Playfair Display (serif, premium property / classical architecture feel)
export const headingFont = localFont({
  src: [
    { path: "./fonts/PlayfairDisplay-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PlayfairDisplay-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/PlayfairDisplay-variable.woff2", weight: "700", style: "normal" },
    { path: "./fonts/PlayfairDisplay-variable.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
