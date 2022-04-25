import React from 'react';
import { Outlet } from 'react-router-dom';


import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Modal from '../components/modal';

function PageLayout() {

  return (
    <div className="flex flex-col items-center min-h-screen relative font-poppins overflow-x-hidden">
      <Navigation />
      <main id="main-content" className='flex flex-col justify-evenly w-full m-h-screen'>
        {/* Renders the component associated with a route */}
        <Outlet />
      </main>
      <Footer />
      <Modal />
    </div>
  );
}

export default PageLayout;
