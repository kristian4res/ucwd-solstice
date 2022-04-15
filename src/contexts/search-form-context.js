import { useState, createContext } from "react";

import { getTomorrowsDate } from "../utils/utils";

const SearchFormContext = createContext();

export function SearchFormProvider({ children }) {
    /** STATES */
    const [location, setLocation] = useState(null);
    const [sport, setSport] = useState(null);
    const [checkIn, setCheckIn] = useState(getTomorrowsDate());
    const [checkOut, setCheckOut] = useState(getTomorrowsDate('checkOut'));

    const inputHooks = { 
        location: [location, setLocation], 
        sport: [sport, setSport],
        checkIn: [checkIn, setCheckIn],
        checkOut: [checkOut, setCheckOut]
    }

    const submitSearchForm = () => {
        const inputArr = [location, sport, checkIn, checkOut];
        console.log(inputArr);
    };

    return (
        <SearchFormContext.Provider value={{ inputHooks, submitSearchForm }}>
            {children}
        </SearchFormContext.Provider>
    )
};

export default SearchFormContext;