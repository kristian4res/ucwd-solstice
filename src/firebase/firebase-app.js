// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword
} from "firebase/auth";
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALxIMhKIeTK8JPnQX3A2HfzZITWD3iTcI",
  authDomain: "enigma-cloud-projects.firebaseapp.com",
  projectId: "enigma-cloud-projects",
  storageBucket: "enigma-cloud-projects.appspot.com",
  messagingSenderId: "752593180484",
  appId: "1:752593180484:web:a9f4a935833ae65614a911",
  measurementId: "G-CQXR7H0202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

/** Authentication */
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Functions
export function signUpUsingEmail(userDetails) {
    return createUserWithEmailAndPassword(auth, userDetails.emailAddress, userDetails.password);
}

export async function signInUserUsingEmail(userDetails) {
    return signInWithEmailAndPassword(auth, userDetails.emailAddress, userDetails.password)
}

export function signOutUser() {
    return signOut(auth);
}

export async function googleSignIn() {
   return signInWithPopup(auth, provider)
    .then((result) => {
        return true;
    }).catch((error) => {
        return false;
    }); 
}  

// User authentication hook 
export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => setCurrentUser(user));
        return unsubscribe;
    }, []);

    return currentUser;
};