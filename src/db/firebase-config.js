import { initializeApp } from "firebase/app";
import {getFirestore}   from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC41lD2xJTX-R5FciL-QscrYZbznhUkj4w",
    authDomain: "ecoomerce-coderhouse.firebaseapp.com",
    projectId: "ecoomerce-coderhouse",
    storageBucket: "ecoomerce-coderhouse.appspot.com",
    messagingSenderId: "970168039145",
    appId: "1:970168039145:web:73fe8e4a57de4c5e84e278"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)