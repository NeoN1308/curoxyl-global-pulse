// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDfRyTik2O6TGOveYaSLdKU39KLMwTc6w",
  authDomain: "hkr130408.firebaseapp.com",
  databaseURL: "https://hkr130408-default-rtdb.firebaseio.com",
  projectId: "hkr130408",
  storageBucket: "hkr130408.firebasestorage.app",
  messagingSenderId: "736522668177",
  appId: "1:736522668177:web:56ec063e71967a10fad730",
  measurementId: "G-ZZBZQJSGM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);