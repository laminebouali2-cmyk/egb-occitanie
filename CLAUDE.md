# CLAUDE.md - AI Assistant Guide for EGB Occitanie

## Project Overview

**EGB Occitanie** is a premium corporate website for a construction company based in Toulouse, France. The site serves as a B2B lead generation platform with strong SEO positioning for construction, renovation, and extension services across the Haute-Garonne region.

- **Domain:** egb-occitanie.fr
- **Industry:** Construction/Renovation (BTP - Batiment et Travaux Publics)
- **Target Market:** Premium residential construction clients in Toulouse area
- **Language:** French (fr_FR)

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.1 | React framework (App Router) |
| React | 19.2.3 | UI library |
| TypeScript | 5.x | Type safety (strict mode) |
| Tailwind CSS | 4.x | Utility-first styling |
| Framer Motion | 12.26.2 | Animations and scroll effects |
| Lenis | 1.3.17 | Smooth scrolling |

## Project Structure

```
/src
├── /app                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Header, Footer, SmoothScroll)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design system + global styles
│   ├── robots.ts           # SEO robots configuration
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── /contact            # Contact form page
│   ├── /expertise          # Expertise page
│   ├── /projets            # Portfolio/realizations
│   ├── /faq                # FAQ with schema markup
│   ├── /avis               # Client testimonials
│   ├── /calculateur-prix   # Price calculator (lead magnet)
│   ├── /construction-villa-*  # 18+ location-specific SEO pages
│   └── /renovation-*       # Renovation service pages
├── /components             # React components (20 files)
│   ├── Header.tsx          # Sticky navigation with mobile menu
│   ├── Footer.tsx          # Multi-column footer
│   ├── Hero.tsx            # Parallax hero section
│   ├── Reveal.tsx          # Scroll animation wrappers
│   ├── ContactForm.tsx     # Form with validation
│   ├── SmoothScroll.tsx    # Lenis integration
│   ├── MagneticButton.tsx  # Interactive animated button
│   ├── StructuredData.tsx  # JSON-LD schema markup
│   └── ...                 # Section components
└── /lib                    # Utilities
    ├── animations.ts       # Framer Motion presets
    └── metadata.ts         # SEO metadata helpers
```

## Quick Commands

```bash
npm run dev       # Start development server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
npm run lint:fix  # Auto-fix linting issues
```

## Design System

### Color Palette (Stone Theme)

```css
--color-stone-950: #1C1917   /* Primary dark */
--color-stone-900: #292524
--color-stone-100: #FAFAF9
--color-white: #FFFFFF
--color-accent: #C2410C      /* Warm terracotta - use sparingly */
--color-accent-light: #EA580C
```

### Typography

- **Serif (Headlines):** Playfair Display via `next/font`
- **Sans (Body):** Inter via `next/font`
- CSS variables: `--font-playfair`, `--font-inter`

### Animation Philosophy

The project uses a "contemplative" animation style inspired by luxury brands:

```typescript
// From /src/lib/animations.ts

// Spring configurations
springs.gentle   // Main reveals (stiffness: 100, damping: 30)
springs.smooth   // Hovers (stiffness: 150, damping: 25)
springs.slow     // Large transitions (stiffness: 50, damping: 20)
springs.magnetic // Buttons (stiffness: 400, damping: 30)

// Durations - longer = more premium feel
durations.fast         // 0.4s
durations.normal       // 0.8s
durations.slow         // 1.2s
durations.contemplative // 1.6s

// Reusable variants
fadeUp, fadeIn, scaleIn, slideInLeft, slideInRight, maskReveal
staggerContainer, staggerContainerSlow
```

### Key CSS Utility Classes

```css
/* Layout */
.container         /* max-width: 1400px, centered */
.section           /* py-24 lg:py-32 */
.section-sm        /* py-16 lg:py-24 */

/* Buttons */
.btn              /* Base button styles */
.btn-primary      /* Accent background */
.btn-secondary    /* Outline style */
.btn-text         /* Text-only with arrow */

/* Grid */
.grid-2           /* 2-column responsive grid */
.grid-3           /* 3-column responsive grid */
```

## Code Conventions

### TypeScript

- **Strict mode enabled** - all code must be type-safe
- Use `@/*` path alias for imports from `/src/*`
- Prefer interfaces over types for object shapes
- Export types alongside components when needed

### Components

```typescript
// Standard component pattern
"use client";  // Required for client components

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Reveal } from "@/components/Reveal";

interface ComponentNameProps {
  title: string;
  children?: React.ReactNode;
}

export function ComponentName({ title, children }: ComponentNameProps) {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <h2 className="font-serif text-4xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
```

### Animation Pattern

Use the `Reveal` component for scroll-triggered animations:

