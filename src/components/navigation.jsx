import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';

import LogoButton from './logo-button';
import BurgerMenuBtn from './burger-menu-btn';
import NavigationSearch from './navigation-search';

const Navigation = () => {
  // State for managing navigation look
  const [navClass, setNavClass] = useState('');
  const [y, setY] = useState(100);
  const [isNavOpen, setNavOpen] = useState(false);

  const location = useLocation();

  const handleNavBackdrop = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setNavClass('');
      } else if (y < window.scrollY) {
        setNavClass('backdrop-blur bg-dark shadow-lg');
      }
    }, [y]
  );

  const handleMobileNav = () => {
    // Only work when screen size is below 1024px (lg)
    if (window.screen.width > 1024) {
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
    <div className={`w-full ${navClass} z-10 fixed top-0 text-white`}>
      <div className={`flex ${location.pathname === '/' ? 'transparent' : 'bg-dark' } 
        items-center w-full transition-all ease-in mx-auto py-4 px-6 md:px-14 lg:px-24`
      }>
        <div className='w-full flex justify-between items-center space-x-2 md:space-x-4'>
          <LogoButton pageLocation={location.pathname} navStatus={navClass} />
          <NavigationSearch navClass={navClass} />
          <BurgerMenuBtn isNavOpen={isNavOpen} handleMobileNav={handleMobileNav} />
          <nav className={
            `absolute top-0 opacity-0 right-0 h-screen w-[50vw] 
            ${location.pathname === '/' ? 'bg-dark lg:text-white' : '' }  
            transition-all ease-in
            justify-center items-center 
            ${isNavOpen ? 'translate-x-0 opacity-100' : 'translate-x-full lg:translate-x-0 lg:opacity-100'} 
            lg:bg-transparent lg:static lg:flex lg:h-fit lg:w-fit`
          }>
            <ul className='flex flex-col h-full items-start px-16 pt-4 mt-[5.3rem] bg-slate-500
              lg:bg-transparent lg:m-0 lg:p-0 lg:space-x-12 lg:flex-row lg:justify-center lg:items-center'
            >
              <li>
                <Link className='text-lg' to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='text-lg' to='/explore'>
                  Explore
                </Link>
              </li>
              <li>
                <Link className='text-lg' to='/contacts'>
                  Contacts
                </Link>
              </li>
              <li>
                <Link className='text-lg' to='/signin'>
                  Sign In
                </Link>
              </li>
              <li>
                <Link className='text-lg' to='/signup'>
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div> 
    </div>
  )
}

export default Navigation