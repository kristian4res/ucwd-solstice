import React from 'react';

import { Link } from 'react-router-dom';

const LinkUnderline = ({ label, route, textSize, textWeight }) => {
  return (
      <li className='relative'>
        <Link className={` btn-underline
          font-${textWeight ? textWeight : 'bold'}
          text-${textSize ? textSize : 'lg'}
          `} 
          to={route}
        >
            {label}
        </Link>
      </li>
  )
}

export default LinkUnderline