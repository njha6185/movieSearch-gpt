// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflixgpt-7bff8.firebaseapp.com",
  projectId: "netflixgpt-7bff8",
  storageBucket: "netflixgpt-7bff8.appspot.com",
  messagingSenderId: "243652005323",
  appId: "1:243652005323:web:da861c6fbf4bfb9df3ba4e",
  measurementId: "G-7T4Q2100GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
