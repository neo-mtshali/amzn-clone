// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAIa7_59Dpc6KVR52FWGRFWk2XTWEWGB-4",
    authDomain: "amzn-clone-72f92.firebaseapp.com",
    projectId: "amzn-clone-72f92",
    storageBucket: "amzn-clone-72f92.firebasestorage.app",
    messagingSenderId: "53654525969",
    appId: "1:53654525969:web:12a656468566894709f9b0",
    measurementId: "G-C7RMQE59GV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };