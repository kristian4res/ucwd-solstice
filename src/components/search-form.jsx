import React from 'react';

import { SearchIcon } from '@heroicons/react/solid';

const SearchForm = () => {
  return (
    <div className='container shadow-2xl w-fit px-2 py-2 grid auto-rows-auto grid-cols-1 rounded-lg bg-white mt-8 sm:grid-cols-2 md:mt-4 xl:grid-cols-5'>
        <div className='flex flex-col h-full mx-2 my-2 px-2'>
            <label htmlFor="trip-location">Location</label>
            <input type="text" placeholder='Search a location'></input>
        </div>
        <div className='flex flex-col h-full mx-2 my-2 px-2'>
            <label htmlFor="trip-check-in">Check In</label>
            <input type="date"></input>
        </div>
        <div className='flex flex-col h-full mx-2 my-2 px-2'>
            <label htmlFor="trip-check-out">Check Out</label>
            <input type="date"></input>
        </div>
        <div className='flex flex-col h-full mx-2 my-2 px-2'>
            <label htmlFor="trip-travellers">Travellers</label>
            <input type="number" placeholder='Number of travellers'></input>
        </div>
        <div className='place-self-center flex justify-center px-2 py-2 h-full w-full md:w-fit md:items-center'>
            <button className='flex w-full h-full justify-center items-center text-white bg-primary rounded-full p-2 md:w-32'>
                <SearchIcon className='h-6 w-6' />
            </button>
        </div>
    </div>
  )
}

export default SearchForm;