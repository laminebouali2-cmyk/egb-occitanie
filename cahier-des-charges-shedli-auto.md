# Cahier des charges — Shedli Auto

## Refonte complète du site web

---

## 1. Présentation du projet

### Le client
**Shedli Auto** — Spécialiste du remplacement de pare-brise, intervention mobile.
- Site actuel : shedliauto.com (plateforme Webador, à abandonner)
- Téléphone : 06 28 43 88 44
- Instagram : @shedli_auto
- Zone d'intervention : _À confirmer (Toulouse métropole ? Haute-Garonne ? Occitanie ?)_
- SIRET : _À fournir_
- Adresse : _À fournir_

### Le problème
Le site actuel est un site Webador générique sans aucune optimisation :
- Aucun SEO (pas de balises, pas de structure, pas de contenu indexable)
- Aucun parcours de conversion (pas de CTA clair, pas de tunnel)
- Une boutique e-commerce inutile qui dilue le message
- Aucune crédibilité perçue (pas d'adresse, pas d'horaires, email Webador par défaut)
- Design amateur qui ne reflète pas le sérieux du service

### L'objectif
Créer un site de **conversion pure** qui transforme chaque visiteur en appel téléphonique ou demande de RDV. Le site doit inspirer confiance immédiatement et positionner Shedli Auto comme **le référent pare-brise** de sa zone.

---

## 2. Identité et positionnement

### Positionnement
**"Le spécialiste pare-brise qui vient à vous."**

Shedli Auto n'est pas un garage généraliste. C'est un expert mono-spécialité avec un avantage compétitif clair : **l'intervention mobile**. Le client ne se déplace pas, c'est le technicien qui vient.

Ce positionnement doit transparaître dans chaque élément du site :
- Simplicité → un service, bien fait
- Mobilité → on vient à vous, partout dans la zone
- Rapidité → intervention rapide, prise en charge directe
- Confiance → prise en charge assurance, zéro surprise

### Ton et voix
- **Direct et rassurant** — pas de jargon technique inutile
- **Humain** — on parle comme un artisan de confiance, pas comme une marque corporate
- **Factuel** — pas de superlatifs creux ("le meilleur", "n°1"), que des preuves
- Tutoiement ou vouvoiement : _À définir avec le client_

### Valeurs à transmettre (sans les écrire)
- Fiabilité (on montre des avis, des photos, des chiffres réels)
- Accessibilité (intervention mobile, devis gratuit, prise en charge assurance)
- Expertise (spécialiste, pas généraliste)

---

## 3. Direction artistique

### Ambiance générale
**Claire, professionnelle, moderne.** Ni dark mode garage, ni flashy. Un design qui inspire confiance, proche du médical ou du service premium — appliqué à l'automobile.

### Palette de couleurs

| Rôle | Couleur | Hex | Usage |
|------|---------|-----|-------|
| Primaire | Bleu profond | `#1B365D` | Headers, textes importants, CTAs principaux |
| Secondaire | Blanc cassé | `#F8F9FA` | Fonds de page, espaces de respiration |
| Accent | Bleu ciel / Cyan | `#0EA5E9` | Boutons d'action, liens, éléments interactifs |
| Neutre | Anthracite | `#374151` | Corps de texte |
| Neutre léger | Gris clair | `#E5E7EB` | Bordures, séparateurs, fonds secondaires |
| Succès / Confiance | Vert | `#10B981` | Validations, badges de confiance |

> **Pourquoi bleu ?** Le bleu est la couleur de la confiance, de la fiabilité et du sérieux. C'est la couleur dominante dans l'assurance, la santé et les services de confiance. Pour un service lié au pare-brise (verre, transparence, sécurité), c'est la palette naturelle.

### Typographie

| Usage | Police | Poids | Taille |
|-------|--------|-------|--------|
| Titres (H1) | Inter ou Manrope | Bold (700) | 48-56px |
| Sous-titres (H2) | Inter ou Manrope | Semibold (600) | 32-36px |
| Corps | Inter | Regular (400) | 16-18px |
| Labels/badges | Inter | Medium (500) | 12-14px, uppercase, letter-spacing |

> Police chargée via `next/font` (self-hosted, pas de Google Fonts externe).

