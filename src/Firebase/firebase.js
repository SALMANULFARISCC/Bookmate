// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
 
const firebaseConfig = {
  apiKey: "AIzaSyAO16S9B2CtMiLGOB7TyzHbpEN6DPR4Er8",
  authDomain: "bookmate-7ce6b.firebaseapp.com",
  projectId: "bookmate-7ce6b",
  storageBucket: "bookmate-7ce6b.appspot.com",
  messagingSenderId: "465834160134",
  appId: "1:465834160134:web:4eb2f551f20ea9875f5387",
  measurementId: "G-VD3EXLKQCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function signup(email,password) {
    return createUserWithEmailAndPassword(auth, email, password);

}

export async function signIn(email,password) {
  return await signInWithEmailAndPassword(auth, email , password)
}
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
