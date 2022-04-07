import React, { useState, useEffect, useCallback } from 'react'

import { MenuIcon, XIcon } from '@heroicons/react/solid'
import LogoButton from './logo-button'

const Navigation = () => {
  const [navClass, setNavClass] = useState('');
  const [y, setY] = useState(100);
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavBackdrop = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setNavClass('');
      } else if (y < window.scrollY) {
        setNavClass('bg-dark-body shadow-lg');
      }
    }, [y]
  );

  const handleMobileNav = () => {
    if (window.screen.width > 768) {
      return null;
    }

    setNavOpen(prevState => !prevState);
  }
  
  // Detects scrolling and changes navigation look
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", (e) => handleNavBackdrop(e));
  
    return () => {
      window.removeEventListener("scroll", (e) => handleNavBackdrop(e));
    };
  }, [handleNavBackdrop]);

  return (
    <div className={`flex w-full transition-all ease-in ${navClass} text-white z-10 fixed top-0 mx-auto py-4 px-8 md:px-14 lg:px-24`}>
      <LogoButton navStatus={navClass} />
      <div className='cursor-pointer md:hidden' onClick={handleMobileNav}>
        {
          isNavOpen ? <XIcon className='h-8 w-8' />
          : <MenuIcon className='h-8 w-8'/>
        }
      </div>
      {/* WORK IN PROGRESS */}
      <nav className={`absolute top-[4.7rem] opacity-0 right-0 h-[92vh] w-[50vw] 
      bg-slate-500 before:content-[''] before:absolute before:w-0 before:h-0 before:bottom-full before:border-4 before:border-transparent before:border-solid
      transition-all ease-in rounded-md
      justify-center items-center 
        ${isNavOpen ? 'translate-x-0 opacity-100' : 'translate-x-full md:translate-x-0 md:opacity-100'} 
        md:static md:flex md:h-fit md:w-fit`
      }>
        <ul className='flex flex-col items-start mx-12 my-12 md:m-0 md:p-0 md:space-x-12 md:flex-row md:justify-center'>
          <li>
            <a className='text-lg' href="#home" rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li>
            <a className='text-lg' href="#signin" rel="noopener noreferrer">
              Sign In
            </a>
          </li>
          <li>
            <a className='text-lg' href="#signup" rel="noopener noreferrer">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </div> 
  )
}

export default Navigation