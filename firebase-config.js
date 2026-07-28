// firebase-config.js — Quiz Formateurs (projet Firebase réutilisé : ndrc-vacances)
// Ce fichier utilise le SDK Firebase "compat" (chargé via CDN dans teacher.html et team.html).
// Ne pas remplacer par la version modulaire ES6 : elle nécessiterait un bundler (npm/webpack),
// ce qu'on évite volontairement ici pour rester 100% statique.

const firebaseConfig = {
  apiKey: "AIzaSyBSOHzSXdhI4_ahkmSL56O8Jl04SIutS5s",
  authDomain: "ndrc-vacances.firebaseapp.com",
  databaseURL: "https://ndrc-vacances-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ndrc-vacances",
  storageBucket: "ndrc-vacances.firebasestorage.app",
  messagingSenderId: "290698643251",
  appId: "1:290698643251:web:943130c88347b89ba02046"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
