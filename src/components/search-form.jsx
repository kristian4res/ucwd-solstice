import React, { useState } from 'react';

import ButtonSolid from './button-solid';

import ButtonSearchResult from './button-search-result';

import { SearchIcon } from '@heroicons/react/solid';

const trips = [
    {"name": "London", "country": "United Kingdom"},
    {"name": "Paris", "country": "France"},
    {"name": "Manila", "country": "Philippines"},
    {"name": "Tokyo", "country": "Japan"},
    {"name": "Bern", "country": "Switzerland"},
]

const SearchForm = () => {
    const [isSearching, setIsSearching] = useState(true);
    const [locationInput, setLocationInput] = useState('');

    return (
        <form className='container shadow-2xl w-fit px-2 py-2 grid auto-rows-auto grid-cols-1 
            rounded-lg bg-white mt-8 text-dark
            sm:grid-cols-2 md:place-content-evenly md:mt-4 xl:grid-cols-5'
            onSubmit={(e) => e.preventDefault()}
        >
            <div className='form-group'>
                {/* IN PROGRESS */}
                <label htmlFor="search-form-location" className='mb-1 mx-2'>Location</label>
                <input className='form-input-text' 
                    name='search-form-location' 
                    type="text" 
                    placeholder='Search a location'
                    onChange={(e) => {
                        setIsSearching(true);
                        setLocationInput(e.target.value);
                    }}
                    value={locationInput}
                    onBlur={() => {
                        // Set timer to delay function, to ensure it runs after any search form button clicks 
                        setTimeout(() => {
                            if (isSearching) {
                                setIsSearching(false);
                            }

                            return null;
                        }, 100)
                    }}
                    autoComplete={'off'}
                    required 
                />
                <ul className={`${locationInput === '' || !isSearching ? 'hidden' : 'block'}
                    search-result-list
                    `}
                >
                    {
                        trips.filter((val) => {
                            if (locationInput === '' || !isSearching) {
                                return null;
                            }
                            else if (val.name.toLowerCase().includes(locationInput.toLowerCase()))  {
                                return val;
                            }
                        }).map((val, key) => {
                            return <ButtonSearchResult key={key} val={val}
                                handleResults={setIsSearching} 
                                handleClick={setLocationInput}
                            />
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
            <div className='flex justify-center text-white px-2 py-2 h-full w-full col-span-full
            md:items-center md:justify-self-center xl:col-span-1'>
                <ButtonSolid
                    btnStyles={'flex flex-row-reverse justify-center items-center bg-primary'}
                    btnTitle='Search'
                    icon={
                        <SearchIcon className='h-6 w-6 lg:h-8 lg:w-8' />
                    }
                />
            </div>
        </form>
    )
}

export default SearchForm;