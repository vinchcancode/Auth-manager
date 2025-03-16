// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
} from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA-SWrkNo18UClN9smmwKizvdCg1qXObPs",
  authDomain: "code-manager-f080d.firebaseapp.com",
  projectId: "code-manager-f080d",
  storageBucket: "code-manager-f080d.firebasestorage.app",
  messagingSenderId: "116094193451",
  appId: "1:116094193451:web:26c4531f436a49bb123f6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, collection, getDocs, addDoc, doc };
