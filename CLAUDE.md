# CLAUDE.md — EGB Occitanie

## Project Overview

Premium corporate website for **EGB Occitanie** (Entreprise Generale de Batiment), a construction company in Toulouse, France. The site serves as a lead generation platform and SEO-optimized showcase for construction, renovation, and extension services across the Haute-Garonne region.

- **Domain**: egb-occitanie.fr
- **Language**: French (lang="fr", locale fr_FR)
- **Deployment target**: Vercel

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.1.1 |
| Language | TypeScript (strict) | 5.9.3 |
| UI | React | 19.2.3 |
| Styling | Tailwind CSS 4 + CSS custom properties | 4.x |
| Animations | Framer Motion | 12.26.2 |
| Smooth scroll | Lenis | 1.3.17 |
| Linting | ESLint 9 (flat config) + next/core-web-vitals + next/typescript | 9.x |
| Build | Next.js built-in (Turbopack in dev) | — |

## Commands

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Production build (also serves as type check)
npm run start      # Start production server
npm run lint       # Run ESLint checks
npm run lint:fix   # Auto-fix ESLint issues
```

There is **no test runner** configured. The build (`npm run build`) is the primary validation step — it runs TypeScript compilation and catches type errors.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header, Footer, SmoothScroll, StructuredData)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design system (CSS custom properties + Tailwind)
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # Robots.txt configuration
│   ├── expertise/          # Services overview
│   ├── projets/            # Portfolio
│   ├── contact/            # Contact page with form
│   ├── calculateur-prix/   # Price calculator tool
│   ├── avis/               # Reviews/testimonials
│   ├── faq/                # FAQ
│   ├── construction-villa-toulouse/        # SEO hub (construction)
│   ├── renovation-maison-toulouse/         # SEO hub (renovation)
│   ├── extension-maison-toulouse/          # SEO hub (extension)
│   ├── renovation-energetique-toulouse/    # SEO hub (energy renovation)
│   ├── construction-villa-{location}/      # 8 geo-targeted construction pages
│   ├── renovation-{location}/              # 6+ geo-targeted renovation pages
│   ├── mentions-legales/                   # Legal notice
│   └── politique-confidentialite/          # Privacy policy
├── components/             # 28 React components
│   ├── Header.tsx          # Fixed header with scroll detection, mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Full-screen hero with parallax
│   ├── CinematicHero.tsx   # Alternative cinematic hero variant
│   ├── Reveal.tsx          # Scroll-triggered reveal animations
│   ├── ContactForm.tsx     # Contact form with state management
│   ├── StructuredData.tsx  # JSON-LD structured data (LocalBusiness, BreadcrumbList)
│   ├── MagneticButton.tsx  # Interactive magnetic button effect
│   ├── Cursor.tsx          # Custom cursor effect
│   ├── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   ├── StickyCallButton.tsx# Sticky CTA button
│   ├── FilmGrain.tsx       # Visual film grain texture overlay
│   ├── TrustBar.tsx        # Trust badges section
│   ├── *Content.tsx        # Large content blocks (700+ lines each)
│   └── ...                 # Section components (Expertises, Testimonials, etc.)
└── lib/
    ├── metadata.ts         # SEO metadata helper (generateMetadata, generateCanonicalUrl)
    └── animations.ts       # Framer Motion config (springs, easings, durations, variants)
```

**29 total pages** organized as a hub-and-spoke SEO architecture: 4 main service hubs link to geo-targeted landing pages for specific Toulouse neighborhoods and suburbs.

## Architecture Decisions

### Server vs Client Components
- **Server Components** (default): All page-level components and content-heavy components render on the server.
- **Client Components** (`'use client'`): Used only when interactivity is needed — `Header.tsx` (scroll state, mobile menu), `ContactForm.tsx` (form state), `Reveal.tsx` (scroll animations), `SmoothScroll.tsx` (Lenis), `Hero.tsx` / `CinematicHero.tsx` (parallax), `MagneticButton.tsx`, `Cursor.tsx`, `FilmGrain.tsx`.

### Path Alias
Use `@/*` which maps to `./src/*`. All imports should use this alias:
```typescript
import { Header } from "@/components/Header";
import { generateMetadata } from "@/lib/metadata";
```

### Page Metadata
Each page exports metadata using Next.js Metadata API. Use the helper from `src/lib/metadata.ts`:
```typescript
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Page Title",
  description: "Page description...",
  path: "/page-path",
  keywords: ["keyword1", "keyword2"],
});
```

