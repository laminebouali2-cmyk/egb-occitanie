# Changelog Détaillé du Projet

Toutes les modifications notables du projet sont documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Versionnage Sémantique](https://semver.org/lang/fr/).

---

## [2026-02-01] - Configuration Système de Mémoire

### Ajouté
- Configuration MCP Supermemory (`.claude/mcp/config.json`)
- Système de documentation structurée dans `docs/project-knowledge/`
- Fichiers de documentation :
  - `README.md` - Introduction et structure
  - `SESSIONS.md` - Historique des sessions
  - `KNOWLEDGE-BASE.md` - Base de connaissances complète
  - `DECISIONS.md` - Décisions architecturales (ADR)
  - `CHANGELOG.md` - Ce fichier

### Configuration
- Serveur MCP : `@supermemory/mcp-server-memory`
- Stockage mémoire : `.claude/mcp/memory.json`

### Objectif
Assurer la persistance des connaissances et du contexte entre toutes les sessions de travail.

---

## [Historique] - Commits Git Récents

### [29604f6] - 2026-01-XX
**fix: Improve homepage Hero design and readability**
- Améliorations du design de la section Hero
- Amélioration de la lisibilité

### [da19385] - 2026-01-XX
**fix: Correct ContactSection import statements**
- Correction des imports du composant ContactSection

### [6eb53ce] - 2026-01-XX
**fix: Resolve JSX parsing errors in build**
- Résolution d'erreurs de parsing JSX lors du build

### [5880ed2] - 2026-01-XX
**feat: Apply Carmes premium design to renovation-saint-etienne page**
- Application du design premium "Carmes"
- Page : renovation-saint-etienne

### [9f33f01] - 2026-01-XX
**feat: Apply Carmes premium design to renovation-saint-cyprien page**
- Application du design premium "Carmes"
- Page : renovation-saint-cyprien

---

## Template pour Nouvelles Entrées

```markdown
## [YYYY-MM-DD] - Titre de la Modification

### Ajouté
- Nouvelles fonctionnalités

### Modifié
- Changements sur des fonctionnalités existantes

### Corrigé
- Corrections de bugs

### Supprimé
- Fonctionnalités retirées

### Sécurité
- Corrections de vulnérabilités
```

---

*Ce fichier doit être mis à jour à chaque modification significative du projet.*
