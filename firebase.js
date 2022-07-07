// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOXvhIWo5Z4gs3qQQU3XsE-y1VKptxTqk",
  authDomain: "eben-cabs.firebaseapp.com",
  projectId: "eben-cabs",
  storageBucket: "eben-cabs.appspot.com",
  messagingSenderId: "969137491670",
  appId: "1:969137491670:web:99bfe99cfbcbe15a500377",
  measurementId: "G-8ZZZ210L4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth}