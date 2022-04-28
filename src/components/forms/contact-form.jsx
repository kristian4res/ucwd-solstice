import React from 'react';

import ButtonSolid from '../buttons/button-solid';

import { MdEmail } from 'react-icons/md';
import { BiMailSend } from 'react-icons/bi';

const ContactForm = () => {
  return (
    <div className='flex flex-col justify-center w-[80%]
        items-center max-w-[1000px] rounded-md p-6 shadow-lg
        bg-main text-white
        md:p-8 md:w-[700px]
        '
    >
        <div className="flex justify-center items-center gap-4 m-1 mb-4">
            <h1 className='text-2xl font-semibold'>
               Contact Us
            </h1>
            <MdEmail className='hidden md:block md:h-6 md:w-6' aria-hidden={true} />
        </div>
        <form
            id='contact-form'
            className='flex flex-col p-1 gap-2 w-full
                md:p-4
            '
            onSubmit={(e) => e.preventDefault()}
        >
            <div className="form-group">
                <label className='form-label' htmlFor="contact-name">Name</label>
                <input className="form-input text-black" 
                    type="text" 
                    name="contact-name" 
                    placeholder='Name'
                />
            </div>
            <div className="form-group">
                <label className='form-label' htmlFor="contact-email">Email address</label>
                <input className="form-input text-black" 
                    type="text" 
                    name="contact-email" 
                    placeholder='Email address'
                />
            </div>
            <div className="form-group">
                <label className='form-label' htmlFor="contact-message">Message</label>
                <textarea form="contact-form" 
                    className='form-input text-black'
                    type="text" 
                    name="contact-message"
                    placeholder='Enter your message'
                    cols={20}
                    rows={22}
                />
            </div>
            <div className='flex justify-center text-white px-2 py-2 h-full w-full col-span-full
            md:items-center md:justify-center xl:col-span-1'>
                <ButtonSolid
                    type="submit"
                    btnStyles={'flex justify-center items-center gap-x-4 bg-success'}
                    btnTitle='Send mail'
                    icon={
                        <BiMailSend className='h-6 w-6 lg:h-8 lg:w-8' />
                    }
                />
            </div>
        </form>
    </div>
  )
}

export default ContactForm