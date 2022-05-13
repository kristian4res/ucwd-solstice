import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import AppContext from '../../contexts/app-context';
import TripPage from './trip-page';
import PageNotFound from '../../pages/page-not-found';


const TripCheckId = () => {
    /** CONTEXTS */
    const { devData: { trips }} = useContext(AppContext);

    /** HOOKS */
    const urlParams = useParams();

    const paramId = urlParams.tripId;
    const tripData = trips.find(trip => trip.tripId === paramId);
    
    return (
        <>
            {/* Check if TripId points to data, if not show 404 page */}
            {   
                tripData ?
                <TripPage
                    tripData={tripData}
                />
                : <PageNotFound />
            }
        </>
    )
}

export default TripCheckId