import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBfaz8d4fDXYq4RtXZbq1ChGSmy9uvgR1o",
  authDomain: "imconnect-1b490.firebaseapp.com",
  projectId: "imconnect-1b490",
  storageBucket: "imconnect-1b490.appspot.com",
  messagingSenderId: "972217205835",
  appId: "1:972217205835:web:0f966660746e90d07e79ce",
  measurementId: "G-JTC2YWZLDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
