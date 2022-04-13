import React from 'react'

import PageContainer from '../components/page-container'
import SearchForm from '../components/search-form'
import ButtonOutline from '../components/button-outline'
import CardLink from '../components/card-links';

import imgSnowboarding1 from '../assets/snowboarding-md-1.jpg';
import imgKayaking1 from '../assets/kayaking-md-1.jpg';
import imgSurfing1 from '../assets/surfing-md-1.jpg';

import { ChevronDoubleRightIcon } from '@heroicons/react/solid';

const ExplorePage = () => {
  return (
    <PageContainer>
      <section className='container bg-custom-gray pt-28 pb-10 text-dark min-w-full flex flex-col items-center w-3/5 shadow-2xl'>
        <SearchForm />
        <div className='flex justify-around w-full text-dark mx-10 mt-4'>
          <ButtonOutline btnTitle={'Explore More'} 
            icon={
              <ChevronDoubleRightIcon className='h-6 w-6 lg:h-8 lg:w-8' />
            }
            route='/explore'
          />
          <ButtonOutline btnTitle={'Explore More'} 
            icon={
              <ChevronDoubleRightIcon className='h-6 w-6 lg:h-8 lg:w-8' />
            }
            route='/explore'
          />
          <ButtonOutline btnTitle={'Explore More'} 
            icon={
              <ChevronDoubleRightIcon className='h-6 w-6 lg:h-8 lg:w-8' />
            }
            route='/explore'
          />
          <ButtonOutline btnTitle={'Explore More'} 
            icon={
              <ChevronDoubleRightIcon className='h-6 w-6 lg:h-8 lg:w-8' />
            }
            route='/explore'
          />
          <ButtonOutline btnTitle={'Explore More'} 
            icon={
              <ChevronDoubleRightIcon className='h-6 w-6 lg:h-8 lg:w-8' />
            }
            route='/explore'
          />
        </div>
      </section>
      <section className='container pt-8 text-dark min-w-full flex flex-col items-center bg-white'>
        <div className='grid grid-cols-1 gap-6 place-content-start mx-10'>
          <CardLink imgUrl={imgKayaking1} imgTitle={'Kayaking'} tag={'summer'} />
          <CardLink imgUrl={imgSnowboarding1} imgTitle={'Snowboarding'} tag={'winter'} />
          <CardLink imgUrl={imgSurfing1} imgTitle={'Surfing'} tag={'summer'} />
        </div>
      </section>
    </PageContainer>
  )
}

export default ExplorePage