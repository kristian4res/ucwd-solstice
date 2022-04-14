import React from 'react';

import { LocationMarkerIcon } from '@heroicons/react/solid';

const ButtonSearchResult = ({ val, handleResults, handleClick }) => {
  return (
    <li className='text-dark hover:bg-slate-200 cursor-pointer'>
        <button className='btn-solid items-center px-2'
            onClick={() => {
                handleClick(`${val.name}, ${val.country}`);
                handleResults(false);
            }}
        >
            <LocationMarkerIcon className='h-6 w-6 lg:h-8 lg:w-8' />
            <div className='flex flex-col items-start'>
                <span className='ml-2 text-sm'>
                    {val.name ? val.name : 'NAME'}
                </span>
                <span className='ml-2 text-sm font-thin'>
                    {val.country ? val.country : 'COUNTRY'}
                </span>
            </div>
        </button>
    </li>
  )
}

export default ButtonSearchResult