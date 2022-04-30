import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';

import SignInSignUpContext from '../contexts/sign-in-sign-up-context';
import AppContext from '../contexts/app-context';

import PageContainer from '../components/general/page-container';
import ButtonSolid from '../components/buttons/button-solid';
import GeneralFormInput from '../components/forms/general-form-input';
import WithSpinner from '../components/general/with-spinner';
import StatusMessage from '../components/general/status-message';
import SignInProviders from '../components/general/sign-in-providers';


const SignUpPage = () => {
  /** CONTEXTS */
  const { signUp: { handleSignUpDetails, processSignUp, setProcessSignUp }, signIn: { currentUser } } = useContext(SignInSignUpContext);
  const { showModal, toggleModal } = useContext(AppContext);

  /** LOADERS */
  const StatusMessageWithSpinner = WithSpinner(StatusMessage);

  /** STATES */
  const [emailAddress, setEmailAddress] = useState({
    value: '',
    isInvalid: false 
  });
  const [firstName, setFirstName] = useState({
    value: '',
    isInvalid: false 
  });
  const [surname, setSurname] = useState({
    value: '',
    isInvalid: false 
  });
  const [password, setPassword] = useState({
    value: '',
    isInvalid: false 
  });
  const [confirmPassword, setConfirmPassword] = useState({
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

    // Validate each input and set input state
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

    if (validator.isEmpty(firstName.value) || !validator.isAlpha(firstName.value)) {
      setFirstName((prevState) => {
        return {...prevState,
          isInvalid: true
        }
      });

      allInputsValid = false;
    }
    else {
      setFirstName((prevState) => {
        return {...prevState,
          isInvalid: false
        }
      });
    }

    if (validator.isEmpty(surname.value) || !validator.isAlpha(surname.value)) {
      setSurname((prevState) => {
        return {...prevState,
          isInvalid: true
        }
      });

      allInputsValid = false;
    }
    else {
      setSurname((prevState) => {
        return {...prevState,
          isInvalid: false
        }
      });
    }

    if ((validator.isEmpty(password.value) || validator.isEmpty(confirmPassword.value)) || (password.value !== confirmPassword.value) || (!validator.isStrongPassword(password.value, {
      minLength: 8, 
      minLowercase: 1, 
      minUppercase: 1, 
      minNumbers: 1, 
      minSymbols: 1,
    }))
    ) {
      if (!validator.isStrongPassword(password.value, {
        minLength: 8, 
        minLowercase: 1, 
        minUppercase: 1, 
        minNumbers: 1, 
        minSymbols: 1,
      })) {
        setPassword((prevState) => {
          return {...prevState,
            isInvalid: true
          }
        });

        allInputsValid = false;
      }
      else if (password.value !== confirmPassword.value) {
        setConfirmPassword((prevState) => {
          return {...prevState,
            isInvalid: true
          }
        });

      allInputsValid = false;
      }
      else {
        setPassword((prevState) => {
          return {...prevState,
            isInvalid: true
          }
        });
        setConfirmPassword((prevState) => {
          return {...prevState,
            isInvalid: true
          }
        });

        allInputsValid = false;
      }
    }
    else {
      setPassword((prevState) => {
        return {...prevState,
          isInvalid: false
        }
      });
      setConfirmPassword((prevState) => {
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

    // Check if all inputs are valid
    if (allInputsValid) {
      const signUpDetails = {
        emailAddress: emailAddress.value,
        firstName: firstName.value,
        surname: surname.value,
        password: password.value
      };

      // Set loading screen
      toggleModal(true);
      setProcessSignUp(true);

      // Set delay when sending back details
      setTimeout(async () => {
        // Send sign up details
        await handleSignUpDetails(signUpDetails);
      }, 3000);
    }
    else {
      return false;
    }
  }


  return (
    <PageContainer extraStyles={'pt-10'}>
      <section className='container flex justify-center items-start min-h-screen min-w-full pt-28 px-6 relative'>
        <div className={`fixed top-1/2 left-1/2 -translate-x-[50%] 
        bg-white drop-shadow-xl rounded-lg z-10 max-h-[20rem] w-[24rem] p-8 pb-6
          justify-center items-center
          ${showModal ? 'flex' : 'hidden'}
        `}>
          <StatusMessageWithSpinner isLoading={processSignUp} status={currentUser} toggleModal={toggleModal} />
        </div>
        <div className='flex flex-col max-w-[500px] gap-2 p-4 border-2 border-custom-gray rounded-lg'>

          <form className='flex flex-col max-w-[500px] gap-2'
            onSubmit={handleSubmit}
          >
            <div className="form-group mt-4 border-b-2 border-primary">
              <h1 className='text-2xl font-semibold'>Create an account</h1>
            </div>
            <div className="form-group">
              <GeneralFormInput 
                type={'email'} 
                label='Email address' 
                name={'sign-up-email'} 
                state={[emailAddress, setEmailAddress]}
                errMessage={'Please ensure you enter a valid email address, e.g. name@example.co.uk'}
              />
            </div>
            <div className="form-group">
              <GeneralFormInput 
                type={'text'} 
                label='First name' 
                name={'sign-up-fname'} 
                state={[firstName, setFirstName]}
                errMessage={'Please ensure you enter a valid first name (no special symbols/characters and numbers), e.g. John'}
              />
            </div>
            <div className="form-group">
              <GeneralFormInput 
                type={'text'} 
                label='Surname' 
                name={'sign-up-surname'} 
                state={[surname, setSurname]}
                errMessage={'Please ensure you enter a valid surname (no special symbols/characters and numbers), e.g. Smith'}
              />
            </div>
            <div className="form-group">
              <GeneralFormInput 
                type={'password'} 
                label='Password' 
                name={'sign-up-password'} 
                state={[password, setPassword]}
                errMessage={`Please ensure you enter a valid password (minimum of 8 characters) that must have at least: 
                  one special character, one number, one uppercase letter and one lowercase letter, e.g. Smith1%
                `}
              />
            </div>
            <div className="form-group">
              <GeneralFormInput 
                type={'password'} 
                label='Confirm Password' 
                name={'sign-up-confirm password'} 
                state={[confirmPassword, setConfirmPassword]}
                errMessage={`Passwords do not match, please ensure you entered the same password
                `}
              />
            </div>
            <div className="form-group mt-4">
              <p className='text-center text-sm'>
                By creating an account, 
                I agree to the <Link title='Solstice terms and conditions' className='text-primary' to='/'> Solstice Terms and Conditions  </Link> 
                and <Link title='Solstice privacy statement' className='text-primary' to='/'>Privacy Statement</Link>.
              </p>
            </div>
            <div className="form-group text-white">
              <ButtonSolid
                type="submit"
                btnTitle={'Continue'}
                btnStyles={'flex flex-row-reverse justify-center items-center bg-primary'}
              />
            </div>
          </form>
          <div className="flex justify-center items-center">
            <span className='text-center text-sm'>Already have an account? <Link title='Sign up' className='link-style' to='/signin'>Sign in</Link>
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

export default SignUpPage