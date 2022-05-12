import React, { useState, useContext, useEffect } from 'react';

import AppContext from '../../contexts/app-context';
import SearchFormContext from '../../contexts/search-form-context';
import FilterFormContext from '../../contexts/filter-form-context';

import CardTrip from '../cards/card-trip';
import ButtonSolid from '../buttons/button-solid';
import WithTrip from './with-trip';
import TripNoResults from './trip-no-results';


const TripList = () => {
  /** CONTEXTS */
  const { devData: { trips }} = useContext(AppContext);
  const { searchFormDetails } = useContext(SearchFormContext);
  const { filterFormDetails } = useContext(FilterFormContext);

  /** HOOKS */
  // Contains the data to be displayed and the number of data items
  const [displayData, setDisplayData] = useState(
    {
      data: [],
      length: 0
    }
  );
  const [artificialLoading, setArtificialLoading] = useState(true);

  /** LOADERS */
  const TripSearchLoader = WithTrip(TripNoResults);

  /** FUNCTIONS */

  /**
   * 
   * @param {string} location - trip location 
   * @param {string} sport - trip sport
   * @param {array} data - (fetched) data array containing trip objects
   * @returns - data filtered using the passed in parameters
   */
  const searchedData = (location, sport, data) => {
    if (!location && !sport) {
      return data;
    }

    // Filter data based on the location and sport parameters from the search form 
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
  
  /**
   * 
   * @param {object} params - object containing user specified filters (string) 
   * @param {array} data - (fetched) data array containing trip objects
   * @returns - data filtered based on passed in arguments
   */
  const filterData = (params, data) => {
    let result = data;

    // Filter data based on the user specified filters
    for (const param in params) {
      result = result.filter((val) => {
        // If any, then return all of the data
        if (params[param] === 'any') {
          return val;
        }

        // If specified, return data that matches the season
        if (param === 'tripSeason') {
          if (params[param].toLowerCase().includes(val[param].toLowerCase())) {
            return val;
          }
        }

        // If specified, return data that matches the continent
        if (param === 'tripContinent') {
          if (params[param].toLowerCase().includes(val[param].toLowerCase())) {
            return val;
          }
        }

        // If specified, return data above the specified rating
        if (param === 'tripRating') {
          if (Number.parseFloat(val[param]) >= Number.parseFloat(params[param])) {
            return val;
          }
        }

        // Return no results if no filter is specified
        return null;
      });
    }

    return result;
  }

  // When loading component, fetch and load data to be displayed
  useEffect(() => {
    let data;

    if (filterFormDetails || (searchFormDetails['location'] || searchFormDetails['sport'])) {
      data = filterData(filterFormDetails, searchedData(searchFormDetails['location'], searchFormDetails['sport'], trips));
    }
    else {
      data = trips;
    }

    setDisplayData(prevState => {
      return {
        ...prevState,
        data: data,
        length: data.length
      }
    });
  }, [filterFormDetails, searchFormDetails, trips]);

  // Creates loading progress whenever the user searches using the form
  useEffect(() => {
    // Start loader
    setArtificialLoading(true);

    // Delay loader for a duration (between 1ms - 500ms)
    setTimeout(() => {
      setArtificialLoading(false);
    }, Math.floor(Math.random() * 500));
  }, [displayData]);

  return (
    <div className='grid grid-cols-1 gap-6 place-content-start min-h-screen w-[95%]'>
        <div className='flex items-center justify-between'>
            <h4 className='font-semibold'>{displayData.length} results found</h4>
            <div className='text-white w-fit'>
              <ButtonSolid
                btnTitle={'See all trips'}
                btnStyles={'bg-primary'}
                handleClick={() => {
                  // Reset trips data
                  setDisplayData(prevState => {
                    return {
                      ...prevState,
                      data: trips,
                      length: trips.length
                    }
                  });
                }}
              />
            </div>
        </div>
        {
          displayData.length === 0 && (searchFormDetails['location'] || searchFormDetails['sport']) 
          ? <TripSearchLoader isLoading={artificialLoading} />
          : displayData.data
            .map((val, key) => {
              return (
                <CardTrip 
                  key={key}
                  imgUrl={val.tripImages[0]} 
                  cardId={val.tripId}
                  cardTitle={val.tripName}
                  cardSubTitle={val.tripFullLocation}
                  cardText={[val.tripDescription, val.tripAmenities]}
                  cardDetails={[[val.tripRating, val.tripReviews], [val.tripBasePrice]]}
                  tagData={val.tripTags} 
                />
              )
            })
        }
    </div>
  )
}

export default TripList;