// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVRCnuMwmZhfF2Ne0b8R9XgvLYzjxCwVs",
  authDomain: "netflixgpt-cc17f.firebaseapp.com",
  projectId: "netflixgpt-cc17f",
  storageBucket: "netflixgpt-cc17f.appspot.com",
  messagingSenderId: "796535359935",
  appId: "1:796535359935:web:bb0f67b9e0bdc1433af90a",
  measurementId: "G-0QN3ETZEHZ"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
export const auth = getAuth();