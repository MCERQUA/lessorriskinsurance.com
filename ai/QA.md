# Lessor's Risk Insurance — Build QA

**Domain:** lessorriskinsurance.com
**Niche:** Insurance for commercial property owners who lease space to tenants (CCA division)
**Identity:** "Foundation" — deep navy (primary) / wine-garnet (secondary) / antique gold (accent); Playfair Display (serif) + Source Sans 3; columnar / classical-architecture motif.

## Build checklist
- [x] Next.js 15 (app router) + React 19 + Tailwind + TS + motion + lenis
- [x] 6–10 section homepage (Hero, TrustBar, ServicesGrid, WhyChooseUs, Process, CoverageMap, Stats, Testimonials, FAQ, FinalCTA)
- [x] 8 service pages (lessors-risk, commercial-property, general-liability, property-management-eando, boiler-machinery, umbrella-excess-liability, commercial-auto, workers-compensation)
- [x] 8 location pages (commercial real estate regions)
- [x] Blog with 5 niche posts
- [x] Quote + contact forms → Netlify webhook (tenant=josh&site=lessorriskinsurance.com)
- [x] 20 FAQs on homepage + each service + each location page (FAQPage JSON-LD)
- [x] Full SEO: sitemap.ts, robots.ts, llms.txt, per-page OG/Twitter, JSON-LD (InsuranceAgency, InsuranceService, FAQPage, BreadcrumbList, BlogPosting)
- [x] ≥10 generated images (via HF FLUX.1-schnell)
- [x] `pnpm run build` GREEN
- [x] All files committed (incl. package.json, netlify.toml)

## Key niche facts (accuracy anchors)
- Lessor's Risk Only is written at ISO class code **LH-1** for a landlord-only commercial building.
- The defining coverage is **tenant-caused loss** — especially a tenant-caused fire, plus tenant-caused bodily injury on the premises.
- Generic property policies often try to **deny tenant-caused losses** — real LRO covers them.
- **Equipment breakdown** (boiler & machinery) covers HVAC, elevators, boilers, electrical — standard property excludes internal breakdown.
- Tenant's GL covers the tenant, NOT the building — owner still needs LRO regardless of tenant coverage.
- Lease should require tenants to carry GL and name owner **additional insured** (primary, non-contributory).
- Typical LRO cost: $750–$2,500/yr base; full program ≈ $2.5k–$9k/yr.
- Higher-hazard tenants (contractors w/ hot work, restaurants, manufacturers) push buildings into specialty markets.
- Agency: Contractors Choice Agency, Chandler AZ, founded 2005, NPN 8608479, licensed all 50 states.
