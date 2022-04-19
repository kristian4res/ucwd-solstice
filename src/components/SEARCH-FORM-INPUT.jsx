import React, { useState, useRef, useContext } from 'react';

import AppContext from '../contexts/app-context';
import SearchFormContext from '../contexts/search-form-context';

import ButtonSearchResult from './button-search-result';

const SearchFormInput = ({ state, label, placeholder='', data: { dataset, fieldname }, iconEl, withLabel=true, inputType='text'}) => {
    /** CONTEXTS */
    const { showModal, toggleModal } = useContext(AppContext);
    const { searchFormDetails, searchInputStyle } = useContext(SearchFormContext);

    /** ELEMENT REFERENCES */
    const inputRef = useRef();

    /** STATES */
    // Handle input state
    const [isFocused, setIsFocused] = useState(false);
    const [field, setField] = useState(fieldname);

    return (
        <>  
            {
                // Show label if specified
                withLabel ? <label htmlFor={`search-form-${label}`} className='form-label capitalize'>{label}</label>
                : ''
            }
            <button className={`${searchInputStyle[label]} pl-2 form-input text-left max-h-full w-full`}
                onFocus={() => setIsFocused(true)}
                onClick={() => {
                    toggleModal(true);
                    // Timeout to delay the function execution (i.e. give time for other functions to execute)
                    setTimeout(() => inputRef.current.focus(), 100)
                }}
            >   
                <p className='truncate'>
                    {state[0] ? state[0] : searchFormDetails[`${label}`]}
                </p>
                <p className='truncate'>
                    {(searchFormDetails[`${label}`] || state[0]) ? '' : placeholder}
                </p>
            </button>
            <div className={`${searchInputStyle[label] === 'form-input-failure' ? 'flex' : 'hidden'}`}>
                <span className='text-[0.7rem] text-failure'>
                    {
                        label === 'location' 
                        ? `Please ensure you've inputted using the correct format, e.g. Hawaii or hawaii`
                        : `Please ensure you've inputted using the correct format, e.g. Surfing or surfing`
                    }
                </span>
            </div>
            <div className={`${(!showModal || !isFocused) ? 'hidden' : 'flex'}
                form-input-dropdown
            `}>
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
                    onBlur={(e) => {
                        // Timeout to delay the function execution (i.e. give time for other functions to execute)
                        setTimeout(() => {
                            setIsFocused(false);
                        }, 100)
                    }}
                    value={state[0]}
                    autoComplete={'off'}
                />
                <ul>
                    {   
                        dataset ? 
                        // Filter and loop through data, then display data by rendering list elements
                        dataset.filter((val) => {
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
                        }).map((val, key) => {
                            return <ButtonSearchResult key={key} 
                                val={{ title: val[field], subtitle: val[`${label === 'location' ? 'tripFullLocation' : 'sportName'}`]}}
                                handleClick={() => {
                                    // Set input value and context value
                                    state[1](val[field]);
                                    // Toggle input focus and modal
                                    setIsFocused(false);
                                    toggleModal(false);
                                }}
                                icon={iconEl ? iconEl : val.icon}
                            />
                        })
                        :
                        <li className={`${state[0] === '' ? 'hidden' : 'flex justify-center items-center pt-2'}`}>
                            <span className='w-full h-full text-center'>No results</span> 
                        </li>
                    }
                </ul>
            </div>
        </>
    )
}

export default SearchFormInput;