import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANuDTjD4J8EOoklTvz3ChkEjgtd2PXQ3U",
  authDomain: "books-product.firebaseapp.com",
  projectId: "books-product",
  storageBucket: "books-product.firebasestorage.app",
  messagingSenderId: "704283442779",
  appId: "1:704283442779:web:69b7bd1ebbef678a82097e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
