import React, { useContext } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import SignInSignUpContext from './contexts/sign-in-sign-up-context';

import Homepage from './pages/home-page';
import Trips from './pages/trips-page';
import Contacts from './pages/support-page';
import SignIn from './pages/sign-in-page';
import SignUp from './pages/sign-up-page';
import TripPage from './components/trip-page';

import PageNotFound from './components/page-not-found';
import PageLayout from './pages/page-layout';

import './App.css';

function App() {
  const { signIn: { currentUser }} = useContext(SignInSignUpContext);

  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        {/* Default page component */}
        <Route index element={<Homepage />} />
        {/* Custom routes and their respective page components */}
        <Route path="trips">
          <Route index element={<Trips />} />
          <Route path=":tripId" element={<TripPage />} />
        </Route>
        <Route path="support" element={<Contacts />} />
        { 
          !currentUser && 
            <>
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
            </>
        }
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;