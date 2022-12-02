import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "authentication-e79e1.firebaseapp.com",
  projectId: "authentication-e79e1",
  storageBucket: "authentication-e79e1.appspot.com",
  messagingSenderId: "987338859958",
  appId: "1:987338859958:web:d3458e0085d8ca7d68cd17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
