import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuNJNis230O37ujCJpDg_tQ0imgu9owmk",
  authDomain: "animal-management-system-3afea.firebaseapp.com",
  projectId: "animal-management-system-3afea",
  storageBucket: "animal-management-system-3afea.firebasestorage.app",
  messagingSenderId: "73345553703",
  appId: "1:73345553703:web:30e4d8a65fe3312790c502"
};

 export const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)