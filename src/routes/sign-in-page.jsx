import React, { useContext, useState } from 'react';

import SignInSignUpContext from '../contexts/sign-in-sign-up-context';
import AppContext from '../contexts/app-context';

import { Link } from 'react-router-dom';
import PageContainer from '../components/page-container';
import ButtonSolid from '../components/button-solid';
import GeneralFormInput from '../components/general-form-input';
import WithSpinner from '../components/with-spinner';
import StatusMessage from '../components/status-message';


const SignInPage = () => {
  /** CONTEXTS */
  const { user } = useContext(SignInSignUpContext);
  const { showModal, toggleModal } = useContext(AppContext);

  /** LOADERS */
  const StatusMessageWithSpinner = WithSpinner(StatusMessage);

  /** STATES */
  const [processingData, setProcessingData] = useState(true);

  const [emailAddress, setEmailAddress] = useState({
    value: '',
    isInvalid: false 
  });
  const [password, setPassword] = useState({
    value: '',
    isInvalid: false 
  });
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
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group mt-4 border-b-2 border-primary">
            <h1 className='text-2xl font-semibold'>Sign in</h1>
          </div>
          <div className="form-group">
            <GeneralFormInput 
              type={'text'} 
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
      </section>
  </PageContainer>
  )
}

export default SignInPage