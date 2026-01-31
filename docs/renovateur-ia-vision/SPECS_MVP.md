# RENOVATEUR IA - Specifications MVP

## Document Technique - Version 1.0

---

## Resume Executif

**Produit :** Plateforme IA de planification de renovation
**Cible :** Architectes, agents immobiliers, renovateurs, particuliers
**Differenciateur :** Intelligence contextuelle - l'IA reflechit AVEC l'utilisateur
**Business Model :** Gratuit MVP → Freemium → B2B SaaS

---

## Specs Fonctionnelles Validees

### 1. Parcours Utilisateur

```
NOUVEL UTILISATEUR :
Landing Page → Upload Photo / Decrire Projet → Conversation IA
→ Propositions → Exploration → Sauvegarde (compte requis)

UTILISATEUR CONNECTE :
Dashboard Projets → Ouvrir projet existant / Nouveau projet
→ Conversation IA → Propositions → Export
```

### 2. Premier Contact

| Element | Specification |
|---------|---------------|
| Option principale | "Commencer avec une photo" (bouton primaire) |
| Option secondaire | "Decrire mon projet" (lien texte) |
| Compte | Non requis pour commencer, requis pour sauvegarder |

### 3. Comportement IA - Questions

| Regle | Detail |
|-------|--------|
| Format | Questions a choix multiples |
| Option escape | Toujours "Je ne sais pas" / "Pas de preference" |
| Nombre | Variable selon contexte (2-5) |
| Si "Je sais pas" | L'IA propose des options pour inspirer |
| Style | Toujours demande avec option "Surprenez-moi" |

### 4. Comportement IA - Propositions

| Element | Specification |
|---------|---------------|
| Nombre | 2 propositions visuelles |
| Contenu chaque | Image IA + Titre + Points cles |
| Actions | "Voir le plan" / "Explorer cette option" |
| Alternatives | "Proposez autre chose" / "Mixer les elements" |
| Mixer | Checkboxes sur elements de chaque proposition |

### 5. Explorer une Option

Quand l'utilisateur clique "Explorer cette option" :
1. Zoom sur l'image + details (materiaux, explications)
2. Questions supplementaires pour affiner
3. Possibilite de voir d'autres angles/vues
4. Modification par texte ("change la couleur du mur")

### 6. Plan 2D

| Quand | Comment |
|-------|---------|
| Affichage | Sur clic "Voir le plan" uniquement |
| Contenu | Plan modifie avec la proposition |
| Interaction | Visualisation, pas d'edition dans MVP |

### 7. Prix / Estimations

| Regle | Detail |
|-------|--------|
| Pendant exploration | PAS de prix affiche |
| Apres finalisation | Estimation detaillee budget |
| Format | Fourchette min-max + details par poste |

### 8. Export Final

L'utilisateur peut obtenir :
- [ ] Images generees (telechargement direct)
- [ ] PDF complet (images + plan + estimations)
- [ ] Lien partageable vers le projet

### 9. Authentification

| Moment | Requis |
|--------|--------|
| Demarrer un projet | Non |
| Generer des images | Non |
| Sauvegarder | Oui (email ou Google) |
| Acceder aux projets sauvegardes | Oui |

---

## Architecture Technique

### Stack

```
FRONTEND:
- Next.js 16 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS 4
- Framer Motion

BACKEND:
- Next.js API Routes
- Prisma ORM
- PostgreSQL (Supabase)

AUTH:
- NextAuth.js ou Clerk

IA:
- OpenAI GPT-4 (conversation)
- Replicate (generation images - Stable Diffusion XL + ControlNet)

STORAGE:
- Supabase Storage (images uploadees + generees)

DEPLOYMENT:
- Vercel
```

### Couts API Estimes

| Service | Cout unitaire | Usage MVP |
|---------|--------------|-----------|
| GPT-4 | ~0.03€/conversation | Conversation IA |
| Replicate SDXL | ~0.02€/image | Generation visuels |
| Replicate ControlNet | ~0.03€/image | Transformation photos |

**Cout par session complete : ~0.15-0.25€**
**Budget test : 35€ = ~150-200 sessions**

---

## Structure Base de Donnees

```sql
-- Utilisateurs
users {
  id
  email
  name
  created_at
}

-- Projets
projects {
  id
  user_id (nullable - projets non sauvegardes)
  name
  status (draft, active, completed)
  created_at
  updated_at
}

-- Pieces du projet
rooms {
  id
  project_id
  name
  type (salon, cuisine, chambre, grenier, etc.)
  original_image_url
  dimensions_estimate
  created_at
}

-- Conversations IA
conversations {
  id
  room_id
  messages (JSON)
  context (JSON - ce que l'IA a compris)
  created_at
}

-- Propositions generees
proposals {
  id
  conversation_id
  title
  description
  generated_image_url
  plan_image_url
  elements (JSON - liste des elements)
  created_at
}

-- Projet finalise
final_projects {
  id
  project_id
  selected_proposals (JSON)
  budget_estimate_min
  budget_estimate_max
  pdf_url
  share_token
  created_at
}
```

---

## Ecrans a Developper

### 1. Landing Page
- Hero avec value proposition
- CTA principal : "Commencer avec une photo"
- CTA secondaire : "Decrire mon projet"
- Section "Comment ca marche"
- Temoignages/Social proof

### 2. Upload / Description
- Zone upload drag & drop
- OU textarea pour description
- Preview image uploadee
- Bouton "Analyser"

### 3. Conversation IA
- Interface chat
- Questions a choix multiples (composant)
- Indicateur "IA reflechit..."
- Historique conversation

### 4. Propositions
- 2 cartes cote a cote (ou empilees mobile)
- Image + titre + points cles
- Boutons actions
- Option mixer (checkboxes)

### 5. Exploration Detail
- Image grande
- Panel lateral avec details
- Input texte pour modifications
- Bouton "Generer variante"

### 6. Dashboard (connecte)
- Liste projets en cartes
- Bouton nouveau projet
- Status de chaque projet

### 7. Export
- Preview PDF
- Boutons telechargement
- Generer lien de partage

---

## Priorite Implementation

### Sprint 1 (Fondations)
1. Setup projet (Next.js, Tailwind, TypeScript)
2. Base de donnees (Prisma + Supabase)
3. Authentification (NextAuth)
4. Landing page professionnelle

### Sprint 2 (Core IA)
5. Upload image + stockage
6. Integration OpenAI GPT-4
7. Interface conversation
8. Logique questions/reponses

### Sprint 3 (Generation)
9. Integration Replicate
10. Generation images
11. Affichage propositions
12. Exploration/modification

### Sprint 4 (Finalisation)
13. Dashboard projets
14. Export PDF
15. Liens partageables
16. Polish UI/UX

---

## Metriques Succes MVP

- [ ] Temps de chargement < 2s
- [ ] Generation image < 30s
- [ ] Conversation fluide (pas de lag)
- [ ] Mobile responsive
- [ ] Score Lighthouse > 90

---

*Document cree le 31 Janvier 2025*
*Statut : VALIDE - Pret pour developpement*
