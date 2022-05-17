import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import validator from 'validator';

import AppContext from '../../contexts/app-context';
import SearchFormContext from '../../contexts/search-form-context';

import ButtonSearchResult from '../buttons/button-search-result';
import ButtonSolid from '../buttons/button-solid';

import { HiSearch, HiLocationMarker } from 'react-icons/hi';

const NavigationSearch = () => {
    /** CONTEXTS */
    const { devData: { trips } } = useContext(AppContext);
    const { submitSearchForm } = useContext(SearchFormContext);

    /** STATES */
    // Routing
    const routeNavigate = useNavigate();
    const routeLocation = useLocation();
    // Input handlers
    const [locationInput, setLocationInput] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    // Input styles
    const [inputInvalid, setInputInvalid] = useState(null);

    /** FUNCTIONS */
    /**
     * This function takes the input hook value and validates it,
     * whether it passes or fails, the UI is updated to reflect this status.
     * If it passes, the input value is sent back (to the server*) 
     * and the user is redirected
     */
    const submitDetails = () => {
        // Get input values
        const details = {
            location: locationInput
        }

        // Reject request if no input
        if (!details.location || !validator.isAlpha(details.location, "en-GB", { ignore: " " })) {
            setInputInvalid(true);
            return null;
        }

        // Clear input and reset input UI
        setLocationInput('');
        setInputInvalid(false);

        // Redirect to explore page (if in a different page)
        if (routeLocation.pathname !== '/trips') {
            routeNavigate('/trips');
        }

        submitSearchForm(details);
    }
    
    /** 
     * Timeout to delay the function execution (i.e. give time for other functions to execute)
     * */ 
    const onBlurHandler = () => {
        return setTimeout(() => setIsFocused(false), 100);
    }

    return (
        <div className={`flex w-full shrink justify-center items-center z-10 shadow-lg rounded-full bg-white text-custom-dark 
            md:w-[40%] md:max-w-full 
            `
        }>
            <div className='flex flex-col ml-2 w-full relative'
                aria-haspopup={true}
                aria-expanded={isFocused}
                onBlur={onBlurHandler}
                onFocus={clearTimeout(onBlurHandler)}
            >
                <input className='flex p-2 w-full text-sm rounded-full
                    md:text-base lg:text-lg'
                    type="text" 
                    value={locationInput}
                    onChange={(e) => {
                        if (e.target.value === '') {
                            setInputInvalid(null);
                        }
                        setLocationInput(e.target.value);
                    }}
                    onClick={() => setIsFocused(true)}
                    onKeyDown={(e) => {
                        if (e.code === 'Enter') {
                            submitDetails();
                        }
                    }}
                    placeholder='Where do you want to go?' 
                />
                <div className={`${inputInvalid ? 'flex custom-message-bubble' : 'hidden'}`}>
                    <span className='ml-2 text-[0.7rem] w-full text-failure'>
                        {   
                            `Please ensure you only use letters, e.g. Honolulu`
                        }
                    </span>
                </div>
                <ul className={`${(!isFocused) ? 'hidden' : 'flex flex-col'}
                    form-input-dropdown-navigation
                `}>
                    {   
                        // Filter and loop through data, then display data by rendering list elements
                        trips.filter((val) => {
                            if (!locationInput || locationInput === '') {
                                return null;
                            }
                            else if (val.tripLocation?.toLowerCase().includes(locationInput?.toLowerCase()))  {
                                return val;
                            }
                            else {
                                return null;
                            }
                        }).map((val, key) => {
                            return <ButtonSearchResult key={key} 
                                val={{ title: val.tripLocation, subtitle: val.tripFullLocation}}
                                handleClick={() => {
                                    // Set input value
                                    setLocationInput(val.tripLocation);
                                }}
                                icon={<HiLocationMarker className='h-6 w-6 xl:h-8 xl:w-8' />}
                            />
                        })
                    }
                </ul>
            </div>
            <div className={`'justify-center px-2 py-2 w-fit text-white
                    md:w-fit md:items-center'
                `}>
                <ButtonSolid
                    btnStyles={`flex h-full justify-center items-center text-white bg-primary p-2
                        md:w-14`}
                    icon={
                        <HiSearch className='h-5 w-5 md:h-6 md:w-6' />
                    }
                    title='Search trips'
                    handleClick={submitDetails}
                />
            </div>
        </div>
    )
}

export default NavigationSearch