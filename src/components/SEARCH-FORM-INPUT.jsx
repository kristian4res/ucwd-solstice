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
                onClick={() => {
                    toggleModal(true);
                    setIsFocused(true);
                    // Timeout to ensure the function runs after the previous hooks
                    setTimeout(() => inputRef.current.focus(), 100)
                }}
            >
                { contextInputValue ? contextInputValue : `${placeholder}`}
            </button>
            <div className={`${!showModal || !isFocused ? 'hidden' : 'flex'}
                form-input-dropdown
            `}>
                <input className='form-input' 
                    name={`search-form-${label}`} 
                    type={inputType} 
                    placeholder={placeholder}
                    ref={inputRef}
                    onChange={(e) => setInputValue(e.target.value)}
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
                                handleResults={setIsFocused} 
                                handleClick={contextSetInputValue}
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