import React, { useContext } from 'react';
import SearchFormContext from '../contexts/search-form-context';

import PageContainer from '../components/page-container';
import SearchForm from '../components/search-form';
import ButtonOutline from '../components/button-outline';
import CardTrip from '../components/card-trip';

import { HiChevronDoubleRight } from 'react-icons/hi';

const ExplorePage = () => {
  const { tripsData, searchFormDetails } = useContext(SearchFormContext);

  return (
    <PageContainer>
      <section className='container bg-custom-gray pt-28 pb-10 text-dark min-w-full flex flex-col items-center w-3/5 shadow-2xl'>
        <SearchForm />
      </section>
      <section className='container pt-6 text-dark 
        min-w-full flex flex-col justify-center items-center bg-white
        gap-6 px-10
        xl:flex-row xl:justify-center xl:items-start xl:px-28 xl:pt-8
      '>
        <div className='flex flex-col w-fit h-full text-dark mt-2'>
          <ButtonOutline btnTitle={'Explore More'} 
            icon={
              <HiChevronDoubleRight className='h-6 w-6 lg:h-8 lg:w-8' />
            }
            route='/explore'
          />
        </div>
        <div className='grid grid-cols-1 gap-6 place-content-start min-h-screen'>
          {
            // Filter data based on search form 
            tripsData.filter((val) => {
              if (!searchFormDetails['location'] || searchFormDetails['location'] === '') {
                return null;
              }
              else if (val.tripLocation.split(', ')[1].toLowerCase().includes(searchFormDetails['location'][0].toLowerCase())) {
                return val;
              }
              else {
                return null;
              }
            })
            .map((val, key) => {
              return (
                <CardTrip key={key} 
                  imgUrl={val.tripImages[0]} 
                  cardTitle={val.tripName}
                  cardSubTitle={val.tripLocation}
                  cardText={val.tripDescription}
                  cardDetails={[[val.tripRating, val.tripReviews], [val.tripTotalPrice]]}
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