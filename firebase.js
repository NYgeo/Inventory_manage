// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKaUNxel_0UlbMFQlfmR0d3rWZVMDs6n4",
  authDomain: "inventory-management-41ee0.firebaseapp.com",
  projectId: "inventory-management-41ee0",
  storageBucket: "inventory-management-41ee0.appspot.com",
  messagingSenderId: "413985460154",
  appId: "1:413985460154:web:a33fd6a02e9d3e984f9783",
  measurementId: "G-93NNHTME7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};