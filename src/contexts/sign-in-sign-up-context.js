import React, { createContext, useState } from 'react';

const SignInSignUpContext = createContext();

export function SignInSignUpProvider({ children }) {
    /** STATES */
    const [user, setUser] = useState({});
    const [processSignUp, setProcessSignUp] = useState(true);
    const [processSignIn, setProcessSignIn] = useState(true);

    /** FUNCTIONS */
    const sendSignUpDetails = (signUpDetails) => {
        // setSignUpFormDetails((prevState) => {
        //     return {...signUpDetails, 
        //         // ENCRYPT PASSWORD BEFORE STORING IN DATABASE
        //         password: signUpDetails.password
        //     }
        // });

        // Send out details to Firebase

        setTimeout(() => {
            setProcessSignUp(false); 
        }, 5000);
    }; 

    const sendSignInDetails = (signInDetails) => {
        // Get user object

        // Once a user object is received, set the user
        setUser(signInDetails); 
        setTimeout(() => {
            setProcessSignIn(false);
        }, 3000);
    };

    return (
        <SignInSignUpContext.Provider value={{ 
                signUp: { sendSignUpDetails, processSignUp }, 
                signIn: { sendSignInDetails, processSignIn, user } 
            }}
        >
            {children}
        </SignInSignUpContext.Provider>
    )
};

export default SignInSignUpContext;