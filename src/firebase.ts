import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFotdiP3J0ftcQBqbBBHbh5kvMUa6fqP8",
  authDomain: "hug-and-heal.firebaseapp.com",
  projectId: "hug-and-heal",
  storageBucket: "hug-and-heal.firebasestorage.app",
  messagingSenderId: "348016346995",
  appId: "1:348016346995:web:018c61ec5904a435602706",
  measurementId: "G-96NKX0FMMX"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
