import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBDpEFjPUB1t2ih-sDrlJRmNykCjk4YSwU",
  authDomain: "showflix-9a7b2.firebaseapp.com",
  projectId: "showflix-9a7b2",
  storageBucket: "showflix-9a7b2.appspot.com",
  messagingSenderId: "75166879387",
  appId: "1:75166879387:web:8e0f17653080a0cc56803e",
  measurementId: "G-G0D3948NCJ"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth =getAuth(app);