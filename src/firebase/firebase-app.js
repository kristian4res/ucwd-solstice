// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
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
    // signInWithEmailAndPassword(auth, userDetails.emailAddress, userDetails.password)
    // .then(userCredentials => {
    //     return userCredentials;
    // })
    // .catch(err => {
    //     alert('Something unexpected happened while signing in');
    //     return false;
    // });
    return signInWithEmailAndPassword(auth, userDetails.emailAddress, userDetails.password)
}

export function signOutUser() {
    return signOut(auth);
}

export async function googleSignIn() {
   return signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // // The signed-in user info.
        const user = result.user;
        // Successful sign in
        return true;
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // // The email of the user's account used.
        const email = error.email;
        // // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // Unsuccesful sign in
        alert('Something unexpected happened while signing in using Google');
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