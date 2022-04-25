import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';

import AppContext from '../contexts/app-context';

import PageContainer from './page-container';
import CardMiniProfile from './card-mini-profile';

import { FaStar } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';


const TripPage = () => {
  /** CONTEXTS */
  const { devData: { trips }} = useContext(AppContext);

  const urlParams = useParams();
  const paramId = urlParams.tripId;
  const tripData = trips.find(trip => trip.tripId === paramId);

  
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
                src={require(`../assets/${tripData.tripImages[0]}`)} 
                alt="trip cover"
              />
            </div>
            <div className="image2">
              <img 
                className='object-fill h-full w-full'
                src={require(`../assets/${tripData.tripImages[0]}`)} 
                alt="trip cover"
              />
            </div>
            <div className="image3">
              <img 
                className='object-fill h-full w-full'
                src={require(`../assets/${tripData.tripImages[0]}`)} 
                alt="trip cover"
              />
            </div>
            <div className="image4">
              <img 
                className='object-fill h-full w-full'
                src={require(`../assets/${tripData.tripImages[0]}`)} 
                alt="trip cover"
              />
            </div>
            <div className="image5">
              <img 
                className='object-fill h-full w-full'
                src={require(`../assets/${tripData.tripImages[0]}`)} 
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
              {tripData.tripName}
            </h1>
            <h2 className='text-xl font-normal
              md:text-2xl
            '>
              {tripData.tripAddress}
            </h2>
            <div className='flex items-center gap-2'>
              <FaStar className='h-4 w-4 text-primary' />
              <h2 className='flex items-end gap-2 text-xl'>
                {tripData.tripRating}/5
                <span className='text-base font-light text-custom-gray-dark'>
                  ({tripData.tripReviews} reviews)
                </span>
              </h2>
            </div>
            <div className='flex flex-col items-center gap-2 mt-6'>
              <p className='text-base'>
                {tripData.tripDescription}
              </p>
              <p className='text-base'>
                {tripData.tripDescription}
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
                  tripData.tripAmenities &&
                  tripData.tripAmenities.map((val, key) => {
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
              <ul className='flex flex-col gap-8 w-full
                md:flex-row
              '>
                  {
                    tripData.tripGuides?.map((val, key) => {
                      return (
                        <CardMiniProfile 
                          key={key}
                          cardIcon={<IoMdPerson className='h-8 w-8' />}
                          cardTitle={val.guideName}
                          cardSubtitle={val.guideYearsOfExperience + ' years of experience'}
                          cardContent={val.guideDescription}
                        />
                      )
                    })
                  }
              </ul>
              
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