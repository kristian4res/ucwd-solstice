import React, { useState, useEffect } from 'react'
import LogoButton from './logo-button'

const Navigation = () => {
  const [navClass, setNavClass] = useState('');
  const [y, setY] = useState(100);

  // Check 
  const handleNavigation = (e) => {
    const window = e.currentTarget;

    if (y > window.scrollY) {
      setNavClass('');
    } else if (y < window.scrollY) {
      setNavClass('bg-dark-body');
    }

    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);

    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, []);

  return (
    <div className={`flex w-full transition-colors ${navClass} text-white z-10 fixed top-0 mx-auto py-4 px-8 md:px-14 lg:px-24`}>
      <LogoButton />
      <nav className='hidden md:flex justify-center items-center'>
        <ul className='flex m-0 p-0 space-x-12'>
          <li>
            <a className='text-lg' href="#" rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li>
            <a className='text-lg' href="#" rel="noopener noreferrer">
              Sign In
            </a>
          </li>
          <li>
            <a className='text-lg' href="#" rel="noopener noreferrer">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </div> 
  )
}

export default Navigation