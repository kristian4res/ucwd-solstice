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
    /** STATES */
    const navigateTo = useNavigate();
    const currentUser = useAuth();
    const [processSignUp, setProcessSignUp] = useState(true);
    const [processSignIn, setProcessSignIn] = useState(true);

    /** FUNCTIONS */
    const handleSignUpDetails = async (signUpDetails) => {
        // Encrypt password

        // Send out details to Firebase
        try {
            await signUpUsingEmail(signUpDetails);
            navigateTo('/');
            setProcessSignUp(false);
            return true;
        }
        catch(err) {
            alert('Unexpected error occured whilst signing up. Please try again.');
        }
    };

    const handleSignInDetails = async (signInDetails) => {
        // Send out details to Firebase
        try {
            await signInUserUsingEmail(signInDetails);
            navigateTo('/');
            setProcessSignIn(false);
            return true;
        }
        catch(err) {
            alert('Unexpected error occured whilst signing in. Please try again.');
        }
    };

    const signInUsingGoogle = async () => {
        try {
            await googleSignIn();
            navigateTo('/');
            return true;
        }
        catch(err) {
            alert('Unexpected error occured whilst signing in with Google. Please try again.');
        }
    }

    const signOutCurrentUser= async () => {
        try {
            await signOutUser();
            navigateTo('/');
            return true;
        }
        catch(err) {
            alert('Unexpected error occured whilst signing out. Please try again.');
        }
    };

    return (
        <SignInSignUpContext.Provider value={{ 
                signUp: { handleSignUpDetails, processSignUp }, 
                signIn: { handleSignInDetails, signInUsingGoogle, processSignIn, currentUser },
                signOut: { signOutCurrentUser }
            }}
        >
            {children}
        </SignInSignUpContext.Provider>
    )
};

export default SignInSignUpContext;