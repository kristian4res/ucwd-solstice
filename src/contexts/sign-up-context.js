import React, { createContext, useState } from 'react';

const SignUpFormContext = createContext();

export function SignUpFormProvider({ children }) {
    const [signUpFormDetails, setSignUpFormDetails] = useState({
        emailAddress: '',
        firstName: '',
        surname: '',
        password: ''    
    });

    const updateSignUpForm = (signUpDetails) => {
        setSignUpFormDetails((prevState) => {
            return {...signUpDetails, 
                // ENCRYPT PASSWORD BEFORE STORING IN DATABASE
                password: signUpDetails.password
            }
        });
        console.log(signUpDetails);
    };

    const createAccount = (signUpDetails) => {
        return null;
    };

    return (
        <SignUpFormContext.Provider value={{ updateSignUpForm }}>
            {children}
        </SignUpFormContext.Provider>
    )
};

export default SignUpFormContext;