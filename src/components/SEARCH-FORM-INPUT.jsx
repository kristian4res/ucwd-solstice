import React, { useState, useRef, useContext } from 'react';

import AppContext from '../contexts/app-context';
import SearchFormContext from '../contexts/search-form-context';

import ButtonSearchResult from './button-search-result';

const SearchFormInput = ({ state, label, placeholder='', data: { dataset, fieldname }, iconEl, withLabel=true, inputType='text'}) => {
    /** CONTEXTS */
    const { showModal, toggleModal } = useContext(AppContext);
    const { searchFormDetails } = useContext(SearchFormContext);

    /** ELEMENT REFERENCES */
    const inputRef = useRef();

    /** STATES */
    // Handle input state
    const [isFocused, setIsFocused] = useState(false);
    const [field, setField] = useState(fieldname);

    return (
        <>
            {
                withLabel ? <label htmlFor={`search-form-${label}`} className='form-label capitalize'>{label}</label>
                : ''
            }
            <button className='form-input text-left whitespace-nowrap h-full w-full'
                onFocus={() => setIsFocused(true)}
                onClick={() => {
                    toggleModal(true);
                    // Timeout to delay the function execution (i.e. give time for other functions to execute)
                    setTimeout(() => inputRef.current.focus(), 100)
                }}
            >   
                <span>
                    {searchFormDetails[`${label}`] ? searchFormDetails[`${label}`] : state[0]}
                </span>
                <span>
                    {searchFormDetails[`${label}`] || state[0] ? '' : placeholder}
                </span>
            </button>
            <div className={`${(!showModal || !isFocused) ? 'hidden' : 'flex'}
                form-input-dropdown
            `}>
                <input className={`form-input ${(!isFocused) ? 'hidden' : 'flex'}`} 
                    name={`search-form-${label}`} 
                    type={inputType} 
                    placeholder={placeholder}
                    ref={inputRef}
                    onChange={(e) => {
                        // Set input value and context value
                        state[1](e.target.value);
                    }}
                    onBlur={() => {
                        // Timeout to delay the function execution (i.e. give time for other functions to execute)
                        setTimeout(() => setIsFocused(false), 100)
                    }}
                    value={state[0]}
                    autoComplete={'off'}
                    required 
                />
                <ul>
                    {   
                        // Filter and loop through data, then display data by rendering list elements
                        dataset.filter((val) => {
                            if (state[0] === '' || !isFocused) {
                                return null;
                            }
                            else if (val[field].toLowerCase().includes(state[0].toLowerCase()))  {
                                return val;
                            }
                            else {
                                return null;
                            }
                        }).map((val, key) => {
                            return <ButtonSearchResult key={key} 
                                val={{ title: val[field], subtitle: val[field]}}
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
                    }
                </ul>
            </div>
        </>
    )
}

export default SearchFormInput;