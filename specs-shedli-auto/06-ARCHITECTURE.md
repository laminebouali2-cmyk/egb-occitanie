# Shedli Auto — Architecture technique

---

## 1. Stack technologique

| Couche | Technologie | Version | Justification |
|--------|------------|---------|---------------|
| Framework | Next.js | 16+ | App Router, Server Components, SEO natif |
| UI | React | 19+ | Server Components, Suspense |
| Langage | TypeScript | 5+ | Typage strict, moins de bugs |
| Styles | Tailwind CSS | 4+ | Utility-first, design system intégré |
| Animations | Framer Motion | 12+ | Animations déclaratives, performantes |
| Icônes | Lucide React | Latest | Cohérent, léger, tree-shakable |
| Polices | next/font | Built-in | Self-hosted, zero CLS |
| Images | next/image | Built-in | WebP, lazy, responsive, blur |
| Déploiement | Vercel | — | Edge, CDN global, preview deploys |
| Analytics | Google Analytics 4 | — | Gratuit, conversion tracking |

---

## 2. Structure des fichiers

```
shedli-auto/
├── public/
│   ├── images/
│   │   ├── hero.webp                    # Image hero (optimisée manuellement)
│   │   ├── intervention.webp            # Photo technicien
│   │   ├── vehicule.webp                # Photo véhicule terminé
│   │   └── og/
│   │       ├── default.png              # OG image par défaut (1200x630)
│   │       ├── service.png              # OG image page service
│   │       └── contact.png              # OG image page contact
│   ├── favicon.ico
│   ├── apple-touch-icon.png             # 180x180
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                   # Layout racine (html, body, fonts, analytics, structured data)
│   │   ├── page.tsx                     # Accueil (SERVER component)
│   │   ├── not-found.tsx                # Page 404 personnalisée
│   │   ├── sitemap.ts                   # Sitemap dynamique
│   │   ├── robots.ts                    # Robots.txt dynamique
│   │   │
│   │   ├── remplacement-pare-brise/
│   │   │   └── page.tsx                 # Page service (SERVER)
│   │   │
│   │   ├── intervention-mobile/
│   │   │   └── page.tsx                 # Page intervention mobile (SERVER)
│   │   │
│   │   ├── prise-en-charge-assurance/
│   │   │   └── page.tsx                 # Page assurance (SERVER)
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx                 # Page contact (SERVER, form = client component importé)
│   │   │
│   │   ├── avis/
│   │   │   └── page.tsx                 # Page avis (SERVER)
│   │   │
│   │   ├── faq/
│   │   │   └── page.tsx                 # Page FAQ (SERVER)
│   │   │
│   │   ├── mentions-legales/
│   │   │   └── page.tsx                 # Mentions légales (SERVER)
│   │   │
│   │   └── politique-confidentialite/
│   │       └── page.tsx                 # RGPD (SERVER)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx               # CLIENT — scroll detection, mobile menu
│   │   │   ├── Footer.tsx               # SERVER — statique
│   │   │   ├── MobileNav.tsx            # CLIENT — menu mobile animé
│   │   │   └── StickyPhoneBar.tsx       # CLIENT — barre fixe mobile
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx                 # SERVER — hero de la homepage
│   │   │   ├── TrustBadges.tsx          # SERVER — bande de confiance
│   │   │   ├── HowItWorks.tsx           # CLIENT — animations stagger
│   │   │   ├── WhyUs.tsx                # CLIENT — animations scroll
│   │   │   ├── ReviewsPreview.tsx       # CLIENT — carrousel mobile
│   │   │   ├── ServiceZone.tsx          # SERVER — carte + liste villes
│   │   │   └── CtaBanner.tsx            # SERVER — CTA final
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx               # SERVER — bouton réutilisable
│   │   │   ├── PhoneButton.tsx          # SERVER — bouton téléphone (tel: link)
│   │   │   ├── Badge.tsx                # SERVER — badge de confiance
│   │   │   ├── Card.tsx                 # SERVER — carte générique
│   │   │   ├── ReviewCard.tsx           # SERVER — carte avis
│   │   │   ├── StepCard.tsx             # SERVER — carte étape
│   │   │   ├── ServiceCard.tsx          # SERVER — carte service
│   │   │   ├── Accordion.tsx            # CLIENT — FAQ accordion
│   │   │   └── Container.tsx            # SERVER — wrapper container
│   │   │
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx          # CLIENT — formulaire contact complet
│   │   │   └── QuickForm.tsx            # CLIENT — formulaire rapide (hero service)
│   │   │
│   │   ├── seo/
│   │   │   ├── StructuredData.tsx       # SERVER — JSON-LD schema.org
│   │   │   └── GoogleAnalytics.tsx      # CLIENT — GA4 script
│   │   │
│   │   └── animations/
│   │       ├── FadeInView.tsx           # CLIENT — wrapper fade-in au scroll
│   │       ├── StaggerChildren.tsx      # CLIENT — wrapper stagger
│   │       └── CountUp.tsx              # CLIENT — compteur animé
│   │
│   ├── lib/
│   │   ├── constants.ts                 # Coordonnées, URLs, config statique
│   │   ├── reviews.ts                   # Données avis (source de vérité)
│   │   ├── services.ts                  # Données services
│   │   ├── faq.ts                       # Données FAQ
│   │   └── zones.ts                     # Liste communes de la zone
│   │
│   └── styles/
│       └── globals.css                  # Tailwind imports + variables custom
│
├── next.config.ts                       # Config Next.js + security headers
├── tailwind.config.ts                   # Design system (couleurs, typo, spacing)
├── tsconfig.json
├── package.json
└── .env.local                           # Variables d'environnement (GA_ID, etc.)
```

