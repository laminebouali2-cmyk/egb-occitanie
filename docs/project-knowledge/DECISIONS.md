# Décisions Techniques et Architecturales

## Format
Chaque décision suit le format ADR (Architecture Decision Record) simplifié :
- **Date** : Quand la décision a été prise
- **Contexte** : Pourquoi cette décision était nécessaire
- **Décision** : Ce qui a été décidé
- **Conséquences** : Impact de cette décision

---

## [2026-02-01] Système de Mémoire Persistante

### Contexte
Besoin de conserver le contexte et les connaissances entre les sessions de travail pour ne jamais perdre l'historique du projet.

### Décision
Implémentation d'un système dual :
1. **Supermemory MCP** - Mémoire conversationnelle via Model Context Protocol
2. **Documentation Markdown** - Documentation structurée et versionnée dans Git

### Configuration Supermemory
- Serveur : `@supermemory/mcp-server-memory` via npx
- Stockage local : `.claude/mcp/memory.json`
- Configuration : `.claude/mcp/config.json`

### Structure Documentation
```
docs/project-knowledge/
├── README.md           # Introduction
├── SESSIONS.md         # Historique des sessions
├── KNOWLEDGE-BASE.md   # Connaissances du projet
├── DECISIONS.md        # Ce fichier
└── CHANGELOG.md        # Modifications détaillées
```

### Conséquences

**Positives** :
- ✅ Contexte préservé entre sessions
- ✅ Historique complet versionné dans Git
- ✅ Double sauvegarde (MCP + Markdown)
- ✅ Facilite l'onboarding de nouveaux développeurs

**Négatives** :
- ⚠️ Nécessite de maintenir la documentation à jour
- ⚠️ Fichier memory.json peut devenir volumineux

### Alternatives considérées
1. ❌ Git commit messages uniquement - Pas assez détaillé
2. ❌ Wiki externe - Risque de désynchronisation
3. ✅ **Solution choisie** - Double système pour redondance

---

## [Historique] Choix du Stack Technique

### Contexte
Besoin d'un site corporate premium, moderne et performant.

### Décision
- **Next.js 16** - Framework React avec SSR/SSG
- **React 19** - Dernière version pour les features modernes
- **TailwindCSS 4** - Styling utilitaire et performant
- **Framer Motion** - Animations fluides et professionnelles
- **Lenis** - Smooth scrolling premium

### Conséquences
Stack moderne et performant, mais nécessite une veille technologique pour rester à jour.

---

*Ce fichier doit être mis à jour à chaque décision technique importante.*
