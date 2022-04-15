import React from 'react';
import tripsData from '../dev-data/trips.json';

import PageContainer from '../components/page-container';
import SearchForm from '../components/search-form';
import ButtonOutline from '../components/button-outline';
import CardTrip from '../components/card-trip';

import { HiChevronDoubleRight } from 'react-icons/hi';

const ExplorePage = () => {
  return (
    <PageContainer>
      <section className='container bg-custom-gray pt-28 pb-10 text-dark min-w-full flex flex-col items-center w-3/5 shadow-2xl'>
        <SearchForm />
      </section>
      <section className='container pt-6 text-dark 
        min-w-full flex flex-col justify-center items-center bg-white
        gap-6 px-10
        lg:flex-row lg:justify-center lg:items-start lg:px-28 lg:pt-8
      '>
        <div className='flex flex-col w-fit h-full text-dark mt-2'>
          <ButtonOutline btnTitle={'Explore More'} 
            icon={
              <HiChevronDoubleRight className='h-6 w-6 lg:h-8 lg:w-8' />
            }
            route='/explore'
          />
        </div>
        <div className='grid grid-cols-1 gap-6 place-content-start'>
          {
            tripsData.map((val, key) => {
              return (
                <CardTrip key={key} 
                  imgUrl={val.tripImages[0]} 
                  cardTitle={val.tripName}
                  cardSubTitle={val.tripLocation} 
                  tagData={val.tripTags} 
                />
              )
            })
          }
        </div>
      </section>
    </PageContainer>
  )
}

export default ExplorePage