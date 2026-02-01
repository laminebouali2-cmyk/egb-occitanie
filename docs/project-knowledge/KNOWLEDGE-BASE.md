# Base de Connaissances - EGB Occitanie

## 🏢 À propos du Projet

**EGB Occitanie** est un site corporate premium pour une entreprise générale de bâtiment basée en Occitanie.

## 🛠️ Stack Technique

### Frontend
- **Framework** : Next.js 16.1.1
- **React** : 19.2.3
- **Styling** : TailwindCSS 4
- **Animations** :
  - Framer Motion 12.26.2
  - Lenis 1.3.17 (smooth scrolling)
  - @studio-freight/lenis 1.0.42

### TypeScript
- Version : 5.x
- Configuration : `tsconfig.json` à la racine

### Outils de développement
- **Linting** : ESLint 9 avec config Next.js
- **PostCSS** : @tailwindcss/postcss 4

## 📁 Structure du Projet

```
egb-occitanie/
├── .claude/              # Configuration Claude & Skills
│   ├── mcp/             # Configuration MCP (Supermemory)
│   └── skills/          # Skills marketing installés
├── docs/                 # Documentation du projet
│   └── project-knowledge/  # Base de connaissances
├── src/                  # Code source (à documenter)
├── public/              # Assets statiques
└── node_modules/        # Dépendances
```

## 🎨 Design System

Le site utilise un design premium appelé "Carmes" qui a été appliqué à plusieurs pages :
- Page de rénovation Saint-Étienne
- Page de rénovation Saint-Cyprien
- Hero de la page d'accueil

### Composants clés
- `Hero` - Section héro de la page d'accueil
- `ContactSection` - Section de contact

## 📝 Commits Récents

1. `29604f6` - Amélioration du design Hero et lisibilité
2. `da19385` - Correction des imports ContactSection
3. `6eb53ce` - Résolution des erreurs de parsing JSX
4. `5880ed2` - Application du design Carmes à renovation-saint-etienne
5. `9f33f01` - Application du design Carmes à renovation-saint-cyprien

## 🔧 Configuration

### Scripts disponibles
- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm start` - Démarrage en production
- `npm run lint` - Vérification ESLint
- `npm run lint:fix` - Correction automatique ESLint

## 💾 Système de Mémoire

### Supermemory MCP
- **Serveur** : @supermemory/mcp-server-memory
- **Stockage** : `.claude/mcp/memory.json`
- **Objectif** : Conserver le contexte des conversations entre sessions

### Documentation Markdown
- **Localisation** : `docs/project-knowledge/`
- **Objectif** : Documentation structurée et versionnée

## 🎯 Objectifs du Projet

1. Créer un site corporate premium pour EGB Occitanie
2. Implémenter un design moderne et professionnel
3. Assurer une expérience utilisateur fluide avec animations
4. Maintenir une base de code propre et maintenable

## 📚 Skills Marketing Installés

Le projet dispose de 26+ skills marketing pour optimiser le site :
- SEO (seo-audit, programmatic-seo, schema-markup)
- Conversion (page-cro, form-cro, popup-cro, signup-flow-cro)
- Contenu (copywriting, content-strategy, copy-editing)
- Stratégie (marketing-ideas, competitor-alternatives, launch-strategy)
- Et bien d'autres...

## 🔄 Workflow Git

- **Branch principale** : Non spécifiée dans git status
- **Branch de travail** : `claude/open-new-branch-locally-mxEcl`
- **Convention** : Les branches Claude commencent par `claude/` et se terminent par un ID de session

---

*Dernière mise à jour : 2026-02-01*
