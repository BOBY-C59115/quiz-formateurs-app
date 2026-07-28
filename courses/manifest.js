// courses/manifest.js — Sommaire des cours disponibles dans l'appli.
//
// Pour ajouter un nouveau cours :
// 1. Demande à Claude de générer un fichier de cours suivant le modèle de
//    courses/exemple-ndrc-relation-client.js (voir README.md pour le prompt à utiliser)
// 2. Dépose le fichier généré dans ce dossier "courses/"
// 3. Ajoute une balise <script src="courses/ton-fichier.js"></script> dans teacher.html,
//    juste avant la balise <script src="courses/manifest.js">
// 4. Ajoute une ligne ci-dessous décrivant ce cours
// 5. Commit + push (GitHub Desktop) — rien d'autre à faire, aucun redéploiement de serveur

window.COURSE_MANIFEST = [
  {
    id: 'ndrc-relation-client',
    title: 'BTS NDRC — Relation client à distance et digitalisation',
    level: 'BTS 1re année',
    globalVar: 'COURSE_ndrc_relation_client', // doit correspondre à la variable définie dans le fichier du cours
  },
];
