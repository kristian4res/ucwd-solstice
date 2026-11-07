import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signUpUsingEmail, 
    useAuth, 
    signOutUser, 
    signInUserUsingEmail,
    googleSignIn, 
} from '../firebase/firebase-app';


const SignInSignUpContext = createContext();

export function SignInSignUpProvider({ children }) {
    /** HOOKS & STATES */
    const navigateTo = useNavigate();
    const currentUser = useAuth();
    // Hooks for the loading screens
    const [processSignUp, setProcessSignUp] = useState(false);
    const [processSignIn, setProcessSignIn] = useState(false);

    /** FUNCTIONS */
    /**
     *
     * This function takes in the sign up details and 
     * passes it to a Firebase function which will handle 
     * the user account creation, 
     * if successful the user is logged in and redirected to the homepage
     * otherwise, the user is shown an error message
     * @param {object} signUpDetails - user inputs from sign up form 
     */
    const handleSignUpDetails = async (signUpDetails) => {
        // Send out details to Firebase
        try {
            const result = await signUpUsingEmail(signUpDetails);
            if (result) {
                navigateTo(-1);
            }
        }
        catch(err) {
            alert('Unexpected error occured whilst signing up. Please try again.');
        }
    };

    /**
     *
     * This function takes in the sign in details and 
     * passes it to a Firebase function which will handle 
     * the authentication, 
     * if successful the user is logged in and redirected to the homepage
     * otherwise, the user is shown an error message
     * @param {object} signInDetails - user inputs from sign in form 
     */
    const handleSignInDetails = async (signInDetails) => {
        // Send out details to Firebase
        try {
            const result = await signInUserUsingEmail(signInDetails);
            if (result) {
                // Navigate back to the previous route
                navigateTo(-1);
            }
        }
        catch(err) {
            alert('Unexpected error occured whilst signing in. Please try again.');
        }

        // Delay to show progress
        setTimeout(() => {
            setProcessSignIn(false);
        }, 1000)
    };

    /**
     * This function calls a Firebase function 
     * that will open a Google Sign In window
     */
    const signInUsingGoogle = async () => {
        try {
            const result = await googleSignIn();
            if (result) {
                // Navigate back to the previous route
                navigateTo(-1);
            }
        }
        catch(err) {
            alert('Unexpected error occured whilst signing in with Google. Please try again.');
        }
        // Delay to show progress
        setTimeout(() => {
            setProcessSignIn(false);
        }, 1000)
    }

    /**
     * This function will call a Firebase function 
     * that will clear the Google Auth object, which
     * effectively logs the user out 
     * and makes certain website features unavailable.
     */
    const signOutCurrentUser= async () => {
        try {
            await signOutUser();
            // Navigate back to the previous route
            navigateTo(-1);
            return true;
        }
        catch(err) {
            alert('Unexpected error occured whilst signing out. Please try again.');
        }
    };

    return (
        <SignInSignUpContext.Provider value={{ 
                signUp: { handleSignUpDetails, processSignUp, setProcessSignUp }, 
                signIn: { handleSignInDetails, signInUsingGoogle, currentUser, processSignIn, setProcessSignIn },
                signOut: { signOutCurrentUser }
            }}
        >
            {children}
        </SignInSignUpContext.Provider>
    )
};

export default SignInSignUpContext;