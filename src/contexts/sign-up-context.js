import React, { createContext, useState } from 'react';

const SignUpFormContext = createContext();

export function SignUpFormProvider({ children }) {
    const [signUpFormDetails, setSignUpFormDetails] = useState({
        emailAddress: '',
        firstName: '',
        surname: '',
        password: '',
        confirmPassword: '',
    });

    const updateSignUpForm = (filterData) => {
        setSignUpFormDetails((prevState) => {
            return {...prevState, ...filterData}
        });
    };

    return (
        <SignUpFormContext.Provider value={{ updateSignUpForm }}>
            {children}
        </SignUpFormContext.Provider>
    )
};

export default SignUpFormContext;