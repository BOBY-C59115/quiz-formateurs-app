# Quiz Formateurs — Version statique (gratuite, autonome)

Une appli 100% HTML/CSS/JS, sans serveur, sans base de données, sans clé API payante.
Elle reprend exactement la mécanique de "Cap sur les vacances" (BTS NDRC1), généralisée
pour accueillir plusieurs cours, plusieurs niveaux de difficulté, et plusieurs matières.

## Comment ça marche

- `index.html` : page d'accueil, choix du rôle
- `teacher.html` : écran formateur — choix du cours + niveau de difficulté + jeux
  activés, création de la salle, pilotage du jeu en direct
- `team.html` : écran étudiant — rejoindre avec le code à 4 chiffres + nom d'équipe
- `firebase-config.js` : connexion à ton projet Firebase existant (`ndrc-vacances`),
  réutilisé tel quel pour la synchronisation temps réel
- `style.css` : habillage visuel (identique à l'original)
- `courses/manifest.js` : la liste des cours disponibles dans l'appli
- `courses/*.js` : un fichier par cours, contenant les questions rangées par niveau
  de difficulté (basique / confirmé / expert / consultant junior)

Aucun compte, aucune connexion, aucun paiement : tu ouvres `teacher.html`, tu choisis
un cours, tu crées la salle. C'est tout.

## Comment ajouter un nouveau cours

**Étape 1 — Demande le fichier à Claude**, dans une conversation normale (celle-ci ou
une nouvelle), avec un message de ce style :

> Génère-moi un fichier de cours au format JavaScript pour l'appli Quiz Formateurs,
> sur le sujet suivant : [décris ton cours ou colle ton support]. Niveau des étudiants :
> [ex. Seconde, BTS 2e année...]. Suis exactement le format du fichier
> `courses/exemple-ndrc-relation-client.js` (variable `window.COURSE_xxx`, avec les
> clés `quiz`, `vf`, `estimation`, `objections` sous `difficulties.confirme` — ou un
> autre niveau si tu précises basique/expert/consultant_junior). Renvoie uniquement le
> contenu du fichier, prêt à copier-coller.

**Étape 2** : copie le fichier généré dans le dossier `courses/`

**Étape 3** : ajoute une ligne dans `teacher.html`, juste avant `<script src="courses/manifest.js">` :
```html
<script src="courses/ton-nouveau-fichier.js"></script>
```

**Étape 4** : ajoute une entrée dans `courses/manifest.js` :
```js
{
  id: 'un-identifiant-unique',
  title: 'Titre affiché dans le menu',
  level: 'Niveau des étudiants',
  globalVar: 'COURSE_xxx', // doit correspondre à la variable du fichier
},
```

**Étape 5** : commit + push via GitHub Desktop, comme d'habitude. Rien d'autre à faire
— pas de redéploiement de serveur, pas de build, le site se met à jour automatiquement.

## Déploiement (GitHub Pages — gratuit, aucun serveur à gérer)

1. Crée un dépôt GitHub sur ton compte **BOBY-C59115** (ex. `quiz-formateurs-app`)
2. Clone-le avec GitHub Desktop, copie tous ces fichiers dedans, commit + push
3. Sur github.com, va dans **Settings** du dépôt → **Pages**
4. Dans "Branch", choisis `main` et le dossier `/ (root)` → **Save**
5. Après une minute ou deux, GitHub te donne une adresse du type
   `https://boby-c59115.github.io/quiz-formateurs-app/` → c'est ton appli, en ligne,
   gratuitement, pour toujours

## Utilisation en classe

1. Ouvre `teacher.html` (ou l'adresse GitHub Pages)
2. Choisis le cours, le niveau de difficulté, les jeux activés → "Créer la session"
3. Donne le code à 4 chiffres à tes étudiants, ils vont sur `team.html`, saisissent
   le code + leur nom d'équipe
4. Une fois les équipes connectées, clique "Démarrer la séance", choisis un jeu, pilote

## Limite actuelle

Chaque cours n'a pour l'instant qu'un seul niveau de difficulté rempli ("confirmé"
pour le cours d'exemple). Demande à Claude d'en générer d'autres au fur et à mesure
de tes besoins — pas besoin de tout prévoir d'un coup.
