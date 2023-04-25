import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';
import Premiums from './Premiums';

function Premium() {
  return (
    <>
      <main className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <div className="flex-grow">
          <Premiums />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Premium;
