import React, { useState, useContext, useRef } from 'react';

import AppContext from '../contexts/app-context';
import SearchFormContext from '../contexts/search-form-context';

import { getTomorrowsDate } from '../utils/utils';

import ButtonSolid from './button-solid';

import { SearchIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import SearchFormInput from './search-form-input';

const SearchForm = () => {
    /** CONTEXTS */
    const { devData: { trips, sports } } = useContext(AppContext);
    const { inputHooks, submitSearchForm } = useContext(SearchFormContext);

    return (
        <>   
            <div className='container shadow-2xl w-fit px-2 py-2 grid auto-rows-auto grid-cols-1 
                rounded-lg bg-white mt-8 text-dark
                sm:grid-cols-2 md:place-content-evenly md:mt-4 xl:grid-cols-5'
            >
                <div className='form-group'>
                    <SearchFormInput 
                        label={'location'}
                        placeholder={'Search a location'}
                        data={trips}
                        iconEl={<LocationMarkerIcon className='h-6 w-6 xl:h-8 xl:w-8' />}
                    />
                </div>
                <div className='form-group'>
                    <SearchFormInput 
                        label={'sport'}
                        placeholder={'Pick a sport'}
                        data={sports}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="trip-check-in" className='form-label'>Check In</label>
                    <input className='form-input' type="date" 
                        value={inputHooks['checkIn'][0]}
                        onChange={(e) => inputHooks['checkIn'][1](e.target.value)}
                        min={getTomorrowsDate()} 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="trip-check-out" className='form-label'>Check Out</label>
                    <input className='form-input' type="date"
                        value={inputHooks['checkOut'][0]}
                        onChange={(e) => inputHooks['checkOut'][1](e.target.value)}
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
                        handleClick={submitSearchForm}
                    />
                </div>
            </div>
        </>
    )
}

export default SearchForm;