# Design System — Lessor's Risk Insurance ("Foundation")

Light, corporate, premium-property. Distinct from sibling CCA sites — deliberately uses a SERIF
heading to signal premium commercial real estate and to differentiate from the green/copper
sibling trades site.

## Palette (Tailwind token NAMES are shared across the component architecture; VALUES remapped here)
- **Primary — deep navy** (`clay`): `#1B2A4E` (authoritative navy), dark `#121D38`, light `#2A3E6E`
- **Secondary — wine / garnet** (`sage`): `#7A2E3A`, dark `#5E222C`, light `#9A4551`
- **Accent — antique gold** (`gold`): `#C9A24B`
- Backgrounds: `cream #FBF8F3`, `sand #F1ECE3`, white
- Text: `espresso #121A2B` (headings), `cocoa #3A4358` (body), `mocha #6B7488` (muted)
- Border: `adobe #E0D9CC`

## Typography
- Headings: **Playfair Display** (serif — premium property / classical architecture) via next/font
- Body: **Source Sans 3**

## Motifs
- **Columnar band** (`horizon-band`): stacked navy→garnet→gold classical column lines
- **Architectural column-line texture** (`grain`): faint grid texture for hero/CTA bands
- Columnar top-edge accent on cards (`card-arch::before`): navy→garnet→gold

## Components & motion
- motion (Framer) staggered hero entrances, scroll-reveal (`FadeIn`), count-up stats (`Counter`)
- lenis smooth scroll (`SmoothScroll`)
- All animations honor `prefers-reduced-motion`

## Generated imagery (≥10, HF FLUX.1-schnell)
hero, commercial-building, building-exterior, commercial-lobby, property-manager, rooftop-hvac,
skyline, maintenance-vehicle, maintenance-staff, warehouse-property, og-image.
Modern commercial real estate — deep navy/garnet/gold accents; photorealistic, no text.
