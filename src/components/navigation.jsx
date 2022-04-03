import React from 'react'

const Navigation = () => {
  return (
    <div className='flex w-full text-white z-10 fixed top-0 mx-auto py-4 px-8 md:px-14 lg:px-24'>
      <div className="text-3xl font-bold mr-auto cursor-default">Solstice</div>
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