import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Lessor's Risk Insurance | Contractors Choice Agency",
    template: "%s | Lessor's Risk Insurance",
  },
  description: SITE.description,
  keywords: [
    "lessors risk insurance",
    "lessors risk only",
    "LRO insurance",
    "LH-1 class code",
    "commercial landlord insurance",
    "landlord liability insurance",
    "commercial property insurance landlord",
    "building owner insurance",
    "tenant caused fire insurance",
    "property management E&O",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: "Lessor's Risk Insurance | Contractors Choice Agency",
    description:
      "Specialized insurance for commercial property owners who lease to tenants — Lessor's Risk Only (LRO / LH-1), commercial property, premises liability, equipment breakdown. Licensed all 50 states. 15-min quotes.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lessor's Risk Insurance — coverage for commercial property owners who lease to tenants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lessor's Risk Insurance | Contractors Choice Agency",
    description:
      "Specialized insurance for commercial landlords. Lessor's Risk Only (LRO/LH-1), commercial property, premises liability, equipment breakdown. 15-minute quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.2622,
      longitude: -111.7826,
    },
    employee: {
      "@type": "Person",
      name: "Josh Cotner",
      jobTitle: "Founder & Insurance Agent",
    },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "Lessor's Risk Only (LRO / LH-1) for Commercial Landlords",
      "Commercial Property Insurance for Leased Buildings",
      "General Liability / Premises Liability for Building Owners",
      "Property Management Errors & Omissions",
      "Boiler & Machinery / Equipment Breakdown",
      "Umbrella / Excess Liability Insurance",
      "Commercial Auto for Property Management Vehicles",
      "Workers' Compensation for Building Employees",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
