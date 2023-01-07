// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqibHMGOdZyHNRx_-cEBIz_UNH-WRI9Hg",
  authDomain: "disney-react-clone-8de93.firebaseapp.com",
  projectId: "disney-react-clone-8de93",
  storageBucket: "disney-react-clone-8de93.appspot.com",
  messagingSenderId: "976308046761",
  appId: "1:976308046761:web:7337320c5d9e23a4d352b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;