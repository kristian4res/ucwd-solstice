import React from 'react';
import { useLocation } from 'react-router-dom';

import { SearchIcon } from '@heroicons/react/solid';

const NavigationSearch = ({ navClass }) => {
    let location = useLocation();
    let isHomepage = location.pathname === '/'; 

    return (
        <div className={`flex shrink justify-center items-center z-10 shadow-lg rounded-full bg-white text-dark md:max-w-4xl ${navClass.length === 0 && isHomepage ? 'invisible' : 'visible'}`}>
            <div className='flex ml-2'>
                <input className='flex px-2 w-full text-sm md:text-md lg:text-lg'type="text" placeholder='Search a location'></input>
            </div>
            <div className='flex justify-center mx-2 my-2 w-10 md:w-fit md:items-center'>
                <button className='flex h-full justify-center items-center text-white bg-primary rounded-full p-2 md:w-14'>
                    <SearchIcon className='h-5 w-5 md:h-6 md:w-6' />
                </button>
            </div>
        </div>
    )
}

export default NavigationSearch