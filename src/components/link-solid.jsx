import React from 'react';

import { Link } from 'react-router-dom';

const LinkSolid= ({ label, route, color }) => {
  return (
    <li className='relative'>
        <Link className={`btn-solid
            ${color ? color : 'bg-primary'}`} 
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