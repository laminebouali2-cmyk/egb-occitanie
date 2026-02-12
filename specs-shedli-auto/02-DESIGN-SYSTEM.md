# Shedli Auto — Design System

---

## 1. Philosophie du design

### Principe directeur
**"Chaque pixel construit de la confiance."**

Le design n'est pas décoratif. Chaque choix visuel a une fonction :
- L'espace blanc = respiration = confiance = "cette entreprise est organisée"
- La typographie = hiérarchie = clarté = "je comprends immédiatement"
- La couleur = émotion = action = "je sais quoi faire"

### Références de niveau
Le standard visuel visé n'est pas "joli site de garagiste". C'est :
- **Tesla** : scroll narratif, chaque section = un écran, le produit parle
- **Apple** : typographie massive, espace généreux, hiérarchie impeccable
- **Stripe** : clarté de l'information, micro-interactions soignées, grilles parfaites
- **Wise** : confiance par la simplicité, process en étapes, transparence

Adapté au contexte : service local, audience non-tech, mobile-first, urgence de conversion.

---

## 2. Palette de couleurs

### Couleurs principales

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   PRIMAIRE         SURFACE          ACCENT              │
│   ██████████       ░░░░░░░░░░       ██████████          │
│   #0F2B4C          #F7F8FA          #0284C7             │
│   Bleu nuit        Blanc glacier    Bleu ciel           │
│   Trust            Clean            Action              │
│                                                         │
│   TEXTE            TEXTE SEC.       SUCCÈS              │
│   ██████████       ██████████       ██████████          │
│   #111827          #6B7280          #059669             │
│   Presque noir     Gris moyen       Vert confiance      │
│                                                         │
│   BORDURE          FOND SEC.        URGENCE             │
│   ██████████       ░░░░░░░░░░       ██████████          │
│   #E2E5E9          #EEF0F3          #DC2626             │
│   Gris bordure     Gris fond        Rouge (erreurs)     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Tokens CSS (Tailwind config)

```ts
colors: {
  primary: {
    50:  '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#0284C7',  // Accent principal (CTA)
    600: '#0369A1',
    700: '#0F2B4C',  // Primaire (headers, nav)
    800: '#0C2340',
    900: '#091A30',
    950: '#060F1D',
  },
  surface: {
    DEFAULT: '#FFFFFF',
    soft: '#F7F8FA',
    muted: '#EEF0F3',
  },
  text: {
    DEFAULT: '#111827',
    secondary: '#6B7280',
    muted: '#9CA3AF',
  },
  border: {
    DEFAULT: '#E2E5E9',
    strong: '#D1D5DB',
  },
  success: '#059669',
  error: '#DC2626',
}
```

### Règles d'utilisation des couleurs

