import React, { useContext, useEffect, useState } from 'react';
import validator from 'validator';

import SignInSignUpContext from '../contexts/sign-in-sign-up-context';
import AppContext from '../contexts/app-context';

import { Link } from 'react-router-dom';
import PageContainer from '../components/page-container';
import ButtonSolid from '../components/button-solid';
import GeneralFormInput from '../components/general-form-input';
import WithSpinner from '../components/with-spinner';
import StatusMessage from '../components/status-message';


const SignUpPage = () => {
  /** CONTEXTS */
  const { sendSignUpDetails, user } = useContext(SignInSignUpContext);
  const { showModal, toggleModal } = useContext(AppContext);

  /** LOADERS */
  const StatusMessageWithSpinner = WithSpinner(StatusMessage);

  /** STATES */
  const [processingData, setProcessingData] = useState(true);

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
  const clearInputs = () => {
    setEmailAddress({value: '', isInvalid: false});
    setFirstName({value: '', isInvalid: false});
    setSurname({value: '', isInvalid: false});
    setPassword({value: '', isInvalid: false});
    setConfirmPassword({value: '', isInvalid: false});
  }

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

      // Send sign up details
      sendSignUpDetails(signUpDetails);

      // Clear inputs
      setTimeout(() => {
        toggleModal(true);
        clearInputs();
      }, 800);

      // Simulate asynchronous API calls
      setTimeout(() => {
        setProcessingData(false);
      }, 9999);
    }
    else {
      return false;
    }
  }


  return (
    <PageContainer>
      <section className='container flex justify-center items-center min-h-screen min-w-full pt-28 relative'>
        <div className={`fixed top-1/2 left-1/2 -translate-x-[50%] 
        bg-white drop-shadow-xl rounded-lg z-10 max-h-[20rem] w-[24rem] p-8 pb-6
          justify-center items-center
          ${showModal ? 'flex' : 'hidden'}
        `}>
          <StatusMessageWithSpinner isLoading={processingData} status={user} toggleModal={toggleModal} />
        </div>
        <form className='flex flex-col max-w-[500px] gap-2 p-4 border-2 border-custom-gray rounded-lg'
          onSubmit={handleSubmit}
        >
          <div className="form-group mt-4 border-b-2 border-primary">
            <h1 className='text-2xl font-semibold'>Create an account</h1>
          </div>
          <div className="form-group">
            <GeneralFormInput 
              type={'text'} 
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
      </section>
    </PageContainer>
  )
}

export default SignUpPage