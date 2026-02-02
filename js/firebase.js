import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGeEaYTQ3VlL5L9fWOK67W-XUp2bfKDLM",
    authDomain: "empseb-31.firebaseapp.com",
    projectId: "empseb-31",
    storageBucket: "empseb-31.firebasestorage.app",
    messagingSenderId: "1008721170743",
    appId: "1:1008721170743:web:028d68ba2e359775be8ab2",
    measurementId: "G-NJNQ8BCXD4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
