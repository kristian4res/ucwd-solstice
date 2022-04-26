import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';

import AppContext from '../contexts/app-context';

import PageContainer from './page-container';
import CardMiniProfile from './card-mini-profile';

import { FaStar } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';
import BookingForm from './booking-form';


const TripPage = () => {
  /** CONTEXTS */
  const { devData: { trips }} = useContext(AppContext);

  const urlParams = useParams();
  const paramId = urlParams.tripId;
  const tripData = trips.find(trip => trip.tripId === paramId);

  
  return (
    <PageContainer extraStyles={'pt-20'}>
      <div className={`
        container flex flex-col 
        justify-center items-center 
        min-h-full max-w-full 
        px-6 pt-10 gap-6 relative
        
      `}>
        <section className='container flex justify-center items-center 
          overflow-hidden h-full rounded-lg 
          md:w-2/3
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
          justify-center items-start 
          bg-white text-black  h-full
          md:w-2/3 md:grid-cols-3
        '>
          <div className="flex flex-col justify-start items-start gap-2
            w-full h-full col-span-2 py-6
          ">
            <h1 className='text-3xl font-semibold
            '>
              {tripData.tripName}
            </h1>
            <h2 className='text-base font-normal
              md:text-2xl
            '>
              {tripData.tripAddress}
            </h2>
            <div className='flex items-center gap-2'>
              <FaStar className='h-4 w-4 text-primary' />
              <h2 className='flex items-end gap-2 text-base
                md:text-xl
              '>
                {tripData.tripRating}/5
                <span className='text-sm font-light text-custom-gray-dark
                  md:text-base
                '>
                  ({tripData.tripReviews} reviews)
                </span>
              </h2>
            </div>
            <div className='flex flex-col items-center gap-2 mt-6'>
              <p className='text-sm 
                md:text-base
              '>
                {tripData.tripDescription}
              </p>
              <p className='text-sm
                md:text-base
              '>
                {tripData.tripDescription}
              </p>
            </div>
            <div className='flex flex-col justify-start gap-2 mt-6'>
              <h1 className='text-base font-semibold capitalize
                  md:text-lg
              '>
                  {tripData.tripAccommodation.name}
              </h1>
              <p className='text-sm 
                md:text-base
              '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora, pariatur est ipsum tenetur ipsam quibusdam corporis vero dolor sint illum deleniti doloribus autem porro reprehenderit numquam excepturi. Ipsam, at.
              </p>
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
                              className='text-sm font-light
                              md:text-base'
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
              <ul className='flex gap-8 w-full overflow-x-auto
                md:flex-row
              '>
                  {
                    tripData.tripGuides?.map((val, key) => {
                      return (
                        <CardMiniProfile 
                          key={key}
                          cardIcon={<IoMdPerson className='h-6 w-6' />}
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
          <div className="flex flex-col justify-center items-center 
            w-full h-full rounded-md shadow-lg
           bg-main text-white
            md:h-fit
          ">
            <BookingForm 
              tripPrice={tripData.tripTotalPrice} 
              tripTaxes={tripData.tripTaxesFees[0]} 
              tripOtherFees={tripData.tripTaxesFees[1]} 
            />
          </div>
        </section>
      </div>
    </PageContainer>
  )
}

export default TripPage;