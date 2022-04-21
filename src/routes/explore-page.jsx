import React, { useContext } from 'react';

import AppContext from '../contexts/app-context';
import SearchFormContext from '../contexts/search-form-context';
import FilterFormContext from '../contexts/filter-form-context';

import PageContainer from '../components/page-container';
import SearchForm from '../components/search-form';
import CardTrip from '../components/card-trip';
import FilterForm from '../components/filter-form';


const ExplorePage = () => {
  /** CONTEXTS */
  const { devData: { trips }} = useContext(AppContext);
  const { searchFormDetails } = useContext(SearchFormContext);
  const { filterFormDetails } = useContext(FilterFormContext);

  /** FUNCTIONS */
  // Filter data based on the location and sport parameters from the search form 
  const searchedData = (location, sport, data) => {
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
  
  // Filter data based on the user specified filters
  const filterData = (params, data) => {
    let result = data;

    for (const param in params) {
      result = result.filter((val) => {
        if (params[param] !== 'any') {
          if (param === 'tripSeason' || param === 'tripContinent') {
            if (params[param].toLowerCase().includes(val[param].toLowerCase())) {
              return val;
            }
            return null;
          }
          else if (param === 'tripRating') {
            if (Number.parseFloat(val[param]) >= Number.parseFloat(params[param])) {
              return val;
            }
            return null;
          }
          else {
            return null;
          }
        }
        else {
          return val;
        }
      });
    }
    return result;
  }

  /** DATA */
  let displayData = filterData(filterFormDetails, searchedData(searchFormDetails['location'], searchFormDetails['sport'], trips));
  let dataLength = displayData.length;

  return (
    <PageContainer>
      <section className='container bg-custom-gray pt-28 pb-10 text-dark min-w-full flex flex-col items-center w-3/5 shadow-2xl'>
        <SearchForm />
      </section>
      <section className='container pt-6 text-dark 
        min-w-full flex flex-col justify-center items-start bg-white
        gap-6 px-10
        xl:flex-row xl:justify-center xl:items-start xl:px-28 xl:pt-8
      '>
        <div className='flex flex-col w-fit h-full text-dark mt-2'>
          <FilterForm />
        </div>
        <div className='grid grid-cols-1 gap-6 place-content-start min-h-screen'>
          <div className='flex justify-start'>
            Number of results - {dataLength}
          </div>
          {
            displayData
            .map((val, key) => {
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

export default ExplorePage;