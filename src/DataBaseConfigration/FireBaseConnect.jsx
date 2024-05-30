// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDxGTnXkmuwQ8OtqoydxZrohmYTgbVY_iQ",
  authDomain: "chattingapp-12a3c.firebaseapp.com",
  projectId: "chattingapp-12a3c",
  storageBucket: "chattingapp-12a3c.appspot.com",
  messagingSenderId: "422907469601",
  appId: "1:422907469601:web:c9c95b7a10bf6e38ca6860"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
