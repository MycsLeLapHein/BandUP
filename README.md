# BANDUP — entraînement haut du corps aux bandes élastiques

Application web autonome pour débutant : trois programmes de musculation du haut du corps et une bibliothèque de **38 exercices** illustrés, avec les cinq bandes élastiques en boucle du set (jaune, rouge, noire, violette, verte).

## Version en ligne

**https://mycslelaphein.github.io/BandUP/**

## Ouvrir l’application

1. Garde **tout le dossier** ensemble (`index.html`, `styles.css`, `app.js` et `assets/gifs`).
2. Double-clique sur **`index.html`**.
3. L’app fonctionne hors ligne, sans installation ni serveur.

> Si tu déplaces l’application, déplace le dossier complet : les GIFs sont stockés dans `assets/gifs`.

## Installer sur smartphone (Chrome Android)

1. Ouvre l’adresse GitHub Pages du projet dans **Chrome** : `https://mycslelaphein.github.io/BandUP/`
2. Menu **⋮** → **Installer l’application** (ou **Ajouter à l’écran d’accueil**).
3. BANDUP apparaît comme une vraie appli et fonctionne ensuite **hors ligne**.

> Pour publier une mise à jour, change `VERSION` dans `sw.js` (ex. `bandup-v2`) afin que les téléphones rechargent les fichiers.

## Les programmes

| Onglet | Rythme | Format | Jours d’entraînement |
|---|---|---|---|
| **15 min** | 4 jours / 7 | 5 exercices en circuit, 2 tours, 40 s d’effort / 20 s de repos | Lun · Mer · Ven · Sam |
| **30 min** | 4 jours / 7 | Blocs force + volume + finition gainage | Lun · Mer · Ven · Sam |
| **60 min** | 4 jours / 7 | Split push / pull, 3 séries par exercice, repos longs | Lun · Mer · Ven · Sam |

Les jours de repos sont **mardi, jeudi et dimanche**.

### Répartition des séances

- **15 min** : Base · Dos · Équilibre · Bras & gainage
- **30 min** : Push · Pull · Full haut · Bras & gainage
- **60 min** : Push A · Pull A · Push B · Pull B

Le programme de 60 minutes est ambitieux pour un vrai débutant : commence par **2 séances par semaine** (lundi et mercredi) pendant les deux premières semaines, puis ajoute les deux autres si tu récupères bien.

## Bibliothèque d’exercices

Le bouton **Exercices** dans l’en-tête ouvre les **38 mouvements** de l’application :

- filtre par groupe musculaire : **Pectoraux, Dos, Épaules, Bras, Gainage** ;
- recherche par nom ou muscle ;
- un GIF animé et une fiche technique pour chaque exercice ;
- les exercices des programmes et les variantes supplémentaires sont réunis au même endroit.

Les nouveaux mouvements incluent notamment le tirage assis, la traction assistée, le tirage à genoux un bras, le curl au-dessus de la tête, les extensions de poignets et plusieurs variantes de gainage.

## Variantes automatiques des programmes

Les séances ne restent pas figées : à chaque nouvelle semaine, chaque emplacement du programme peut être remplacé par un autre exercice de la **même famille de mouvement** (tirage vertical, rowing, développé, curl, gainage…). Les séries, répétitions, temps de repos et la structure de la séance restent identiques.

- La variation est **stable pendant la semaine** et sauvegardée dans le navigateur.
- Le bouton **Mélanger** dans l’en-tête d’une séance propose immédiatement d’autres exercices cohérents.
- Une étiquette **Variante** indique les mouvements qui ont été remplacés ; la fiche technique rappelle l’exercice d’origine.
- Les variantes restent dans le même groupe musculaire et la bibliothèque complète reste accessible.

## Fonctionnalités

- **Un GIF animé par exercice**, avec le muscle ciblé et le matériel requis.
- **Fiche technique** pour chaque mouvement : 3 consignes, erreur à éviter, conseil, bande recommandée.
- **Bibliothèque filtrable** de 38 exercices avec recherche instantanée.
- **Minuteur de repos** intégré (20 s, 45 s, 60 s ou 75 s selon l’exercice).
- **Suivi de progression** : coche les exercices, la progression est sauvegardée dans le navigateur (`localStorage`).
- **Guide des cinq bandes** : correspondances livres / kilos, choix de la résistance, progression et règles de sécurité.
- **Responsive** : téléphone, tablette et ordinateur.
- **Aucune dépendance externe**, aucun compte, aucune connexion.

## Sécurité

- Inspecte la bande avant chaque séance.
- Ancre-la à un point fixe et solide ; teste la tension doucement.
- Ne l’étire pas au-delà de trois fois sa longueur et ne la relâche jamais d’un coup.
- En cas de douleur vive, de vertige ou d’essoufflement anormal : arrête et consulte un professionnel de santé.

Ce contenu est éducatif et ne remplace pas un avis médical.

## Structure

```
index.html          interface
styles.css          mise en page responsive
app.js              programmes, bibliothèque, variantes, interactions, minuteur
assets/gifs/        38 démonstrations animées
.nojekyll           configuration GitHub Pages
README.md
```

## Crédits

- Démonstrations animées : [exercises-dataset](https://github.com/hasaneyldrm/exercises-dataset), médias © [Gym visual](https://gymvisual.com/), utilisés à des fins éducatives avec attribution.
- Les niveaux de résistance (lb / kg) reprennent les indications du set de cinq bandes fourni.
