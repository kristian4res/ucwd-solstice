import React, { useState } from 'react';

import ButtonSolid from './button-solid';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const BookingForm = ({ tripPrice, tripTaxes, tripOtherFees }) => {
  /** STATE */
  const [collapseDetails, setCollapseDetails] = useState(false);

  /** FUNCTIONS */
  const handleFormSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className='container w-full h-full flex flex-col items-center p-6'>
        <div className='flex flex-col justify-center items-start h-full w-full gap-x-4'>
          <h1 className='text-3xl font-semibold'>
            £{tripPrice}
          </h1>
          <span className='text-sm'>includes all taxes &amp; fees</span>
        </div>
        <div className="mt-4 flex h-full w-full">
          <form className='flex flex-col h-full w-full gap-y-4'
            onSubmit={handleFormSubmit}
          >
            <div className="grid grid-cols-2 gap-x-2 w-full">
              <label className="form-label" htmlFor="trip-check-in">Check In</label>
              <label className="form-label" htmlFor="trip-check-out">Check Out</label>
              <input className="form-input text-black" type="date" name="trip-check-in" />
              <input className="form-input text-black" type="date" name="trip-check-out" />
            </div>
            <div className="flex flex-col">
              <label className="form-label" htmlFor="trip-travellers">Travellers</label>
              <input className="form-input text-black" type="number" name="trip-travellers" placeholder='Number of travellers' />
            </div>
            <div className="flex flex-col mx-2">
              <button className='flex justify-between pb-2
                text-lg font-semibold border-b-2 border-primary mb-2
                active:brightness-90 hover:text-primary active:'
                title={collapseDetails ? 'Show details' : 'Hide details'} 
                onClick={() => {
                  setCollapseDetails(prevState => !prevState);
                }}
              >
                <span>Price details</span>
                {
                  collapseDetails 
                  ? <IoIosArrowDown className='h-6 w-6' />
                  : <IoIosArrowUp className='h-6 w-6' />
                }
              </button>
              <div className={`flex flex-col gap-1 ${collapseDetails && 'h-0 overflow-hidden'}`}>
                <dl className={`grid grid-cols-2 gap-1
                `}>
                  <dt className='text-[.8rem] font-semibold'>Taxes</dt>
                  <dt className='text-sm text-light'>£{tripTaxes}</dt>
                  <dt className='text-[.8rem] font-semibold'>Accommodation</dt>
                  <dt className='text-sm'>£{tripOtherFees}</dt>
                  <dt className='text-[.8rem] font-semibold'>Other fees</dt>
                  <dt className='text-sm'>£{tripPrice - (tripTaxes + tripOtherFees)}</dt>
                </dl>
                <hgroup className='pt-2 border-t-2 w-full'>
                  <h1 className='text-[.9rem] font-semibold'>Total Price</h1>
                  <h2 className='text-sm'>£{tripPrice}</h2>
                </hgroup>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <ButtonSolid
                btnStyles={'bg-success justify-center'}
                btnTitle={'Confirm'}
              />
            </div>
          </form>
        </div>
    </div>
  )
}

export default BookingForm