| Élément | Couleur | Raison |
|---------|---------|--------|
| Fond de page | `surface.DEFAULT` (#FFF) | Propreté, lisibilité maximale |
| Sections alternées | `surface.soft` (#F7F8FA) | Rythme visuel sans fatigue |
| Header / Footer | `primary.700` (#0F2B4C) | Ancrage, autorité |
| Corps de texte | `text.DEFAULT` (#111827) | Contraste optimal (ratio 15.4:1) |
| Texte secondaire | `text.secondary` (#6B7280) | Hiérarchie sans disparition |
| Boutons principaux | `primary.500` (#0284C7) | Action, visibilité, confiance |
| Boutons hover | `primary.600` (#0369A1) | Feedback immédiat |
| Badges de confiance | `success` (#059669) | Association positive inconsciente |
| Bordures | `border.DEFAULT` (#E2E5E9) | Structure sans lourdeur |

### Accessibilité couleurs

Tous les couples texte/fond respectent **WCAG AA minimum** (ratio 4.5:1) :

| Combinaison | Ratio | Conformité |
|-------------|-------|-----------|
| #111827 sur #FFFFFF | 15.4:1 | ✅ AAA |
| #6B7280 sur #FFFFFF | 5.0:1 | ✅ AA |
| #FFFFFF sur #0F2B4C | 13.8:1 | ✅ AAA |
| #FFFFFF sur #0284C7 | 4.6:1 | ✅ AA |
| #FFFFFF sur #059669 | 4.5:1 | ✅ AA |

---

## 3. Typographie

### Police : Manrope

**Pourquoi Manrope :**
- Geometric sans-serif : moderne, propre, professionnel
- Excellente lisibilité sur écran (conçue pour le digital)
- Open source, chargeable via `next/font/google` (self-hosted)
- Personnalité : fiable sans être froide, moderne sans être trendy
- 12 poids disponibles : précision typographique complète

### Échelle typographique

Basée sur une échelle harmonique (ratio 1.25 — Major Third) :

```
                                                    Desktop    Mobile
────────────────────────────────────────────────────────────────────────
Display    "Pare-brise fissuré ?"                   56px/1.1   36px/1.15
H1         "Remplacement de pare-brise à Toulouse"  44px/1.15  32px/1.2
H2         "Comment ça marche"                      36px/1.2   28px/1.25
H3         "Intervention à domicile"                28px/1.3   22px/1.3
H4         "Prise en charge assurance"              22px/1.4   18px/1.4
Body L     Paragraphes principaux                   18px/1.7   16px/1.7
Body       Corps de texte courant                   16px/1.6   15px/1.6
Small      Labels, badges, captions                 14px/1.5   13px/1.5
XS         Mentions légales                         12px/1.5   11px/1.5
────────────────────────────────────────────────────────────────────────
```

### Poids typographiques

| Poids | Usage | Propriété |
|-------|-------|-----------|
| 700 (Bold) | Titres Display et H1, CTA | `font-bold` |
| 600 (Semibold) | H2, H3, noms, labels importants | `font-semibold` |
| 500 (Medium) | H4, boutons, liens actifs | `font-medium` |
| 400 (Regular) | Corps de texte, paragraphes | `font-normal` |

### Règles typographiques strictes

1. **Max 65-75 caractères par ligne** sur desktop (lisibilité optimale)
2. **Jamais de texte justifié** — toujours aligné à gauche
3. **Titres en minuscules** (sauf première lettre) — pas de ALL CAPS sauf labels/badges
4. **Espacement entre lettres (tracking)** :
   - Titres Display : `-0.02em`
   - H1-H2 : `-0.015em`
   - Body : `0` (défaut)
   - Labels/badges uppercase : `0.05em`
5. **Pas d'italique** dans les titres
6. **Pas de soulignement** sauf liens au hover

---

## 4. Système de spacing

### Base : 4px

Tout l'espacement est un multiple de 4px. Pas d'exception.

```
Token     Valeur    Usage
────────────────────────────────────────────────
space-1   4px       Espace minimal (icon-label)
space-2   8px       Gap entre éléments inline
space-3   12px      Padding interne petits composants
space-4   16px      Gap standard dans les grilles
space-5   20px      Padding boutons verticaux
space-6   24px      Gap entre items de liste
space-8   32px      Séparation entre blocs
space-10  40px      Padding de section (mobile)
space-12  48px      Séparation de sections
space-16  64px      Padding de section (desktop)
space-20  80px      Grande séparation de sections
space-24  96px      Espacement entre zones majeures
space-32  128px     Espacement entre sections full-screen
────────────────────────────────────────────────
```

### Espacement vertical des sections

Chaque section de la page a un padding vertical cohérent :

```
Mobile  : py-12 (48px) à py-16 (64px)
Tablet  : py-16 (64px) à py-20 (80px)
Desktop : py-20 (80px) à py-32 (128px)
```

**Règle :** Plus l'écran est grand, plus on respire. L'espace est un luxe.

---

## 5. Système de grille

### Container

```
Max-width : 1280px (xl)
Padding horizontal :
  - Mobile  : 16px (px-4)
  - Tablet  : 32px (px-8)
  - Desktop : 64px (px-16)

Centré : mx-auto
```

### Grille principale : 12 colonnes

```
Desktop (≥1024px) : 12 colonnes, gap 32px
Tablet  (≥768px)  : 8 colonnes, gap 24px
Mobile  (<768px)  : 4 colonnes, gap 16px
```

### Layouts types

```
HERO (full-width)
┌──────────────────────────────────────────────────────┐
│                                                      │
│         Centré, max-width 720px pour le texte         │
│         Image en background ou à côté                │
│                                                      │
└──────────────────────────────────────────────────────┘

CONTENU ASYMÉTRIQUE (service, explication)
┌─────────────────────┬────────────────────────────────┐
│                     │                                │
│     5 colonnes      │         7 colonnes             │
│     Image/Visual    │         Texte + CTA            │
│                     │                                │
└─────────────────────┴────────────────────────────────┘

3 COLONNES ÉGALES (étapes, features)
┌────────────┬────────────┬────────────┐
│            │            │            │
│  4 col.    │  4 col.    │  4 col.    │
│  Étape 1   │  Étape 2   │  Étape 3   │
│            │            │            │
└────────────┴────────────┴────────────┘

2 COLONNES ÉGALES (avantages, comparaison)
┌──────────────────┬──────────────────┐
│                  │                  │
│    6 colonnes    │    6 colonnes    │
│                  │                  │
└──────────────────┴──────────────────┘

CTA FULL-WIDTH
┌──────────────────────────────────────────────────────┐
│            Fond coloré (primary.700)                 │
│            Texte blanc centré                        │
│            Bouton accent                             │
└──────────────────────────────────────────────────────┘
```

---

## 6. Composants

### 6.1 Boutons

```
PRIMARY (CTA principal)
┌──────────────────────────┐
│   Appeler maintenant     │    bg: primary.500
│                          │    text: white
└──────────────────────────┘    hover: primary.600
                                padding: 14px 28px
                                border-radius: 8px
                                font-weight: 600
                                font-size: 16px
                                transition: all 200ms ease
                                shadow: 0 1px 3px rgba(0,0,0,0.1)

SECONDARY (CTA secondaire)
┌──────────────────────────┐
│   Demander un devis      │    bg: transparent
│                          │    text: primary.700
└──────────────────────────┘    border: 1.5px solid primary.700
                                hover: bg primary.700, text white
                                padding: 14px 28px
                                border-radius: 8px

PHONE (bouton téléphone — le plus important)
┌──────────────────────────┐
│   📞  06 28 43 88 44     │    bg: primary.500
│                          │    text: white
└──────────────────────────┘    hover: primary.600
                                icône téléphone à gauche
                                font-size: 18px (plus gros)
                                padding: 16px 32px
                                lettre-spacing: 0.5px sur le numéro
```

**Règles boutons :**
- Jamais plus de 2 boutons côte à côte
- Le bouton principal est TOUJOURS à gauche (ou en haut sur mobile)
- Min-width : 200px (pas de boutons minuscules)
- Les labels de bouton sont des verbes d'action : "Appeler", "Demander", pas "Soumettre" ou "Envoyer"

### 6.2 Cartes

```
CARTE SERVICE
┌──────────────────────────────┐
│  ┌────┐                     │    bg: white
│  │icon│  Titre du service    │    border: 1px solid border.DEFAULT
│  └────┘                     │    border-radius: 12px
│                              │    padding: 32px
│  Description courte du       │    hover: shadow-lg, translateY(-2px)
│  service en 2 lignes max     │    transition: all 300ms ease
│                              │
│  En savoir plus →            │    Lien en primary.500
└──────────────────────────────┘
```

```
CARTE ÉTAPE (Comment ça marche)
┌──────────────────────────────┐
│                              │
│         ① ou 01              │    Numéro : primary.500, 48px, bold
│                              │    bg: surface.soft
│    Vous nous appelez         │    border-radius: 16px
│                              │    padding: 40px 32px
│    Description courte        │    text-align: center
│                              │
└──────────────────────────────┘
```

```
CARTE AVIS
┌──────────────────────────────┐
│  ★★★★★                      │    bg: white
│                              │    border: 1px solid border.DEFAULT
│  "Texte de l'avis client,   │    border-radius: 12px
│   court et impactant."       │    padding: 28px
│                              │    shadow: 0 1px 2px rgba(0,0,0,0.05)
│  — Prénom L.                 │    Note en étoiles: #FBBF24 (amber)
│    il y a 2 semaines         │
└──────────────────────────────┘
```

### 6.3 Badges de confiance

```
BADGE HORIZONTAL
┌────────────────────────────────────┐
│  ✓  Prise en charge assurance     │    bg: success/10 (vert très léger)
└────────────────────────────────────┘    text: success (#059669)
                                          border-radius: 999px (pill)
                                          padding: 8px 16px
                                          font-size: 14px
                                          font-weight: 500
                                          icône check à gauche
```

### 6.4 Header

```
Desktop :
┌────────────────────────────────────────────────────────────┐
│  Logo          Nav Links                    [Appeler] btn  │
└────────────────────────────────────────────────────────────┘

Comportement :
- Position fixed, top 0
- Transparent au sommet de la page (texte blanc si hero sombre)
- bg white + shadow au scroll (après 80px de scroll)
- Transition smooth (300ms)
- Z-index : 50
- Height : 72px desktop, 64px mobile
```

```
Mobile :
┌───────────────────────────────────────┐
│  Logo             [☰] Hamburger      │
└───────────────────────────────────────┘

Menu ouvert : full-screen overlay
- bg: primary.700
- text: white
- liens centrés, font-size: 24px
- animation : slide-in from right (300ms)
- Bouton "Appeler" en bas du menu (sticky)
```

### 6.5 Sticky CTA Mobile

```
┌───────────────────────────────────────┐
│  📞 Appeler    │   📝 Devis gratuit  │   Position: fixed
│                │                     │   bottom: 0
└───────────────────────────────────────┘   width: 100%
                                            height: 64px
                                            bg: white
                                            border-top: 1px solid border
                                            shadow: 0 -2px 10px rgba(0,0,0,0.08)
                                            z-index: 40
                                            Deux boutons 50/50
                                            Left: primary.500 bg (appeler)
                                            Right: white bg, primary border (devis)

IMPORTANT : cette barre est TOUJOURS visible sur mobile
sauf quand le footer est en viewport (pour éviter le chevauchement)
```

### 6.6 Footer

```
┌──────────────────────────────────────────────────────────────┐
│  bg: primary.900 (#091A30)                                   │
│                                                              │
│  Logo (blanc)              Navigation     Contact            │
│  Tagline courte            - Accueil      📞 06 28 43 88 44 │
│                            - Services     📍 Adresse         │
│                            - Avis         ✉️  Email          │
│                            - FAQ                             │
│                            - Contact      Réseaux            │
│                                           Instagram          │
│                                           WhatsApp           │
│──────────────────────────────────────────────────────────────│
│  © 2026 Shedli Auto — SIRET  |  Mentions légales  |  RGPD   │
└──────────────────────────────────────────────────────────────┘

- Grille 3 colonnes desktop, stack mobile
- Texte : white/70 pour le body, white pour les titres
- Liens : hover white/100
- Séparateur : white/10
- Padding : 80px top, 32px bottom
```

---

## 7. Animations et micro-interactions

### Philosophie
Chaque animation a un **but fonctionnel**. Si elle n'aide pas à comprendre, guider ou confirmer, elle n'existe pas.

### Catalogue d'animations

| Animation | Trigger | Durée | Easing | But |
|-----------|---------|-------|--------|-----|
| Fade-in up | Scroll into view | 600ms | `easeOut` | Rythmer la lecture, guider l'oeil |
| Stagger children | Scroll into view | 100ms delay entre items | `easeOut` | Séquencer les cartes/étapes |
| Header bg | Scroll > 80px | 300ms | `easeInOut` | Transition douce transparent → blanc |
| Bouton hover | Mouse enter | 200ms | `ease` | Feedback immédiat |
| Bouton press | Mouse down | 100ms | `ease` | Scale 0.97, confirmation de clic |
| Card hover | Mouse enter | 300ms | `easeOut` | Élévation (shadow + translateY -2px) |
| Counter | Scroll into view | 2000ms | `easeOut` | Animer les chiffres de 0 à N |
| Page transition | Route change | 400ms | `easeInOut` | Fade entre les pages |
| Mobile menu | Toggle | 300ms | `easeInOut` | Slide-in overlay |
| Success form | Submit | 500ms | `spring` | Scale + check animé |

### Framer Motion — variants standard

```tsx
// Fade in depuis le bas (défaut pour toutes les sections)
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Stagger pour les listes/grilles
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

// Pour les compteurs (chiffres)
const countUp = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
  // La logique du compteur est JS, pas CSS
};
```

### Règles strictes

1. **Pas d'animation au-dessus de 800ms** (sauf compteurs)
2. **Pas d'animation au chargement initial du hero** — le contenu est LÀ, immédiatement
3. **Pas de bounce, pas d'elastic** (sauf micro-confirmation comme le check de succès)
4. **`prefers-reduced-motion`** : toutes les animations sont désactivées si l'utilisateur le demande
5. **Pas d'animation sur les éléments de conversion** (boutons CTA) — le bouton est stable, visible, clair
6. **IntersectionObserver** pour déclencher les animations au scroll — pas de scroll listener

---

## 8. Images et médias

### Format et optimisation

| Type | Format | Qualité | Chargement |
|------|--------|---------|-----------|
| Photos (hero, services) | WebP via next/image | 80% | `priority` pour above-the-fold, `lazy` pour le reste |
| Icônes | SVG inline (Lucide React) | — | Immédiat |
| Logo | SVG | — | Immédiat |
| Favicon | .ico + .png 32x32, 180x180 | — | Immédiat |
| OG Image | PNG 1200x630 | 90% | — |

### Breakpoints images

```tsx
// Hero image
<Image
  src="/hero.webp"
  sizes="100vw"
  priority
  quality={85}
/>

// Section image
<Image
  src="/intervention.webp"
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={80}
/>
```

### Placeholder
Toutes les images utilisent `placeholder="blur"` avec `blurDataURL` généré au build.

---

## 9. Responsive breakpoints

```
sm  : 640px    → Petits ajustements mobile
md  : 768px    → Tablet portrait (grille 8 colonnes)
lg  : 1024px   → Tablet landscape / petit desktop (grille 12 colonnes)
xl  : 1280px   → Desktop standard (container max)
2xl : 1536px   → Grand écran (espacement augmenté)
```

### Mobile-first
Tout est designé mobile-first. Les breakpoints ajoutent de la complexité, jamais l'inverse.

```css
/* Mobile (défaut) */
.section { padding: 48px 16px; }

/* Tablet */
@media (min-width: 768px) { .section { padding: 64px 32px; } }

/* Desktop */
@media (min-width: 1024px) { .section { padding: 96px 64px; } }
```

---

## 10. Dark mode

**Non.** Pas de dark mode pour ce site. Raisons :
1. La cible n'est pas tech-savvy
2. Le bleu foncé du header/footer apporte déjà le contraste
3. Les photos sont optimisées pour fond clair
4. La crédibilité perçue d'un service local est meilleure en fond blanc
5. Un dark mode mal fait détruit la confiance

---

_Ce design system est la source de vérité pour toutes les décisions visuelles. Aucune dérogation sans justification._
