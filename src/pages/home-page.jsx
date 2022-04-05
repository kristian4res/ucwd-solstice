import React from 'react';

import imgSnowboarding1 from '../assets/snowboarding-md-1.jpg';
import imgKayaking1 from '../assets/kayaking-md-1.jpg';
import imgSurfing1 from '../assets/surfing-md-1.jpg';
import imgSkiResort1 from '../assets/ski-resort-img-1.jpg';

import ImageCard from '../components/image-card';

const Homepage = () => {
  return (
    <>
      <section id="recommendations-section" className='w-full h-screen md:h-1/3'>
        <h2 className="text-dark-body text-2xl font-bold mt-4 mx-10">
          Inspiration for your next trip
        </h2>
        <div className='grid grid-cols-1 gap-6 mt-3 place-content-center mx-10 md:grid-cols-3'>
          <ImageCard imgUrl={imgKayaking1} imgTitle={'Kayaking'} sportType={'summer'} />
          <ImageCard imgUrl={imgSnowboarding1} imgTitle={'Snowboarding'} sportType={'winter'} />
          <ImageCard imgUrl={imgSurfing1} imgTitle={'Surfing'} sportType={'summer'} />
        </div>
        <div className='flex justify-center md:justify-end mx-10 mt-4'>
          {/* Button */}
          <button className='flex justify-center items-center w-60 px-2 py-2 my-4 mx-4 text-white text-2xl font-light bg-dark-body rounded md:rounded-xl'>
            <span>Explore</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>
      <section id="travel-section" className='w-full h-full' style={{
        backgroundImage: `linear-gradient(105deg, rgba(44, 44, 44, 0.9) 0%, rgba(44, 44, 44, 0.9) 48%, transparent 48%), url(${imgSurfing1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
        <article className='container flex flex-col text-white w-2/4 min-h-60 md:h-96'>
          <h2 className="text-2xl font-bold mt-4 mx-10">
            Make the most out of your trip
          </h2>
          <p className='text-left mt-4 mx-10 w-3/4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas debitis recusandae explicabo, obcaecati minus quia quae sapiente quibusdam impedit quisquam! Ea explicabo, molestias vitae eaque fugiat quam iusto quos voluptatibus?
          </p>
        </article>
      </section>
    </>
  )
}

export default Homepage;