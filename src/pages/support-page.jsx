import React from 'react';

import FAQ from '../components/support/faq';
import PageArticle from '../components/page-article';

import PageContainer from '../components/page-container';
import ContactForm from '../components/forms/contact-form';

const ContactsPage = () => {
  return (
    <PageContainer extraStyles={'pt-10'}>
      <section className='container flex justify-center items-start min-w-full pt-28 pb-10 px-6 relative'>
        <FAQ />
      </section>
      <PageArticle />
      <section className='container flex justify-center items-start min-h-screen min-w-full pt-28 px-6 relative'>
        <ContactForm />
      </section>
    </PageContainer>
  )
}

export default ContactsPage