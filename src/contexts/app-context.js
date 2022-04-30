import { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import tripsData from '../dev-data/trips.json';
import sportsData from '../dev-data/sports.json';

const AppContext = createContext();

export function AppProvider({ children }) {
    // DATA - search result suggestions
    const devData = {
        "trips": tripsData,
        "sports": sportsData
    }

    /** HOOKS & STATES */
    const routeLocation = useLocation();
    const [showModal, setShowModal] = useState(null);

    /**
     * This function toggles a value that 
     * causes the modal to show or disappear
     * @param {boolean} value
     */
    const toggleModal = (value) => {
        setShowModal(value);
    };


    /**
     * Reset UI and scroll to the top when switching routes
     */
    useEffect(() => {
        // Close modal if showing
        toggleModal(false);
        // Scroll to the top
        window.scroll(0, 0);
    }, [routeLocation]);

    return (
        <AppContext.Provider value={{ showModal, toggleModal, devData }}>
            {children}
        </AppContext.Provider>
    )
};

export default AppContext;