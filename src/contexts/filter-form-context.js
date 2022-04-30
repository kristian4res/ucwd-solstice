import React, { useState, createContext } from 'react'

const FilterFormContext = createContext();

export function FilterFormProvider({ children }) {
    /** HOOKS & STATES */
    const [filterFormDetails, setFilterFormDetails] = useState({
        tripSeason: 'any',
        tripContinent: 'any',
        tripRating: 'any',
    });

    /** FUNCTIONS */
    /**
     * This function updates the filter parameters (in the context).
     * @param {object} filterData - user specified filter parameters
     */
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