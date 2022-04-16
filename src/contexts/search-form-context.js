import { useState, createContext } from "react";
import tripsData from '../dev-data/trips.json';

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

    const submitSearchForm = (details) => {
        // Destructure details object
        // const { locationInput, sportInput, checkInVal, checkOutVal } = details;
        // Update searchFormDetails
        setSearchFormDetails(details)
        console.log(details);
    };

    return (
        <SearchFormContext.Provider value={{ tripsData, searchFormDetails, submitSearchForm }}>
            {children}
        </SearchFormContext.Provider>
    )
};

export default SearchFormContext;