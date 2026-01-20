# 📁 Hero Image Sequence

## Instructions

Placez vos **192 frames** dans ce dossier avec le nommage suivant :

```
frame-001.jpg
frame-002.jpg
frame-003.jpg
...
frame-192.jpg
```

## Spécifications

- **Format** : JPG (optimisé pour le web)
- **Résolution** : 1280x720 pixels (ou supérieur)
- **Compression** : Qualité 80-85% (compromis qualité/poids)
- **Nommage** : `frame-XXX.jpg` (3 chiffres avec zéros devant)

## Optimisation recommandée

Si les images sont trop lourdes, utilisez :

```bash
# ImageMagick (pour compresser toutes les images)
for f in *.jpg; do convert "$f" -quality 85 -resize 1920x1080 "optimized-$f"; done

# TinyPNG (en ligne, meilleure compression)
# https://tinypng.com/
```

## Vérification

Une fois les images copiées, vérifiez :

```bash
ls -1 public/sequence/hero/*.jpg | wc -l
# Devrait afficher : 192
```
