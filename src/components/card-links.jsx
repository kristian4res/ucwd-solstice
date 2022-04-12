import React from 'react';

import TripTag from './trip-tag';

const CardLink = ({ imgUrl, imgTitle, sportType }) => {
    return (
        <div className='container w-full h-full flex flex-col items-center shadow-lg rounded-lg overflow-clip'>
            <div className="container flex justify-center 
             m-0.5 mb-0 overflow-hidden relative">
                <img
                    src={imgUrl}
                    alt={'Sports'}
                    className='w-full h-56 lg:h-72 object-cover'
                />
            </div>
            <div className='w-full bg-dark px-4 py-2'>
                <h4 className={`container mb-1 uppercase text-lg font-semibold text-white drop-shadow-xl 
                md:text-xl lg:text-3xl`}>
                    {imgTitle}
                </h4>
                <div className='flex flex-col flex-wrap space-y-2
                lg:flex-row lg:space-x-1 lg:space-y-0'>
                    <TripTag category={'Season'} label={sportType} color={sportType} />
                </div>
                <p className='text-left py-4 text-slate-100 text-sm 
                lg:text-lg'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptas, ipsam rem et explicabo nemo unde doloremque ducimus quasi assumenda labore molestiae error repellat omnis veritatis? Ipsa eius recusandae rerum!
                </p>
            </div>
        </div>
        )
}

export default CardLink;