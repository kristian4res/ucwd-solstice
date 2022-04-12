import React from 'react';

import Logo from './logo';
import LinkUnderline from './link-underline';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center mt-4 p-4 w-full bg-dark text-white
    md:justify-center'>
      <div className='w-full mt-2'>
        <Logo isColoured={true} />
      </div>
      <div className='grid grid-cols-1 mt-8 space-y-2 w-full
      sm:grid-cols-2 sm:space-y-4 lg:grid-cols-4 lg:space-x-8'>
        <section className='flex flex-col items-center justify-center'>
          <h3 className='text-md font-semibold'>Company</h3>
          <ul className='flex flex-col space-y-2 mt-2 text-custom-gray'>
            <LinkUnderline label='About Us' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='About Us' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='About Us' route='/' textWeight='light' textSize='sm' />
          </ul>
        </section>
        <section className='flex flex-col items-center justify-center'>
          <h3 className='text-md font-semibold'>Explore</h3>
          <ul className='flex flex-col space-y-2 mt-2 text-custom-gray'>
            <LinkUnderline label='About Us' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='About Us' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='About Us' route='/' textWeight='light' textSize='sm' />
          </ul>
        </section>
        <section className='flex flex-col items-center justify-center'>
          <h3 className='text-md font-semibold'>Terms and Policies</h3>
          <ul className='flex flex-col space-y-2 mt-2 text-custom-gray'>
            <LinkUnderline label='About Us' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='About Us' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='About Us' route='/' textWeight='light' textSize='sm' />
          </ul>
        </section>
        <section className='flex flex-col items-center justify-center'>
          <h3 className='text-md font-semibold'>Help</h3>
          <ul className='flex flex-col space-y-2 mt-2 text-custom-gray'>
            <LinkUnderline label='About Us' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='About Us' route='/' textWeight='light' textSize='sm' />
            <LinkUnderline label='About Us' route='/' textWeight='light' textSize='sm' />
          </ul>
        </section>
      </div>
      <div className="flex">
        BOTTOM
      </div>
    </footer>
  )
}

export default Footer;