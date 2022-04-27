import React from 'react'

const GeneralFormInput = ({ type, label, name, state, errMessage }) => {
    
    return (  
        <>
            <label className='form-label' htmlFor={name}>
                {label}
            </label>
            {
                name === 'sign-up-password' 
                && (<div className='px-2 mb-2 text-left text-[.7rem] font-normal text-custom-gray-dark'>
                    Must be at least 8 characters and 
                    consists of at least one special character, 
                    one number, one lowercase letter and one uppercase letter.
                </div>)
            }
            <input className={`form-input-border ${state[0].isInvalid ? 'border-failure' : 'border-custom-gray'}`} 
                type={type} 
                name={name} 
                placeholder={label} 
                onFocus={(e) => {
                    e.target.style = 'border-none';
                }}
                onChange={(e) => {
                    state[1]((prevState) => {
                        return {
                            ...prevState,
                            value: e.target.value
                        }
                    });
                }}
                value={state[0].value}
            />
            <div className={`${state[0].isInvalid ? 'flex' : 'hidden'}`}>
                <div className='text-[0.7rem] text-failure'>
                    {errMessage}
                </div>
            </div>
        </>
    )
}

export default GeneralFormInput