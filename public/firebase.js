// IMPORTS FIREBASE

import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// CONFIG FIREBASE

const firebaseConfig = {

apiKey: "AIzaSyCZsmjP_FHlBOmjH6hc6XYA6C04BvRQQq8",
  authDomain: "gespec-bed64.firebaseapp.com",
  projectId: "gespec-bed64",
  storageBucket: "gespec-bed64.firebasestorage.app",
  messagingSenderId: "849414390455",
  appId: "1:849414390455:web:8f27d14ecd5bf343560332"
};



// INICIALIZAÇÃO

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// EXPORTA

export {
    db,
    collection,
    addDoc
};