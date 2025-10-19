
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs 
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyD1wJKja7j2Q79b9R4X9b6HLqmCGNcK8g8",
  authDomain: "hackathon-120.firebaseapp.com",
  projectId: "hackathon-120",
  storageBucket: "hackathon-120.firebasestorage.app",
  messagingSenderId: "481929583817",
  appId: "1:481929583817:web:24178424fc901c3e6cc118"
};

/
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db, collection, addDoc, getDocs, createUserWithEmailAndPassword, signInWithEmailAndPassword };
