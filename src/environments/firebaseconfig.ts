// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACJ9uq0Gphlne0Y82IEWp0TtBgDCPIRvE",
  authDomain: "contacts-app-ec3cf.firebaseapp.com",
  projectId: "contacts-app-ec3cf",
  storageBucket: "contacts-app-ec3cf.appspot.com",
  messagingSenderId: "1099433337735",
  appId: "1:1099433337735:web:ae226d377e49705115e922",
  measurementId: "G-4JB6P4DPY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);