```tsx
import { Reveal, RevealContainer, RevealItem } from "@/components/Reveal";

// Single element reveal
<Reveal variant="fadeUp" delay={0.2}>
  <h2>Content</h2>
</Reveal>

// Staggered list reveal
<RevealContainer>
  {items.map((item) => (
    <RevealItem key={item.id}>
      <div>{item.content}</div>
    </RevealItem>
  ))}
</RevealContainer>
```

### SEO & Metadata

Each page should export metadata using the helper:

```typescript
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "Page Title | EGB Occitanie",
  description: "Description with keywords...",
  path: "/page-path",
  keywords: ["keyword1", "keyword2"],
});
```

## Neuroscience-First Design Rules

**Critical design principles from `/docs/` - DO NOT VIOLATE:**

1. **Cognitive Load < 3 elements** per screen section
2. **No carousels** - ever
3. **No long text blocks** - break into scannable sections
4. **No decorative icons** - every element must have purpose
5. **No fake stock photos** - only realistic, high-quality imagery
6. **Smooth, slow animations** - never jarring or fast
7. **White space = luxury** - embrace generous spacing
8. **Hero section must be perfect** - first impression is everything

### Visual Hierarchy

- One CTA per section maximum
- Headlines in Playfair Display (serif)
- Body in Inter (sans-serif)
- Accent color used sparingly as "neurological signal"

## SEO Structure

### Location Pages Pattern

The site has 18+ location-specific pages for local SEO:
- `/construction-villa-toulouse`
- `/construction-villa-blagnac`
- `/construction-villa-colomiers`
- etc.

Each location page includes:
- Unique metadata with city name
- FAQPage schema markup
- Local keywords in content
- Canonical URL pointing to itself

### Structured Data

- Organization schema in `StructuredData.tsx`
- FAQPage schema on FAQ and location pages
- Dynamic sitemap at `/sitemap.ts`

## Common Tasks

### Adding a New Page

1. Create folder in `/src/app/[page-name]/`
2. Add `page.tsx` with exported metadata
3. Include `generateMetadata()` for SEO
4. Add route to `/src/app/sitemap.ts`
5. Use section components with `Reveal` wrappers

### Adding a New Component

1. Create file in `/src/components/ComponentName.tsx`
2. Add `"use client"` directive if using hooks/animations
3. Use TypeScript interfaces for props
4. Import animations from `@/lib/animations`
5. Follow existing component patterns

### Modifying Animations

- Edit `/src/lib/animations.ts` for global changes
- Use existing variants when possible
- Maintain contemplative timing (0.8s-1.6s)
- Test with `prefers-reduced-motion`

## Known Issues / TODOs

1. **Contact form** - Currently simulated (no backend)
   - Needs integration with email service (SendGrid, etc.)
   - No API routes exist yet

2. **CinematicHero** - Commented out in `page.tsx`
   - Requires 192 image frames in `/public/sequence/hero/`
   - Uncomment when assets are ready

3. **Google verification** - Placeholder code in layout.tsx
   - Replace `"google-site-verification-code"` with actual token

## File Naming Conventions

- **Components:** PascalCase (`Header.tsx`, `ContactForm.tsx`)
- **Pages:** kebab-case folders (`/construction-villa-toulouse/`)
- **Utilities:** camelCase (`animations.ts`, `metadata.ts`)
- **Styles:** CSS in `globals.css` only (no CSS modules)

## Important Files Reference

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout, fonts, global metadata |
| `src/app/globals.css` | Full design system and utilities |
| `src/lib/animations.ts` | All animation configurations |
| `src/lib/metadata.ts` | SEO metadata generator |
| `src/components/Reveal.tsx` | Animation wrapper components |
| `next.config.ts` | Image optimization, security headers |
| `tsconfig.json` | TypeScript configuration |

## Git Workflow

- Branch naming: `claude/feature-name-sessionId`
- Commit messages: Follow conventional commits (feat:, fix:, perf:, a11y:)
- Recent focus: SEO optimization, accessibility (100/100), performance

## Testing

No testing infrastructure currently exists. If adding tests:
- Consider Vitest for unit tests
- Playwright for E2E tests
- Focus on critical user paths (contact form, navigation)

## Accessibility Checklist

The site maintains 100/100 Lighthouse accessibility score:
- ARIA labels on navigation elements
- Semantic HTML (`nav`, `header`, `footer`, `address`)
- Focus states on all interactive elements
- `prefers-reduced-motion` support in animations
- Alt text for images
- Keyboard navigation support

## Performance Notes

- Images optimized with AVIF/WebP formats
- Fonts use `display: "swap"` for fast loading
- 1-year cache on font files
- Lazy loading via Intersection Observer
- Gzip compression enabled
