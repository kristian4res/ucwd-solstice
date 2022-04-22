import React from 'react'

import { ImSpinner2 } from 'react-icons/im';


const WithSpinner = (WrappedComponent) => {
  const Loader = ({ isLoading, ...otherProps }) => {
    return isLoading 
        ? (
          <div className='flex justify-center items-center gap-2'>
            <ImSpinner2 className='h-6 w-6 animate-spin text-custom-dark' />
            <span className='text-bold text-lg'>
                Processing...
            </span>
          </div>
        )
        : <WrappedComponent {...otherProps} />
  }
  
  return Loader;
}

export default WithSpinner;