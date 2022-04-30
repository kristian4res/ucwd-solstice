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
    const [processSignUp, setProcessSignUp] = useState(false);
    const [processSignIn, setProcessSignIn] = useState(false);

    /** FUNCTIONS */
    const handleSignUpDetails = async (signUpDetails) => {
        // Encrypt password

        // Send out details to Firebase
        try {
            const result = await signUpUsingEmail(signUpDetails);
            if (result) {
                navigateTo('/');
            }
        }
        catch(err) {
            alert('Unexpected error occured whilst signing up. Please try again.');
        }

        // Delay to show progress
        setTimeout(() => {
            setProcessSignUp(false);
        }, 1000);
    };

    const handleSignInDetails = async (signInDetails) => {
        // Send out details to Firebase
        try {
            const result = await signInUserUsingEmail(signInDetails);
            if (result) {
                navigateTo('/');
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