// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfjebXzHPsQmTAtBTlbWHgepcU9vyLOCE",
  authDomain: "couponpro-f66b9.firebaseapp.com",
  projectId: "couponpro-f66b9",
  storageBucket: "couponpro-f66b9.firebasestorage.app",
  messagingSenderId: "596867370759",
  appId: "1:596867370759:web:9988d637ac5d87cc883fa2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
