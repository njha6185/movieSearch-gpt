// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXTy7O43RkOT9z1M5pFQA9JP83X8V3cUk",
  authDomain: "netflixgpt-7bff8.firebaseapp.com",
  projectId: "netflixgpt-7bff8",
  storageBucket: "netflixgpt-7bff8.appspot.com",
  messagingSenderId: "243652005323",
  appId: "1:243652005323:web:da861c6fbf4bfb9df3ba4e",
  measurementId: "G-7T4Q2100GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);