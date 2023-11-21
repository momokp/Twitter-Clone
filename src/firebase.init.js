import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC63LzDbDZjf3vanqGlHtwME2P5K42CyEQ",
  authDomain: "create-a-website-like-tw-70ecd.firebaseapp.com",
  projectId: "create-a-website-like-tw-70ecd",
  storageBucket: "create-a-website-like-tw-70ecd.appspot.com",
  messagingSenderId: "467510196851",
  appId: "1:467510196851:web:b8a213841e6d0361624806",
  measurementId: "G-3Z8Z4CV247"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;