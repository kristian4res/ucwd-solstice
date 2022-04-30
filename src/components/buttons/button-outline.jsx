import React from 'react';

import { useNavigate } from "react-router-dom";

const ButtonOutline = ({ btnTitle, icon, route }) => {
  /** HOOKS */
  let navigate = useNavigate();

  return (
    <div className='custom-bg-gradient text-current rounded-full shadow-md transition-transform 
    hover:scale-105 hover:brightness-95 active:scale-100'>
        <button className='flex justify-center items-center text-current font-semibold bg-white rounded-full m-2 px-2 py-2'
        onClick={() => {
          if (route) {
            navigate(route);
          }
          return null;
        }}>
          <span className='text-sm  
            xl:text-lg'>
            {btnTitle}
          </span>
          <span aria-hidden={true}>
            {icon}
          </span>
        </button>
    </div>
  )
}

export default ButtonOutline