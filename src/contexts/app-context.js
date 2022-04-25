import { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import tripsData from '../dev-data/trips.json';
import sportsData from '../dev-data/sports.json';

const AppContext = createContext();

export function AppProvider({ children }) {
    // REMOVE THIS AFTERWARDS
    const devData = {
        "trips": tripsData,
        "sports": sportsData
    }

    // Handle modal controls
    const [showModal, setShowModal] = useState(null);
    const toggleModal = (value) => {
        setShowModal(value);
    };

    // Reset UI when switching routes
    const routeLocation = useLocation();
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