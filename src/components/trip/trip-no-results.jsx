import React from 'react';

import { ReactComponent as NoDataFoundSVG } from '../../assets/no-data.svg';

const TripNoResults = () => {
  return (
    <div className="flex flex-col justify-center items-center h-82 w-full
        md:w-[1000px] md:h-[500px]
    ">
      <NoDataFoundSVG title='No data found' className='h-[14rem] w-[14rem]' />
        <h1 className='text-xl font-semibold mt-2 text-main
            md:text-2xl
            lg:text-3xl
        '>
            Oops!
        </h1>
        <p className='text-base text-center mt-4  whitespace-pre-wrap
            md:text-xl
        '>
            Unfortunately, there are no trips that matches your search.
        </p>
    </div>
  )
}

export default TripNoResults