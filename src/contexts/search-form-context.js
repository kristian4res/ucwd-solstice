import { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import validator from 'validator'; 

import { getTomorrowsDate } from "../utils/utils";

const SearchFormContext = createContext();

export function SearchFormProvider({ children }) {
    /** STATES */
    const [searchFormDetails, setSearchFormDetails] = useState({
        location: '',
        sport: '',
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

        let locationStyle, sportStyle;

        // Validate inputs and set input mssages
        if (location) {
            locationStyle = 'form-input-success';

            if (!validator.isAlpha(location, "en-GB", { ignore: " " })) {
                locationStyle = 'form-input-failure';
            }
        }
        
        if (sport) {
            sportStyle = 'form-input-success';

            if (!validator.isAlpha(sport, "en-GB", { ignore: " " })) {
                sportStyle = 'form-input-failure';
            }
        }
        
        // Update searchFormDetails
        setSearchFormDetails(prevState => {
            return {...prevState, 
                location: location,
                sport: sport, 
                checkIn: checkIn, 
                checkOut: checkOut, 
            } 
        });
        
        // Update input style
        setSearchInputStyle(prevState => {
            return {...prevState,
                location: `${locationStyle}`,
                sport: `${sportStyle}`,
            }
        });
    };

    // Reset input UI when changing routes
    const routeLocation = useLocation();
    useEffect(() => {
        // When changing routes, reset input messages
        setSearchInputStyle({
            location: '',
            sport: '',
            checkIn: '',
            checkOut: ''
        });
    }, [routeLocation])

    return (
        <SearchFormContext.Provider value={{ searchFormDetails, searchInputStyle, setSearchInputStyle, submitSearchForm }}>
            {children}
        </SearchFormContext.Provider>
    )
};

export default SearchFormContext;