import React from 'react'

import { CgSpinnerTwo } from 'react-icons/cg';


const WithSpinner = (WrappedComponent) => {
  const Loader = ({ isLoading, ...otherProps }) => {
    return isLoading 
        ? (
          <div className='flex justify-center items-center gap-2'>
            <CgSpinnerTwo className='h-6 w-6 animate-spin text-custom-dark' aria-hidden={true} />
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