import React, { useEffect, useState, useContext } from 'react';
import { getTomorrowsDate, isCheckOutValid } from '../../utils/utils';

import AppContext from '../../contexts/app-context';
import SearchFormContext from '../../contexts/search-form-context';

import ButtonSolid from '../buttons/button-solid';
import StripeCheckoutButton from '../stripe/stripe-checkout-button';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const BookingForm = ({ tripPrice, tripTaxes, tripOtherFees }) => {
  /** CONTEXTS */
  const { toggleModal } = useContext(AppContext);
  const { searchFormDetails, searchInputStyle, setSearchInputStyle } = useContext(SearchFormContext);

  /** STATE */
  const [collapseDetails, setCollapseDetails] = useState(true);
  const [numberOfTravellers, setNumberOfTravellers] = useState(2)
  const [totalPrice, setTotalPrice] = useState(Number(tripPrice));

  const [checkInVal, setCheckInVal] = useState(searchFormDetails['checkIn']);
  const [checkOutVal, setCheckOutVal] = useState(searchFormDetails['checkOut']);
  // Toggling date input modal
  const [dateInputFocus, setDateInputFocus] = useState({
      'checkIn': '',
      'checkOut': ''
  });

  /** FUNCTIONS */
  const checkDate = () => {
    if (!isCheckOutValid(checkInVal, checkOutVal)) {
        setSearchInputStyle(prevState => {
            return {...prevState,
                checkOut: 'form-input-failure'
            }
        });
        return false;
    }
    else {
        setSearchInputStyle(prevState => {
            return {...prevState,
                checkOut: ''
            }
        });
        return true;
    }
  }

  /**
   * This useEffect triggers 
   * a component rerender to the components 
   * using the totalPrice
   */
  useEffect(() => {
    setTotalPrice(tripPrice + (10 * (numberOfTravellers - 2)));
  }, [tripPrice, numberOfTravellers])


  return (
    <div className='w-full h-full flex flex-col items-center p-6'>
        <div className='flex flex-col justify-center items-start h-full w-full gap-x-4'>
          <h1 className='text-3xl font-semibold'>
            £{totalPrice}
          </h1>
          <span className='text-sm'>includes all taxes &amp; fees</span>
        </div>
        <div className="mt-4 flex h-full w-full">
          <form className='flex flex-col h-full w-full gap-y-4'
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-x-2 w-full">
              <div className='flex flex-col justify-start'>
                <label className="form-label" htmlFor="trip-check-in">Check In</label>
                <input 
                  className={`form-input text-black ${dateInputFocus['checkIn']}`} 
                  name="trip-check-in"
                  type="date"
                  value={checkInVal}
                  onChange={(e) => setCheckInVal(e.target.value)}
                  min={getTomorrowsDate()}
                  onFocus={() => {
                      setDateInputFocus(prevState => {
                          return {...prevState, checkIn: 'z-10'}
                      });
                      toggleModal(true);
                  }}
                  onBlur={() => {
                      setDateInputFocus(prevState => {
                          return {...prevState, checkIn: ''}
                      });
                      toggleModal(false);
                  }} 
                />
              </div>
              <div className='flex flex-col justify-start'>
                <label className="form-label" htmlFor="trip-check-out">Check Out</label>
                <input 
                  className={`${searchInputStyle['checkOut']} form-input text-black ${dateInputFocus['checkOut']}`} 
                  name="trip-check-out"
                  type="date"
                  value={checkOutVal}
                  onChange={(e) => setCheckOutVal(e.target.value)}
                  min={getTomorrowsDate('CheckOut')}
                  onFocus={() => {
                      setDateInputFocus(prevState => {
                          return {...prevState, checkOut: 'z-10'}
                      });
                      toggleModal(true);
                  }}
                  onBlur={() => {
                      setDateInputFocus(prevState => {
                          return {...prevState, checkOut: ''}
                      });
                      toggleModal(false);
                  }} 
                />
                <div className={`${searchInputStyle['checkOut'] === 'form-input-failure' ? 'flex' : 'hidden'}`}>
                    <span className='text-[0.7rem] text-failure'>
                        {   
                            `Please ensure the checkout date is 1 day ahead of your check-in date.`
                        }
                    </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="form-label" htmlFor="trip-travellers">
                Travellers
                <small className='mx-4'>(+ £10 per additional traveller)</small> 
              </label>
              <input 
                className="form-input text-black" 
                type="number" 
                name="trip-travellers"
                min={2}
                onChange={(e) => {
                  setNumberOfTravellers(e.target.value);
                }}
                value={numberOfTravellers}
                placeholder='Number of travellers' 
              />
            </div>
            <div className="flex flex-col mx-2">
              <button className='flex justify-between items-center pb-2
                text-lg font-semibold border-b-2 border-primary mb-2
                active:brightness-90 hover:text-primary active:'
                title={collapseDetails ? 'Show details' : 'Hide details'} 
                onClick={() => {
                  setCollapseDetails(prevState => !prevState);
                }}
              >
                <span className='text-left'>Price details</span>
                {
                  collapseDetails 
                  ? <IoIosArrowDown className='h-6 w-6' />
                  : <IoIosArrowUp className='h-6 w-6' />
                }
              </button>
              <div className={`flex flex-col gap-1 ${collapseDetails && 'h-0 overflow-hidden'}`}>
                <dl className={`flex flex-col gap-1
                  xl:grid xl:grid-cols-2 
                `}>
                  <dt className='text-[.8rem] font-semibold'>Taxes</dt>
                  <dt className='text-sm text-light'>£{tripTaxes}</dt>
                  <dt className='text-[.8rem] font-semibold'>Accommodation</dt>
                  <dt className='text-sm'>£{tripOtherFees}</dt>
                  <dt className='text-[.8rem] font-semibold'>Additional travellers</dt>
                  <dt className='text-sm'>£{10 * (numberOfTravellers - 2)}</dt>
                  <dt className='text-[.8rem] font-semibold'>Other fees</dt>
                  <dt className='text-sm'>£{tripPrice - (tripTaxes + tripOtherFees)}</dt>
                </dl>
                <hgroup className='pt-2 border-t-2 w-full'>
                  <h1 className='text-[.9rem] font-semibold'>Total Price</h1>
                  <h2 className='text-sm'>£{totalPrice}</h2>
                </hgroup>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <StripeCheckoutButton 
                price={totalPrice}
              >
                <ButtonSolid
                  btnStyles={'bg-success justify-center'}
                  btnTitle={'Continue'}
                  handleClick={checkDate}
                />
              </StripeCheckoutButton>                               
            </div>
          </form>
        </div>
    </div>
  )
}

export default BookingForm;