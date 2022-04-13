import {
  Routes,
  Route
} from 'react-router-dom';

import Homepage from './routes/home-page';
import Explore from './routes/explore-page';
import Contacts from './routes/support-page';
import SignIn from './routes/sign-in-page';
import SignUp from './routes/sign-up-page';

import Navigation from './components/navigation';
import Hero from './components/hero';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen relative font-poppins overflow-x-hidden">
      <Navigation />
      <main id="main-content" className='flex flex-col justify-evenly w-full'>
        <Routes>
          <Route exact path="/" element={
            <>
              <Hero />
              <Homepage />
            </>
          }/>
          <Route exact path="/explore" element={<Explore />}/>
          <Route exact path="/support" element={<Contacts />}/>
          <Route exact path="/signin" element={<SignIn />}/>
          <Route exact path="/signup" element={<SignUp />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
