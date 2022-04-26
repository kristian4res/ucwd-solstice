import React, { useContext, useEffect, useState } from 'react';

import FilterFormContext from '../contexts/filter-form-context';

import { BiSliderAlt } from 'react-icons/bi';

const FilterForm = () => {
  const { filterFormDetails, updateFilterForm } = useContext(FilterFormContext);

  const [season, setSeason] = useState(filterFormDetails['tripSeason']);
  const [continent, setContinent] = useState(filterFormDetails['tripContinent']);
  const [rating, setRating] = useState(filterFormDetails['tripRating']);

  useEffect(() => {
    const specifiedFilters = {
      tripSeason: season,
      tripContinent: continent,
      tripRating: rating
    };

    updateFilterForm(specifiedFilters);
  }, [season, continent, rating])

  return (
    <div className='flex flex-row 
      justify-center items-center 
      gap-4 w-full h-full flex-wrap
      shadow-lg rounded-lg p-4
      xl:flex-col xl:items-start
    '>
      <h1 className='flex justify-start items-center gap-2 
        text-xl font-semibold pr-4 pb-2 w-full
        border-main border-b-2
        xl:pb-4
      '>
        <span title='Filters'>Filters</span>
        <BiSliderAlt className='h-6 w-6' aria-hidden />
      </h1>
      <form className="flex flex-row gap-2 flex-wrap
        xl:flex-col xl:flex-nowrap
      "
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-2">
          <h4 className='text-base font-semibold'>Season:</h4>
          <select className='filter-select max-w-full' name="season"
            onChange={(e) => setSeason(e.target.value)}
            value={season}
          >
            <option value="any">Any</option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className='text-base font-semibold'>Continent:</h4>
          <select className='filter-select max-w-full' name="continent"
            onChange={(e) => setContinent(e.target.value)}
            value={continent}
          >
            <option value="any">Any</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="oceania">Oceania</option>
            <option value="america">North &amp; South America</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className='text-base font-semibold'>Rating:</h4>
          <select className='filter-select max-w-full' name="continent"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          >
            <option value="any">Any</option>
            <option value="3.5">Good (3.5+)</option>
            <option value="4">Amazing (4+)</option>
            <option value="4.5">Exceptional (4.5+)</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default FilterForm;