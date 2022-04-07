import React from 'react'

import { MenuIcon, XIcon } from '@heroicons/react/solid';

const BurgerMenu = ({ isNavOpen, handleMobileNav }) => {
  return (
    <div className='z-20 cursor-pointer md:hidden' onClick={handleMobileNav}>
        {
        isNavOpen ? <XIcon className='h-8 w-8' />
        : <MenuIcon className='h-8 w-8'/>
        }
    </div>
  )
}

export default BurgerMenu