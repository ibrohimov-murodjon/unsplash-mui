import { initializeApp } from "firebase/app";
import {
  getAuth,
  EmailAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBVBYe3M9zIk7otH2A2HRW7nzFcr8SiPGw",
  authDomain: "unspalsh-materialui-firebase.firebaseapp.com",
  projectId: "unspalsh-materialui-firebase",
  storageBucket: "unspalsh-materialui-firebase.appspot.com",
  messagingSenderId: "656930399827",
  appId: "1:656930399827:web:4c9ab27c656ca9960048a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new EmailAuthProvider();

export const signInWithEmailAndPassword = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};
