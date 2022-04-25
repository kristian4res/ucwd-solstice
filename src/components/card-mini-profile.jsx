import React from 'react';

const CardMiniProfile = ({cardIcon, cardTitle, cardSubtitle, cardContent}) => {
    return (
        <div className="flex flex-col items-start 
        bg-custom-gray shadow-lg rounded-md
        max-w-md max-h-full gap-2 p-4 
        ">
            <div className='flex gap-x-4 items-center'>
                {cardIcon}
                <h1 className='flex flex-col text-base font-semibold'>
                    {cardTitle}
                    <span className='text-sm text-custom-dark font-light'>
                    {cardSubtitle}
                    </span>
                </h1>
            </div>
            <p className='mt-2 text-left text-sm whitespace-pre-wrap'>
                {cardContent}
            </p>
        </div>
    )
};

export default CardMiniProfile;