// Rich, niche-accurate content blocks for Lessor's Risk Insurance.

import {
  PhoneCall, FileSearch, FileSignature, ShieldCheck,
  Building2, Truck, HardHat, Wrench,
} from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

/* ============================================================
   PROCESS — how getting insured with us works
   ============================================================ */
export const PROCESS = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Tell us about your building",
    description:
      "15-min call or form. Property type, construction, tenant mix (contractors, retail, warehouse), square footage leased, and the lines your old carrier excluded.",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "We shop lessor's-risk specialty markets",
    description:
      "Markets that actually write Lessor's Risk Only at LH-1 and understand tenant-caused exposures — not generic property carriers that exclude the losses you actually fear.",
  },
  {
    step: "03",
    icon: FileSignature,
    title: "Bind a program built for property owners",
    description:
      "LRO + commercial property + premises GL + equipment breakdown + umbrella, coordinated so there are no gaps between the building, the tenants, and your liability as owner.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Certificates & claims that move fast",
    description:
      "When a lender or tenant needs proof of coverage, or a tenant-caused fire happens, you reach a person with context — not a queue. 2-hour response.",
  },
] as const;

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: "True LRO at the LH-1 class code",
    description:
      "Lessor's Risk Only is a specific program written at the LH-1 class code for building owners who lease commercial space. We place real LRO — not a generic landlord policy with the tenant-caused losses carved out.",
  },
  {
    icon: Building2,
    title: "Tenant-caused fire & damage, covered",
    description:
      "The defining risk of leasing to tenants is a tenant operation causing a fire or damage. We structure your program so tenant-caused bodily injury and property damage fall on the right policy — not denied as a tenant loss.",
  },
  {
    icon: Wrench,
    title: "Equipment breakdown for the systems that fail",
    description:
      "Rooftop HVAC, boilers, chillers, elevators, and electrical panels fail constantly in commercial buildings. Standard property excludes internal breakdown — we build in equipment-breakdown coverage that pays.",
  },
  {
    icon: HardHat,
    title: "Premises liability for common areas",
    description:
      "Slips and falls in parking lots, hallways, and common areas land on the building owner. We place premises general liability that covers third-party injuries on the property you own and lease out.",
  },
  {
    icon: Truck,
    title: "Lender & tenant certificates, fast",
    description:
      "Commercial lenders and tenants require certificates before closing or move-in. We turn additional-insured endorsements and proof-of-coverage around in minutes, not days.",
  },
  {
    icon: Building2,
    title: "Run by people who know property",
    description:
      "Josh Cotner and the CCA team have insured commercial property owners since 2005. We know what happens when a tenant-caused loss meets the wrong policy form — and how to prevent it.",
  },
] as const;

/* ============================================================
   HOMEPAGE FAQ — 20 questions
   ============================================================ */
