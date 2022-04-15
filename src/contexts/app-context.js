import { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const AppContext = createContext();

export function AppProvider({ children }) {
    // REMOVE THIS AFTERWARDS
    const devData = {
        "trips": [
            {"name": "London", "country": "United Kingdom"},
            {"name": "Paris", "country": "France"},
            {"name": "Manila", "country": "Philippines"},
            {"name": "Tokyo", "country": "Japan"},
            {"name": "Bern", "country": "Switzerland"},
        ],
        "sports": [
            {"name": "Surfing", "country": "Hawaii", "season": "Summer", "icon": "🏄‍♀️"},
            {"name": "Kayaking", "country": "United Kingdom", "season": "Summer", "icon": "🛶"},
            {"name": "Scuba Diving", "country": "Philippines", "season": "Summer", "icon": "🤿"},
            {"name": "Skiing", "country": "Japan", "season": "Winter", "icon": "🎿"},
            {"name": "Snowboarding", "country": "France", "season": "Winter", "icon": "🏂"},
            {"name": "Snowshoeing", "country": "Switzerland", "season": "Winter", "icon": "🥾"},
        ]
    }

    // Handle modal controls
    const [showModal, setShowModal] = useState(null);
    const toggleModal = (value) => {
        setShowModal(value);
    };

    // Close modal if route changes
    const routeLocation = useLocation();
    useEffect(() => {
        toggleModal(false);
    }, [routeLocation]);

    return (
        <AppContext.Provider value={{ showModal, toggleModal, devData }}>
            {children}
        </AppContext.Provider>
    )
};

export default AppContext;