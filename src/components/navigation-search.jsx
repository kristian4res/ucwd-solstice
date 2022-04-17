import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import AppContext from '../contexts/app-context';
import SearchFormContext from '../contexts/search-form-context';

import ButtonSearchResult from './button-search-result';

import { HiSearch, HiLocationMarker } from 'react-icons/hi';

const NavigationSearch = ({ navClass }) => {
    /** CONTEXTS */
    const { devData: { trips } } = useContext(AppContext);
    const { submitSearchForm } = useContext(SearchFormContext);

    /** STATES */
    // Routing
    const navigate = useNavigate();
    const location = useLocation();
    const isHomepage = location.pathname === '/'; 
    // Input handlers
    const [locationInput, setLocationInput] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    /** FUNCTIONS */
    const submitDetails = () => {
        // Get input values
        const details = {
            location: locationInput
        }
        // Clear input
        setLocationInput('');
        // Redirect to the explore page
        navigate('/explore');

        submitSearchForm(details);
    }

    return (
        <div className={`flex shrink justify-center items-center z-10 shadow-lg rounded-full bg-white text-dark md:max-w-4xl ${navClass.length === 0 && isHomepage ? 'invisible' : 'visible'}`}>
            <div className='flex flex-col ml-2 relative'>
                <input className='flex px-2 w-full text-sm 
                    md:text-base lg:text-lg'
                    type="text" 
                    value={locationInput}
                    onChange={(e) => setLocationInput(e.target.value)}
                    onClick={() => setIsFocused(true)}
                    onBlur={() => {
                        // Timeout to delay the function execution (i.e. give time for other functions to execute)
                        setTimeout(() => setIsFocused(false), 100)
                    }}
                    placeholder='Search a location' 
                />
                <ul className={`${(!isFocused) ? 'hidden' : 'flex flex-col'}
                    form-input-dropdown-navigation
                `}>
                    {   
                        // Filter and loop through data, then display data by rendering list elements
                        trips.filter((val) => {
                            if (locationInput === '') {
                                return null;
                            }
                            else if (val.name.toLowerCase().includes(locationInput.toLowerCase()))  {
                                return val;
                            }
                            else {
                                return null;
                            }
                        }).map((val, key) => {
                            return <ButtonSearchResult key={key} 
                                val={val}
                                handleClick={() => {
                                    // Set input value and context value
                                    setLocationInput(val.name);
                                }}
                                icon={<HiLocationMarker className='h-6 w-6 xl:h-8 xl:w-8' />}
                            />
                        })
                    }
                </ul>
            </div>
            <div className='flex justify-center mx-2 my-2 w-10 
                md:w-fit md:items-center'>
                <button className='flex h-full justify-center items-center text-white bg-primary rounded-full p-2 
                md:w-14'
                    onClick={submitDetails}
                >
                    <HiSearch className='h-5 w-5 md:h-6 md:w-6' />
                </button>
            </div>
        </div>
    )
}

export default NavigationSearch