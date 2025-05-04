// src/lib/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBzM0deJc0bJKxaz4Bt9HFaCdoaKA2cBoU",
    authDomain: "ivpankaj.firebaseapp.com",
    projectId: "ivpankaj",
    storageBucket: "ivpankaj.firebasestorage.app",
    messagingSenderId: "917596654712",
    appId: "1:917596654712:web:e645b6eb56ca6941c2318d",
    measurementId: "G-J0JFES9BCG"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
