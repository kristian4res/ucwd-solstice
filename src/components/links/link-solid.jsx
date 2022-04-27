import React from 'react';

import { Link } from 'react-router-dom';


const LinkSolid= ({ label, route, extraStyles, isBtn, handleClick=undefined }) => {
  return (
    <li className='relative'>
      {
        !isBtn && handleClick === undefined  
        ? <Link className={`btn-solid 
              ${extraStyles ? extraStyles : 'bg-primary rounded-none'}`} 
              to={route}
          >
              <span className='whitespace-nowrap'>
                {label}
              </span>
          </Link>
        : <button className={`btn-solid 
          ${extraStyles ? extraStyles : 'bg-primary rounded-none'}`}
          onClick={handleClick ? () => handleClick() : undefined}
        >
            <span className='whitespace-nowrap'>
              {label}
            </span>
        </button >
      }
    </li>
  )
}

export default LinkSolid