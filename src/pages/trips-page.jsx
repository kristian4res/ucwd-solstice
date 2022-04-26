import React, { useState, useEffect } from 'react';

import PageContainer from '../components/page-container';
import SearchForm from '../components/search-form';
import FilterForm from '../components/filter-form';
import TripList from '../components/trip-list';
import WithTrip from '../components/with-trip';


const Trips = () => {
  /** STATES */
  const [loadingData, setLoadingData] = useState(true);

  /** LOADERS */
  const TripListWithLoader = WithTrip(TripList);

  // Simulate asynchronous API calls
  useEffect(() => {
    setTimeout(() => setLoadingData(false), Math.floor(Math.random() * 500));
  }, []);

  return (
    <PageContainer>
      <section className='container bg-custom-gray pt-28 pb-10 text-dark 
        min-w-full flex flex-col items-center shadow-2xl'
      >
        <SearchForm />
      </section>
      <section className='container pt-6 text-dark 
        min-w-full flex flex-col justify-center items-start bg-white
        gap-6 px-10
        xl:flex-row xl:justify-center xl:items-start xl:px-28 xl:pt-8
      '>
        <div className='flex flex-col w-[20rem] h-full text-dark mt-2'>
          <FilterForm />
        </div>
        <div className="flex flex-col items-center">
          <TripListWithLoader isLoading={loadingData} />
        </div>
      </section>
    </PageContainer>
  )
}

export default Trips;