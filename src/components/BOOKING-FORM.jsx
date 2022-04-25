import React from 'react'

const BookingForm = ({ tripPrice, }) => {
  return (
    <div className='container w-full h-full flex flex-col items-center p-6'>
        <div className='flex flex-col justify-center items-start h-full w-full gap-x-4'>
          <h1 className='text-3xl font-semibold'>
            £{tripPrice}
          </h1>
          <span className='text-sm'>includes taxes &amp; fees</span>
        </div>
        <div className="flex h-full w-full">
          <form className='flex flex-col h-full w-full'>
            <div className="form-group">
              <label htmlFor="">Check In</label>
              <input className="text-black" type="date" name="" id="" />
            </div>
            <div className="form-group">
              <label htmlFor="">Check Out</label>
              <input className="text-black" type="date" name="" id="" />
            </div>
            <div className="form-group">
              <label htmlFor="">Travellers</label>
              <input className="text-black" type="number" name="" id="" />
            </div>
          </form>
        </div>
    </div>
  )
}

export default BookingForm