---

## 3. Principes architecturaux

### 3.1 — Server Components par défaut

```
RÈGLE D'OR : Si un composant n'a pas besoin de useState, useEffect,
onClick, ou d'une API browser → c'est un Server Component.
```

**Server Components** (pas de "use client") :
- Toutes les pages (page.tsx)
- Layout
- Footer
- Hero, TrustBadges, ServiceZone, CtaBanner
- Button, PhoneButton, Badge, Card, Container
- StructuredData

**Client Components** ("use client") :
- Header (scroll detection)
- MobileNav (animation, state)
- StickyPhoneBar (viewport detection)
- HowItWorks, WhyUs, ReviewsPreview (animations Framer Motion)
- ContactForm, QuickForm (state, soumission)
- Accordion (state open/close)
- FadeInView, StaggerChildren, CountUp (IntersectionObserver)
- GoogleAnalytics (script côté client)

### 3.2 — Jamais "use client" + export metadata

C'est l'erreur n°1 trouvée sur EGB Occitanie. La règle est absolue :

```tsx
// ✅ CORRECT — page.tsx est Server Component
import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = { title: "..." };

export default function ContactPage() {
  return (
    <div>
      <h1>Contactez-nous</h1>
      <ContactForm /> {/* Le client component est importé, pas la page */}
    </div>
  );
}
```

```tsx
// ❌ INTERDIT — metadata sera complètement ignoré
"use client";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "..." }; // IGNORÉ !!!
```

### 3.3 — Fichier de constantes centralisé

```typescript
// src/lib/constants.ts
export const SITE = {
  name: "Shedli Auto",
  url: "https://shedliauto.com",
  phone: "06 28 43 88 44",
  phoneHref: "tel:+33628438844",
  whatsapp: "https://wa.me/33628438844",
  email: "contact@shedliauto.com",  // À confirmer
  address: {
    street: "",    // À fournir
    city: "",      // À fournir
    zip: "",       // À fournir
    country: "France",
  },
  siret: "",       // À fournir
  hours: {
    weekdays: "8h00 - 19h00",
    saturday: "9h00 - 17h00",
    sunday: "Fermé",
  },
  social: {
    instagram: "https://instagram.com/shedli_auto",
  },
} as const;
```

**Toute coordonnée, URL ou info de contact est référencée via ce fichier.**
Jamais de numéro de téléphone hardcodé dans un composant.

### 3.4 — Données dynamiques (avis, FAQ, services)

```typescript
// src/lib/reviews.ts
export interface Review {
  author: string;
  rating: number;     // 1-5
  text: string;
  date: string;       // ISO 8601
  source: "google";
}

export const reviews: Review[] = [
  // Chaque avis est un objet typé
  // La note moyenne et le count sont CALCULÉS, jamais hardcodés
];

export const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
export const reviewCount = reviews.length;
```

---

## 4. Composants clés — Spécifications

### 4.1 — FadeInView (animation wrapper)

```tsx
// src/components/animations/FadeInView.tsx
"use client";

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;         // Delay en secondes
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;         // Animer une seule fois (défaut: true)
}

// Utilise framer-motion whileInView
// Respecte prefers-reduced-motion
// IntersectionObserver avec threshold 0.2
// Pas d'animation si prefers-reduced-motion: reduce
```

### 4.2 — Button

