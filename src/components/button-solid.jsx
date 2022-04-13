import React from 'react';

import { useNavigate } from "react-router-dom";

const ButtonSolid = ({ btnTitle, icon, route }) => {
  let navigate = useNavigate();

  return (
    <div className='rounded-full shadow-md transition-transform text-current
    hover:scale-105'>
        <button className='btn-solid items-center bg-white rounded-full 
           '
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
            {icon}    
        </button>
    </div>
  )
}

export default ButtonSolid