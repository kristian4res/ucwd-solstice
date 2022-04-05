import Navigation from './components/navigation';
import Hero from './components/hero';
import Footer from './components/footer';

import Homepage from './pages/home-page';

import './App.css';

function App() {
  return (
    <div id="page-container" className="flex flex-col items-center min-h-screen relative font-poppins overflow-x-hidden">
      <Navigation />
      <Hero />
      <main id="main-content" className='flex flex-col justify-evenly w-full'>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
