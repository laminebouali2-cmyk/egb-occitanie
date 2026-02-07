# 🖼️ Workflow Images - Guide Rapide

## 🎯 Pour ajouter une nouvelle image (comme hero-villa.jpg)

### Étape 1 : Ajoutez l'image dans public/

```bash
# Copiez votre image depuis votre dossier de téléchargement
cp ~/Downloads/ma-nouvelle-villa.jpg public/hero-villa.jpg
```

### Étape 2 : Vérifiez la taille

```bash
# Utilisez notre script de vérification
./scripts/check-image-sizes.sh
```

Le script vous dira :
- ✅ **Vert** (< 200 KB) : Parfait, ne faites rien
- ⚠️ **Jaune** (200-500 KB) : OK, mais optimisation recommandée
- ❌ **Rouge** (> 500 KB) : **OPTIMISEZ MAINTENANT**

### Étape 3 : Optimisez si nécessaire (rouge ou jaune)

#### Option rapide : TinyPNG (2 minutes)

1. Ouvrez https://tinypng.com/
2. Glissez-déposez `public/hero-villa.jpg`
3. Attendez la compression (automatique)
4. Téléchargez le fichier optimisé
5. Remplacez l'original :

```bash
# Depuis votre dossier Downloads
mv ~/Downloads/hero-villa.jpg public/hero-villa.jpg
```

#### Option avancée : Squoosh (5 minutes pour comparer)

1. Ouvrez https://squoosh.app/
2. Glissez-déposez votre image
3. Testez différentes configurations :
   - **Format** : WebP ou MozJPEG
   - **Qualité** : 80-85
   - **Effort** : 4
4. Comparez visuellement (diviseur au milieu)
5. Téléchargez quand satisfait
6. Remplacez dans public/

### Étape 4 : Utilisez dans votre code

```tsx
import Image from 'next/image'

<Image
  src="/hero-villa.jpg"
  alt="Villa moderne en Occitanie avec piscine"
  width={1920}
  height={1080}
  priority // Important pour les images hero
  quality={85}
  className="object-cover w-full h-full"
/>
```

### Étape 5 : Testez en local

```bash
npm run dev
```

Puis ouvrez les DevTools (F12) :
1. Onglet **Network**
2. Rechargez la page (Ctrl+R)
3. Cherchez votre image
4. Vérifiez :
   - Format servi (devrait être AVIF ou WebP)
   - Taille transférée (devrait être < taille originale)

---

## 🔄 Workflow complet (exemple réel)

```bash
# 1. Ajoutez l'image
cp ~/Downloads/villa-luxe-occitanie.jpg public/hero-villa.jpg

# 2. Vérifiez la taille
./scripts/check-image-sizes.sh

# Sortie :
# ❌ hero-villa.jpg
#    Taille: 2300 KB
#    → Optimisez avec TinyPNG ou Squoosh !

# 3. Optimisez avec TinyPNG
# (Allez sur https://tinypng.com/, uploadez, téléchargez)

# 4. Remplacez
mv ~/Downloads/hero-villa.jpg public/hero-villa.jpg

# 5. Re-vérifiez
./scripts/check-image-sizes.sh

# Sortie :
# ✅ hero-villa.jpg
#    Taille: 180 KB
#    → Parfait, aucune action nécessaire

# 6. Testez
npm run dev
```

---

## 📊 Tableau de décision rapide

| Taille originale | Action | Outil | Temps |
|------------------|--------|-------|-------|
| < 200 KB | Rien ! | - | 0 min |
| 200-500 KB | Optionnel | TinyPNG | 2 min |
| 500 KB - 1 MB | Recommandé | TinyPNG | 2 min |
| > 1 MB | **OBLIGATOIRE** | TinyPNG ou Squoosh | 2-5 min |

---

## ❓ Questions fréquentes

### Dois-je optimiser TOUTES mes images ?

**Non !** Seulement :
- Images hero (above the fold)
- Images > 500 KB

Next.js optimise le reste automatiquement.

### TinyPNG est-il gratuit ?

Oui, 20 images/mois gratuitement. Largement suffisant pour la plupart des projets.

### L'image optimisée est-elle de moins bonne qualité ?

Non, la compression est "perceptuellement sans perte". L'œil humain ne voit pas la différence, mais le fichier est 60-80% plus léger.

### Que fait Next.js exactement avec mes images ?

Next.js :
1. Convertit en AVIF et WebP (formats modernes)
2. Redimensionne selon l'appareil (mobile, tablette, desktop)
3. Lazy load (charge uniquement quand visible)
4. Cache agressivement

### Puis-je voir les images générées par Next.js ?

Oui, pendant le dev :
```bash
# Pendant que npm run dev tourne, regardez dans :
.next/cache/images/
```

---

## 🎬 Commandes utiles

```bash
# Vérifier toutes les images
./scripts/check-image-sizes.sh

# Voir la taille d'une image spécifique
ls -lh public/hero-villa.jpg

# Voir toutes les images et leur taille
ls -lh public/*.{jpg,png,webp}

# Supprimer le cache Next.js (forcer la regénération)
rm -rf .next/cache/images/

# Tester en production localement
npm run build && npm run start
```

---

## 🚀 Checklist avant de commit

- [ ] Toutes les images > 500 KB sont optimisées
- [ ] Les images hero utilisent `priority={true}`
- [ ] Les images utilisent le composant `<Image>` de Next.js
- [ ] Les images ont des attributs `alt` descriptifs
- [ ] Les dimensions `width` et `height` sont spécifiées
- [ ] Script `./scripts/check-image-sizes.sh` ne montre pas d'erreurs rouges

---

## 💡 Astuce pro

Ajoutez cette commande à votre workflow git :

```bash
# Dans votre .git/hooks/pre-commit (créez-le si nécessaire)
#!/bin/bash
./scripts/check-image-sizes.sh
```

Cela vérifiera automatiquement les images avant chaque commit !

---

**Résumé en 3 lignes :**
1. Ajoutez l'image dans `public/`
2. Lancez `./scripts/check-image-sizes.sh`
3. Si rouge (> 500 KB) → TinyPNG → Remplacez → C'est fini !
