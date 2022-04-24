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
    <PageContainer extraStyles={'min-h-screen mt-22'}>
      <div className='flex flex-col justify-center items-center
        h-full w-full rounded-lg 
      '>
        <section className='container flex justify-center items-center'>
          <div className="trip-image-gallery rounded-lg">
            <div className='trip-gallery-image-1'>
              <img 
                className='object-fill h-full w-full'
                src={require(`../assets/${trips[tripIndex].tripImages[0]}`)} 
                alt="trip cover"
              />
            </div>
            <div className='trip-gallery-image-2'>
              <img 
                className='object-cover h-full w-full'
                src={require(`../assets/${trips[tripIndex].tripImages[0]}`)} 
                alt="trip cover"
              />
            </div>
            <div className='trip-gallery-image-3'>
              <img 
                className='object-cover h-full w-full'
                src={require(`../assets/${trips[tripIndex].tripImages[0]}`)} 
                alt="trip cover"
              />
            </div>
            <div className='trip-gallery-image-4'>
              <img 
                className='object-cover h-full w-full'
                src={require(`../assets/${trips[tripIndex].tripImages[0]}`)} 
                alt="trip cover"
              />
            </div>
            <div className='trip-gallery-image-5'>
              <img 
                className='object-cover h-full w-full'
                src={require(`../assets/${trips[tripIndex].tripImages[0]}`)} 
                alt="trip cover"
              />
            </div>
          </div>
        </section>
        <section className='container flex justify-center items-center bg-custom-dark'>
          <div className="flex w-72 h-72">
            
          </div>
        </section>
      </div>
    </PageContainer>
  )
}

export default TripPage;