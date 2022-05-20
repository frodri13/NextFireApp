// import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZeoBSKgyyLdhw88U75WWiywhNaS4zZDI",
    authDomain: "nextfire-4a406.firebaseapp.com",
    projectId: "nextfire-4a406",
    storageBucket: "nextfire-4a406.appspot.com",
    messagingSenderId: "99783822415",
    appId: "1:99783822415:web:0ad9d402f7af9a2bf2ee3a",
    measurementId: "G-SFT43JC687"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// initialize auth && firestore with the 'firebaseApp' property

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export default firebaseApp;