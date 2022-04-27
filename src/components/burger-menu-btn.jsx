import React from 'react'

import { HiMenuAlt3, HiX } from 'react-icons/hi';


const BurgerMenuBtn = ({ isNavOpen, handleMobileNav }) => {
  return (
    <div className={`flex justify-center items-center z-10 cursor-pointer h-12 w-12 rounded-full 
      text-white hover:bg-custom-dark hover:opacity-60
        lg:hidden 
      `} 
      onClick={handleMobileNav}
    >
        {
          isNavOpen ? <HiX className='h-6 w-6 sm:h-8 sm:w-8' />
          : <HiMenuAlt3 className='h-6 w-6 sm:h-8 sm:w-8' />
        }
    </div>
  )
}

export default BurgerMenuBtn