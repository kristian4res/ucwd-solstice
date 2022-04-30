import React from 'react';

import LinkSolid from './links/link-solid';

const SignInPrompt = ({ title, subtitle }) => {
  return (
    <div className='bg-main text-white rounded-md shadow-lg mx-6'>
      <div className='flex flex-col items-start border-2 border-custom-gray rounded-lg p-8 m-4'>
          <hgroup className='flex flex-col gap-2'>
              <h1 className='text-2xl font-bold'>{title}</h1>
              <h2 className='text-lg'>{subtitle}</h2>
          </hgroup>
          <ul className='flex flex-col flex-wrap gap-6 justify-center pt-6 text-white
              lg:flex-row'
          >
              <LinkSolid label='Sign Up' route='/signup' extraStyles='bg-success rounded-lg' />
              <LinkSolid label='Sign In' route='/signin' extraStyles='bg-secondary-pastel rounded-lg' />
          </ul>
      </div>
    </div>
  )
}

export default SignInPrompt