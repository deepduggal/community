'use client';
import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// import { isSupported, getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn9JakJN-izD7uDrsFHxQEV7H5DxS-s9Q",
  authDomain: "collab-text-editor-b3328.firebaseapp.com",
  projectId: "collab-text-editor-b3328",
  storageBucket: "collab-text-editor-b3328.appspot.com",
  messagingSenderId: "443381731232",
  appId: "1:443381731232:web:77268257b25ef694111ec5",
  measurementId: "G-N6M4N3NLEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};

// Firestore
export const db = getFirestore();

// Analytics
// if (isSupported()) {
//   const analytics = getAnalytics(app);
// }
