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

        <Link to="/premium">
          <div className="fixed-button  bg-green-100">
            <MdRocketLaunch className="text-center mb-3 mr-3" />
            <div class="text-sm font-medium mr-3">Product Hunt Launch (30% off)</div>
            <MdRocketLaunch className="text-center mb-3" />
          </div>
        </Link>
      </main>
    </>
  );
}

export default Home;
