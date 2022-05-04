// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7UCUXLNNqGm-T5yjJ468v328yv4tRsgY",
  authDomain: "my-vue-app-e24f0.firebaseapp.com",
  projectId: "my-vue-app-e24f0",
  storageBucket: "my-vue-app-e24f0.appspot.com",
  messagingSenderId: "801652517386",
  appId: "1:801652517386:web:d69e3902f5b9a225ebcdf3",
  measurementId: "G-9NSSWPL17M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const analytics = getAnalytics(app);

export {
  auth,
  db,
  analytics
}