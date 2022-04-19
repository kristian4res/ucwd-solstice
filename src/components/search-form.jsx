import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import AppContext from '../contexts/app-context';
import SearchFormContext from '../contexts/search-form-context';

import { getTomorrowsDate } from '../utils/utils';

import ButtonSolid from './button-solid';
import SearchFormInput from './search-form-input';

import { HiSearch, HiLocationMarker } from 'react-icons/hi';

const SearchForm = () => {
    /** CONTEXTS */
    const { devData: { trips, sports } } = useContext(AppContext);
    const { submitSearchForm, setSearchInputStyle } = useContext(SearchFormContext);

    /** STATES */
    // Routing
    const routeLocation = useLocation();
    const routeNavigate = useNavigate();

    // Input states
    const [locationInput, setLocationInput] = useState('');
    const [sportInput, setSportInput] = useState('');
    const [checkInVal, setCheckInVal] = useState(getTomorrowsDate());
    const [checkOutVal, setCheckOutVal] = useState(getTomorrowsDate('checkOut'));

    /** FUNCTIONS */
    const submitDetails = () => {
        // Deny request if location and sport are empty
        if (!locationInput && !sportInput) {
            // Update input style
            setSearchInputStyle(prevState => {
                return {...prevState,
                    location: 'form-input-failure',
                    sport: 'form-input-failure',
                }
            });
            return false;
        }

        // Get input values
        const details = {
            location: locationInput,
            sport: sportInput,
            checkIn: checkInVal,
            checkOut: checkOutVal
        }

        // Update context
        submitSearchForm(details);
        
        // Redirect to explore page (if in a different page)
        if (routeLocation.pathname !== '/explore') {
            routeNavigate('/explore');
        }
    }

    return (
        <>   
            <div className='container shadow-2xl w-[80%] px-2 py-2 grid auto-rows-auto grid-cols-1 
                rounded-lg bg-white mt-8 text-dark
                sm:grid-cols-2 md:place-content-evenly md:mt-4 xl:w-[63rem] xl:grid-cols-5'
            >
                <div className='form-group'>
                    <SearchFormInput
                        state={[locationInput, setLocationInput]} 
                        label={'location'}
                        placeholder={'Search a location'}
                        data={{ dataset: trips, fieldname: 'tripLocation' }}
                        iconEl={<HiLocationMarker className='h-6 w-6 xl:h-8 xl:w-8' />}
                    />
                </div>
                <div className='form-group'>
                    <SearchFormInput
                        state={[sportInput, setSportInput]} 
                        label={'sport'}
                        placeholder={'Pick a sport'}
                        data={{ dataset: sports, fieldname: 'sportName' }}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="trip-check-in" className='form-label'>Check In</label>
                    <input className='form-input' type="date" 
                        value={checkInVal}
                        onChange={(e) => setCheckInVal(e.target.value)}
                        min={getTomorrowsDate()} 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="trip-check-out" className='form-label'>Check Out</label>
                    <input className='form-input' type="date"
                        value={checkOutVal}
                        onChange={(e) => setCheckOutVal(e.target.value)}
                        min={getTomorrowsDate('checkOut')} 
                    />
                </div>
                <div className='flex justify-center text-white px-2 py-2 h-full w-full col-span-full
                md:items-center md:justify-self-center xl:col-span-1'>
                    <ButtonSolid
                        btnStyles={'flex flex-row-reverse justify-center items-center bg-primary'}
                        btnTitle='Search'
                        icon={
                            <HiSearch className='h-6 w-6 lg:h-8 lg:w-8' />
                        }
                        handleClick={submitDetails}
                    />
                </div>
            </div>
        </>
    )
}

export default SearchForm;