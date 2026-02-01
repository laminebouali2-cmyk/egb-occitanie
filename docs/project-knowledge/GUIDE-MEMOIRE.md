# Guide d'Utilisation du Système de Mémoire

## 🎯 Objectif

Ce système garantit que **aucune connaissance ne soit perdue** entre les sessions de travail avec Claude. Vous pouvez reprendre n'importe quelle conversation avec tout le contexte préservé.

## 📦 Composants du Système

### 1. Supermemory MCP (Mémoire Conversationnelle)

**Localisation** : `.claude/mcp/`

- **Configuration** : `config.json` (versionné dans Git)
- **Données** : `memory.json` (local, non versionné)

**Fonctionnement** :
- Stocke automatiquement les informations importantes des conversations
- Accessible par Claude via le Model Context Protocol
- Persistant entre les sessions

**Utilisation** :
```bash
# Le serveur MCP démarre automatiquement avec Claude Code
# Aucune action manuelle nécessaire
```

### 2. Documentation Markdown (Mémoire Structurée)

**Localisation** : `docs/project-knowledge/`

Fichiers principaux :
- **README.md** - Vue d'ensemble du système
- **SESSIONS.md** - Journal des sessions de travail
- **KNOWLEDGE-BASE.md** - Base de connaissances complète
- **DECISIONS.md** - Décisions techniques (ADR)
- **CHANGELOG.md** - Historique des modifications
- **GUIDE-MEMOIRE.md** - Ce fichier

## 🔄 Workflow Recommandé

### À chaque début de session
1. Lire `SESSIONS.md` pour voir ce qui a été fait précédemment
2. Consulter `KNOWLEDGE-BASE.md` pour le contexte global
3. Vérifier `CHANGELOG.md` pour les dernières modifications

### Pendant le travail
- Claude met à jour automatiquement la mémoire MCP
- Documenter les décisions importantes dans `DECISIONS.md`

### En fin de session
1. Mettre à jour `SESSIONS.md` avec le résumé de la session
2. Ajouter les modifications dans `CHANGELOG.md`
3. Mettre à jour `KNOWLEDGE-BASE.md` si nécessaire
4. Commit et push des modifications

## 📝 Comment Documenter

### Ajouter une nouvelle session
Dans `SESSIONS.md` :
```markdown
## Session du YYYY-MM-DD

### Objectif
[Ce qu'on voulait accomplir]

### Actions réalisées
1. [Action 1]
2. [Action 2]

### État du projet
- Branch : [nom]
- Dernier commit : [hash] - [message]

### Prochaines étapes
- [Étape 1]
- [Étape 2]

---
```

### Documenter une décision technique
Dans `DECISIONS.md` :
```markdown
## [YYYY-MM-DD] Titre de la Décision

### Contexte
[Pourquoi cette décision était nécessaire]

### Décision
[Ce qui a été décidé]

### Conséquences
**Positives** :
- ✅ [Avantage 1]

**Négatives** :
- ⚠️ [Inconvénient 1]

---
```

### Enregistrer une modification
Dans `CHANGELOG.md` :
```markdown
## [YYYY-MM-DD] - Titre

### Ajouté
- [Nouvelle fonctionnalité]

### Modifié
- [Changement]

### Corrigé
- [Bug fix]

---
```

## 🔍 Recherche d'Information

### Trouver une information spécifique
```bash
# Rechercher dans toute la documentation
grep -r "mot-clé" docs/project-knowledge/

# Rechercher dans les sessions
grep "mot-clé" docs/project-knowledge/SESSIONS.md

# Voir l'historique Git d'un fichier de doc
git log -p docs/project-knowledge/KNOWLEDGE-BASE.md
```

### Questions fréquentes
- **"Où en est le projet ?"** → `SESSIONS.md` (dernière session)
- **"Pourquoi avons-nous fait ce choix ?"** → `DECISIONS.md`
- **"Quelles sont les technologies utilisées ?"** → `KNOWLEDGE-BASE.md`
- **"Qu'est-ce qui a changé récemment ?"** → `CHANGELOG.md`

## 🛠️ Maintenance

### Fichiers versionnés dans Git
✅ Tous les fichiers markdown dans `docs/project-knowledge/`
✅ Configuration MCP (`.claude/mcp/config.json`)

### Fichiers exclus de Git
❌ Mémoire MCP (`.claude/mcp/memory.json`)
❌ Bases de données MCP (`.claude/mcp/*.db`)

### Nettoyage périodique
Si le fichier `memory.json` devient trop volumineux :
```bash
# Sauvegarder puis supprimer (se régénérera automatiquement)
mv .claude/mcp/memory.json .claude/mcp/memory.json.backup
```

## 💡 Bonnes Pratiques

### ✅ À FAIRE
- Documenter immédiatement après une décision importante
- Mettre à jour `SESSIONS.md` en fin de session
- Être précis et concis dans les descriptions
- Utiliser des liens entre fichiers quand pertinent
- Commiter régulièrement la documentation

### ❌ À ÉVITER
- Retarder la documentation ("je le ferai plus tard")
- Copier-coller sans adaptation
- Documenter des détails évidents ou triviaux
- Laisser la documentation devenir obsolète

## 🚀 Avantages du Système

1. **Continuité** - Reprendre n'importe quelle conversation avec tout le contexte
2. **Onboarding** - Nouveau développeur comprend rapidement le projet
3. **Traçabilité** - Historique complet des décisions et modifications
4. **Collaboration** - Équipe synchronisée sur les connaissances
5. **Double sauvegarde** - MCP (local) + Git (versionné et distant)

## 📞 Support

Si vous avez des questions sur ce système ou souhaitez l'améliorer, documentez vos suggestions dans `DECISIONS.md` en tant que nouvelle décision à prendre.

---

*Ce guide est un document vivant qui évolue avec le projet.*
