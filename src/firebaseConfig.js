import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storaggeBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);

//db
export const db = getFirestore(app)

// AUTH
const auth = getAuth(app)



// sign in
export const onSignIn = async ({ email, password }) => {
    try {
        let res = await signInWithEmailAndPassword(auth, email, password);
        return res;
    } catch (error) {
    console.log(error); 
    }   
};

// google sign in
const googleProvider = new GoogleAuthProvider();

export const googleSignIn = async ()=>{
    try {
        let res = await signInWithPopup(auth, googleProvider);
        return res
    } catch (error) {
        console.log(error)
    }
}

//sign out
export const logout = ()=>{
    signOut(auth)
}

// register
export const register = async ({ email, password}) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// forgot password
export const forgotPassword = async (email) => {
    try {
        let res = await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
        return res
    } catch (err) {
        console.error(err);
    }
}
