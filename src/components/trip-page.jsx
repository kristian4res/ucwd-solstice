import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';

import AppContext from '../contexts/app-context';

import PageContainer from './page-container';

import { FaStar } from 'react-icons/fa';


const TripPage = () => {
  /** CONTEXTS */
  const { devData: { trips }} = useContext(AppContext);

  const urlParams = useParams();
  const tripIndex = urlParams.tripId - 1;
  
  return (
    <PageContainer>
      <div className='container flex flex-col justify-center items-center 
        min-h-screen min-w-full px-4 pt-10 gap-6 relative
        sm:pt-20 md:pt-28 md:px-6
      '>
        <section className='container flex justify-center items-center 
          overflow-hidden w-full h-full rounded-lg
        '>
          <div className="image-gallery">
            <div className="image1 image-animation">
              <img 
                className='object-fill h-full w-full'
                src={require(`../assets/${trips[tripIndex].tripImages[0]}`)} 
                alt="trip cover"
              />
            </div>
            <div className="image2">
              <img 
                className='object-fill h-full w-full'
                src={require(`../assets/${trips[tripIndex].tripImages[0]}`)} 
                alt="trip cover"
              />
            </div>
            <div className="image3">
              <img 
                className='object-fill h-full w-full'
                src={require(`../assets/${trips[tripIndex].tripImages[0]}`)} 
                alt="trip cover"
              />
            </div>
            <div className="image4">
              <img 
                className='object-fill h-full w-full'
                src={require(`../assets/${trips[tripIndex].tripImages[0]}`)} 
                alt="trip cover"
              />
            </div>
            <div className="image5">
              <img 
                className='object-fill h-full w-full'
                src={require(`../assets/${trips[tripIndex].tripImages[0]}`)} 
                alt="trip cover"
              />
            </div>
          </div>
        </section>
        <section className='container grid grid-cols-1 gap-4 gap-x-12
          justify-center items-start bg-white text-black
          md:grid-cols-3
        '>
          <div className="flex flex-col justify-start items-start gap-2
            w-full h-full col-span-2 p-6
          ">
            <h1 className='text-3xl font-semibold
              md:text-4xl
            '>
              {trips[tripIndex].tripName}
            </h1>
            <h2 className='text-xl font-normal
              md:text-2xl
            '>
              {trips[tripIndex].tripAddress}
            </h2>
            <div className='flex items-center gap-2'>
              <FaStar className='h-4 w-4' />
              <h2 className='flex items-end gap-2 text-xl'>
                {trips[tripIndex].tripRating}/5
                <span className='text-base font-light text-custom-gray-dark'>
                  ({trips[tripIndex].tripReviews} reviews)
                </span>
              </h2>
            </div>
            <div className='flex flex-col items-center gap-2 mt-6'>
              <p className='text-base'>
                {trips[tripIndex].tripDescription}
              </p>
              <p className='text-base'>
                {trips[tripIndex].tripDescription}
              </p>
            </div>
            <div className='flex flex-col justify-start gap-2 mt-6'>
              <h1 className='text-base font-semibold capitalize
                  md:text-lg
              '>
                  Amenities
              </h1>
              <ul className='px-4 grid auto-cols-max justify-start items-start list-disc
                  md:grid-cols-2 lg:w-fit lg:gap-x-12
              '>
                {
                  trips[tripIndex].tripAmenities &&
                  trips[tripIndex].tripAmenities.map((val, key) => {
                      return (
                          <li key={key}
                              className='text-lg font-light'
                          >
                              {val}
                          </li>
                      )
                  })
                  }
              </ul>
            </div>
            <div className='flex flex-col justify-start gap-2 mt-6'>
              <h1 className='text-base font-semibold capitalize
                  md:text-lg
              '>
                  Guides
              </h1>
              {trips[tripIndex].tripGuides[0].guideName}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-[600px] 
          bg-custom-gray text-black
          ">
            BOOKING FORM
          </div>
        </section>
      </div>
    </PageContainer>
  )
}

export default TripPage;