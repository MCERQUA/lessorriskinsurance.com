// Centralized site data — used across nav, footer, schema, CTAs
// Lessor's Risk Insurance — for building/property owners who lease commercial space

export const SITE = {
  name: "Lessor's Risk Insurance",
  legalName: "Lessor's Risk Insurance (by Contractors Choice Agency)",
  domain: "lessorriskinsurance.com",
  url: "https://lessorriskinsurance.com",
  tagline: "Insurance for Building Owners Who Lease to Commercial Tenants",
  description:
    "Specialized commercial insurance for property owners who lease commercial space — Lessor's Risk Only (LRO / LH-1), commercial property, premises general liability, property management E&O, equipment breakdown, umbrella, commercial auto, and workers' comp. Tenant-caused fire and bodily-injury exposures underwritten right. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "lessors-risk",
    title: "Lessor's Risk Only (LRO / LH-1)",
    short: "The core coverage for commercial landlords",
    description:
      "Lessor's Risk Only — the LH-1 class program built for building owners who lease commercial space. Covers tenant-caused bodily injury and property damage, including fire damage from a tenant's operations, so a single tenant loss doesn't land on the owner.",
    icon: "Building2",
    keywords: ["lessors risk only insurance", "LRO insurance", "LH-1 class code", "lessors risk landlord insurance", "commercial landlord liability insurance"],
  },
  {
    slug: "commercial-property",
    title: "Commercial Property Insurance",
    short: "The building — structure, roof & improvements",
    description:
      "All-risk coverage for the building itself — structure, roof, mechanical systems, and tenant improvements — written for the construction type, occupancy, and protection class of a commercial property leased to multiple tenants.",
    icon: "Factory",
    keywords: ["commercial property insurance landlord", "building insurance commercial landlord", "commercial property coverage", "lessors property insurance", "building owner property insurance"],
  },
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "Premises liability for the owner/landlord",
    description:
      "Premises liability protection for the building owner — slips and falls in common areas, parking-lot injuries, and third-party claims arising from the property you own and lease out to commercial tenants.",
    icon: "ShieldCheck",
    keywords: ["landlord general liability", "premises liability insurance landlord", "commercial property owner GL", "lessors liability insurance", "slip and fall landlord insurance"],
  },
  {
    slug: "property-management-eando",
    title: "Property Management E&O",
    short: "Errors in managing, leasing & maintenance",
    description:
      "Errors & omissions coverage for property owners and managers — claims from leasing mistakes, maintenance oversights, tenant disputes, and the day-to-day decisions that can turn into a negligence lawsuit.",
    icon: "FileCheck",
    keywords: ["property management errors and omissions", "property management E&O insurance", "landlord professional liability", "property manager insurance", "real estate management E&O"],
  },
  {
    slug: "boiler-machinery",
    title: "Boiler & Machinery / Equipment Breakdown",
    short: "HVAC, elevators, boilers & electrical",
    description:
      "Equipment breakdown coverage for the systems that keep a commercial building running — boilers, chillers, elevators, electrical panels, and rooftop HVAC — where a mechanical or electrical failure can cost tens of thousands and shut down tenant operations.",
    icon: "Wrench",
    keywords: ["boiler and machinery insurance", "equipment breakdown insurance commercial", "HVAC breakdown coverage landlord", "elevator insurance building", "commercial property equipment breakdown"],
  },
  {
    slug: "umbrella-excess-liability",
    title: "Umbrella / Excess Liability",
    short: "Limits to $10M+",
    description:
      "Layered limits above your LRO, general liability, and auto — essential when a tenant-caused fire, a serious common-area injury, or a catastrophic structural loss could otherwise exhaust your primary coverage and reach your other assets.",
    icon: "Umbrella",
    keywords: ["commercial landlord umbrella insurance", "excess liability property owner", "lessors risk umbrella", "high limit liability landlord", "commercial property umbrella policy"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance",
    short: "Property management & maintenance vehicles",
    description:
      "Coverage for the trucks and vans your property-management and maintenance crews use to service the building — including hired/non-owned vehicles when employees drive their own cars between properties.",
    icon: "Truck",
    keywords: ["commercial auto insurance property management", "landlord vehicle insurance", "maintenance truck insurance", "property management fleet insurance", "hired non owned auto landlord"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "Building employees & maintenance staff",
    description:
      "Workers' comp for the building employees and maintenance staff on your payroll — porters, groundskeepers, handymen, and on-site managers — coded to the correct class code so you're not overpaying or underinsured.",
    icon: "HardHat",
    keywords: ["workers compensation property owner", "building maintenance workers comp", "property management workers compensation", "landlord employee insurance", "janitorial workers comp class code"],
  },
] as const;

export const LOCATIONS = [
  {
    slug: "texas-southwest",
    name: "Texas & the Southwest",
    region: "TX · NM · AZ",
    blurb:
      "Fast-growing Sun Belt commercial real estate markets. We insure Texas and Southwest building owners leasing industrial, flex, and retail space to contractors, trades, and manufacturers across high-growth metros.",
  },
  {
    slug: "southeast",
    name: "Southeast (Florida & Atlanta)",
    region: "FL · GA · Carolinas",
    blurb:
      "Southeast commercial property owners — warehouse, retail, and multi-tenant buildings in Atlanta, Florida, and the Carolinas. Programs that account for wind, named-storm, and high-occupancy retail exposures.",
  },
  {
    slug: "new-york-northeast",
    name: "New York & the Northeast",
    region: "NY · NJ · PA · New England",
    blurb:
      "Northeast commercial property owners running dense multi-tenant buildings, mixed-use, and older urban stock in New York, New Jersey, and New England. Coverage that meets strict city requirements and older-building exposures.",
  },
  {
    slug: "california-west",
    name: "California & the West Coast",
    region: "California",
    blurb:
      "California and West Coast commercial property owners — warehouse, flex, retail, and mixed-use buildings. Programs built for seismic exposure, wildfire-interface locations, and the state's demanding insurance environment.",
  },
  {
    slug: "chicago-midwest",
    name: "Chicago & the Midwest",
    region: "IL · MI · OH · IN",
    blurb:
      "Midwest commercial property owners leasing industrial, warehouse, and retail space across Chicago, Detroit, and the Great Lakes. Coverage sized for the region's manufacturing and distribution tenant mix.",
  },
  {
    slug: "pacific-northwest",
    name: "Pacific Northwest",
    region: "OR · WA",
    blurb:
      "PNW commercial property owners — warehouse, tech-flex, and multi-tenant buildings in Seattle and Portland. Programs built for the region's wet-climate maintenance exposure and booming industrial-leasing market.",
  },
  {
    slug: "rocky-mountain",
    name: "Rocky Mountain",
    region: "CO · UT · ID",
    blurb:
      "Front-Range and Intermountain West commercial property owners. Programs for the region's fast-growing warehouse, light-industrial, and retail leasing markets with snow and elevation exposures.",
  },
  {
    slug: "mid-atlantic",
    name: "Mid-Atlantic (DC / VA / MD)",
    region: "DC · VA · MD · DE",
    blurb:
      "Mid-Atlantic commercial property owners in the DC, Virginia, and Maryland corridor. Coverage for mixed-use, office, and retail buildings leased to government contractors, professional services, and retail tenants.",
  },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Specialty lessor's-risk markets", icon: "Building2" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 900, suffix: "+", label: "Commercial buildings insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring property owners", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "When a tenant's welding operation started a fire that damaged two bays of my warehouse, my old carrier tried to deny it as a tenant-caused loss. CCA had placed a proper LRO policy with the LH-1 class code and the claim paid. They understood the building-owner side of this from day one.",
    name: "Raymond K.",
    role: "Commercial Property Owner",
    location: "Texas",
  },
  {
    quote:
      "I lease flex space to a dozen contractors and was carrying a generic landlord policy with huge gaps. CCA rebuilt the whole program — LRO, commercial property, equipment breakdown, and an umbrella — for less than I was paying before. Real specialists.",
    name: "Patricia M.",
    role: "Multi-Tenant Building Owner",
    location: "Arizona",
  },
  {
    quote:
      "The rooftop HVAC on my retail center failed and the replacement plus business-interruption could have been brutal. The equipment-breakdown coverage CCA set up paid out fast and kept my tenants operating. They get what it means to own the building.",
    name: "Daniel S.",
    role: "Retail Center Owner",
    location: "Florida",
  },
] as const;