### Iconographie
- Icons système : Lucide React (cohérent, léger, même lib qu'EGB)
- Style : outline, stroke 1.5-2px
- Pas d'illustrations cartoon ni de clipart

### Imagerie
- Photos réelles de l'activité (intervention, technicien, véhicule)
- Si pas de photos dispo : utiliser des photos stock premium (Unsplash/Pexels) en attendant, **avec un plan pour les remplacer par du vrai**
- Traitement : lumineux, net, pas de filtres lourds
- Format : WebP via next/image, lazy loading

### Animations
- Framer Motion pour les transitions de scroll (fade-in subtils)
- Pas d'animations gratuites — chaque animation a un but (attirer l'attention sur un CTA, rythmer la lecture)
- Performance : `will-change`, pas de layout shifts

---

## 4. Architecture du site

### Arborescence

```
shedliauto.com/
├── /                          → Page d'accueil (hero + conversion)
├── /remplacement-pare-brise   → Page service principale
├── /intervention-mobile       → Page dédiée à l'avantage mobile
├── /prise-en-charge-assurance → Page dédiée assurance (SEO + conversion)
├── /contact                   → Formulaire + téléphone + zone d'intervention
├── /avis                      → Témoignages clients
├── /faq                       → Questions fréquentes (SEO)
├── /mentions-legales          → Mentions légales
├── /politique-confidentialite → RGPD
└── /sitemap.xml               → Sitemap dynamique
```

### Justification de chaque page

| Page | Objectif SEO | Objectif conversion |
|------|-------------|-------------------|
| Accueil | Mot-clé principal : "remplacement pare-brise [ville]" | CTA appel + formulaire rapide |
| Remplacement pare-brise | Long-tail : "changer pare-brise [ville]", "prix pare-brise" | Éduquer + convertir |
| Intervention mobile | "pare-brise à domicile", "pare-brise mobile [ville]" | Différenciation concurrentielle |
| Prise en charge assurance | "pare-brise assurance", "franchise pare-brise" | Lever le frein n°1 (le prix) |
| Contact | Conversion directe | Téléphone, formulaire, carte |
| Avis | Preuve sociale, confiance | Rassurer les hésitants |
| FAQ | SEO long-tail, featured snippets | Répondre aux objections |

---

## 5. Spécifications page par page

### 5.1 — Page d'accueil `/`

C'est la page la plus importante. 80% du trafic arrive ici.

**Structure :**

```
┌─────────────────────────────────────────────┐
│ HEADER (fixe, transparent → blanc au scroll) │
│ Logo | Navigation | Bouton "Appeler"         │
├─────────────────────────────────────────────┤
│ HERO                                         │
│ Titre : "[Ville] — Remplacement de pare-     │
│ brise, on vient à vous"                      │
│ Sous-titre : Intervention rapide, devis      │
│ gratuit, prise en charge assurance.          │
│ [Bouton : Appeler maintenant]                │
│ [Bouton secondaire : Demander un devis]      │
│ Badge : "Intervention sous 24/48h"           │
├─────────────────────────────────────────────┤
│ BANDE DE CONFIANCE                           │
│ ✓ Prise en charge assurance                  │
│ ✓ Intervention à domicile                    │
│ ✓ Devis gratuit                              │
│ ✓ Garantie pièces                            │
├─────────────────────────────────────────────┤
│ COMMENT ÇA MARCHE (3 étapes)                 │
│ 1. Vous appelez → 2. On vient → 3. C'est fait│
├─────────────────────────────────────────────┤
│ SERVICES                                     │
│ Carte : Remplacement pare-brise              │
│ Carte : Réparation d'impact                  │
│ Carte : Vitrage latéral et lunette arrière   │
├─────────────────────────────────────────────┤
│ POURQUOI NOUS                                │
│ Intervention mobile / Rapidité / Assurance / │
│ Pare-brises certifiés                        │
├─────────────────────────────────────────────┤
│ AVIS CLIENTS (carrousel ou grille)           │
│ Vrais avis Google intégrés                   │
├─────────────────────────────────────────────┤
│ ZONE D'INTERVENTION                          │
│ Carte + liste des villes/communes couvertes  │
├─────────────────────────────────────────────┤
│ CTA FINAL                                    │
│ "Un impact ? Un pare-brise fissuré ?         │
│ Appelez maintenant, on s'occupe de tout."    │
│ [Bouton téléphone]                           │
├─────────────────────────────────────────────┤
│ FOOTER                                       │
│ Coordonnées | Liens | Mentions | SIRET       │
└─────────────────────────────────────────────┘
```

