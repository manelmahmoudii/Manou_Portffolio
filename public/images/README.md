# Images Directory

Ce dossier contient les images utilisées dans le portfolio.

## Comment ajouter une image de profil :

1. Ajoutez votre image de profil dans ce dossier (par exemple : `profile.jpg`)
2. Modifiez le chemin dans `src/components/Header.tsx` :
   ```tsx
   src="/images/profile.jpg"
   ```

## Formats recommandés :
- **Format** : JPG, PNG, WebP
- **Taille** : 400x400px minimum
- **Ratio** : 1:1 (carré) pour un rendu optimal
- **Poids** : < 500KB pour de meilleures performances

## Images actuelles :
- Actuellement utilise une image Pexels externe
- Remplacez par votre propre image de profil

## Exemple d'utilisation :
```tsx
<img
  src="/images/votre-photo.jpg"
  alt="Votre Nom"
  className="w-80 h-80 rounded-full object-cover border-4 border-gray-800 shadow-2xl"
/>
```
