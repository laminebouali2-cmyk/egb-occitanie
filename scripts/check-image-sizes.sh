#!/bin/bash

# Script pour vérifier les tailles d'images et donner des recommandations

echo "🖼️  Vérification des images dans public/"
echo "=========================================="
echo ""

# Couleurs
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

total_size=0
needs_optimization=0

# Vérifier toutes les images
shopt -s nullglob
for img in public/*.jpg public/*.jpeg public/*.png public/*.webp public/*.avif; do
  if [ -f "$img" ]; then
    size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
    size_kb=$((size / 1024))
    total_size=$((total_size + size))

    filename=$(basename "$img")

    # Déterminer si l'image nécessite une optimisation
    if [ $size_kb -gt 500 ]; then
      echo -e "${RED}❌ $filename${NC}"
      echo -e "   Taille: ${RED}${size_kb} KB${NC}"
      echo -e "   ${YELLOW}→ Optimisez avec TinyPNG ou Squoosh !${NC}"
      echo -e "   ${BLUE}→ https://tinypng.com/${NC}"
      echo ""
      needs_optimization=$((needs_optimization + 1))
    elif [ $size_kb -gt 200 ]; then
      echo -e "${YELLOW}⚠️  $filename${NC}"
      echo -e "   Taille: ${YELLOW}${size_kb} KB${NC}"
      echo -e "   → Optimisation recommandée mais pas critique"
      echo ""
    else
      echo -e "${GREEN}✅ $filename${NC}"
      echo -e "   Taille: ${GREEN}${size_kb} KB${NC}"
      echo -e "   → Parfait, aucune action nécessaire"
      echo ""
    fi
  fi
done

# Résumé
total_size_mb=$(echo "scale=2; $total_size / 1024 / 1024" | bc)
echo "=========================================="
echo -e "Total: ${BLUE}${total_size_mb} MB${NC}"

if [ $needs_optimization -gt 0 ]; then
  echo -e "${RED}$needs_optimization image(s) nécessitent une optimisation${NC}"
  echo ""
  echo "📋 Actions recommandées :"
  echo "1. Allez sur https://tinypng.com/"
  echo "2. Uploadez les images marquées en rouge"
  echo "3. Téléchargez les versions optimisées"
  echo "4. Remplacez les originales dans public/"
else
  echo -e "${GREEN}Toutes les images sont optimisées !${NC}"
fi

echo ""
echo "💡 Rappel : Next.js optimise automatiquement les images < 500 KB"
