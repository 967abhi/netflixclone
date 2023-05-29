
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAc8FfKErXG5iMi1Hs6qVXNCIs_B3w2J5A",
  authDomain: "netflix-project-123b0.firebaseapp.com",
  projectId: "netflix-project-123b0",
  storageBucket: "netflix-project-123b0.appspot.com",
  messagingSenderId: "642852267827",
  appId: "1:642852267827:web:08ff54964ea893cb86c046",
  measurementId: "G-48G849B5YL"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)