export const HOME_FAQS: FAQItem[] = [
  {
    q: "What is Lessor's Risk Only (LRO) insurance?",
    a: "Lessor's Risk Only — often written at the LH-1 class code — is a specialized property and liability program for building owners who lease commercial space to tenants. It covers the building itself and protects the owner when a tenant's operations cause a loss, most importantly a tenant-caused fire or bodily injury on the premises. LRO is the core coverage every commercial landlord should carry.",
  },
  {
    q: "How much does lessor's risk insurance cost?",
    a: "Most commercial building owners pay between $750 and $2,500 a year for a base Lessor's Risk Only policy, depending on the building's value, construction type, square footage leased, tenant mix, and location. A full program — LRO, commercial property, equipment breakdown, and an umbrella — typically runs $2,500 to $9,000 a year. We quote the whole program in about 15 minutes.",
  },
  {
    q: "What does the LH-1 class code mean?",
    a: "LH-1 is the ISO class code for a Lessor's Risk Only building — a commercial property leased to tenants where the only occupancy is as a landlord. Pricing and eligibility under LH-1 reflect that the owner is not operating a business in the building, only leasing space, which is why it's priced differently from an owner-occupied commercial property.",
  },
  {
    q: "Does lessor's risk cover a fire caused by a tenant?",
    a: "Yes — that is the central purpose of Lessor's Risk Only. If a tenant's operations start a fire (welding, cooking, electrical, manufacturing) that damages the building or other tenants' space, LRO covers the building owner's resulting property loss and liability. This is exactly the exposure that generic policies often mishandle.",
  },
  {
    q: "Do I need lessor's risk if my tenants carry their own insurance?",
    a: "Yes. Your tenant's policy covers the tenant's own liability and property, but it does not cover the building you own — and if the tenant is uninsured, underinsured, or skips out after a loss, you're left holding the damage. LRO protects the building owner regardless of what the tenant carries. You should still require tenants to name you additional insured.",
  },
  {
    q: "What's the difference between lessor's risk and commercial property insurance?",
    a: "Commercial property covers the physical building (structure, roof, systems) against fire, wind, theft, and similar perils. Lessor's Risk Only is a broader landlord program that layers premises liability and tenant-caused-loss coverage on top of property protection. Most commercial landlords need both, often bundled into one LRO program.",
  },
  {
    q: "What tenant types make a building hardest to insure?",
    a: "Higher-hazard tenants — contractors and trades with hot work, restaurants with cooking, manufacturers, auto-repair, and welding shops — increase fire and liability exposure and can push a building into specialty or surplus-lines markets. We know which markets write which tenant mixes and structure the program accordingly.",
  },
  {
    q: "Does lessor's risk cover slips and falls in common areas?",
    a: "Premises liability — the liability component of a lessor's-risk program or a standalone general liability policy — covers third-party bodily injury in common areas you control: parking lots, hallways, stairwells, and entrances. We make sure the common-area exposure is addressed, not just the tenant suites.",
  },
  {
    q: "Can you insure a building leased to contractors and trades?",
    a: "Absolutely — that's one of our specialties. Buildings leased to framing, roofing, plumbing, electrical, and other contractors carry elevated fire and liability exposure from the tenant's operations, and we have markets that write exactly this class of business and price it correctly at LH-1.",
  },
  {
    q: "Do you insure commercial property owners in all 50 states?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes lessor's-risk and commercial property programs for building owners nationwide, from Texas and Sun Belt industrial markets to Northeast multi-tenant and California warehouse owners.",
  },
  {
    q: "How fast can I get a quote and a certificate?",
    a: "Typically 15 minutes for a standard program on a call or form. Once bound, we turn around certificates of insurance and additional-insured endorsements for lenders, tenants, and partners — usually within minutes.",
  },
  {
    q: "What limits should a commercial landlord carry?",
    a: "Most commercial property owners carry $1M per occurrence / $2M general aggregate on liability, plus a $2M–$5M umbrella when the building value or tenant exposure warrants it. Property limits should equal the full replacement cost of the building. We size limits to your building, your tenants, and your lender's requirements.",
  },
  {
    q: "Does the policy cover equipment breakdown — HVAC, elevators, boilers?",
    a: "Standard commercial property excludes internal mechanical and electrical breakdown. We add equipment-breakdown (boiler & machinery) coverage so a failed rooftop HVAC unit, boiler, chiller, elevator motor, or electrical panel is covered — including the business-interruption loss from the resulting downtime.",
  },
  {
    q: "What happens if a tenant is injured on the property?",
    a: "If a tenant or their employee is injured in a common area or due to a building condition you're responsible for, your premises liability responds. If the injury is in the tenant's own space or caused by their own operations, their own policy should respond. We structure the program so there are no gaps either way.",
  },
  {
    q: "Will my premium go up after a tenant-caused fire?",
    a: "A serious loss can affect renewal pricing and eligibility, especially if the program was mis-classified to begin with. The best protection is correct class coding (real LH-1), proper limits, documented tenant-lease requirements, and a claims partner who manages the loss aggressively — all of which we provide.",
  },
  {
    q: "Do I need to require tenants to name me additional insured?",
    a: "Yes — strongly. Your lease should require every tenant to carry general liability and name the building owner as additional insured on a primary, non-contributory basis. We provide a sample lease-insurance clause and help you track certificates so tenant coverage sits beneath your program.",
  },
  {
    q: "Can you cover older or mixed-use commercial buildings?",
    a: "Often yes. Older buildings, mixed-use properties, and those with frame construction or deferred maintenance require specialty markets. We document the building's condition, protection, and occupancy to place coverage other brokers struggle to bind.",
  },
  {
    q: "What is property management E&O and do I need it?",
    a: "Property management errors & omissions covers claims from mistakes in managing, leasing, and maintaining the property — a missed repair, a leasing error, a tenant dispute. If you self-manage or run a management company, E&O is important; if a third party manages the building, they should carry it.",
  },
  {
    q: "How are lessor's-risk premiums calculated?",
    a: "Property coverage is rated on building replacement cost, construction type, protection class (fire), and occupancy. Liability is rated on square footage leased, tenant mix, and exposures. Equipment breakdown is rated on the systems covered. We document the building accurately so you're rated on real exposure, not a worst-case guess.",
  },
  {
    q: "Why use a specialty lessor's-risk broker?",
    a: "Commercial property leased to tenants — especially contractors, manufacturers, and food-service — has a specific risk profile that generic small-business carriers routinely exclude or misprice. A specialty broker knows the LH-1 class code, the markets that write each tenant mix, and how to manage a tenant-caused claim — which means better coverage at a fairer price.",
  },
];

/* ============================================================
   GENERAL FAQs — reused as the tail on service & location pages
   so every page carries 20 FAQs (composed via buildPageFaqs)
   ============================================================ */
