import React from 'react';

import imgSnowboarding1 from '../assets/snowboarding-md-1.jpg';
import imgKayaking1 from '../assets/kayaking-md-1.jpg';
import imgSurfing1 from '../assets/surfing-md-1.jpg';
import imgSkiResort1 from '../assets/ski-resort-img-1.jpg';

import ButtonOutline from '../components/button-outline';
import CardLink from '../components/card-links';
import PageArticle from '../components/page-article';

import { ChevronDoubleRightIcon } from '@heroicons/react/solid';

const Homepage = () => {
  return (
    <>
      <section id="recommendations-section" className='mt-2 w-full h-full mb-6 md:mt-4 md:h-1/3'>
        <h2 className="text-dark text-2xl font-bold mx-10 mt-12 md:mt-6">
          Inspiration for your next trip
        </h2>
        <div className='grid grid-cols-1 gap-6 mt-3 place-content-center mx-10 md:grid-cols-3'>
          <CardLink imgUrl={imgKayaking1} imgTitle={'Kayaking'} sportType={'summer'} />
          <CardLink imgUrl={imgSnowboarding1} imgTitle={'Snowboarding'} sportType={'winter'} />
          <CardLink imgUrl={imgSurfing1} imgTitle={'Surfing'} sportType={'summer'} />
        </div>
        <div className='flex justify-center md:justify-end mx-10 mt-4'>
          <ButtonOutline btnTitle={'Explore More'}
            icon={
              <ChevronDoubleRightIcon className='h-6 w-6 md:h-8 md:w-8' />
            }
          />
        </div>
      </section>
      <PageArticle />
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