**Éléments de conversion permanents :**
- Bouton "Appeler" toujours visible dans le header (mobile : sticky bottom bar)
- Numéro de téléphone cliquable (tel:)
- Sticky CTA sur mobile (barre fixe en bas avec téléphone + "Devis gratuit")

### 5.2 — Page service `/remplacement-pare-brise`

**Contenu :**
- H1 : "Remplacement de pare-brise à [Ville] — Intervention rapide à domicile"
- Explication du processus (simplifié pour le grand public)
- Types de véhicules pris en charge
- Marques de pare-brise utilisées (qualité certifiée)
- Tarification transparente ou "devis gratuit en 2 min"
- FAQ intégrée en bas de page
- CTA : appel + formulaire

### 5.3 — Page `/intervention-mobile`

**Contenu :**
- H1 : "Pare-brise à domicile — On se déplace partout à [Ville] et environs"
- Avantages concrets : pas de déplacement, pas de garage, pas d'attente
- Comment se passe l'intervention (durée ~1h, chez vous ou sur votre parking)
- Zone d'intervention avec carte
- CTA : appel

### 5.4 — Page `/prise-en-charge-assurance`

**Contenu (SEO gold mine — tout le monde cherche ça) :**
- H1 : "Pare-brise : prise en charge assurance sans avance de frais"
- Explication simple : franchise, bris de glace, assurances compatibles
- Process : "Vous nous appelez → On gère tout avec votre assurance → Vous ne payez rien (ou juste la franchise)"
- Liste des assurances partenaires (si applicable)
- CTA : "Appelez-nous avec votre numéro de contrat, on s'occupe du reste"

### 5.5 — Page `/contact`

**Même philosophie qu'EGB Occitanie :**
- Formulaire simplifié : Nom, Téléphone, Véhicule (marque/modèle), Type d'intervention (select), Message (optionnel)
- Mention : "Laissez vos coordonnées, on vous rappelle sous 2h"
- Téléphone en gros, cliquable
- WhatsApp si le client le souhaite (06 28 43 88 44)
- Carte Google Maps avec la zone d'intervention
- Horaires d'intervention

### 5.6 — Page `/avis`

- Avis Google réels intégrés (pas de faux chiffres)
- Nombre d'avis = `reviews.length` (dynamique, jamais hardcodé)
- Note moyenne calculée dynamiquement

### 5.7 — Page `/faq`

SEO-driven, questions que les gens posent vraiment :
- "Combien coûte un remplacement de pare-brise ?"
- "Est-ce que mon assurance couvre le pare-brise ?"
- "Combien de temps dure un remplacement ?"
- "Vous intervenez le week-end ?"
- "Faut-il attendre avant de rouler après un remplacement ?"
- Schema.org FAQPage pour les featured snippets Google

---

## 6. Exigences techniques

### Stack
| Technologie | Version | Rôle |
|------------|---------|------|
| Next.js | 16+ (App Router) | Framework |
| React | 19+ | UI |
| TypeScript | 5+ | Typage |
| Tailwind CSS | 4+ | Styles |
| Framer Motion | 12+ | Animations |
| Lucide React | Latest | Icônes |

### Architecture Next.js
- **Server Components par défaut** — les pages sont des server components pour le SEO
- **Client Components isolés** — seulement quand nécessaire (formulaires, animations, interactivité)
- **JAMAIS** de `"use client"` sur une page qui exporte `metadata` (erreur critique trouvée sur EGB)
- Metadata via `export const metadata` sur chaque page (titre, description, canonical, Open Graph)

### Performance
| Métrique | Cible |
|----------|-------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Score Lighthouse Performance | > 90 |
| Score Lighthouse SEO | 100 |
| Score Lighthouse Accessibility | > 95 |

### SEO
- Canonical URL sur chaque page
- Sitemap.xml dynamique (toutes les pages incluses)
- robots.txt
- Schema.org : LocalBusiness, Service, FAQPage, AggregateRating
- Open Graph + Twitter Cards sur chaque page
- Balises H1 uniques par page
- Images : attributs `alt` descriptifs, format WebP, lazy loading
- next/font pour les polices (self-hosted, pas de requête externe)

### Sécurité
- Headers : X-Frame-Options, HSTS, Permissions-Policy, X-Content-Type-Options
- Formulaire : validation côté client ET côté serveur
- Pas de données sensibles en clair côté client
- HTTPS obligatoire

### Accessibilité
- Navigation au clavier complète
- Attributs `aria-label` sur les éléments interactifs
- Contraste suffisant (WCAG AA minimum)
- Focus visible sur tous les éléments interactifs
- Skip-to-content link

