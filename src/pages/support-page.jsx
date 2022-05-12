import React, { useContext } from 'react';

import SignInSignUpContext from '../contexts/sign-in-sign-up-context';

import PageContainer from '../components/general/page-container';
import FAQ from '../components/support/faq';
import PageArticle from '../components/general/page-article';
import ContactForm from '../components/forms/contact-form';
import SignInPrompt from '../components/general/sign-in-prompt';


const ContactsPage = () => {
  /** CONTEXTS */
  const { signIn: { currentUser } } = useContext(SignInSignUpContext);

  return (
    <PageContainer extraStyles={'pt-10'}>
      <section className='container flex flex-col justify-center items-center min-w-full pt-20 pb-10 px-6 relative
      '>
        <h1 className="my-0 text-3xl font-bold uppercase text-black inline-block md:my-4 lg:text-4xl">
          Support
          <div className='custom-bg-gradient w-full h-2 mb-4 rounded-sm' />
        </h1>
        <FAQ />
      </section>
      <PageArticle />
      <section id='contact-container'
        className={`container flex justify-center items-start pt-10 
        min-w-full relative ${currentUser && 'min-h-screen'}
      `}>
        {
          currentUser 
          ? <ContactForm />
          : <SignInPrompt 
              title={"We're here for you"}
              subtitle={'Sign in or sign up to get help with trip bookings, reservations and more.'}
            />
        }
      </section>
    </PageContainer>
  )
}

export default ContactsPage;