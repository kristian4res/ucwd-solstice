import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import SignInSignUpContext from '../../contexts/sign-in-sign-up-context';

import BurgerMenuBtn from '../buttons/button-burger-menu';
import NavigationSearch from './navigation-search';
import LinkUnderline from '../links/link-underline';
import LinkSolid from '../links/link-solid';
import LogoAdaptive from '../logo/logo-adaptive';


const Navigation = () => {
  /** CONTEXTS */
  const { signIn: { currentUser }, signOut: { signOutCurrentUser } } = useContext(SignInSignUpContext);

  /** STATES */
  // Routing
  const routeLocation = useLocation();
  const isHomepage = routeLocation.pathname === '/';
  // Detecting scroll (Y axis)
  const [y, setY] = useState(100);
  // Mobile nav
  const [navClass, setNavClass] = useState('');
  const [isNavOpen, setNavOpen] = useState(false);
  
  /** FUNCTIONS */
  /**
   * Toggles hidden class in the navigation element
   */
  const handleMobileNav = () => {
    setNavOpen(prevState => !prevState);
  }

  /**
   * This function will change the appearance of the navigation element,
   * depending on the screen y coordinate
   */
  const handleNavBackdrop = useCallback((e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setNavClass('');
      } else if (y < window.scrollY) {
        setNavClass('backdrop-blur bg-main shadow-xl');
      }
    }, [y]
  );
  
  /**
   * Adds a listener to the browser window scroll event and 
   * attaches the callback to change the navigation look, i.e. handleNavBackdrop,
   * then removes the listener afterwards to prevent unecessary calls
   */
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", (e) => handleNavBackdrop(e));
  
    return () => {
      window.removeEventListener("scroll", (e) => handleNavBackdrop(e));
    };
  }, [handleNavBackdrop]);

  return (
    <header className={`w-full ${navClass} z-20 fixed top-0 text-white`}>
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
              <LinkUnderline label='Trips' route='/trips' />
              <LinkUnderline label='Support' route='/support' />
              <div className='flex flex-col justify-between space-y-4 pt-6 
                lg:flex-row lg:space-y-0 lg:space-x-4 lg:pt-0'
              >
                {
                  !currentUser 
                  ? <>
                      <LinkSolid label='Sign Up' route='/signup' extraStyles='bg-success rounded-lg text-lg' />
                      <LinkSolid label='Sign In' route='/signin' extraStyles='bg-secondary-pastel rounded-lg text-lg' />
                    </>
                  : <LinkSolid label='Sign Out' isBtn={true} handleClick={signOutCurrentUser} extraStyles='bg-secondary rounded-lg' />
                }
              </div>
            </ul>
          </nav>
        </div>
      </div> 
    </header>
  )
}

export default Navigation