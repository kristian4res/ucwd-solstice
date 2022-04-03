import Homepage from './pages/home-page';
import Navigation from './components/navigation';
import Footer from './components/footer';

import './App.css';

function App() {
  return (
    <div id="page-container" className="flex flex-col items-center min-h-screen relative">
      <Navigation />
      <main id="main-content" className='flex flex-col justify-evenly w-full'>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
