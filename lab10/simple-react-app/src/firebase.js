import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0fdobgRD4e-bFJISnBwAJ-DWaDp3hosY",
    authDomain: "lab10-b75eb.firebaseapp.com",
    projectId: "lab10-b75eb",
    storageBucket: "lab10-b75eb.firebasestorage.app",
    messagingSenderId: "858555517070",
    appId: "1:858555517070:web:df5a65912e080ccf7561df",
    measurementId: "G-RMS3JQ094Y"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);