import React from 'react';

import FAQ from '../components/support/faq';
import PageArticle from '../components/page-article';

import PageContainer from '../components/page-container';
import ContactForm from '../components/forms/contact-form';

const ContactsPage = () => {
  return (
    <PageContainer extraStyles={'pt-10'}>
      <section className='container flex flex-col justify-center items-center min-w-full pt-20 pb-10 px-6 relative'>
        <h1 className="my-0 text-3xl font-bold uppercase text-black inline-block md:my-4 lg:text-4xl">
          Support
          <div className='custom-bg-gradient w-full h-2 mb-4 rounded-sm' />
        </h1>
        <FAQ />
      </section>
      <PageArticle />
      <section className='container flex justify-center items-start pt-10 
      min-h-screen min-w-full relative'
      >
        <ContactForm />
      </section>
    </PageContainer>
  )
}

export default ContactsPage;