import React from 'react';

import { Link } from 'react-router-dom';

const LinkSolid= ({ label, route, extraStyles }) => {
  return (
    <li className='relative'>
        <Link className={`btn-solid 
            ${extraStyles ? extraStyles : 'bg-primary rounded-none'}`} 
            to={route}
        >
            <span className='whitespace-nowrap'>
              {label}
            </span>
        </Link>
    </li>
  )
}

export default LinkSolid