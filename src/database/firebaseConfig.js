// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgmh5xos7wT71eS3syOOJj8ktjKfwCAok",
  authDomain: "ecom-424cb.firebaseapp.com",
  projectId: "ecom-424cb",
  storageBucket: "ecom-424cb.firebasestorage.app",
  messagingSenderId: "614840254105",
  appId: "1:614840254105:web:e22cccfe6d3c70e0004208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app