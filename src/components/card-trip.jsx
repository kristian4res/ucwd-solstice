import React from 'react';

import CardTag from './card-tag';

const CardTrip = ({ imgUrl, cardTitle, cardSubTitle, tagData }) => {
    return (
        <div className='container w-full h-full shadow-lg rounded-lg overflow-hidden
            grid grid-cols-3
        '>
            <div className={`container h-full bg-dark flex justify-center
              relative col-span-1`}
            >   
                <img
                    src={require(`../assets/${imgUrl}`)}
                    alt={'Sports'}
                    className={`object-cover w-full
                        lg:h-72
                    `}
                />
            </div>
            <div className='container h-full w-full bg-dark col-span-2 
                flex flex-col justify-between
            '>
                <div className="w-full h-fit px-4 py-2 text-white">
                    <div className='container mb-1 text-current'>
                        <h4 className={`uppercase text-lg font-semibold text-current drop-shadow-xl 
                        md:text-xl lg:text-3xl`}>
                            {cardTitle}
                        </h4>
                        <h5 className={`uppercase text-sm font-medium text-current drop-shadow-lg 
                        md:text-lg lg:text-xl`}>
                            {cardSubTitle}
                        </h5>
                    </div>
                    <div className='flex flex-col flex-wrap space-y-2 
                        lg:flex-row lg:space-x-1 lg:space-y-0'
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
                    <p className='text-left py-4 text-current text-sm 
                    xl:text-base'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptas, ipsam rem et explicabo nemo unde doloremque ducimus quasi assumenda labore molestiae error repellat omnis veritatis? Ipsa eius recusandae rerum!
                    </p>
                </div>
                <div className='container h-fit w-full 
                    text-white flex justify-between items-center
                    bg-success px-4 py-2
                '>
                    <span className='text-base font-semibold'>4.5/5 - Worth it</span>
                    <span className='text-2xl font-bold'>£1000</span>
                </div>
            </div>
        </div>
        )
}

export default CardTrip;