export const GENERAL_FAQS: FAQItem[] = [
  {
    q: "How much does lessor's-risk coverage cost for a commercial landlord?",
    a: "Most commercial building owners pay $750–$2,500 a year for base Lessor's Risk Only, with the full program (LRO, property, equipment breakdown, umbrella) running $2,500–$9,000. Cost depends on building value, construction, tenant mix, and location. We quote the full program in about 15 minutes.",
  },
  {
    q: "Do you insure commercial property owners in all 50 states?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states and writes lessor's-risk and commercial property programs from the Sun Belt and Texas to the Northeast, Midwest, and West Coast.",
  },
  {
    q: "How fast can I get a quote and a certificate?",
    a: "About 15 minutes for a standard program. Once bound, we turn around certificates of insurance and additional-insured endorsements for lenders, tenants, and partners — usually within minutes.",
  },
  {
    q: "What is the LH-1 class code?",
    a: "LH-1 is the ISO class code for a Lessor's Risk Only building — a commercial property leased to tenants where the owner's only occupancy is as a landlord. Correct LH-1 classification keeps premium fair and ensures claims aren't denied for misclassification.",
  },
  {
    q: "Does lessor's risk cover a tenant-caused fire?",
    a: "Yes — that is the central purpose of Lessor's Risk Only. If a tenant's operations cause a fire that damages the building or other tenants, LRO covers the owner's property loss and liability. Generic policies often mishandle this exact exposure.",
  },
  {
    q: "Does the policy cover HVAC, elevators, and boiler breakdown?",
    a: "Standard commercial property excludes internal breakdown. We add equipment-breakdown (boiler & machinery) coverage so failed HVAC, boilers, chillers, elevators, and electrical panels are covered, including the resulting business-interruption loss.",
  },
  {
    q: "What limits should a commercial landlord carry?",
    a: "Most carry $1M/$2M on liability with a $2M–$5M umbrella, and property limits equal to the building's full replacement cost. We size limits to your building value, tenant exposure, and lender requirements.",
  },
  {
    q: "Do I need commercial auto as a property owner?",
    a: "If you or your maintenance crew drive company vehicles between properties, yes — personal auto excludes business use. We also add hired/non-owned coverage if employees drive personal vehicles for property work.",
  },
  {
    q: "Can you cover buildings with prior claims or tough exposures?",
    a: "Often, yes. We have excess-and-surplus (E&S) and specialty markets for buildings with loss runs, high-hazard tenant mixes, older construction, or other exposures that standard markets decline.",
  },
  {
    q: "Should tenants name me as additional insured?",
    a: "Yes — your lease should require every tenant to carry general liability and name the building owner additional insured on a primary, non-contributory basis. We provide a sample lease clause and help track certificates.",
  },
  {
    q: "What happens if there's a claim?",
    a: "You reach a person with context, not a queue. We respond within 2 hours, help you document the loss, and manage the claim with the carrier so it's paid correctly and your building keeps operating.",
  },
  {
    q: "Why use a specialty lessor's-risk broker?",
    a: "Commercial property leased to tenants has a specific risk profile that generic carriers exclude or misprice. A specialty broker knows the LH-1 class code, the markets that write each tenant mix, and how to manage a tenant-caused claim.",
  },
];

/** Compose a 20-item FAQ list for any page: specific FAQs first, then general fill. */
export function buildPageFaqs(specific: FAQItem[], count = 20): FAQItem[] {
  const seen = new Set<string>();
  const out: FAQItem[] = [];
  for (const f of [...specific, ...GENERAL_FAQS]) {
    const key = f.q.toLowerCase().slice(0, 60);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(f);
    if (out.length >= count) break;
  }
  return out;
}

/* ============================================================
   LOCATION FAQ EXTRAS — composed with GENERAL_FAQS on location pages
   ============================================================ */
export const LOCATION_FAQ_BASE: FAQItem[] = [
  {
    q: "Are you licensed to insure commercial property owners in this region?",
    a: "Yes. Contractors Choice Agency is licensed in all 50 states, so we can bind and service lessor's-risk and commercial property coverage for building owners in this region and coordinate coverage across multi-state portfolios.",
  },
  {
    q: "Do regional building codes and weather affect my coverage here?",
    a: "They can. Wind, named-storm, wildfire, seismic, and freeze exposures vary regionally and influence both how the building is rated and what perils need attention. We account for the region's code and weather environment when structuring your program.",
  },
  {
    q: "Can you meet local lender and tenant insurance requirements here?",
    a: "Yes. We routinely issue the certificates of insurance and additional-insured endorsements that local commercial lenders, tenants, and partners require before closing or move-in.",
  },
  {
    q: "Do you handle multi-building and portfolio owners in this market?",
    a: "We do. We right-size and coordinate coverage across multiple properties — schedule of locations, blanket limits where it makes sense — and provide one point of contact for the whole portfolio.",
  },
  {
    q: "How do storm and weather exposure affect my premium here?",
    a: "Wind, named-storm, hail, wildfire, and freeze exposures vary by region and affect property and equipment-breakdown pricing. We shop markets that write your region and structure deductibles so you're protected without overpaying.",
  },
  {
    q: "Can you add project-specific coverage for a renovation or build-out?",
    a: "Yes. For a major renovation, addition, or tenant build-out we can write project-specific builder's risk or course-of-construction coverage alongside your ongoing lessor's-risk program.",
  },
  {
    q: "Do you provide certificates to local lenders and tenants here?",
    a: "Yes. We supply the certificates of insurance, additional-insured endorsements, and proof-of-coverage documents that local commercial lenders, tenants, and partners require — turned around fast.",
  },
  {
    q: "Who services my policy if I own buildings in multiple regions?",
    a: "We do — coast to coast. Because we're licensed everywhere, a single program can cover your entire portfolio across regional lines, with one point of contact for certificates, endorsements, and claims.",
  },
];

/* ============================================================
   SERVICE DETAIL — per-service editorial content
   ============================================================ */
