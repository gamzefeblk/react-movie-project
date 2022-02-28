// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApfGT2V_fj8wlv-rGJ8od3lyPArmF38hk",
  authDomain: "react-movie-project-d268b.firebaseapp.com",
  projectId: "react-movie-project-d268b",
  storageBucket: "react-movie-project-d268b.appspot.com",
  messagingSenderId: "1055271832261",
  appId: "1:1055271832261:web:46686780710354d3fbbeac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app) 