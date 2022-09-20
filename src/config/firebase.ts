// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL61dBdPOtq4xk8affg6u8jvr5U0TckN8",
  authDomain: "social-media-project-157c7.firebaseapp.com",
  projectId: "social-media-project-157c7",
  storageBucket: "social-media-project-157c7.appspot.com",
  messagingSenderId: "777775823951",
  appId: "1:777775823951:web:1bcc58ab0b4d5ed2c43e3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
