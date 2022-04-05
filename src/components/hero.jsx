import React from 'react';

import vidScubadiving1 from '../assets/scuba-diving-vid-1.mp4';

const Hero = () => {
  return (
    <header id="hero-section" className='relative flex flex-col justify-center items-center w-full h-[64vh]'>
        <div id="bg-video" className='h-full w-full absolute top-0 left-0 -z-10'>
            <video className='h-full w-full object-cover' autoPlay muted loop>
              <source src={vidScubadiving1} type="video/mp4" />
            </video>
        </div>
        <div className="flex flex-col items-center md:items-start w-1/3">
            <div className='flex flex-col'>
              <h1 className="my-0 text-3xl font-bold uppercase text-white inline-block md:text-4xl md:my-4 lg:text-6xl">
                Solstice
                <div className='custom-bg-gradient w-full h-2 rounded-sm'></div>
              </h1>
              <h2 className="my-0 text-lg font-bold uppercase text-white inline-block md:text-2xl md:my-2 lg:text-4xl">
                Explore the world
              </h2>
            </div>
            <div className='mt-8 md:mt-4'>
              <input type="text" placeholder='Search a location'></input>
            </div>
        </div>
    </header>
  )
}

export default Hero;