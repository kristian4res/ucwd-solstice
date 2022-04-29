import React, { useContext } from 'react';

import PageContainer from '../components/page-container';
import SignInSignUpContext from '../contexts/sign-in-sign-up-context';

import FAQ from '../components/support/faq';
import PageArticle from '../components/page-article';
import ContactForm from '../components/forms/contact-form';
import LinkSolid from '../components/links/link-solid';


const ContactsPage = () => {
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
          : <div className='flex flex-col items-start border-2 border-custom-gray rounded-lg p-8 m-4'>
              <hgroup className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>We're here for you</h1>
                <h2 className='text-lg'>Sign in to get help with trip bookings, reservations and more.</h2>
              </hgroup>
              <ul className='flex flex-col gap-6 justify-center pt-6 text-white
                  lg:flex-row'
              >
                <LinkSolid label='Sign Up' route='/signup' extraStyles='bg-success rounded-lg' />
                <LinkSolid label='Sign In' route='/signin' extraStyles='bg-secondary-pastel rounded-lg' />
            </ul>
          </div>
        }
      </section>
    </PageContainer>
  )
}

export default ContactsPage;