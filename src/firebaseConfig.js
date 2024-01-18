import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";

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
export const googleSignIn = ()=>{
    
}

//sign out
export const logout = ()=>{
    signOut(auth)
}



// register

    // email & password
    // forgot password
    
// sign out