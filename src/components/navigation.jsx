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
  const routeLocation = useLocation();
  const isHomepage = routeLocation.pathname === '/';

  // Mobile nav
  const [isNavOpen, setNavOpen] = useState(false);
  const handleMobileNav = () => {
    setNavOpen(prevState => !prevState);
  }

  // Detecting scroll (Y axis)
  const [y, setY] = useState(80);
  const [navClass, setNavClass] = useState('');
  const handleNavBackdrop = useCallback((e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setNavClass('');
      } else if (y < window.scrollY) {
        setNavClass('backdrop-blur bg-main shadow-xl');
      }
    }, [y]
  );
  
  // Adds listener to scroll event and attaches the callback to change the navigation look
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", (e) => handleNavBackdrop(e));
  
    return () => {
      window.removeEventListener("scroll", (e) => handleNavBackdrop(e));
    };
  }, [handleNavBackdrop]);

  return (
    <div className={`w-full ${navClass} z-20 fixed top-0 text-white`}>
      <div className={`flex ${routeLocation.pathname === '/' ? 'transparent' : 'bg-main' } 
        items-center w-full transition-all ease-in mx-auto py-4 px-6
        md:px-14 lg:px-24`
      }>
        <div className='w-full flex justify-between items-center gap-2 
          md:gap-4'
        >
          <LogoAdaptive pageLocation={routeLocation.pathname} navStatus={navClass} />
          {
            (navClass.length > 0 || routeLocation.pathname !== '/')
            && <NavigationSearch />
          }
          <BurgerMenuBtn isNavOpen={isNavOpen} handleMobileNav={handleMobileNav} />
          <nav className={
            `absolute top-0 opacity-0 right-0 h-screen w-[50vw] 
            ${isHomepage && 'bg-main lg:text-white'}  
            transition-all ease-in
            justify-center items-center 
            ${isNavOpen ? 'translate-x-0 opacity-100 drop-shadow-xl' : 'translate-x-full lg:translate-x-0 lg:opacity-100'} 
            lg:bg-transparent lg:static lg:flex lg:h-fit lg:w-fit`
          }>
            <ul className='flex flex-col h-full items-start 
              px-16 pt-4 mt-[5.28rem] space-y-2 bg-main
              lg:space-y-0 lg:bg-transparent lg:m-0 lg:p-0 lg:space-x-8 lg:flex-row 
              lg:justify-center lg:items-center'
            >
              <LinkUnderline label='Home' route='/' />
              <LinkUnderline label='Explore' route='/explore' />
              <LinkUnderline label='Support' route='/support' />
              <div className='flex flex-col justify-between space-y-4 pt-6 
                lg:flex-row lg:space-y-0 lg:space-x-4 lg:pt-0'
              >
                <LinkSolid label='Sign Up' route='/signup' color='bg-success' />
                <LinkSolid label='Sign In' route='/signin' color='bg-secondary-pastel' />
              </div>
            </ul>
          </nav>
        </div>
      </div> 
    </div>
  )
}

export default Navigation