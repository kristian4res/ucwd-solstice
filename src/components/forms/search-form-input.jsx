import React, { useState, useRef, useContext } from 'react';

import AppContext from '../../contexts/app-context';
import SearchFormContext from '../../contexts/search-form-context';

import ButtonSearchResult from '../buttons/button-search-result';

import { IoMdCloseCircle } from 'react-icons/io';

const SearchFormInput = ({ state, label, placeholder='', data: { dataset, fieldname }, iconEl, withLabel=true, inputType='text'}) => {
    /** DATA FIELDNAME */
    const field = fieldname;

    /** CONTEXTS */
    const { showModal, toggleModal } = useContext(AppContext);
    const { searchInputStyle } = useContext(SearchFormContext);

    /** ELEMENT REFERENCES */
    const inputRef = useRef();

    /** STATES & HOOKS */
    // Handle input state
    const [isFocused, setIsFocused] = useState(false);
    
    /** FUNCTIONS */
    /**
     * 
     * @param {string} newVal - new value captured from the input element 
     * This function updates the passed in state hook's value and toggles the modal element
     */
    const updateStateAndClose = (newVal) => {
        // Set input value and context value
        state[1](newVal);
        // Toggle input focus and modal
        setIsFocused(false);
        // Delay function to make sure it executes
        setTimeout(() => {
            toggleModal(false);
        }, 100)
    }


    return (
        <>  
            {
                // Show label if specified
                withLabel ? <label htmlFor={`search-form-${label}`} className='form-label capitalize'>{label}</label>
                : ''
            }
            <div className='relative w-full'>
                <button className={`${searchInputStyle[label]} pl-2 form-input text-left max-h-full w-full`}
                    onFocus={() => setIsFocused(true)}
                    onClick={() => {
                        toggleModal(true);
                        // Timeout to delay the function execution (i.e. give time for other functions to execute)
                        setTimeout(() => inputRef.current.focus(), 100)
                    }}
                >   
                    <p className='truncate pr-8'>
                        {state[0] || placeholder}
                    </p>
                </button>
                <button className='absolute top-[8.5%] right-[1.5%] p-2 text-custom-gray-dark'
                    onClick={() => {
                        // Clears input
                        state[1]('');
                    }}
                >
                    <IoMdCloseCircle className='h-[.9rem] w-[.9rem]' />
                </button>
            </div>
            <div className={`${searchInputStyle[label] === 'form-input-failure' ? 'flex' : 'hidden'}`}>
                <span className='text-[0.7rem] text-failure'>
                    {   
                        `Please ensure you fill out either Location 
                        or Sport and use only letters, 
                        e.g. Location: Hawaii or Sport: Surfing`
                    }
                </span>
            </div>
            <div className={`${(!showModal || !isFocused) ? 'hidden' : 'flex'}
                form-input-dropdown
            `}
                aria-haspopup={true}
                aria-expanded={isFocused}
            >
                <input className={`form-input 
                    ${(!isFocused) ? 'hidden' : 'flex'}`
                } 
                    name={`search-form-${label}`} 
                    type={inputType} 
                    placeholder={placeholder}
                    ref={inputRef}
                    onChange={(e) => {
                        // Set input value and context value
                        state[1](e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.code === 'Enter') {
                            updateStateAndClose(e.target.value);
                        }
                    }}
                    onBlur={() => {
                        // Timeout to delay the function execution (i.e. give time for other functions to execute)
                        setTimeout(() => {
                            setIsFocused(false);
                        }, 400)
                    }}
                    value={state[0]}
                    autoComplete={'off'}
                />
                <ul>
                    <li className={`${state[0] === '' 
                            ? 'hidden' 
                            : 'flex justify-center items-center p-2 border-b-2 border-custom-gray-dark cursor-pointer'}`}
                        title={`Search for ` + state[0]}
                        onClick={() => {
                            updateStateAndClose(state[0]);
                        }}
                    >
                        <span className='w-full h-full text-center'>{`Search for "` + state[0] + '"'}</span> 
                    </li>
                    {/* <li className={`${state[0] === '' ? 'hidden' : 'flex justify-center items-center pt-2'}`}>
                        <span className='w-full h-full text-center'>No results </span> 
                    </li> */}
                    {
                        // Provide search result suggestions
                        // Filter and loop through data, then display data by rendering list elements
                        dataset
                        .filter((val) => {
                            if (state[0] === '' || !isFocused) {
                                return val;
                            }
                            else if (state[0] !== '') {
                                if (val[field].toLowerCase().includes(state[0].toLowerCase()))  {
                                    return val;
                                }
                                return null;
                            }
                            else {
                                return val;
                            }
                        })
                        .map((val, key) => {
                            return <ButtonSearchResult key={key} 
                                val={{ title: val[field], subtitle: val[`${label === 'location' ? 'tripFullLocation' : 'sportName'}`]}}
                                handleClick={() => {
                                    updateStateAndClose(val[field]);
                                }}
                                icon={iconEl ? iconEl : val.icon}
                            />
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default SearchFormInput;