---

## 7. Stratégie de conversion

### Objectif principal
**Faire sonner le téléphone.** Chaque élément du site doit rapprocher le visiteur d'un appel ou d'une demande de rappel.

### Mécaniques de conversion

| Mécanisme | Emplacement | Détail |
|-----------|-------------|--------|
| Bouton "Appeler" dans le header | Toutes les pages | Toujours visible, `tel:` link |
| Sticky bar mobile | Toutes les pages (mobile) | Barre fixe en bas : Appeler / Devis |
| Formulaire "On vous rappelle" | Accueil + Contact | 4 champs max, soumission → confirmation |
| CTA intercalés | Dans le contenu des pages | Après chaque section de valeur |
| WhatsApp (optionnel) | Footer + Contact | Lien direct vers conversation |
| Click-to-call tracking | Toutes les pages | Event tracking pour mesurer les appels |

### Éléments de réassurance
- Badges : "Prise en charge assurance", "Intervention sous 48h", "Devis gratuit"
- Avis clients visibles dès la homepage
- Photos réelles d'interventions
- Numéro de téléphone visible partout (pas caché)

---

## 8. Contenu à fournir par le client

> **Ces éléments sont nécessaires avant le développement.**

| Élément | Statut | Priorité |
|---------|--------|----------|
| Nom complet du gérant | ❌ À fournir | Haute |
| Adresse complète du siège/garage | ❌ À fournir | Haute |
| SIRET | ❌ À fournir | Haute |
| Zone d'intervention précise (villes/communes) | ❌ À fournir | Haute |
| Horaires d'intervention | ❌ À fournir | Haute |
| Numéro de téléphone principal | ✅ 06 28 43 88 44 | — |
| Email professionnel (pas Webador) | ❌ À fournir | Haute |
| Photos d'interventions réelles | ❌ À fournir | Moyenne |
| Avis Google existants | ❌ À vérifier | Moyenne |
| Logo haute résolution | ❌ À fournir (ou à créer) | Haute |
| Liste des assurances partenaires | ❌ À fournir | Basse |
| Tarifs indicatifs (ou politique "devis gratuit") | ❌ À confirmer | Moyenne |
| Tutoiement ou vouvoiement | ❌ À confirmer | Haute |

---

## 9. Livrables attendus

1. **Repository GitHub** — Code source complet, propre, documenté
2. **Site fonctionnel** — Prêt à déployer sur Vercel
3. **Toutes les pages** listées dans l'arborescence
4. **SEO complet** — Metadata, sitemap, robots.txt, structured data
5. **Responsive** — Mobile-first, testé sur toutes les tailles d'écran
6. **Performance** — Scores Lighthouse conformes aux cibles

---

## 10. Ce qu'on NE fait PAS

- ❌ Boutique e-commerce (on convertit par téléphone/formulaire, pas par vente en ligne)
- ❌ Blog (pas maintenant — possible en phase 2 pour le SEO)
- ❌ Système de réservation en ligne (trop complexe, le téléphone suffit)
- ❌ Chat en direct (le téléphone + WhatsApp couvrent le besoin)
- ❌ Multilangue (pas nécessaire pour du local)

---

## 11. Enseignements d'EGB Occitanie à appliquer

Erreurs trouvées sur EGB à **ne pas reproduire** :

| Erreur | Prévention |
|--------|-----------|
| `"use client"` + `export metadata` sur la même page | Séparer systématiquement server page / client component |
| Numéros de téléphone incorrects sur 3 pages | Un seul fichier de constantes pour les coordonnées |
| reviewCount hardcodé (47 affiché, 9 réels) | Toujours calculer dynamiquement depuis les données |
| Faux message "email envoyé" | Jamais mentir à l'utilisateur |
| Sitemap incomplet (9 pages manquantes) | Générer le sitemap depuis la structure de fichiers |
| Google verification placeholder bidon | Ne rien mettre de faux dans le code |
| Double `<main>` imbriqué | Layout gère `<main>`, les pages utilisent `<div>` |
| requestAnimationFrame sans cleanup | Toujours `cancelAnimationFrame` dans le cleanup du useEffect |
| Polices via `<link>` externe | Utiliser `next/font` (self-hosted) |
| Pas de fichier de constantes | Créer `src/lib/constants.ts` avec téléphone, email, adresse, etc. |

---

_Document rédigé le 11 février 2026._
_Prêt pour validation avant développement._
