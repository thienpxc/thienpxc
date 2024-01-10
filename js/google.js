// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getStorage, ref
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBufGh5YxA9B6XRy6a8wlJB6q3k75GXu5g",
  authDomain: "theinky-598ed.firebaseapp.com",
  projectId: "theinky-598ed",
  storageBucket: "theinky-598ed.appspot.com",
  messagingSenderId: "164272854667",
  appId: "1:164272854667:web:abab3b4ea7b3d5f206a68e",
  measurementId: "G-1VWNEXT47K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const getStorage = getStorage;
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  return await signInWithPopup(auth, provider);
}