### Animation System
All animation config lives in `src/lib/animations.ts`. Use pre-defined constants rather than inline values:
- **Springs**: `gentle`, `smooth`, `slow`, `magnetic`
- **Easings**: `easeOut`, `easeInOut`, `reveal`
- **Durations**: `fast` (0.4s), `normal` (0.8s), `slow` (1.2s), `contemplative` (1.6s)
- **Variants**: `fadeUp`, `fadeIn`, `scaleIn`, `slideInLeft`, `slideInRight`, `maskReveal`
- **Containers**: `staggerContainer`, `staggerContainerSlow`

### Styling Conventions
- **Tailwind CSS 4** via PostCSS for utility classes.
- **CSS custom properties** in `globals.css` for the design system (colors, fonts, spacing, shadows).
- **Color palette**: Stone tones (warm grays) with amber accent (`--color-accent: #B45309`).
- **Typography**: Playfair Display (headings), Cormorant Garamond (body serif), Inter (UI/sans).
- **Fluid typography**: Uses `clamp()` for responsive sizing.
- **Utility CSS classes**: `.container`, `.section`, `.section-sm`, `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-text`, `.text-overline`, `.text-lead`, `.card`, `.grid-2`, `.grid-3`.
- **Reduced motion**: Respects `prefers-reduced-motion` media query.

### Component Patterns
- Named exports preferred over default exports for components.
- Components are single-file — no separate style or test files.
- Large content components (`ConstructionVillaContent.tsx`, `RenovationMaisonContent.tsx`, etc.) contain 700+ lines of JSX with full SEO content.
- Interactive components use Framer Motion `motion.*` elements with variants from `animations.ts`.

## SEO Implementation

- **Sitemap**: Dynamic generation in `src/app/sitemap.ts` (21 URLs with priorities and change frequencies).
- **Robots**: Configured in `src/app/robots.ts` with specific Googlebot and Bingbot rules.
- **Structured Data**: JSON-LD in `StructuredData.tsx` — GeneralContractor schema, AggregateRating, OfferCatalog, BreadcrumbList.
- **Canonical URLs**: Every page has canonical via metadata helper. Base URL: `https://egb-occitanie.fr`.
- **Open Graph / Twitter Cards**: Set per page via metadata.

## Security

- Security headers configured in `next.config.ts`: `X-DNS-Prefetch-Control`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`.
- `poweredByHeader: false` to hide framework fingerprint.
- No database — static content only, no injection vectors.

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout — wraps all pages with Header, Footer, SmoothScroll |
| `src/app/globals.css` | Full design system — CSS variables, base styles, utility classes |
| `src/lib/animations.ts` | Framer Motion configuration — springs, easings, variants |
| `src/lib/metadata.ts` | SEO metadata generation helper |
| `src/components/StructuredData.tsx` | JSON-LD structured data for search engines |
| `next.config.ts` | Next.js config — images, headers, performance settings |
| `eslint.config.mjs` | ESLint 9 flat config with Next.js presets |

## Conventions for AI Assistants

1. **Always run `npm run build`** after making changes to verify no type errors or build failures.
2. **Use `@/*` path alias** for all imports from `src/`.
3. **Keep content in French** — all user-facing text, metadata, and SEO content is in French.
4. **Respect the design system** — use CSS custom properties from `globals.css` and animation presets from `animations.ts` rather than hardcoded values.
5. **Server Components by default** — only add `'use client'` when the component needs browser APIs, event handlers, or React hooks.
6. **Follow existing metadata pattern** — use `generateMetadata()` from `src/lib/metadata.ts` for new pages.
7. **No test files exist** — `npm run build` is the validation step.
8. **ESLint uses flat config** (ESLint 9) — the config is in `eslint.config.mjs`, not `.eslintrc`.
9. **Named exports** — components use `export function ComponentName` or `export const ComponentName`, not default exports.
10. **Geo-targeted pages follow a pattern** — each location page has its own route directory with a `page.tsx` that composes content components.

## Documentation

Additional documentation exists in `docs/`:
- `docs/design.md` — Design philosophy
- `docs/designsystem.md` — Design system specification
- `docs/vision.md` — Project vision
- `docs/positionnement.md` — Market positioning strategy
- `docs/NEUROSCIENCE_RULES.md` — UX/neuroscience principles applied
- `docs/project-knowledge/KNOWLEDGE-BASE.md` — Extended tech stack notes
- `docs/project-knowledge/DECISIONS.md` — Architecture Decision Records
- `ARCHITECTURE.md` — Full architecture documentation with deployment guide
