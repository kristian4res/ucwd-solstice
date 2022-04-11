import React from 'react';

import { Link } from 'react-router-dom';

const LinkSolid= ({ label, route, color }) => {
  return (
    <li className='relative'>
        <Link className={`container min-w-24 font-bold text-current text-md
            transition-all duration-25 ease-out
            ${color ? color : 'bg-primary'} py-2 px-4 rounded-lg block
            brightness-100
            hover:brightness-90
            md:text-lg 
            `} 
            to={route}
        >
            {label}
        </Link>
    </li>
  )
}

export default LinkSolid