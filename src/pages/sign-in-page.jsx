import React, { useContext, useState } from 'react';
import validator from 'validator';

import SignInSignUpContext from '../contexts/sign-in-sign-up-context';
import AppContext from '../contexts/app-context';

import { Link } from 'react-router-dom';
import PageContainer from '../components/general/page-container';
import ButtonSolid from '../components/buttons/button-solid';
import GeneralFormInput from '../components/forms/general-form-input';
import WithSpinner from '../components/general/with-spinner';
import StatusMessage from '../components/general/status-message';
import SignInProviders from '../components/general/sign-in-providers';


const SignInPage = () => {
  /** CONTEXTS */
  const { signIn: { handleSignInDetails, currentUser, processSignIn, setProcessSignIn } } = useContext(SignInSignUpContext);
  const { showModal, toggleModal } = useContext(AppContext);

  /** LOADERS */
  const StatusMessageWithSpinner = WithSpinner(StatusMessage);

  /** STATES */
  // const [processSignIn, setProcessSignIn] = useState(false);
  const [emailAddress, setEmailAddress] = useState({
    value: '',
    isInvalid: false 
  });
  const [password, setPassword] = useState({
    value: '',
    isInvalid: false 
  });

  /** FUNCTIONS */
  /**
   * This function takes the values from the input hooks 
   * and validates them using the validator package
   */
  const validateInputs = async () => {
    let allInputsValid = true;

    if (validator.isEmpty(emailAddress.value) || !validator.isEmail(emailAddress.value)) {
      setEmailAddress((prevState) => {
        return {...prevState,
          isInvalid: true
        }
      });

      allInputsValid = false;
    }
    else {
      setEmailAddress((prevState) => {
        return {...prevState,
          isInvalid: false
        }
      });
    }

    if (validator.isEmpty(password.value) || !validator.isStrongPassword(password.value)) {
      setPassword((prevState) => {
        return {...prevState,
          isInvalid: true
        }
      });

      allInputsValid = false;
    }
    else {
      setPassword((prevState) => {
        return {...prevState,
          isInvalid: false
        }
      });
    }

    return allInputsValid;
  };

  /**
   * 
   * @param {e} e - captured event, i.e. form submit 
   * This functions will call the validateInputs function, 
   * if it returns false then do not send data back (to the server*)
   * otherwise send the data 
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const allInputsValid = await validateInputs();

    if (allInputsValid) {
      const signInDetails = {
        emailAddress: emailAddress.value,
        password: password.value
      };

      // Set loading screen
      toggleModal(true);
      setProcessSignIn(true);

      // Set delay when sending back details
      setTimeout(async () => {
        // Send sign in details
        await handleSignInDetails(signInDetails);
      }, 3000);
    }
    else {
      return false;
    }
  };

  return (
    <PageContainer extraStyles={'pt-10'}>
      <section className='container flex justify-center items-start min-h-screen min-w-full pt-28 px-6 relative'>
        <div className={`fixed top-1/2 left-1/2 -translate-x-[50%] 
        bg-white drop-shadow-xl rounded-lg z-10 max-h-[20rem] w-[24rem] p-8 pb-6
          justify-center items-center
          ${showModal ? 'flex' : 'hidden'}
        `}>
          <StatusMessageWithSpinner isLoading={processSignIn} status={currentUser} toggleModal={toggleModal} />
        </div>
        <div className="flex flex-col max-w-[500px] gap-2 p-4 border-2 border-custom-gray rounded-lg">
          <form className='flex flex-col max-w-[500px] gap-2 rounded-lg'
            onSubmit={handleSubmit}
          >
            <div className="form-group mt-4 border-b-2 border-primary">
              <h1 className='text-2xl font-semibold'>Sign in</h1>
            </div>
            <div className="form-group">
              <GeneralFormInput 
                type={'email'} 
                label='Email address' 
                name={'sign-in-email'} 
                state={[emailAddress, setEmailAddress]}
                errMessage={'Please ensure you enter a valid email address, e.g. name@example.co.uk'}
              />
            </div>
            <div className="form-group">
              <GeneralFormInput 
                type={'password'} 
                label='Password' 
                name={'sign-in-password'} 
                state={[password, setPassword]}
                errMessage={`Please ensure you enter a valid password (minimum of 8 characters) that must have at least: 
                  one special character, one number, one uppercase letter and one lowercase letter, e.g. Smith1%
                `}
              />
            </div>
            <div className="form-group mt-4">
              <p className='text-center text-sm'>
                By signing in, 
                I agree to the <Link title='Solstice terms and conditions' className='text-primary' to='/'> Solstice Terms and Conditions  </Link> 
                and <Link title='Solstice privacy statement' className='text-primary' to='/'>Privacy Statement</Link>.
              </p>
            </div>
            <div className="form-group text-white">
              <ButtonSolid
                type="submit"
                btnTitle={'Sign in'}
                btnStyles={'flex flex-row-reverse justify-center items-center bg-primary'}
              />
            </div>
          </form>
          <div className="flex justify-center items-center">
            <span className='text-center text-sm'>Don't have an account? <Link title='Sign up' className='link-style' to='/signup'>Create one</Link>
            </span>
          </div>
          <div className="flex flex-col items-center gap-4 mt-6">
            <span className='text-center text-sm'>or continue with</span>
            <SignInProviders />
          </div>
        </div>
      </section>
  </PageContainer>
  )
}

export default SignInPage