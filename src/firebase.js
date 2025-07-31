// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5mCj5xvQHeqthmz5YI0-zJVdmZsPDfI4",
  authDomain: "cursorfirstproject-7b602.firebaseapp.com",
  projectId: "cursorfirstproject-7b602",
  storageBucket: "cursorfirstproject-7b602.firebasestorage.app",
  messagingSenderId: "83588507179",
  appId: "1:83588507179:web:43c150a9db096254d92c6e",
  measurementId: "G-B6X7C6VC4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);