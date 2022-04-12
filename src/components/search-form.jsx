import React, { useState } from 'react';

import { SearchIcon } from '@heroicons/react/solid';

const trips = [
    {"name": "london"},
    {"name": "london1"},
    {"name": "london2"},
    {"name": "london3"},
    {"name": "london4"},
    {"name": "paris"},
    {"name": "manila"},
    {"name": "tokyo"},
    {"name": "bern"},
]

const SearchForm = () => {
    const [searchedLocation, setSearchedLocation] = useState('');

  return (
    <form className='container shadow-2xl w-fit px-2 py-2 grid auto-rows-auto grid-cols-1 
        rounded-lg bg-white mt-8 text-dark
        sm:grid-cols-2 md:place-content-evenly md:mt-4 xl:grid-cols-5'
    onSubmit={(e) => e.preventDefault()}
    >
        <div className='form-group relative'>
            {/* IN PROGRESS */}
            <label htmlFor="search-form-location" className='mb-1 mx-2'>Location</label>
            <input className='outline-1 px-2 py-1 text-base' 
                name='search-form-location' 
                type="text" 
                placeholder='Search a location'
                onChange={(e) => {
                    setSearchedLocation(e.target.value);
                }}
                autoComplete={'off'}
                required 
            />
            <ul className='container p-2 absolute top-full rounded-lg shadow-xl bg-white text-dark'>
                {
                    trips.filter((val) => {
                        if (searchedLocation === '') {
                            return '';
                        }
                        else if (val.name.toLowerCase().includes(searchedLocation.toLowerCase()))  {
                            return val;
                        }
                    }).map((val, key) => {
                        return <li key={key}>{val.name}</li>
                    })
                }
            </ul>
        </div>
        <div className='form-group'>
            <label htmlFor="trip-check-in">Check In</label>
            <input type="date"></input>
        </div>
        <div className='form-group'>
            <label htmlFor="trip-check-out">Check Out</label>
            <input type="date"></input>
        </div>
        <div className='form-group'>
            <label htmlFor="trip-travellers">Travellers</label>
            <input type="number" placeholder='Number of travellers'></input>
        </div>
        <div className='flex justify-center px-2 py-2 h-full w-full col-span-full
         md:items-center md:justify-self-center xl:col-span-1'>
            <button className='flex w-full h-full justify-center items-center text-white bg-primary rounded-full p-2
                hover:brightness-90
                lg:max-h-[4rem]'
            type='submit'
            >
                <SearchIcon className='h-6 w-6' />
                <span className='ml-2'>Search</span>
            </button>
        </div>
    </form>
  )
}

export default SearchForm;