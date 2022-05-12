import React from 'react';
import Slider from "react-slick";

import { CarouselNextArrow, CarouselPrevArrow } from './carousel-arrows';

/** CONSTANTS */
const settings = {
    lazyload: true,
    autoplay: true,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />
};

const ImageCarousel = ({ imgData }) => {
  /** VARIABLES */
  const arrLength = imgData.length;

  return (
    <div className='container w-full h-full '>
        <Slider {...settings}>
          {
            imgData
            .map((val, key) => {
                return (
                  <figure
                    key={key} 
                    className={`
                      relative cursor-pointer
                    `}
                  >
                    <img
                      loading='lazy' 
                      className='object-fill h-full w-full'
                      src={require(`../../assets/${val}`)}  
                      alt="trip cover"
                    />
                    <figcaption className='absolute bottom-0 left-0 
                      bg-white opacity-90
                      font-semibold
                      text-sm px-4 py-2 rounded-tr-lg
                    '>
                        {`Image ` + (key + 1) + ` of ` + arrLength}
                    </figcaption>
                  </figure>
                )
            })
          }
        </Slider>
  </div>
  )
}

export default ImageCarousel