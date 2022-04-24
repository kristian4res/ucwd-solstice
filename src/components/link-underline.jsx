import React from 'react';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';

const LinkUnderline = ({ label, route, textSize, textWeight }) => {
  const routeLocation = useLocation();

  return (
      <li className='relative'>
        <Link className={`btn-underline
            font-${textWeight ? textWeight : 'bold'}
            text-${textSize ? textSize : 'lg'}
            ${route === routeLocation.pathname && 'btn-underline-active'}
          `} 
          to={route}
        >
          <span className='flex justify-center'>
            {label}
          </span>
        </Link>
      </li>
  )
}

export default LinkUnderline