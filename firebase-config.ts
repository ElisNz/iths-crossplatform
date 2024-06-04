// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJVoufTwOdNb7iGqf3w8Jo5PiFM7y6kmk",
  authDomain: "crossplatform-mobile.firebaseapp.com",
  projectId: "crossplatform-mobile",
  storageBucket: "crossplatform-mobile.appspot.com",
  messagingSenderId: "677650587158",
  appId: "1:677650587158:web:39ef43d90a43e99b3a9f37",
  measurementId: "G-BW14HHQDP0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
