import React from 'react'

import CardTripSkeleton from './cards/card-trip-skeleton';

const WithTrip = (WrappedComponent) => {
  const Loader = ({ isLoading, ...otherProps }) => {
    return isLoading 
        ? (
          <div className='grid grid-cols-1 gap-6 place-content-start min-h-screen w-full'>
            <CardTripSkeleton />
            <CardTripSkeleton />
            <CardTripSkeleton />
          </div>
        )
        : <WrappedComponent {...otherProps} />
  }
  
  return Loader;
}

export default WithTrip;