import React, { createContext, useState } from 'react';

const SignInSignUpContext = createContext();

export function SignInSignUpProvider({ children }) {
    const [user, setUser] = useState({});

    const sendSignUpDetails = (signUpDetails) => {
        // setSignUpFormDetails((prevState) => {
        //     return {...signUpDetails, 
        //         // ENCRYPT PASSWORD BEFORE STORING IN DATABASE
        //         password: signUpDetails.password
        //     }
        // });

        // Once a user object is received, set the user
        setTimeout(() => {
            setUser(signUpDetails); 
        }, 800);
    };

    const createAccount = (signUpDetails) => {
        return null;
    };

    return (
        <SignInSignUpContext.Provider value={{ sendSignUpDetails, user }}>
            {children}
        </SignInSignUpContext.Provider>
    )
};

export default SignInSignUpContext;