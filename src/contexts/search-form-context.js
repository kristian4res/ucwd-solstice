import { useState, createContext } from "react";

import { getTomorrowsDate } from "../utils/utils";

const SearchFormContext = createContext();

export function SearchFormProvider({ children }) {
    /** STATES */
    const [searchFormDetails, setSearchFormDetails] = useState({
        location: null,
        sport: null,
        checkIn: getTomorrowsDate(),
        checkOut: getTomorrowsDate('checkOut')
    });

    const [searchInputStyle, setSearchInputStyle] = useState({
        location: '',
        sport: '',
        checkIn: '',
        checkOut: ''
    });

    const submitSearchForm = (details) => {
        // Destructure details object
        const { location, sport, checkIn, checkOut } = details;

        // Validate inputs
        if (location)

        // Update searchFormDetails
        setSearchFormDetails(prevState => {
            return {...prevState, 
                location: location,
                sport: sport, 
                checkIn: checkIn, 
                checkOut: checkOut, 
            } 
        });
    };

    return (
        <SearchFormContext.Provider value={{ searchFormDetails, searchInputStyle, submitSearchForm }}>
            {children}
        </SearchFormContext.Provider>
    )
};

export default SearchFormContext;