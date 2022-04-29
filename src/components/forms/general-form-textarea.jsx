import React from 'react';


const GeneralFormTextarea = ({ formId, label, name, size, state, errMessage }) => {
    
    return (  
        <>
            <label className='form-label' htmlFor={name}>
                {label}
            </label>
            <textarea className={`text-black form-input-border ${state[0].isInvalid ? 'border-failure' : 'border-custom-gray'}`} 
                form={formId}
                name={name} 
                cols={size[0] || 20}
                rows={size[1] || 22}
                placeholder={'Enter your ' + label} 
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

export default GeneralFormTextarea;