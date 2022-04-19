import React from 'react';

import imgSnowboarding1 from '../assets/snowboarding-md-1.jpg';
import imgKayaking1 from '../assets/kayaking-md-1.jpg';
import imgSurfing1 from '../assets/surfing-md-1.jpg';
import imgTravelArticle from '../assets/travel-tips-md-1.jpg';
import imgSkiResort1 from '../assets/ski-resort-img-1.jpg';

import PageContainer from '../components/page-container';

import ButtonOutline from '../components/button-outline';
import SectionTitle from '../components/section-title';
import CardLink from '../components/card-links';
import CardArticle from '../components/card-article';
import PageArticle from '../components/page-article';

import { HiChevronDoubleRight } from 'react-icons/hi'

const Homepage = () => {
  return (
    <PageContainer>
      <section id="recommendations-section" className='flex flex-col mt-2 w-full h-full mb-6 md:mt-4 md:h-1/3'>
        <SectionTitle title='Inspiration for your next trip' textColor='text-dark' />
        <div className='grid grid-cols-1 gap-6 place-content-center mx-10 md:grid-cols-3'>
          <CardLink imgUrl={imgKayaking1} imgTitle={'Kayaking'} tagData={['Summer', 'summer']} />
          <CardLink imgUrl={imgSnowboarding1} imgTitle={'Snowboarding'} tagData={['Winter', 'winter']} />
          <CardLink imgUrl={imgSurfing1} imgTitle={'Surfing'} tagData={['Summer', 'summer']} />
        </div>
        <div className='flex justify-center text-dark mx-10 mt-4
        md:justify-end '>
          <ButtonOutline btnTitle={'Explore More'} 
            icon={
              <HiChevronDoubleRight className='h-6 w-6 lg:h-8 lg:w-8' />
            }
            route='/explore'
          />
        </div>
      </section>
      <PageArticle />
      <section id="travel-tips-section" className='mt-4 w-full h-full flex flex-col'>
        <SectionTitle title='Things to do' textColor='text-dark' />
        <div className='grid grid-cols-1 gap-6 place-content-center mx-10 md:grid-cols-2'>
          <CardArticle imgUrl={imgTravelArticle} imgTitle={'Best restaurants'} tag={'summer'} />
          <CardArticle imgUrl={imgSkiResort1} imgTitle={'Famous landscapes'} tag={'winter'} />
        </div>
      </section>
    </PageContainer>
  )
}

export default Homepage;