// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwkwPwRTBes8zn4QodC997q20e84lP3ww",
  authDomain: "cineplix-8d165.firebaseapp.com",
  projectId: "cineplix-8d165",
  storageBucket: "cineplix-8d165.firebasestorage.app",
  messagingSenderId: "1067668959232",
  appId: "1:1067668959232:web:adae9c8aa97182187c28e5",
  measurementId: "G-EMT9YHCZ0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
export default auth
