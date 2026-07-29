# Quiz Formateurs — Version statique (gratuite, autonome, ergonomique)

Une appli 100% HTML/CSS/JS, sans serveur, sans base de données, sans clé API payante.
Toute la gestion des cours se fait **directement dans l'appli** — aucun fichier à
modifier, aucun GitHub à toucher pour ajouter un cours.

## Comment ça marche

- `index.html` : page d'accueil, choix du rôle
- `teacher.html` : **tout se passe ici** — bibliothèque de cours, ajout de nouveaux
  cours, lancement de séance, pilotage du jeu en direct
- `team.html` : écran étudiant — rejoindre avec le code à 4 chiffres + nom d'équipe
- `firebase-config.js` : connexion à ton projet Firebase existant (`ndrc-vacances`),
  pour la synchronisation temps réel pendant le jeu
- `style.css` : habillage visuel

Tes cours sont stockés directement dans **ce navigateur** (technique appelée
`localStorage`) — pas de compte, pas de connexion, pas de synchronisation entre
appareils. Si tu changes d'ordinateur, tu repars avec la bibliothèque vide (mais un
cours déjà généré peut être ré-importé en quelques secondes, voir plus bas).

## Comment ajouter un nouveau cours (aucune compétence technique requise)

1. Ouvre `teacher.html` → tu arrives sur ta **Bibliothèque**
2. Clique **"+ Ajouter un cours"**
3. Remplis le formulaire à l'écran :
   - Titre du cours
   - Classe / niveau des étudiants
   - As-tu un référentiel officiel à respecter ? (Oui/Non + son nom si oui)
   - Thématique à privilégier (optionnel)
   - As-tu un support de cours ? Si oui, dépose ton **PDF, Word ou PowerPoint** —
     l'appli lit le texte directement dans ton navigateur, aucun envoi à un serveur
   - Coche les niveaux de difficulté et les jeux que tu veux générer
4. Clique **"Générer le texte à copier"**
5. Suis les 4 étapes affichées à l'écran : copie le texte, colle-le dans une
   conversation avec Claude (gratuite), copie sa réponse, colle-la dans la case du bas,
   clique **"Importer"**
6. Le cours apparaît immédiatement dans ta bibliothèque, prêt à être lancé

Fichier Pages ou Keynote ? Exporte-le d'abord en PDF, .docx ou .pptx (sur Mac :
Fichier → Exporter vers) avant de le déposer dans l'appli.

## Utilisation en classe

1. Dans ta bibliothèque, clique **"▶ Lancer"** sur le niveau de difficulté souhaité
2. Coche les jeux actifs pour cette séance → **"Créer la session"**
3. Donne le code à 4 chiffres à tes étudiants ; ils ouvrent `team.html`, saisissent
   le code + leur nom d'équipe
4. Une fois les équipes connectées, clique **"Démarrer la séance"**, choisis un jeu, pilote

## Sauvegarder / transférer tes cours

Comme les cours vivent dans ton navigateur, voici comment les garder en sécurité ou
les utiliser sur un autre appareil :
- Garde précieusement les réponses JSON que Claude t'a données pour chaque cours —
  tu peux les recoller dans "Ajouter un cours" sur n'importe quel navigateur pour
  les récupérer instantanément
- (Amélioration possible plus tard si besoin : un bouton "Exporter toute ma
  bibliothèque" / "Importer une bibliothèque", à demander si utile)

## Déploiement (GitHub Pages — gratuit, aucun serveur à gérer)

1. Crée un dépôt GitHub sur ton compte **BOBY-C59115** (ex. `quiz-formateurs-app`)
2. Dépose ces fichiers dedans (glisser-déposer via "Add file → Upload files" sur
   github.com, ou via GitHub Desktop), commit
3. Sur github.com, va dans **Settings** du dépôt → **Pages**
4. Sous "Build and deployment" → "Branch", choisis **main** et **/ (root)** → **Save**
5. Après une minute ou deux, GitHub te donne une adresse du type
   `https://boby-c59115.github.io/quiz-formateurs-app/` → c'est ton appli, en ligne,
   gratuitement, pour toujours

## Règles Firebase à vérifier

Si "Créer la session" ne fonctionne pas (message d'erreur `permission_denied` dans
la console du navigateur), va sur console.firebase.google.com → projet
`ndrc-vacances` → Realtime Database → Règles, et vérifie que tu as bien :
```json
{ "rules": { ".read": true, ".write": true } }
```
