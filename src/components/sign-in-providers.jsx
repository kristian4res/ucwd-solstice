import React, { useContext } from 'react';

import SignInSignUpContext from '../contexts/sign-in-sign-up-context';

import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';


const SignInProviders = () => {
    /** CONTEXTS */
    const { signIn: { signInUsingGoogle } } = useContext(SignInSignUpContext);
    
    /** STATES */
    const redirectToHome = useNavigate();

    return (
    <div className="flex justify-center items-center">
        <button title='Google sign in' onClick={() => {
           signInUsingGoogle();
        }}>
            <FcGoogle className='h-6 w-6' />
        </button>
    </div>
  )
}

export default SignInProviders