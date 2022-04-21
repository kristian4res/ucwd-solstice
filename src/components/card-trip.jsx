import React from 'react';

import CardTag from './card-tag';

const CardTrip = ({ imgUrl, cardTitle, cardSubTitle, cardText, cardDetails, tagData }) => {
    return (
        <div className='w-full h-full shadow-lg rounded-lg overflow-hidden
            flex flex-col 
            md:grid md:grid-cols-3
        '>
            <div className={`container h-full bg-main flex justify-center
              relative col-span-1`}
            >   
                <img
                    src={imgUrl ? require(`../assets/${imgUrl}`) : ''}
                    alt={'trip-cover'}
                    className={`object-cover w-full
                        lg:h-72
                    `}
                />
            </div>
            <div className='container h-full w-full bg-main col-span-2 
                flex flex-col justify-between
            '>
                <div className="w-full h-fit px-4 py-2 text-white">
                    <div className='container mb-1 text-current'>
                        <h4 className={`uppercase text-lg font-semibold text-current drop-shadow-xl 
                        md:text-xl lg:text-3xl`}>
                            {cardTitle ? cardTitle : 'Title'}
                        </h4>
                        <h5 className={`uppercase text-sm font-medium text-current drop-shadow-lg 
                        md:text-lg lg:text-xl`}>
                            {cardSubTitle ? cardSubTitle : 'Subtitle'}
                        </h5>
                    </div>
                    <div className='flex justify-start items-center gap-2 flex-wrap
                        lg:flex-row'
                    >
                        {   
                            tagData.map((arr, key) => {
                                return (
                                    <CardTag 
                                        key={key} 
                                        category={arr[0]}
                                        label={arr[1]} 
                                    />
                                )
                            })
                        }
                    </div>
                    <p className={`text-left py-4 text-current text-sm
                    xl:text-base`}>
                        {cardText ? cardText : ''}
                    </p>
                </div>
                <div className='container h-fit w-full 
                    text-white flex justify-between items-center
                    bg-success px-4 py-2
                '>
                    <div className='flex flex-col items-start'>
                        <span className='text-[0.9rem] font-semibold
                            lg:text-lg
                        '>
                            {cardDetails[0][0] ? cardDetails[0][0] : '' }/5.0
                        </span>
                        <span className='text-[0.8rem] font-thin'>
                            ({cardDetails[0][1] ? cardDetails[0][1] : '' } Reviews)
                        </span>
                    </div>
                    <div className='flex flex-col items-end'>
                        <span className='text-lg font-bold
                            lg:text-2xl
                        '>
                            £{cardDetails[1][0] ? cardDetails[1][0] : '' }
                        </span>
                        <span className='text-[0.8rem] font-thin'>includes taxes &amp; fees</span>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default CardTrip;