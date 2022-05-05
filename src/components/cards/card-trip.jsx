import React from 'react';
import { Link } from 'react-router-dom';

import CardTag from './card-tag';

import { FaStar } from 'react-icons/fa';

const CardTrip = ({ imgUrl, cardId, cardTitle, cardSubTitle, cardText, cardDetails, tagData }) => {
    return (
        <div className='w-full h-full drop-shadow-xl rounded-lg overflow-hidden
            flex flex-col
            md:grid md:grid-cols-3 md:max-w-[1000px] md:max-h-[500px]
        '>
            <div className={`container h-full bg-main flex justify-center
              relative col-span-1`}
            >   
                <img
                    loading='lazy'
                    src={imgUrl ? require(`../../assets/${imgUrl}`) : ''}
                    alt={'people on an adventure'}
                    className={`object-cover w-full h-72
                        md:h-full
                    `}
                />
            </div>
            <div className='container h-full w-full bg-main col-span-2 
                flex flex-col justify-between
            '>
                <div className="w-full h-fit px-4 py-2 text-white">
                    <hgroup className='container mb-1 text-current'>
                        <h1 className={`uppercase text-lg font-semibold text-current drop-shadow-xl 
                        md:text-xl lg:text-3xl`}>
                            {cardTitle ? cardTitle : 'Title'}
                        </h1>
                        <h2 className={`uppercase text-sm font-medium text-current drop-shadow-lg 
                        md:text-lg lg:text-xl`}>
                            {cardSubTitle ? cardSubTitle : 'Subtitle'}
                        </h2>
                    </hgroup>
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
                    <p className={`text-left py-4 text-current text-[.8rem]
                    xl:text-sm`}>
                        {cardText[0] ? cardText[0] : ''}
                    </p>
                    <div className='flex flex-col w-full border-t-[1px] border-custom-gray py-2'>
                        <h1 className='text-[.9rem] font-semibold capitalize
                            md:text-sm
                        '>
                            Accommodation Amenities
                        </h1>
                        <ul className='px-4 grid auto-cols-max justify-start items-start list-disc
                            md:grid-cols-2 lg:w-fit lg:gap-x-12
                        '>
                            {
                                cardText[1] 
                                ? cardText[1].map((val, key) => {
                                    return (
                                        <li key={key}
                                            className='text-sm font-light'
                                        >
                                            {val}
                                        </li>
                                    )
                                })
                                : ''
                            }
                        </ul>
                    </div>
                    <div className="flex w-fit justify-end text-custom-dark ml-auto mt-1 mb-2 
                        md:justify-end"
                    >
                        <button className='shadow-md transition-transform text-current 
                             btn-solid items-center bg-white rounded-full
                            hover:-translate-y-[2px] active:translate-y-[2px]
                        '>
                            <Link className='font-semibold' to={`${cardId}`}>
                                View
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='container h-fit w-full 
                    text-white flex justify-between items-center
                    bg-success px-4 py-2
                '>
                    <div className='flex flex-col items-start'>
                        <div className='flex flex-row justify-center items-center gap-[4px]
                        '>
                            <FaStar className='h-[.9rem] w-[.9rem] md:h-4 md:w-4' />
                            <span className='text-[0.9rem] font-semibold
                            lg:text-lg'>
                                {cardDetails[0][0] ? cardDetails[0][0] : '' }/5.0
                            </span>
                        </div>
                        <small className='text-[0.8rem] font-thin'>
                            ({cardDetails[0][1] ? cardDetails[0][1] : '' } Reviews)
                        </small>
                    </div>
                    <div className='flex flex-col items-end'>
                        <span className='text-lg font-bold
                            lg:text-2xl
                        '>
                            £{cardDetails[1][0] ? cardDetails[1][0] : '' }
                        </span>
                        <small className='text-[0.8rem] font-thin'>includes taxes &amp; fees</small>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default CardTrip;