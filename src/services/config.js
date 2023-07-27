import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "db-mi-tienda.firebaseapp.com",
  projectId: "db-mi-tienda",
  storageBucket: "db-mi-tienda.appspot.com",
  messagingSenderId: "512972245865",
  appId: "1:512972245865:web:77c08a6478c0fc4655cbf8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
