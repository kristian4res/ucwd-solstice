import React from 'react'
import { useLocation } from 'react-router-dom';

import { MenuIcon, XIcon } from '@heroicons/react/solid';

const BurgerMenu = ({ isNavOpen, handleMobileNav }) => {
  const location = useLocation();

  return (
    <div className={`flex justify-center items-center z-20 cursor-pointer h-12 w-12 rounded-[50%] 
    text-white hover:bg-dark hover:opacity-60
    md:hidden 
    `} 
    onClick={handleMobileNav}>
        {
        isNavOpen ? <XIcon className='h-8 w-8' />
        : <MenuIcon className='h-8 w-8'/>
        }
    </div>
  )
}

export default BurgerMenu