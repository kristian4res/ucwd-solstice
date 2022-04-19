import { useState, createContext } from "react";
import validator from 'validator'; 

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
        if (!validator.isAlpha(location) && !validator.isAlpha(sport)) {
            let locationStyle, sportStyle;

            if (location !== '' && validator.isAlpha(location)) {
                locationStyle = 'form-input-success';
            }

            if (sport !== '' && validator.isAlpha(sport)) {
                sportStyle = 'form-input-success';
            }

             // Update input style
            setSearchInputStyle(prevState => {
                return {...prevState,
                    location: `${locationStyle ? locationStyle : ''}`,
                    sport: `${sportStyle ? sportStyle : ''}`,
                }
            });
        }  
        else {
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
                    location: `${location ? 'form-input-success' : ''}`,
                    sport: `${sport ? 'form-input-success' : ''}`,
                }
            });
        }
    };

    return (
        <SearchFormContext.Provider value={{ searchFormDetails, searchInputStyle, setSearchInputStyle, submitSearchForm }}>
            {children}
        </SearchFormContext.Provider>
    )
};

export default SearchFormContext;