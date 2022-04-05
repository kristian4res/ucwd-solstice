import React from 'react';

import vidScubadiving1 from '../assets/scuba-diving-vid-1.mp4';
import imgSnowboarding1 from '../assets/snowboarding-md-1.jpg';
import ImageCard from '../components/image-card';

const Homepage = () => {
  return (
    <>
        <div id="hero-recommendations" className="h-screen">
          <header id="hero-section" className='flex flex-col justify-center items-center h-2/3 relative'>
            <div id="bg-video" className='h-full w-full absolute top-0 left-0 -z-10'>
              <video className='h-full w-full object-cover' autoPlay muted loop>
                <source src={vidScubadiving1} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col items-start w-1/3">
              <h1 className="text-xl md:text-4xl lg:text-6xl font-bold my-4 uppercase text-white inline-block">Solstice <br/> Explore the World</h1>
              <div>
                <input type="text" placeholder='Search a location'></input>
              </div>
            </div>
          </header>
          <section id="recommendations-section" className='w-full h-1/3'>
            <h2 className="text-2xl font-bold m-4">
              We recommend these destinations
            </h2>
            <div className='grid grid-cols-1 gap-6 mt-3 place-content-center md:grid-cols-3'>
              <ImageCard imgUrl={imgSnowboarding1} />
              <ImageCard imgUrl={imgSnowboarding1} />
              <ImageCard imgUrl={imgSnowboarding1} />
            </div>
          </section>
        </div>
    </>
  )
}

export default Homepage;