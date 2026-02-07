# Guide d'optimisation des images pour EGB Occitanie

## 🚀 TL;DR - Ce qu'il faut faire

**Pour 90% des cas : Ne faites RIEN de spécial**
- Ajoutez votre image dans `public/`
- Utilisez `<Image>` de Next.js
- Next.js optimise automatiquement en AVIF et WebP

**Optimisation manuelle uniquement si :**
- Image > 500 KB
- Image critique (hero, above the fold)
- Vous voulez réduire la taille initiale avant upload

---

## 📖 Processus détaillé

### Méthode 1 : Automatique avec Next.js (Recommandée)

```bash
# 1. Ajoutez votre image
cp ~/Downloads/villa-occitanie.jpg public/hero-villa.jpg

# 2. Utilisez-la dans votre code
```

```tsx
import Image from 'next/image'

<Image
  src="/hero-villa.jpg"
  alt="Villa en Occitanie"
  width={1920}
  height={1080}
  priority // Pour les images hero
  quality={85} // 75-85 est optimal
/>
```

**Avantages :**
✅ Conversion automatique en AVIF et WebP
✅ Redimensionnement responsive automatique
✅ Lazy loading automatique
✅ Aucun outil externe nécessaire

---

### Méthode 2 : Optimisation manuelle (Pour images > 500KB)

#### Option A : TinyPNG (Le plus simple)

1. **Allez sur** https://tinypng.com/
2. **Uploadez** votre image
3. **Téléchargez** l'image optimisée
4. **Remplacez** l'originale :

```bash
# Sauvegardez l'originale (optionnel)
mv public/hero-villa.jpg public/hero-villa-original.jpg

# Déplacez la version optimisée
mv ~/Downloads/hero-villa-optimized.jpg public/hero-villa.jpg
```

**Quand l'utiliser :**
- PNG avec beaucoup de couleurs
- Images > 1 MB
- Une fois, avant de déployer

#### Option B : Squoosh (Plus de contrôle)

1. **Allez sur** https://squoosh.app/
2. **Uploadez** votre image
3. **Configurez les paramètres :**
   - Format : WebP ou AVIF
   - Qualité : 80-85
   - Effort : 4 (bon compromis)
4. **Comparez** avant/après en temps réel
5. **Téléchargez** et remplacez

**Quand l'utiliser :**
- Vous voulez tester différents formats
- Vous avez besoin de contrôle précis sur la qualité
- Images hero critiques

#### Option C : CLI avec Sharp (Pour automatiser)

```bash
# Installation
npm install -g sharp-cli

# Optimisation unique
npx sharp -i public/hero-villa.jpg -o public/hero-villa-optimized.jpg --webp --quality 85

# Script pour optimiser toutes les images
cat > scripts/optimize-images.sh << 'EOF'
#!/bin/bash
for img in public/*.jpg; do
  echo "Optimizing $img..."
  npx sharp -i "$img" -o "${img%.jpg}-optimized.jpg" --webp --quality 85
done
EOF

chmod +x scripts/optimize-images.sh
```

---

## 🎯 Guide de décision rapide

```
Votre image fait-elle > 500 KB ?
│
├─ NON → Mettez-la directement dans public/, utilisez <Image>
│
└─ OUI → Est-ce une image critique (hero, above fold) ?
    │
    ├─ OUI → Optimisez avec TinyPNG ou Squoosh PUIS mettez dans public/
    │
    └─ NON → Mettez directement dans public/, Next.js s'en occupe
```

---

## 📊 Tailles recommandées

| Type d'image | Largeur max | Qualité | Format | Taille cible |
|--------------|-------------|---------|---------|--------------|
| Hero desktop | 1920px | 85 | JPG/WebP | < 200 KB |
| Hero mobile | 1080px | 80 | JPG/WebP | < 100 KB |
| Section images | 1200px | 80 | JPG/WebP | < 150 KB |
| Thumbnails | 600px | 75 | JPG/WebP | < 50 KB |
| Icons/logos | Variable | 100 | PNG/SVG | < 20 KB |

---

## ✅ Checklist pour votre image hero actuelle

```bash
# 1. Vérifiez la taille actuelle
ls -lh public/hero-villa.jpg

# 2. Si > 500 KB, optimisez avec TinyPNG
# 3. Remplacez le fichier
# 4. Vérifiez le résultat
npm run dev
# → Ouvrez http://localhost:3000 et vérifiez dans DevTools > Network
```

---

## 🔧 Configuration Next.js (Déjà en place)

Votre `next.config.ts` est déjà optimisé :

```typescript
images: {
  formats: ["image/avif", "image/webp"], // ✅ Formats modernes
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // ✅ Responsive
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // ✅ Thumbnails
}
```

---

## 🎬 Exemple concret pour votre hero-villa.jpg

### Scénario : Votre image fait 2.5 MB

```bash
# Option 1 : TinyPNG (recommandé pour vous)
# 1. Allez sur https://tinypng.com/
# 2. Uploadez hero-villa.jpg
# 3. Téléchargez la version optimisée (probablement ~400 KB)
# 4. Remplacez :
mv ~/Downloads/hero-villa.jpg public/hero-villa.jpg

# Option 2 : Squoosh (si vous voulez expérimenter)
# 1. https://squoosh.app/
# 2. Testez WebP qualité 85
# 3. Comparez visuellement
# 4. Téléchargez et remplacez

# Ensuite, utilisez dans votre code :
```

```tsx
<Image
  src="/hero-villa.jpg"
  alt="Villa moderne en Occitanie"
  width={1920}
  height={1080}
  priority
  quality={85}
  className="object-cover"
/>
```

Next.js va automatiquement :
- Créer une version AVIF (~150 KB)
- Créer une version WebP (~200 KB)
- Garder le JPG en fallback (~400 KB)
- Servir le meilleur format selon le navigateur

---

## ❓ FAQ

### Dois-je optimiser CHAQUE image ?

**Non.** Seulement :
- Images critiques (hero, above fold)
- Images très lourdes (> 500 KB)

Next.js s'occupe du reste automatiquement.

### TinyPNG vs Squoosh vs Sharp ?

- **TinyPNG** : Le plus simple, gratuit pour 20 images/mois
- **Squoosh** : Plus de contrôle, comparaison visuelle en temps réel
- **Sharp (CLI)** : Pour automatiser, si vous avez beaucoup d'images

### Et les SVG ?

Les SVG n'ont pas besoin d'optimisation via Next.js Image.
Optimisez-les avec [SVGOMG](https://jakearchibald.github.io/svgomg/) si nécessaire.

### Qualité recommandée ?

- **85** : Images hero, critiques
- **80** : Images de contenu standard
- **75** : Thumbnails, images secondaires

---

## 🚀 Action immédiate pour votre projet

```bash
# 1. Vérifiez si hero-villa.jpg existe et sa taille
ls -lh public/hero-villa*.jpg

# 2. Si > 500 KB :
#    → Allez sur https://tinypng.com/
#    → Optimisez
#    → Téléchargez
#    → Remplacez

# 3. Si < 500 KB :
#    → Ne faites rien, Next.js s'en occupe !

# 4. Vérifiez le résultat
npm run dev
```

---

## 📚 Ressources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- [AVIF vs WebP](https://jakearchibald.com/2020/avif-has-landed/)

---

**Conclusion :** Pour 90% de vos images, ne faites rien de spécial. Next.js optimise automatiquement. Optimisez manuellement uniquement les images critiques très lourdes.
