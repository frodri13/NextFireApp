// import firebaseConfig from "./firebaseConfig";
import { getApp, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, where, getDocs, query, limit } from "firebase/firestore";

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
function createFirebaseApp(config) {
    try {
        return getApp();
    } catch {
        return initializeApp(config);
    }
}


const firebaseApp = createFirebaseApp(firebaseConfig);

// initialize auth && firestore with the 'firebaseApp' property

export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore Exports
export const firestore = getFirestore(firebaseApp);

export default firebaseApp;

export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1)
}