import React from 'react'

const GeneralFormInput = ({ type, label, name, state, errMessage }) => {
    
    return (  
        <>
            <label className='form-label' htmlFor={name}>{label}</label>
            <input className='form-input-border' type={type} name={name} placeholder={label} />
            <div className={`${state.isInvalid ? 'flex' : 'hidden'}`}>
                <div className='text-[0.7rem] text-failure'>
                    {errMessage}
                </div>
            </div>
        </>
    )
}

export default GeneralFormInput