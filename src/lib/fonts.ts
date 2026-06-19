import { Playfair_Display, Source_Sans_3 } from "next/font/google";

// Body font — Source Sans 3 (clean, legible for dense coverage copy)
export const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Heading font — Playfair Display (serif, premium property / classical architecture feel)
export const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});
