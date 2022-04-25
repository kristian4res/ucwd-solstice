import React from 'react';

const CardMiniProfile = ({cardIcon, cardTitle, cardSubtitle, cardContent}) => {
    return (
        <li className="flex flex-col items-start 
        bg-custom-gray shadow-lg rounded-md
        max-w-sm max-h-full gap-2 p-4 
        ">
            <div className='flex gap-x-4 items-center'>
                {cardIcon}
                <h1 className='flex flex-col text-[.9rem] font-semibold'>
                    {cardTitle}
                    <span className='text-[.8rem] text-custom-dark font-light'>
                    {cardSubtitle}
                    </span>
                </h1>
            </div>
            <p className='mt-1 text-left text-[.8rem] whitespace-pre-wrap'>
                {cardContent}
            </p>
        </li>
    )
};

export default CardMiniProfile;