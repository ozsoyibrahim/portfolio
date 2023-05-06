
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCCcTcnm9_w2yyzIxELWSIeM9MGX2wf71I",
  authDomain: "iozsoyportfolio.firebaseapp.com",
  projectId: "iozsoyportfolio",
  storageBucket: "iozsoyportfolio.appspot.com",
  messagingSenderId: "608944940417",
  appId: "1:608944940417:web:560ab9bcc2dc332c473480"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


// export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    return res.user;
  } catch (error) {
    console.log(error.message);
  }
};