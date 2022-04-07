import React from 'react';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';

import imgSnowboarding1 from '../assets/snowboarding-md-1.jpg';
import imgKayaking1 from '../assets/kayaking-md-1.jpg';
import imgSurfing1 from '../assets/surfing-md-1.jpg';
import imgSkiResort1 from '../assets/ski-resort-img-1.jpg';

import ImageCard from '../components/image-card';

const Homepage = () => {
  return (
    <>
      <section id="recommendations-section" className='mt-2 w-full h-screen md:mt-4 md:h-1/3'>
        <h2 className="text-dark-body text-2xl font-bold mx-10">
          Inspiration for your next trip
        </h2>
        <div className='grid grid-cols-1 gap-6 mt-3 place-content-center mx-10 md:grid-cols-3'>
          <ImageCard imgUrl={imgKayaking1} imgTitle={'Kayaking'} sportType={'summer'} />
          <ImageCard imgUrl={imgSnowboarding1} imgTitle={'Snowboarding'} sportType={'winter'} />
          <ImageCard imgUrl={imgSurfing1} imgTitle={'Surfing'} sportType={'summer'} />
        </div>
        <div className='flex justify-center md:justify-end mx-10 mt-4'>
          {/* Button */}
          <button className='flex justify-center items-center w-60 px-2 py-2 mb-4 text-white text-xl font-light bg-dark-body rounded md:text-2xl md:rounded-xl'>
            <span>Explore More</span>
            <ChevronDoubleRightIcon className='h-6 w-6 md:h-8 md:w-8' />
          </button>
        </div>
      </section>
      <section id="article-section" className='mt-2 w-full h-full md:mt-4' style={{
        backgroundImage: `linear-gradient(105deg, rgba(44, 44, 44, 0.9) 0%, rgba(44, 44, 44, 0.9) 48%, transparent 48%), url(${imgSurfing1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
        <article className='container flex flex-col text-white w-2/4 min-h-60 md:h-96'>
          <h2 className="text-2xl font-bold mt-6 mx-10">
            Make the most out of your trip
          </h2>
          <p className='text-left mt-4 mx-10 w-3/4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas debitis recusandae explicabo, obcaecati minus quia quae sapiente quibusdam impedit quisquam! Ea explicabo, molestias vitae eaque fugiat quam iusto quos voluptatibus?
          </p>
        </article>
      </section>
      <section id="travel-tips-section" className='mt-4 w-full h-full flex justify-around'>
        <article className='container flex flex-col text-white w-full min-h-60 md:h-96' style={{
          backgroundImage: `linear-gradient(105deg, rgba(44, 44, 44, 0.9) 0%, rgba(44, 44, 44, 0.9) 48%, transparent 48%), url(${imgSkiResort1})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
          <h2 className="text-2xl font-bold mt-6 mx-10">
            Make the most out of your trip
          </h2>
          <p className='text-left mt-4 mx-10 w-3/4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas debitis recusandae explicabo, obcaecati minus quia quae sapiente quibusdam impedit quisquam! Ea explicabo, molestias vitae eaque fugiat quam iusto quos voluptatibus?
          </p>
        </article>
        <article className='container flex flex-col text-white w-full min-h-60 md:h-96' style={{
          backgroundImage: `linear-gradient(105deg, rgba(44, 44, 44, 0.9) 0%, rgba(44, 44, 44, 0.9) 48%, transparent 48%), url(${imgSnowboarding1})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
          <h2 className="text-2xl font-bold mt-6 mx-10">
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