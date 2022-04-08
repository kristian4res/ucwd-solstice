import React from 'react';

import { SearchIcon } from '@heroicons/react/solid';

const SearchForm = () => {
  return (
    <div className='container shadow-2xl max-w-8xl grid auto-rows-auto grid-cols-1 rounded-lg bg-white mt-8 sm:grid-cols-2 md:grid-cols-2 md:mt-4 lg:grid-cols-5'>
        <div className='flex flex-col mx-2 my-2 px-2'>
            <label htmlFor="trip-location">Location</label>
            <input type="text" placeholder='Search a location'></input>
        </div>
        <div className='flex flex-col mx-2 my-2 px-2'>
            <label htmlFor="trip-check-in">Check In</label>
            <input type="date"></input>
        </div>
        <div className='flex flex-col mx-2 my-2 px-2'>
            <label htmlFor="trip-check-out">Check Out</label>
            <input type="date"></input>
        </div>
        <div className='flex flex-col mx-2 my-2 px-2'>
            <label htmlFor="trip-travellers">Travellers</label>
            <input type="number" placeholder='Number of travellers'></input>
        </div>
        <div className='flex justify-center mx-2 my-2 w-full md:w-fit md:items-center'>
            <button className='flex w-3/4 justify-center items-center text-white bg-blue-400 rounded-lg md:w-32'>
                <SearchIcon className='h-6 w-6' />
                <span className='text-xl p-2'>Search</span>
            </button>
        </div>
    </div>
  )
}

export default SearchForm;