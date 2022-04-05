import React from 'react';

import imgSnowboarding1 from '../assets/snowboarding-md-1.jpg';
import imgKayaking1 from '../assets/kayaking-md-1.jpg';
import imgSurfing1 from '../assets/surfing-md-1.jpg';
import ImageCard from '../components/image-card';

const Homepage = () => {
  return (
    <>
      <div id="hero-recommendations" className="h-screen w-full">
        <section id="recommendations-section" className='w-full h-fit md:h-1/3'>
          <h2 className="text-2xl font-bold mt-4 mx-10">
            Inspiration for your next trip
          </h2>
          <div className='grid grid-cols-1 gap-6 mt-3 place-content-center mx-10 md:grid-cols-3'>
            <ImageCard imgUrl={imgKayaking1} imgTitle={'Kayaking'} sportType={'summer'} />
            <ImageCard imgUrl={imgSnowboarding1} imgTitle={'Snowboarding'} sportType={'winter'} />
            <ImageCard imgUrl={imgSurfing1} imgTitle={'Surfing'} sportType={'summer'} />
          </div>
          <div className='flex justify-center md:justify-end mx-10 mt-4'>
            <button className='flex justify-center items-center w-32 my-4 mx-4 text-white text-xl font-light bg-dark-body rounded md:rounded-xl'>
              <span>Explore</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Homepage;