import React from 'react';

import { useNavigate } from "react-router-dom";

const ButtonOutline = ({ btnTitle, icon, route }) => {
  let navigate = useNavigate();

  return (
    <div className='custom-bg-gradient rounded-full shadow-md transition-transform 
    hover:scale-105'>
        <button className='flex justify-center items-center text-dark font-light bg-white rounded-full m-2 px-2 py-2 
        md:text-lg'
        onClick={() => {
          if (route) {
            navigate(route);
          }
          return null;
        }}>
          {btnTitle}
          {icon}
        </button>
    </div>
  )
}

export default ButtonOutline