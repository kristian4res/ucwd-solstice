import React from 'react';

import Logo from './logo';
import LinkUnderline from './link-underline';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center p-4 w-full bg-dark text-white
    md:justify-center'>
      <div className='w-full mt-2'>
        <Logo isColoured={true} />
      </div>
      <div className='grid grid-cols-1 mt-8 space-y-2 w-full
      sm:grid-cols-2 sm:space-y-4 lg:grid-cols-4 lg:space-x-8'>
        <section className='flex flex-col items-center justify-center'>
          <h3 className='text-base font-semibold'>Company</h3>
          <ul className='flex flex-col space-y-2 mt-2 text-custom-gray'>
            <LinkUnderline label='About Us' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='Careers' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='Partnerships' route='/' textWeight='light' textSize='sm' />
          </ul>
        </section>
        <section className='flex flex-col items-center justify-center'>
          <h3 className='text-base font-semibold'>Explore</h3>
          <ul className='flex flex-col space-y-2 mt-2 text-custom-gray'>
            <LinkUnderline label='Asia Trips' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='Europe Trips' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='North and South America Trips' route='/' textWeight='light' textSize='sm' />
          </ul>
        </section>
        <section className='flex flex-col items-center justify-center'>
          <h3 className='text-base font-semibold'>Terms and Policies</h3>
          <ul className='flex flex-col space-y-2 mt-2 text-custom-gray'>
            <LinkUnderline label='General terms and conditions' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='Privacy statement' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='Legal information' route='/' textWeight='light' textSize='sm' />
          </ul>
        </section>
        <section className='flex flex-col items-center justify-center'>
          <h3 className='text-base font-semibold'>Help</h3>
          <ul className='flex flex-col space-y-2 mt-2 text-custom-gray'>
            <LinkUnderline label='Support' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='FAQs' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='Cancel a trip' route='/' textWeight='light' textSize='sm' />
          </ul>
        </section>
      </div>
      <div className='my-6 w-[90%] h-[2px] bg-white'></div>
      <div className="flex flex-col w-full 
      justify-between items-center 
      lg:flex-row lg:px-28">
        <p className='flex'>
          © 2022 Solstice, Inc.
        </p>
        <ul className='flex flex-row space-x-2'>
          <li>
            👋
          </li>
          <li>
            👋
          </li>
          <li>
            👋
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;