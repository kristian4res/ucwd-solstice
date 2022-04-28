import React from 'react';

import SearchForm from './forms/search-form';

import vidScubadiving1 from '../assets/scuba-diving-vid-1.mp4';


const Hero = () => {
  return (
    <header id="hero-section" className='relative flex flex-col justify-center items-center w-full h-[64vh] pt-24 md:pt-0'>
        <div id="bg-video" className='h-full w-full absolute top-0 left-0 -z-10 shadow-lg'>
            <video className='h-full w-full object-cover' autoPlay muted loop>
              <source src={vidScubadiving1} type="video/mp4" />
            </video>
        </div>
        <hgroup className="flex flex-col items-center w-3/5 md:items-start">
            <div className='flex flex-col'>
              <h1 className="my-0 text-3xl font-bold uppercase text-white inline-block md:text-4xl md:my-4 lg:text-6xl">
                Solstice
                <div className='custom-bg-gradient w-full h-2 rounded-sm'></div>
              </h1>
              <h2 className="my-0 text-lg font-bold uppercase text-white inline-block md:text-2xl md:my-2 lg:text-4xl">
                Explore the world
              </h2>
            </div>
            <SearchForm />
        </hgroup>
    </header>
  )
}

export default Hero;