export interface ServiceDetail {
  heroBlurb: string;
  whatsCovered: string[];
  whoItsFor: string[];
  whyCca: string[];
  faqs: FAQItem[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "lessors-risk": {
    heroBlurb:
      "Lessor's Risk Only — the LH-1 class program built for building owners who lease commercial space. Covers tenant-caused bodily injury and property damage, including fire damage from a tenant's operations, so a single tenant loss doesn't land on the owner.",
    whatsCovered: [
      "Tenant-caused bodily injury on the premises",
      "Property damage from a tenant's operations — including fire",
      "The building itself (structure, roof, fixed systems)",
      "Premises liability for common areas you control",
      "Defense costs and legal fees when you're named in a lawsuit",
      "Additional-insured status for lenders and partners",
    ],
    whoItsFor: [
      "Building owners who lease commercial space to tenants",
      "Owners leasing to contractors, trades, and manufacturers",
      "Multi-tenant warehouse, flex, retail, and mixed-use owners",
      "Owners whose lender requires lessor's-risk coverage",
      "Any commercial landlord whose tenants' operations add risk",
    ],
    whyCca: [
      "True LRO written at the LH-1 class code — not a generic landlord policy",
      "Tenant-caused fire and damage covered the way it should be",
      "Programs for high-hazard tenant mixes (contractors, food service)",
    ],
    faqs: [
      {
        q: "What exactly is Lessor's Risk Only insurance?",
        a: "Lessor's Risk Only (LRO) is a specialized property-and-liability program for building owners whose only role is leasing commercial space to tenants. It covers the building and protects the owner when a tenant's operations cause a loss — most importantly a tenant-caused fire or a bodily-injury claim on the premises. LRO is written at the LH-1 class code.",
      },
      {
        q: "What does LH-1 mean on my policy?",
        a: "LH-1 is the ISO protection class for a Lessor's Risk Only building — a commercial property leased to tenants where the owner does not operate a business on the premises. Pricing and eligibility under LH-1 reflect the landlord-only occupancy, which is why a properly coded LRO policy costs differently from an owner-occupied commercial property.",
      },
      {
        q: "Does LRO cover a fire a tenant starts?",
        a: "Yes. That is the central reason LRO exists. If a tenant's welding, cooking, electrical, or manufacturing operation starts a fire that damages your building or another tenant's space, LRO covers your resulting property loss and liability. Generic policies frequently mishandle this exact scenario.",
      },
      {
        q: "If my tenant carries insurance, do I still need lessor's risk?",
        a: "Yes. Your tenant's policy covers the tenant, not your building. If the tenant is uninsured, underinsured, or disappears after a loss, the building owner is left with the damage. LRO protects you regardless of what the tenant carries — and you should still require tenants to name you additional insured.",
      },
      {
        q: "Does lessor's risk cover injuries to a tenant's customer?",
        a: "Injuries in common areas you control (parking lots, hallways, entrances) are covered under the premises-liability portion of your program. Injuries inside a tenant's space from the tenant's own operations should be covered by the tenant's general liability. We structure the program so neither side has a gap.",
      },
      {
        q: "What tenant types raise the cost the most?",
        a: "Higher-hazard tenants — contractors with hot work, restaurants with cooking, manufacturers, auto-repair, and welders — increase fire and liability exposure and can push the building into specialty markets. We know which markets write which tenant mixes and price the program correctly.",
      },
      {
        q: "How is lessor's risk different from a landlord policy for residential rentals?",
        a: "Residential landlord policies cover 1–4 family residential rentals. Commercial lessor's-risk (LRO / LH-1) is built for commercial space leased to businesses, with the fire, liability, and tenant-operation exposures that commercial tenants create. The two are not interchangeable.",
      },
      {
        q: "Can you write LRO if my building is leased to contractors?",
        a: "Absolutely — that's a core specialty. Buildings leased to framing, roofing, plumbing, electrical, and HVAC contractors carry elevated fire and liability exposure, and we have markets that write exactly this tenant mix and price it correctly at LH-1.",
      },
    ],
  },
  "commercial-property": {
    heroBlurb:
      "All-risk coverage for the building itself — structure, roof, mechanical systems, and tenant improvements — written for the construction type, occupancy, and protection class of a commercial property leased to multiple tenants.",
    whatsCovered: [
      "The building structure — walls, roof, foundation, frame",
      "Fixed mechanical systems — plumbing, electrical, HVAC shells",
      "Tenant improvements and betterments you own",
      "Fire, wind, hail, theft, vandalism, and covered water damage",
      "Debris removal and ordinance-or-law upgrades after a loss",
      "Business-interruption / loss of rental income (optional)",
    ],
    whoItsFor: [
      "Owners of the physical commercial building",
      "Landlords carrying the property as the insured asset",
      "Owners whose lender requires replacement-cost coverage",
      "Buildings with significant tenant-improvement investment",
    ],
    whyCca: [
      "Replacement-cost limits set to the building's true rebuild cost",
      "Construction type and protection class priced correctly",
      "Loss-of-rent income coverage sized to your real lease income",
    ],
    faqs: [
      {
        q: "What does commercial property cover for a building owner?",
        a: "It covers the physical building — structure, roof, fixed systems, and the tenant improvements you own — against fire, wind, hail, theft, vandalism, and certain water damage. It protects the value of the building you lease out. It does not cover internal mechanical breakdown (that's equipment breakdown) or liability (that's LRO/GL).",
      },
      {
        q: "Replacement cost or actual cash value for my building?",
        a: "We strongly recommend replacement cost so a loss rebuilds your building new, not depreciated. Underinsuring on an actual-cash-value basis can leave you tens or hundreds of thousands short after a major fire — and many lenders require replacement cost anyway.",
      },
      {
        q: "Does commercial property cover loss of rental income?",
        a: "It can and should. Business-interruption / loss-of-rents coverage pays the rental income you lose while the building is being repaired after a covered loss. We size the restoration period to your real rebuild timeline so your cash flow survives a major loss.",
      },
      {
        q: "What is ordinance or law coverage and do I need it?",
        a: "After a partial loss, current building codes often force you to rebuild to a higher standard than the original structure — triggering costs a basic policy won't pay. Ordinance-or-law coverage pays those code-upgrade costs. For older commercial buildings it's essential.",
      },
      {
        q: "Does commercial property cover a roof leak or old roof?",
        a: "Sudden damage from a covered peril (wind, hail) is covered; wear-and-tear and maintenance issues generally are not. We help you document roof condition and age and place carriers that handle roof claims fairly, especially on older commercial roofs.",
      },
      {
        q: "How is the property limit determined?",
        a: "The limit should equal the full replacement cost of the building — what it would cost to rebuild, not the market value or tax value. We help you calculate replacement cost correctly so the building is fully insured without overpaying on premium.",
      },
      {
        q: "Does property cover tenant-caused damage?",
        a: "Damage from a covered peril — including a tenant-caused fire — is covered under commercial property, and the tenant-caused-loss angle is reinforced by your LRO program. We coordinate the two so the building is protected regardless of cause.",
      },
      {
        q: "How is commercial property rated for a leased building?",
        a: "Premium reflects construction type (frame vs. masonry), protection class (fire protection), occupancy / tenant mix, building age and condition, and replacement cost. Good housekeeping, alarms, and documented protection improve both terms and price.",
      },
    ],
  },
  "general-liability": {
    heroBlurb:
      "Premises liability protection for the building owner — slips and falls in common areas, parking-lot injuries, and third-party claims arising from the property you own and lease out to commercial tenants.",
    whatsCovered: [
      "Bodily injury to visitors, tenants' customers, and the public",
      "Slips, trips, and falls in common areas and parking lots",
      "Property damage to third parties caused by the premises",
      "Defense costs and legal fees when you're named in a lawsuit",
      "Medical payments to minor injured parties",
      "Additional-insured status for lenders and partners",
    ],
    whoItsFor: [
      "Commercial building owners and landlords",
      "Owners responsible for common areas and parking",
      "Property owners whose tenants' customers visit the premises",
      "Any owner who could be named in a premises-injury lawsuit",
    ],
    whyCca: [
      "Premises liability that addresses the common-area exposure",
      "Additional-insured endorsements issued fast for lenders",
      "Limits scaled to your building value and tenant traffic",
    ],
    faqs: [
      {
        q: "What does general liability cover for a commercial landlord?",
        a: "GL covers third-party bodily injury and property damage arising from the premises you own and lease out — a tenant's customer slipping in your parking lot, a visitor falling in a stairwell, or damage to a neighbor's property. It does not cover the building itself (property) or your employees (workers' comp).",
      },
      {
        q: "Is general liability included in lessor's risk?",
        a: "Often yes — a full Lessor's Risk Only program bundles premises liability with the property coverage. Standalone GL is also available. Either way, we make sure the common-area and third-party exposure is addressed, not just the tenant suites.",
      },
      {
        q: "Does GL cover a slip and fall in the parking lot?",
        a: "Yes. Parking lots, entrances, hallways, stairwells, and other common areas you control are exactly where premises-liability claims arise. We place GL that covers these areas specifically, including snow/ice and trip-hazard exposures.",
      },
      {
        q: "What if a tenant's customer is injured inside the tenant's space?",
        a: "Injuries from the tenant's own operations should be covered by the tenant's general liability — which is one reason your lease must require the tenant to carry GL and name you additional insured. We help you set up those lease requirements and certificate tracking.",
      },
      {
        q: "What GL limits does a commercial landlord need?",
        a: "Most carry $1M per occurrence / $2M general aggregate, with a $2M–$5M umbrella when building value or tenant traffic warrants. Lenders often require minimum limits. We size limits to your building, tenants, and lease requirements.",
      },
      {
        q: "Should my tenant name me additional insured?",
        a: "Yes — strongly. Your lease should require every tenant to carry GL and name the building owner additional insured on a primary, non-contributory basis. That way if a claim arises inside the tenant's operations, their policy responds first. We provide a sample lease clause.",
      },
      {
        q: "Does GL cover a tenant-caused fire?",
        a: "GL typically includes limited coverage for fire damage to premises you rent to others, but the building itself should be covered under commercial property / LRO. We coordinate all three so a tenant-caused fire is fully handled regardless of which policy responds first.",
      },
      {
        q: "How is landlord GL premium calculated?",
        a: "GL for commercial landlords is usually rated on square footage leased, building type, and exposure (common-area size, tenant traffic). Documented maintenance, lighting, and security programs improve both terms and price.",
      },
    ],
  },
  "property-management-eando": {
    heroBlurb:
      "Errors & omissions coverage for property owners and managers — claims from leasing mistakes, maintenance oversights, tenant disputes, and the day-to-day decisions that can turn into a negligence lawsuit.",
    whatsCovered: [
      "Claims of negligent maintenance or repairs",
      "Leasing and tenant-screening errors",
      "Fair-housing and discrimination allegations",
      "Mishandled security deposits and tenant funds",
      "Failure to maintain required insurance or code compliance",
      "Defense costs and legal fees for management claims",
    ],
    whoItsFor: [
      "Owners who self-manage their commercial properties",
      "Property management companies and on-site managers",
      "Owners with employees who lease or maintain the building",
      "Anyone whose management decisions could be alleged as negligent",
    ],
    whyCca: [
      "Covers the management-decision exposures GL doesn't",
      "Defense costs included — these lawsuits are expensive to defend",
      "Programs for both self-managed owners and management firms",
    ],
    faqs: [
      {
        q: "What is property management E&O insurance?",
        a: "Property management errors & omissions (E&O) covers claims that your management of the property was negligent — a missed repair that caused damage, a leasing mistake, a fair-housing allegation, or mishandled tenant funds. It addresses the professional-decision exposures that general liability doesn't cover.",
      },
      {
        q: "Do I need E&O if I self-manage my own building?",
        a: "If you make the management, leasing, and maintenance decisions yourself, your decisions can still be alleged as negligent — and a lawsuit is expensive to defend even if you win. Self-managing owners often carry E&O for that defense coverage. We'll help you decide based on your operation.",
      },
      {
        q: "How is E&O different from general liability?",
        a: "General liability covers bodily injury and property damage to third parties. E&O covers financial loss from a negligent professional act or omission in managing the property — the kinds of claims that don't involve a physical injury but still cost you money. Many landlords need both.",
      },
      {
        q: "Does E&O cover fair-housing or discrimination claims?",
        a: "Many property management E&O policies include coverage for alleged fair-housing violations or discrimination in leasing, including defense costs. These claims are increasingly common and expensive, so we make sure the policy form addresses them.",
      },
      {
        q: "What if a third party manages my building?",
        a: "If a property management company runs the building, they should carry their own E&O and name you additional insured. We help you verify their coverage and decide whether you also want your own management-liability protection as the owner.",
      },
      {
        q: "Does E&O cover a tenant injury claim?",
        a: "No — tenant and visitor injuries are a general liability / premises liability matter. E&O covers the financial-loss claims from how the property is managed, not physical injuries. The two coverages complement each other.",
      },
      {
        q: "How much E&O coverage do I need?",
        a: "Common limits are $1M per claim / $2M aggregate for property management E&O. The right limit depends on the size of the portfolio, number of tenants, and the management operation's complexity. We size coverage to your real exposure.",
      },
      {
        q: "How is property management E&O rated?",
        a: "Premium reflects the number of units or square footage managed, the types of properties, revenue from management activities, and claims history. We document your operation accurately so the premium reflects real exposure.",
      },
    ],
  },
  "boiler-machinery": {
    heroBlurb:
      "Equipment breakdown coverage for the systems that keep a commercial building running — boilers, chillers, elevators, electrical panels, and rooftop HVAC — where a mechanical or electrical failure can cost tens of thousands and shut down tenant operations.",
    whatsCovered: [
      "Boiler, chiller, and pressure-vessel breakdown",
      "Rooftop HVAC and cooling-tower failures",
      "Elevator motors, drives, and control panels",
      "Main electrical panels and transformers",
      "Repair cost plus resulting property damage",
      "Business interruption / loss of rents from the downtime",
    ],
    whoItsFor: [
      "Owners of any commercial building with mechanical systems",
      "Buildings with elevators, central HVAC, or boilers",
      "Owners whose tenants depend on climate control or power",
      "Landlords wanting to close the standard property exclusion",
    ],
    whyCca: [
      "Closes the internal-breakdown gap in standard property",
      "Includes business-interruption from equipment downtime",
      "Priced for commercial systems, not residential equipment",
    ],
    faqs: [
      {
        q: "What does equipment breakdown cover for a commercial building?",
        a: "Equipment breakdown (formerly boiler & machinery) covers sudden, accidental mechanical or electrical breakdown of covered equipment — boilers, chillers, rooftop HVAC, elevators, electrical panels, and pressure vessels. Standard commercial property excludes internal breakdown, so this coverage fills a major gap.",
      },
      {
        q: "Why doesn't regular property cover HVAC breakdown?",
        a: "Commercial property covers external causes of damage (fire, wind, theft) but excludes internal mechanical and electrical breakdown — worn bearings, shorted windings, arcing, compressor failure. Equipment breakdown is the coverage that pays when the system simply fails.",
      },
      {
        q: "Does equipment breakdown cover elevators?",
        a: "Yes. Elevator motors, drives, controllers, and the mechanical systems that fail from wear or electrical surge are covered equipment. An elevator outage is one of the most disruptive losses a multi-tenant building can suffer, and this coverage pays to repair it fast.",
      },
      {
        q: "Does it cover business interruption from the breakdown?",
        a: "Yes — and that's often the larger loss. When a chiller or boiler fails and tenants can't operate, the resulting loss of rental income and extra expense is covered. We size the restoration period to how long a major system actually takes to replace.",
      },
      {
        q: "How is equipment breakdown different from a warranty?",
        a: "A manufacturer warranty covers specific equipment for a limited time and often excludes the resulting damage and downtime. Equipment breakdown covers the repair, the resulting property damage, and the business-interruption loss — and it applies across all covered systems, not just one.",
      },
      {
        q: "How much does equipment breakdown cost?",
        a: "It's typically one of the most cost-effective coverages in a commercial property program — a small percentage of the property premium, given the frequency and severity of mechanical failures in commercial buildings. We include it as standard in most programs.",
      },
      {
        q: "Does it cover old equipment?",
        a: "Coverage applies to sudden accidental breakdown regardless of age, though wear-and-tear alone isn't a covered cause. If an aging compressor short-circuits and fails, that's covered; if it simply wears out gradually, that's maintenance. We help you distinguish and document.",
      },
      {
        q: "Who needs equipment breakdown coverage?",
        a: "Essentially every commercial building owner. If the building has a boiler, chiller, central HVAC, elevator, or main electrical service — and tenants who depend on climate control or power — you need it. The cost of a single major failure easily justifies the premium.",
      },
    ],
  },
  "umbrella-excess-liability": {
    heroBlurb:
      "Layered limits above your LRO, general liability, and auto — essential when a tenant-caused fire, a serious common-area injury, or a catastrophic structural loss could otherwise exhaust your primary coverage and reach your other assets.",
    whatsCovered: [
      "Additional limits above LRO, GL, and commercial auto",
      "Limits from $2M up to $10M+ for catastrophic claims",
      "Protection for multi-tenant and high-traffic exposures",
      "Coverage that follows the underlying policy form",
      "Defense contributions on large complex claims",
    ],
    whoItsFor: [
      "Owners of higher-value commercial buildings",
      "Landlords with high-hazard tenant mixes",
      "Property owners with significant assets to protect",
      "Owners whose primary limits no longer match exposure",
    ],
    whyCca: [
      "Limits layered cleanly above your LRO and GL program",
      "Up to $10M+ available for high-exposure properties",
      "One of the most cost-effective ways to protect your assets",
    ],
    faqs: [
      {
        q: "What does an umbrella cover for a commercial landlord?",
        a: "An umbrella adds liability limits above your Lessor's Risk, general liability, and commercial auto. If a tenant-caused fire, a serious injury, or a catastrophic loss exhausts your primary policy, the umbrella pays the layers above — protecting your building and your other assets.",
      },
      {
        q: "How much umbrella coverage does a property owner need?",
        a: "It's driven by your building value, tenant mix, and asset profile. Many owners carry $2M–$5M, with higher limits for high-hazard tenants (contractors, food service) or large portfolios. We model worst-case scenarios and size the umbrella to your real exposure.",
      },
      {
        q: "Does the umbrella sit over my lessor's-risk policy?",
        a: "Yes — the umbrella sits above your LRO/GL and commercial auto, adding limits once those primary policies are exhausted. We make sure the underlying limits and the umbrella layer are coordinated so there are no gaps at the boundary.",
      },
      {
        q: "Why would a lender require an umbrella?",
        a: "Commercial lenders want to protect the collateral and often require liability limits well above a primary policy's $1M or $2M. Carrying an umbrella satisfies that requirement and protects you from a catastrophic claim reaching your other assets.",
      },
      {
        q: "How is umbrella premium calculated?",
        a: "Umbrella premium is a fraction of your underlying liability cost and reflects your operations, underlying limits, and the umbrella layer chosen. It's one of the most cost-effective ways to add significant protection — millions in limits for a modest premium.",
      },
      {
        q: "Can I add umbrella limits mid-policy if a lender requires it?",
        a: "Often yes. If a refinance or new acquisition requires higher limits, we can frequently increase the umbrella (subject to underwriting) so the requirement is met. Tell us the requirement and we'll move.",
      },
      {
        q: "Does the umbrella cover tenant-caused fire claims?",
        a: "Yes. An umbrella responds to the same types of claims your underlying LRO/GL covers — including a tenant-caused fire or a serious premises-injury claim — once primary limits are exhausted.",
      },
      {
        q: "What's the difference between umbrella and excess liability?",
        a: "A true umbrella can drop down to cover some claims not covered by underlying policies; a straight excess policy simply adds limits on top of the same coverage. We place the form that fits your exposure and budget.",
      },
    ],
  },
  "commercial-auto": {
    heroBlurb:
      "Coverage for the trucks and vans your property-management and maintenance crews use to service the building — including hired/non-owned vehicles when employees drive their own cars between properties.",
    whatsCovered: [
      "Liability for at-fault accidents in company vehicles",
      "Physical damage (comprehensive & collision) to owned vehicles",
      "Maintenance trucks, vans, and service vehicles",
      "Hired and non-owned auto for employees driving personal cars",
      "Uninsured and underinsured motorist coverage",
      "Loading and unloading of maintenance equipment",
    ],
    whoItsFor: [
      "Owners with company vehicles for property maintenance",
      "Property management firms with service trucks or vans",
      "Operations whose employees drive personal vehicles for work",
      "Any owner whose personal auto policy would deny a work claim",
    ],
    whyCca: [
      "Business-use rating that won't deny property-work driving",
      "Hired/non-owned coverage to protect against employee driving",
      "Fleet and single-vehicle programs available",
    ],
    faqs: [
      {
        q: "Why can't I use a personal auto policy for property work?",
        a: "Personal auto policies typically exclude business use and will deny a claim when you're driving between properties, hauling maintenance equipment, or running property errands. Commercial auto is rated for business use and covers the real way property owners drive.",
      },
      {
        q: "What is hired and non-owned auto and do landlords need it?",
        a: "Hired auto covers rental vehicles; non-owned auto covers employees driving their own personal vehicles for your business. If any maintenance staff or manager runs property errands in their own car, you want non-owned coverage — it protects your business when their personal policy falls short.",
      },
      {
        q: "Are tools and equipment in the truck covered by auto?",
        a: "Liability for an at-fault crash is covered, but the cargo (tools, parts, equipment) generally is not. Tools are an inland marine / tools-and-equipment matter. We coordinate both so the vehicle and its contents are each properly insured.",
      },
      {
        q: "Do I need commercial auto for a maintenance truck?",
        a: "Yes. Any vehicle used to service the property — a maintenance truck, a groundskeeping trailer, a service van — needs commercial coverage. We schedule the vehicles and make sure each is properly rated for property-work use.",
      },
      {
        q: "How is commercial auto rated for property owners?",
        a: "Premium is based on the vehicles (type, value, use), drivers (records and experience), and radius of operation. Clean driving records and accurate vehicle scheduling keep the cost down.",
      },
      {
        q: "What if an employee gets in an accident in a company truck?",
        a: "Commercial auto covers at-fault liability and physical damage for company vehicles. We respond fast, coordinate the claim, and get the vehicle repaired or replaced so the maintenance operation keeps moving.",
      },
      {
        q: "Do you insure property fleets or just single vehicles?",
        a: "Both. Whether you run a single service truck or a fleet of maintenance vehicles across multiple properties, we structure a commercial auto program that covers every vehicle and driver.",
      },
      {
        q: "Does commercial auto cover driving between multiple properties?",
        a: "Yes — that's exactly the business-use exposure commercial auto is designed for. Personal auto routinely denies claims from driving between job sites or properties; commercial auto covers it as a matter of course.",
      },
    ],
  },
  "workers-compensation": {
    heroBlurb:
      "Workers' comp for the building employees and maintenance staff on your payroll — porters, groundskeepers, handymen, and on-site managers — coded to the correct class code so you're not overpaying or underinsured.",
    whatsCovered: [
      "Medical treatment for on-the-job injuries to building staff",
      "Disability and lost-wage benefits for injured employees",
      "Slip, fall, and lift injuries to maintenance workers",
      "Chemical and equipment exposure claims",
      "Employers' liability (Part Two) protection",
      "Defense against employee injury lawsuits",
    ],
    whoItsFor: [
      "Building owners with W-2 maintenance or management employees",
      "Property owners with porters, handymen, or groundskeepers",
      "Operations with on-site staff required by state law to carry it",
      "Owners who want to be protected from employee-injury lawsuits",
    ],
    whyCca: [
      "Correct class coding for janitorial, maintenance, and management staff",
      "Documented safety programs that support better rates",
      "Aggressive claims management to protect your experience modifier",
    ],
    faqs: [
      {
        q: "Do commercial property owners need workers' comp?",
        a: "If you have any W-2 employees — a porter, a handyman, a groundskeeper, an on-site manager — most states require you to carry workers' comp. If you self-manage with no employees and use only independent contractors, the rules differ by state. We'll tell you exactly what your state requires.",
      },
      {
        q: "What workers' comp class codes apply to building staff?",
        a: "Janitorial, building maintenance, groundskeeping, and property-management staff each have specific NCCI class codes — different from construction or office codes. Correct coding keeps your premium fair and prevents audit surprises. We assign the right codes for each role.",
      },
      {
        q: "Does workers' comp cover a contractor I hire to maintain the building?",
        a: "Generally no — true independent contractors should carry their own workers' comp. If an uninsured contractor is hurt on your property and is found to be your employee under state law, you can be held liable. We help you classify workers correctly and document contractor status.",
      },
      {
        q: "How much is workers' comp for building employees?",
        a: "Workers' comp is rated on payroll by class code. Janitorial and maintenance codes are moderate; the rate reflects the injury exposure of the actual work. Good loss control and a clean experience modifier meaningfully reduce it. We quote based on your actual payroll and staff.",
      },
      {
        q: "What if a maintenance worker is injured on the property?",
        a: "We respond within 2 hours, make sure the employee gets care fast, and manage the claim with the carrier to control cost and get the employee back to work. Good handling protects both the worker and your experience modifier.",
      },
      {
        q: "Will one claim make my rates unaffordable?",
        a: "A serious claim affects your experience modifier, but the impact is bounded and improves over time. The best defense is correct class coding, documented safety training, and aggressive claim management — all of which we provide.",
      },
      {
        q: "What if my maintenance staff works across multiple properties?",
        a: "Workers' comp follows where the work is performed, and each state has its own rules and rates. Because we're licensed in all 50 states, we structure a program that covers your staff across property locations without gaps.",
      },
      {
        q: "How do audits work for property owners' workers' comp?",
        a: "At policy end, the carrier audits your actual payroll by class code and true-ups the premium. If payroll was underreported you'll owe more; if overreported, you'll get a return. We help you classify payroll correctly up front to avoid audit shock.",
      },
    ],
  },
};

/* ============================================================
   COVERAGE REGIONS — for coverage page
   ============================================================ */
export const AZ_REGIONS = [
  { name: "Texas & the Southwest", note: "TX, NM, AZ — fast-growing industrial, flex, and retail leasing markets" },
  { name: "Southeast (Florida & Atlanta)", note: "FL, GA, Carolinas — warehouse, retail, multi-tenant with wind exposure" },
  { name: "New York & the Northeast", note: "NY, NJ, PA, New England — dense multi-tenant and mixed-use urban stock" },
  { name: "California & the West Coast", note: "CA — warehouse, flex, retail with seismic and wildfire-interface exposure" },
  { name: "Chicago & the Midwest", note: "IL, MI, OH, IN — industrial, warehouse, and distribution tenant mix" },
  { name: "Pacific Northwest", note: "OR, WA — warehouse, tech-flex, multi-tenant in Seattle and Portland" },
  { name: "Rocky Mountain", note: "CO, UT, ID — fast-growing warehouse and light-industrial leasing" },
  { name: "Mid-Atlantic (DC / VA / MD)", note: "DC, VA, MD, DE — mixed-use, office, and retail corridor properties" },
];

/* ============================================================
   US STATES — for quote form select
   ============================================================ */
export const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

/* ============================================================
   Quote form select options (lessor's-risk specific)
   ============================================================ */
export const QUOTE_SERVICE_TYPES = [
  "Lessor's Risk Only (LRO / LH-1)",
  "Commercial Property Insurance",
  "General Liability (Premises)",
  "Property Management E&O",
  "Boiler & Machinery / Equipment Breakdown",
  "Umbrella / Excess Liability",
  "Commercial Auto Insurance",
  "Workers' Compensation",
  "Full program / bundle (recommended)",
  "Not sure — help me figure it out",
];

export const YEARS_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "10+ years",
];
