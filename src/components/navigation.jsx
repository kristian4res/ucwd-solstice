import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import BurgerMenuBtn from './burger-menu-btn';
import NavigationSearch from './navigation-search';
import LinkUnderline from './link-underline';
import LinkSolid from './link-solid';
import LogoAdaptive from './logo-adaptive';

const Navigation = () => {
  /** STATES */
  // Routing
  const location = useLocation();

  // Mobile nav
  const [isNavOpen, setNavOpen] = useState(false);

  const handleMobileNav = () => {
    setNavOpen(prevState => !prevState);
  }

  // Detecting scroll
  const [y, setY] = useState(100);
  const [navClass, setNavClass] = useState('');
  
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
          <LogoAdaptive pageLocation={location.pathname} navStatus={navClass} />
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
            <ul className='flex flex-col h-full items-start 
              px-16 pt-4 mt-[5.3rem] space-y-2 bg-dark
              lg:space-y-0 lg:bg-transparent lg:m-0 lg:p-0 lg:space-x-8 lg:flex-row lg:justify-center lg:items-center'
            >
              <LinkUnderline label='Home' route='/' />
              <LinkUnderline label='Explore' route='/explore' />
              <LinkUnderline label='Support' route='/support' />
              <LinkUnderline label='' route='/signin' />
              <div className='flex flex-col justify-between space-y-4 pt-6 
              lg:flex-row lg:space-y-0 lg:space-x-4 lg:pt-0'
              >
                <LinkSolid label='Sign Up' route='/signup' color='bg-success' />
                <LinkSolid label='Sign In' route='/signin' color='bg-secondary' />
              </div>
            </ul>
          </nav>
        </div>
      </div> 
    </div>
  )
}

export default Navigation