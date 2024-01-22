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

const firebaseConfig = {
  apiKey: "AIzaSyBaWv5HTItj2P34Gk6fN44pS6e4jF_Z8IM",
  authDomain: "ecommerce-portafolio.firebaseapp.com",
  projectId: "ecommerce-portafolio",
  storageBucket: "ecommerce-portafolio.appspot.com",
  messagingSenderId: "132579132593",
  appId: "1:132579132593:web:9b5eba287b100945464e90",
};

const app = initializeApp(firebaseConfig);


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
