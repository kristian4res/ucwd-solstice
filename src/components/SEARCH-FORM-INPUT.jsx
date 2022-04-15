import React, { useState, useRef, useContext } from 'react';

import AppContext from '../contexts/app-context';
import SearchFormContext from '../contexts/search-form-context';

import ButtonSearchResult from './button-search-result';

const SearchFormInput = ({ label, placeholder, data, iconEl, inputType='text'}) => {
    /** CONTEXTS */
    const { showModal, toggleModal } = useContext(AppContext);
    const { inputHooks } = useContext(SearchFormContext);

    /** ELEMENT REFERENCES */
    const inputRef = useRef();

    /** STATES */
    // Handle input state
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const contextInputValue = inputHooks[`${label}`][0];
    const contextSetInputValue = inputHooks[`${label}`][1];

    return (
        <>
            <label htmlFor={`search-form-${label}`} className='form-label capitalize'>{label}</label>
            <button className='form-input text-left h-full w-full'
                onFocus={() => setIsFocused(true)}
                onClick={() => {
                    toggleModal(true);
                    // Timeout to delay the function execution (i.e. give time for other functions to execute)
                    setTimeout(() => inputRef.current.focus(), 100)
                }}
            >
                { contextInputValue ? contextInputValue : `${placeholder}`}
            </button>
            <div className={`${(!showModal || !isFocused) ? 'hidden' : 'flex'}
                form-input-dropdown
            `}>
                <input className={`form-input ${(!isFocused) ? 'hidden' : 'flex'}`} 
                    name={`search-form-${label}`} 
                    type={inputType} 
                    placeholder={placeholder}
                    ref={inputRef}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={() => {
                        // Timeout to delay the function execution (i.e. give time for other functions to execute)
                        setTimeout(() => setIsFocused(false), 100)
                    }}
                    value={inputValue}
                    autoComplete={'off'}
                    required 
                />
                <ul className={``}
                >
                    {
                        data.filter((val) => {
                            if (inputValue === '' || !isFocused) {
                                return null;
                            }
                            else if (val.name.toLowerCase().includes(inputValue.toLowerCase()))  {
                                return val;
                            }
                        }).map((val, key) => {
                            return <ButtonSearchResult key={key} 
                                val={val}
                                handleClick={() => {
                                    // Set input value and context value
                                    setInputValue(val.name);
                                    contextSetInputValue(val.name);
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