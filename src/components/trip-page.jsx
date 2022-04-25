import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';

import AppContext from '../contexts/app-context';

import PageContainer from './page-container';

const TripPage = () => {
  /** CONTEXTS */
  const { devData: { trips }} = useContext(AppContext);

  const urlParams = useParams();
  const tripIndex = urlParams.tripId - 1;
  
  return (
    <PageContainer>
      <div className='container flex flex-col justify-center items-center 
        min-h-screen min-w-full px-4 pt-10 gap-4 relative
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
        <section className='container grid grid-cols-1 justify-center items-center bg-custom-dark
          md:grid-cols-3
        '>
          <div className="flex flex-col justify-center items-center w-72 h-72 col-span-2 text-white">
            <h1>{trips[tripIndex].tripName}</h1>
          </div>
          <div className="flex flex-col justify-center items-center w-72 h-72 text-white">
            BOOKING FORM
          </div>
        </section>
      </div>
    </PageContainer>
  )
}

export default TripPage;