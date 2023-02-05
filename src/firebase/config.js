// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2_6p_Odr9Fln-wN7az6mGBPxT5oyQcto",
  authDomain: "happy-drink-6fa41.firebaseapp.com",
  projectId: "happy-drink-6fa41",
  storageBucket: "happy-drink-6fa41.appspot.com",
  messagingSenderId: "102561682321",
  appId: "1:102561682321:web:1671c96ef3725e65a20030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)