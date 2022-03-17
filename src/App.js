import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Explore from './pages/explore/explore';
import FAQ from './pages/faq/faq';
import Checkout from './pages/checkout/checkout';
import Support from './pages/support/support';
import SignIn from './pages/signin/signin';
import SignUp from './pages/signup/signup';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Welcome to Solstice!
      </h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/support" element={<Support />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;