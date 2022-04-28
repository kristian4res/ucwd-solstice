import React, { useState } from 'react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const FAQQuestion = ({ question, answer }) => {
    /** STATES */
    const [collapseDetails, setCollapseDetails] = useState(true);

    return (
        <li className='block w-full'>
            <button className={`flex w-full justify-between items-center pb-2
                text-lg font-semibold border-b-2 border-primary mb-2
                active:brightness-90 hover:text-primary 
                ${!collapseDetails && 'text-primary'}
                `}
                title={collapseDetails ? 'Show details' : 'Hide details'} 
                onClick={() => {
                    setCollapseDetails(prevState => !prevState);
                }}
            >
                <span className='text-left'>{question}</span>
                {
                    collapseDetails 
                    ? <IoIosArrowDown className='h-6 w-6' />
                    : <IoIosArrowUp className='h-6 w-6' />
                }
            </button>
            <div className={`flex flex-col gap-1 mb-2
                ${collapseDetails && 'h-0 overflow-hidden'}`}
            >
                <p className='pb-4 max-w-[1200px] border-b-2 border-custom-gray'>
                    {answer}
                </p>
            </div>
        </li>
    )
}

export default FAQQuestion;