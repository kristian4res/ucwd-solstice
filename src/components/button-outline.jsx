import React from 'react';

const ButtonOutline = ({ btnTitle, icon }) => {
  return (
    <div className='custom-bg-gradient rounded-full shadow-md transition-transform hover:scale-105'>
        <button className='flex justify-center items-center text-dark text-md font-light bg-white rounded-full m-2 px-2 py-2 md:text-lg'>
          {btnTitle}
          {icon}
        </button>
    </div>
  )
}

export default ButtonOutline