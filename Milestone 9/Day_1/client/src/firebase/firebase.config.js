// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAffzEeU_fznr35CsyMwcG_OmUDfVeMFRE",
  authDomain: "simple-firebase-auth-f8149.firebaseapp.com",
  projectId: "simple-firebase-auth-f8149",
  storageBucket: "simple-firebase-auth-f8149.firebasestorage.app",
  messagingSenderId: "1076614798",
  appId: "1:1076614798:web:3389b0f847b4dd43419bdf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
