import React, { useContext } from 'react';

import AppContext from '../contexts/app-context';
import SearchFormContext from '../contexts/search-form-context';

import PageContainer from '../components/page-container';
import SearchForm from '../components/search-form';
import ButtonOutline from '../components/button-outline';
import CardTrip from '../components/card-trip';

import { HiChevronDoubleRight } from 'react-icons/hi';

const ExplorePage = () => {
  const { devData: { trips }} = useContext(AppContext);
  const { searchFormDetails } = useContext(SearchFormContext);

  // Filter data based on the location and sport parameters search form 
  const filterData = (location, sport, data) => {
    if (!location && !sport) {
      return data;
    }
    return data.filter((val) => {
      // If given both location and sport, check filter for specific trips
      if (location && sport) {
        if (
          (val.tripLocation.toLowerCase().includes(location.toLowerCase()))
          &&
          (val.tripSport[0].sportName.toLowerCase().includes(sport.toLowerCase()))
        ) {
          return val;
        }
        return null;
      }
      // If invidivual parameters, check location parameter first then sport parameter
      else if (location && val.tripLocation.toLowerCase().includes(location.toLowerCase())) {
        return val;
      }
      else if (sport && val.tripSport[0].sportName.toLowerCase().includes(sport.toLowerCase())) {
          return val;
      }
      else {
        return null;
      }
  }); 
}

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
            filterData(searchFormDetails['location'], searchFormDetails['sport'], trips).map((val, key) => {
              return (
                <CardTrip key={key} 
                  imgUrl={val.tripImages[0]} 
                  cardTitle={val.tripName}
                  cardSubTitle={val.tripFullLocation}
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