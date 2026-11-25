"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { QUOTE_SERVICE_TYPES, YEARS_OPTIONS } from "@/lib/content";
import { QuoteForm, type LegacyQuestion } from "@/components/quote/QuoteForm";
import { ShieldCheck, Phone, Clock, Zap, MapPin } from "lucide-react";

const WEBHOOK_URL =
  "https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=lessorriskinsurance.com";

const LESSOR_TYPES = [
  "Lessor's Risk Only (landlord of commercial buildings)",
  "Commercial property owner / landlord",
  "Property management company",
  "Other",
];

// Pre-port field names with no canonical twin: still posted under their own names (optional).
const LEGACY: LegacyQuestion[] = [
  { name: "serviceType", label: "What do you need?", type: "select", options: QUOTE_SERVICE_TYPES },
  { name: "yearsInBusiness", label: "Years in business", type: "select", options: YEARS_OPTIONS },
  { name: "equipmentYear", label: "Equipment year", type: "number" },
  { name: "equipmentMake", label: "Equipment make" },
  { name: "equipmentModel", label: "Equipment model" },
  { name: "equipmentSerialNumber", label: "Equipment serial number" },
  { name: "equipmentValue", label: "Equipment value ($)" },
];

// Pre-port names that mirror a canonical answer the shared form already asks: derived, never asked twice.
const deriveLegacy = (d: Record<string, string>): Record<string, string> => ({
  streetAddress: d.address ?? "",
  message: d.notes ?? "",
});

const trustItems = [
  { icon: ShieldCheck, title: "Built for landlords", desc: "Policies written for commercial property owners who lease to tenants — not generic small-business coverage." },
  { icon: Zap, title: "~15-minute quotes", desc: "Real quotes from real markets, fast." },
  { icon: Clock, title: "2-hour claims response", desc: "When a loss hits, you reach a person." },
  { icon: MapPin, title: "All 50 states", desc: "Licensed nationwide — NPN #8608479." },
];

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-wide">
            <FadeIn className="text-center max-w-2xl mx-auto mb-12">
              <span className="pill-clay"><ShieldCheck className="h-3.5 w-3.5" /> Free quote</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Get your{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">
                  lessor&rsquo;s risk insurance quote
                </span>
              </h1>
              <p className="mt-5 lead">
                Tell us about your building and tenants. We&rsquo;ll shop A-rated
                specialty property markets and come back with real quotes in about
                15 minutes — no obligation.
              </p>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Trust sidebar */}
              <div className="space-y-4">
                {trustItems.map((item) => (
                  <FadeIn key={item.title}>
                    <div className="flex gap-3 p-5 rounded-2xl bg-white border border-adobe shadow-card">
                      <span className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-clay/10 text-clay">
                        <item.icon className="h-5 w-5" strokeWidth={2.2} />
                      </span>
                      <div>
                        <p className="font-heading font-bold text-espresso text-sm">{item.title}</p>
                        <p className="text-mocha text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
                <FadeIn>
                  <div className="p-5 rounded-2xl bg-espresso text-cream text-center">
                    <p className="text-xs font-heading font-bold uppercase tracking-wider text-gold mb-2">
                      Prefer to call?
                    </p>
                    <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 text-cream font-heading font-extrabold text-xl hover:text-gold-light transition-colors">
                      <Phone className="h-5 w-5" />
                      {SITE.phone}
                    </a>
                    <p className="text-xs text-cream/60 mt-1">{SITE.hours}</p>
                  </div>
                </FadeIn>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <FadeIn>
                  <div className="rounded-3xl bg-white border border-adobe shadow-card p-7 md:p-9">
                    <QuoteForm
                      formName="quote"
                      tradeName="Lessor's Risk"
                      endpoint={WEBHOOK_URL}
                      format="json"
                      netlifyFallback="/__forms.html"
                      extraFields={{ form_name: "quote", source: "lessorriskinsurance.com" }}
                      options={{ yn: true, feinRequired: false }}
                      tradeTypeOptions={LESSOR_TYPES}
                      defaults={{ coverageTypes: "General Liability" }}
                      legacyQuestions={LEGACY}
                      deriveLegacy={deriveLegacy}
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
