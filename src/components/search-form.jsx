import React, { useState } from 'react';
import { getTomorrowsDate } from '../utils/utils';

import ButtonSolid from './button-solid';

import ButtonSearchResult from './button-search-result';

import { SearchIcon, LocationMarkerIcon } from '@heroicons/react/solid';

// REMOVE THIS AFTERWARDS
const trips = [
    {"name": "London", "country": "United Kingdom"},
    {"name": "Paris", "country": "France"},
    {"name": "Manila", "country": "Philippines"},
    {"name": "Tokyo", "country": "Japan"},
    {"name": "Bern", "country": "Switzerland"},
]
const sports = [
    {"name": "Surfing", "country": "Hawaii", "season": "Summer", "icon": "🏄‍♀️"},
    {"name": "Kayaking", "country": "United Kingdom", "season": "Summer", "icon": "🛶"},
    {"name": "Scuba Diving", "country": "Philippines", "season": "Summer", "icon": "🤿"},
    {"name": "Skiing", "country": "Japan", "season": "Winter", "icon": "🎿"},
    {"name": "Snowboarding", "country": "France", "season": "Winter", "icon": "🏂"},
    {"name": "Snowshoeing", "country": "Switzerland", "season": "Winter", "icon": "🥾"},
]

const SearchForm = () => {
    /** STATES */
    // Handle location search input
    const [isSearchingLocation, setIsSearchingLocation] = useState(false);
    const [locationInput, setLocationInput] = useState('');
    // Handle sports type input
    const [isSearchingSport, setIsSearchingSport] = useState(false);
    const [sport, setSport] = useState('');
    // Handle date inputs
    const [checkInDate, setCheckInDate] = useState(getTomorrowsDate());
    const [checkOutDate, setCheckOutDate] = useState(getTomorrowsDate('checkOut'));

    return (
        <form className='container shadow-2xl w-fit px-2 py-2 grid auto-rows-auto grid-cols-1 
            rounded-lg bg-white mt-8 text-dark
            sm:grid-cols-2 md:place-content-evenly md:mt-4 xl:grid-cols-5'
            onSubmit={(e) => {
                e.preventDefault();

                console.log(locationInput);
                console.log(sport);

            }}
        >
            <div className='form-group'>
                <label htmlFor="search-form-location" className='form-label'>Location</label>
                <input className='form-input' 
                    name='search-form-location' 
                    type="text" 
                    placeholder='Search a location'
                    onChange={(e) => {
                        setIsSearchingLocation(true);
                        setLocationInput(e.target.value);
                    }}
                    value={locationInput}
                    onBlur={() => {
                        // Set timer to delay function, to ensure it runs after any search form button clicks 
                        setTimeout(() => {
                            if (isSearchingLocation) {
                                setIsSearchingLocation(false);
                            }

                            return null;
                        }, 100)
                    }}
                    autoComplete={'off'}
                    required 
                />
                <ul className={`${locationInput === '' || !isSearchingLocation ? 'hidden' : 'block'}
                        form-input-dropdown
                    `}
                >
                    {
                        trips.filter((val) => {
                            if (locationInput === '' || !isSearchingLocation) {
                                return null;
                            }
                            else if (val.name.toLowerCase().includes(locationInput.toLowerCase()))  {
                                return val;
                            }
                        }).map((val, key) => {
                            return <ButtonSearchResult key={key} 
                                val={val}
                                handleResults={setIsSearchingLocation} 
                                handleClick={setLocationInput}
                                icon={
                                    <LocationMarkerIcon className='h-6 w-6 xl:h-8 xl:w-8' />
                                }
                            />
                        })
                    }
                </ul>
            </div>
            <div className='form-group'>
                <label htmlFor="search-form-sport" className='form-label'>Sport</label>
                <input className='form-input' 
                    name='search-form-sport' 
                    type="text" 
                    placeholder='Pick a sport'
                    onChange={(e) => {
                        setIsSearchingSport(true);
                        setSport(e.target.value);
                    }}
                    value={sport}
                    onBlur={() => {
                        // Set timer to delay function, to ensure it runs after any search form button clicks 
                        setTimeout(() => {
                            if (isSearchingSport) {
                                setIsSearchingSport(false);
                            }

                            return null;
                        }, 100)
                    }}
                    autoComplete={'off'}
                    required 
                />
                <ul className={`${sport === '' || !isSearchingSport ? 'hidden' : 'block'}
                        form-input-dropdown
                    `}
                >
                    {
                        sports.filter((val) => {
                            if (sport === '' || !isSearchingSport) {
                                return null;
                            }
                            else if (val.name.toLowerCase().includes(sport.toLowerCase()))  {
                                return val;
                            }
                        }).map((val, key) => {
                            return <ButtonSearchResult key={key} 
                                val={val}
                                handleResults={setIsSearchingSport} 
                                handleClick={setSport}
                                icon={val.icon}
                            />
                        })
                    }
                </ul>
            </div>
            <div className='form-group'>
                <label htmlFor="trip-check-in" className='form-label'>Check In</label>
                <input className='form-input' type="date" 
                    value={checkInDate}
                    min={getTomorrowsDate()} 
                />
            </div>
            <div className='form-group'>
                <label htmlFor="trip-check-out" className='form-label'>Check Out</label>
                <input className='form-input' type="date"
                    value={checkOutDate}
                    min={getTomorrowsDate('checkOut')} 
                />
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