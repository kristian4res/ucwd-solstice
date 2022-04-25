import React, { useContext } from 'react';

import AppContext from '../contexts/app-context';
import SearchFormContext from '../contexts/search-form-context';
import FilterFormContext from '../contexts/filter-form-context';

import { ReactComponent as NoDataFoundSVG } from '../assets/no-data.svg';
import CardTrip from '../components/card-trip';


const TripList = () => {
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
    <div className='grid grid-cols-1 gap-6 place-content-start min-h-screen w-[95%]'>
        <div className='flex justify-start'>
            <h4 className='font-semibold'>{dataLength} results found</h4>
        </div>
        {
          dataLength === 0 &&
          <div className="flex flex-col justify-center items-center h-[20rem] max-w-full">
            <NoDataFoundSVG title='No data found' className='h-[14rem] w-[14rem]' />
              <h1 className='text-xl font-semibold mt-2 text-main
                  md:text-2xl
                  lg:text-3xl
              '>
                  Oops!
              </h1>
              <p className='text-base text-center mt-4  whitespace-pre-wrap
                  md:text-xl
              '>
                  Unfortunately, there are no trips that matches your search.
              </p>
          </div>
        }
        {
          displayData
          .map((val, key) => {
            return (
              <CardTrip 
                key={key}
                imgUrl={val.tripImages[0]} 
                cardId={key + 1}
                cardTitle={val.tripName}
                cardSubTitle={val.tripFullLocation}
                cardText={[val.tripDescription, val.tripAmenities]}
                cardDetails={[[val.tripRating, val.tripReviews], [val.tripTotalPrice]]}
                tagData={val.tripTags} 
              />
            )
          })
        }
    </div>
  )
}

export default TripList