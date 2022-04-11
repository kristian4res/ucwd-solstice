import React from 'react';

import { Link } from 'react-router-dom';

const LinkUnderline = ({ label, route }) => {
  return (
      <li className='relative'>
        <Link className={`font-bold text-current text-lg 
            transition-all duration-25 ease-out
            after:content-[''] after:absolute after:-bottom-1 after:left-0 
            after:bg-primary after:w-full 
            after:scale-0 after:origin-bottom-right
            after:h-[2px] 
            hover:text-primary
            hover:after:scale-100 hover:after:origin-bottom-left`
            } 
            to={route}
        >
            {label}
        </Link>
      </li>
  )
}

export default LinkUnderline