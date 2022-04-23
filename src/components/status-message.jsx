import React from 'react';

import ButtonSolid from './button-solid';

const StatusMessage = ({ status, toggleModal }) => {
    return (
        <div className='flex flex-col gap-8 items-center'>
            <h3 className={`text-center font-bold text-lg ${status ? 'text-success' : 'text-failure'}`}>
                {
                    status
                    ? 'Process successful!'
                    : 'Unexpected error encountered, please try again or contact support.'
                }
            </h3>
            <div className="text-white">
                <ButtonSolid 
                    btnTitle={'Confirm'}
                    btnStyles={'bg-primary rounded-lg'}
                    handleClick={() => toggleModal(false)}
                />
            </div>
        </div>
    )
}

export default StatusMessage