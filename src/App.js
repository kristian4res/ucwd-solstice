import React, { useContext } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import SignInSignUpContext from './contexts/sign-in-sign-up-context';

import Homepage from './pages/home-page';
import Explore from './pages/explore-page';
import Contacts from './pages/support-page';
import SignIn from './pages/sign-in-page';
import SignUp from './pages/sign-up-page';

import PageNotFound from './components/page-not-found';
import PageLayout from './pages/page-layout';

import './App.css';

function App() {
  const { signIn: { currentUser }} = useContext(SignInSignUpContext);

  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Homepage />} />
        <Route path="explore" element={<Explore />} />
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