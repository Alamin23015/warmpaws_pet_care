// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDglqj3ymPf9xNr-X90lkufY3dmQeWu0EI",
  authDomain: "my-first-firebase-a23dd.firebaseapp.com",
  projectId: "my-first-firebase-a23dd",
  storageBucket: "my-first-firebase-a23dd.firebasestorage.app",
  messagingSenderId: "268242831745",
  appId: "1:268242831745:web:c50fd0b18e3f4ad1f3c080"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);