import React, { useState, createContext } from 'react'

const FilterFormContext = createContext();

export function FilterFormProvider({ children }) {
    const [filterFormDetails, setFilterFormDetails] = useState({
        tripSeason: 'any',
        tripContinent: 'any',
        tripRating: 'any',
    });

    const updateFilterForm = (filterData) => {
        setFilterFormDetails((prevState) => {
            return {...prevState, ...filterData}
        });
    };

    return (
        <FilterFormContext.Provider value={{ filterFormDetails, updateFilterForm }}>
            {children}
        </FilterFormContext.Provider>
    )
}

export default FilterFormContext;