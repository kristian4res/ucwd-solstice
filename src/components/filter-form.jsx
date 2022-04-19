import React from 'react'

const FilterForm = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-4 w-full h-full flex-wrap
      xl:flex-col xl:items-start
    '>
      <h3 className='text-xl font-semibold pr-4 border-r-2 border-main
        xl:flex xl:border-b-2 xl:pb-4 xl:border-r-0 xl:pr-0 
      '>
        Filter by
      </h3>
      {/* FILTER OPTIONS */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h4 className='text-base font-semibold'>Season:</h4>
          <select className='filter-select max-w-full' name="season">
            <option value="summer" selected>Any</option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className='text-base font-semibold'>Continent:</h4>
          <select className='filter-select max-w-full' name="continent">
            <option value="summer" selected>Any</option>
            <option value="europe">Europe</option>
            <option value="oceania">Asia</option>
            <option value="oceania">Oceania</option>
            <option value="america">North &amp; South America</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className='text-base font-semibold'>Rating:</h4>
          <select className='filter-select max-w-full' name="continent">
            <option value="europe">Any</option>
            <option value="oceania">Good (3.5+)</option>
            <option value="oceania">Amazing (4+)</option>
            <option value="america">Exceptional (4.5+)</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default FilterForm;