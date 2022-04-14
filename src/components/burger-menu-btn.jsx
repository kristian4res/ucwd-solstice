import React from 'react'

import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid';

const BurgerMenuBtn = ({ isNavOpen, handleMobileNav }) => {
  return (
    <div className={`flex justify-center items-center z-10 cursor-pointer h-12 w-12 rounded-full 
    text-white hover:bg-dark hover:opacity-60
    lg:hidden 
    `} 
    onClick={handleMobileNav}>
        {
        isNavOpen ? <XIcon className='h-6 w-6 sm:h-8 sm:w-8' />
        : <MenuAlt3Icon className='h-6 w-6 sm:h-8 sm:w-8'/>
        }
    </div>
  )
}

export default BurgerMenuBtn