```tsx
// src/components/ui/Button.tsx
interface ButtonProps {
  variant: "primary" | "secondary" | "phone" | "ghost";
  size: "sm" | "md" | "lg";
  href?: string;          // Si défini → <a>, sinon → <button>
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Le variant "phone" ajoute automatiquement l'icône téléphone
// Si href commence par "tel:" → <a> avec tracking event
```

### 4.3 — PhoneButton

```tsx
// src/components/ui/PhoneButton.tsx
import { SITE } from "@/lib/constants";

// Composant dédié pour le bouton d'appel
// Utilise TOUJOURS SITE.phone et SITE.phoneHref
// Ajoute automatiquement l'icône téléphone (Lucide Phone)
// Taille configurable : "sm" (header), "md" (inline), "lg" (hero, CTA)
```

### 4.4 — StickyPhoneBar

```tsx
// src/components/layout/StickyPhoneBar.tsx
"use client";

// Visible uniquement sur mobile (hidden lg:)
// Position fixed bottom-0
// 2 boutons : Appeler (primary) + Devis gratuit (secondary)
// Se cache quand le footer est visible (IntersectionObserver)
// Z-index: 40 (sous le header à 50)
// Height: 64px
// Padding-bottom safe area (env(safe-area-inset-bottom) pour iPhone)
```

### 4.5 — Header

```tsx
// src/components/layout/Header.tsx
"use client";

// State: isScrolled (bool) — change bg transparent → white
// State: isMobileMenuOpen (bool)
// Scroll listener avec requestAnimationFrame (pas de leak — cleanup)
// Transition: bg, shadow, text color (300ms ease)
// Logo: SVG inline ou next/image
// Desktop: Logo | Nav links | PhoneButton
// Mobile: Logo | Hamburger → MobileNav overlay
// Z-index: 50
// Height: 72px desktop, 64px mobile
```

---

## 5. Gestion des formulaires

### Backend d'envoi

**Option recommandée : Formspree ou Resend**

```
Utilisateur remplit le formulaire
         ↓
Client Component valide les champs (client-side)
         ↓
Appel API : POST vers /api/contact (Next.js API Route)
         ↓
API Route valide les données (server-side)
         ↓
Envoi via Formspree/Resend/Brevo
         ↓
Réponse 200 → état succès affiché
Réponse erreur → message d'erreur affiché
```

**Pas de faux "email envoyé"** (erreur critique d'EGB).
Si l'envoi échoue, on le dit. Si on n'a pas encore de backend, on affiche :
"Demande enregistrée. Appelez-nous directement au 06 28 43 88 44 pour plus de rapidité."

---

## 6. SEO technique — Implémentation

### Layout racine

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyPhoneBar } from "@/components/layout/StickyPhoneBar";
import { StructuredData } from "@/components/seo/StructuredData";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import "@/styles/globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://shedliauto.com"),
  title: {
    default: "Shedli Auto | Remplacement Pare-Brise Toulouse — Intervention Mobile",
    template: "%s | Shedli Auto",
  },
  description: "...",
  openGraph: { ... },
  twitter: { ... },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={manrope.className}>
      <body>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyPhoneBar />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
```

### Security headers

```typescript
// next.config.ts
const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];
```

---

## 7. Performance budget

| Ressource | Budget max |
|-----------|-----------|
| HTML initial | < 50 KB |
| CSS (Tailwind) | < 20 KB (gzip) |
| JS total (first load) | < 100 KB (gzip) |
| Fonts (Manrope) | < 40 KB (woff2, subset latin) |
| Hero image | < 150 KB (WebP, 1920px) |
| Autres images | < 80 KB chacune |
| **Total first load** | **< 400 KB** |

### Comparaison
- Site actuel (Webador) : ~2-3 MB, Lighthouse ~40
- Notre cible : ~400 KB, Lighthouse > 95

---

## 8. Déploiement

### Vercel (recommandé)

```
GitHub repo → Vercel auto-deploy
- Push sur main → production (shedliauto.com)
- Push sur branche → preview URL
- Edge Functions pour les API routes
- CDN global (Paris PoP pour la France)
- Analytics intégrés (optionnel)
```

### Domaine
- Domaine actuel : shedliauto.com (déjà possédé)
- Transfert DNS vers Vercel ou ajout CNAME
- HTTPS automatique (Let's Encrypt via Vercel)
- Redirection www → non-www (ou inverse, à choisir)

---

_Cette architecture est conçue pour la performance, la maintenabilité et le SEO. Chaque décision technique est au service de la conversion._
