import { Toaster, toast } from 'sonner';
import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';
import { MdRocketLaunch } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen overflow-hidden">
        <Toaster
          richColors
          position="top-center"
        />
        <Header />
        <div className="flex-grow">
          <HeroHome />
          <FeaturesHome />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Home;
