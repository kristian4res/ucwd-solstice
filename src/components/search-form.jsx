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
    const { toggleModal, devData: { trips, sports } } = useContext(AppContext);
    const { searchFormDetails, submitSearchForm, setSearchInputStyle } = useContext(SearchFormContext);

    /** STATES */
    // Routing
    const routeLocation = useLocation();
    const routeNavigate = useNavigate();

    // Pass down input states
    const [locationInput, setLocationInput] = useState(searchFormDetails['location']);
    const [sportInput, setSportInput] = useState(searchFormDetails['sport']);
    const [checkInVal, setCheckInVal] = useState(searchFormDetails['checkIn']);
    const [checkOutVal, setCheckOutVal] = useState(searchFormDetails['checkOut']);
    // Toggling date input modal
    const [dateInputFocus, setDateInputFocus] = useState({
        'checkIn': '',
        'checkOut': ''
    });

    /** FUNCTIONS */
    const submitDetails = () => {
        // Get input values
        const details = {
            location: locationInput,
            sport: sportInput,
            checkIn: checkInVal,
            checkOut: checkOutVal
        }

        // Reject request if location and sport are empty
        if (!details.location && !details.sport) {
            // Update input style
            setSearchInputStyle(prevState => {
                return {...prevState,
                    location: 'form-input-failure',
                    sport: 'form-input-failure',
                }
            });
            return false;
        }

        // Update context
        submitSearchForm(details);
        
        // Redirect to explore page (if in a different page)
        if (routeLocation.pathname !== '/trips') {
            routeNavigate('/trips');
        }
    }


    return (
        <form title="Solstice search form" onSubmit={(e) => e.preventDefault()} 
            className='container shadow-2xl w-[80%] px-2 py-2 grid auto-rows-auto grid-cols-1 justify-items-center
            rounded-lg bg-white mt-8 text-custom-dark
            sm:grid-cols-2 md:place-content-evenly md:mt-4 xl:w-[63rem] xl:grid-cols-5'
        >
            <div className='form-group w-full'>
                <SearchFormInput
                    state={[locationInput, setLocationInput]} 
                    label={'location'}
                    placeholder={'Search a location'}
                    data={{ dataset: trips, fieldname: 'tripLocation' }}
                    iconEl={<HiLocationMarker className='h-6 w-6 xl:h-8 xl:w-8' />}
                />
            </div>
            <div className='form-group w-full'>
                <SearchFormInput
                    state={[sportInput, setSportInput]} 
                    label={'sport'}
                    placeholder={'Pick a sport'}
                    data={{ dataset: sports, fieldname: 'sportName' }}
                />
            </div>
            <div className='form-group w-full'>
                <label htmlFor="search-form-check-in" className='form-label'>Check In</label>
                <input className={`form-input ${dateInputFocus['checkIn']}`} 
                    name='search-form-check-in'
                    type="date" 
                    value={checkInVal}
                    onChange={(e) => setCheckInVal(e.target.value)}
                    min={getTomorrowsDate()}
                    onFocus={() => {
                        setDateInputFocus(prevState => {
                            return {...prevState, checkIn: 'z-10'}
                        });
                        toggleModal(true)
                    }}
                    onBlur={() => { 
                        setDateInputFocus(prevState => {
                            return {...prevState, checkIn: ''}
                        });
                        toggleModal(false);
                    }} 
                />
            </div>
            <div className='form-group w-full'>
                <label htmlFor="search-form-check-out" className='form-label'>Check Out</label>
                <input className={`form-input ${dateInputFocus['checkOut']}`} 
                    name='search-form-check-out'
                    type="date"
                    value={checkOutVal}
                    onChange={(e) => setCheckOutVal(e.target.value)}
                    min={getTomorrowsDate('checkOut')}
                    onFocus={() => {
                        setDateInputFocus(prevState => {
                            return {...prevState, checkOut: 'z-10'}
                        });
                        toggleModal(true);
                    }}
                    onBlur={() => {
                        setDateInputFocus(prevState => {
                            return {...prevState, checkOut: ''}
                        });
                        toggleModal(false);
                    }} 
                />
            </div>
            <div className='flex justify-center text-white px-2 py-2 h-full w-full col-span-full
            md:items-center md:justify-center xl:col-span-1'>
                <ButtonSolid
                    type="submit"
                    btnStyles={'flex flex-row-reverse justify-center items-center bg-primary'}
                    btnTitle='Search'
                    icon={
                        <HiSearch className='h-6 w-6 lg:h-8 lg:w-8' />
                    }
                    handleClick={submitDetails}
                />
            </div>
        </form>
    )
}

export default SearchForm;