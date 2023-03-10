import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo_sq.png';
import LogoRect from '../images/logo_rect.svg';

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-white backdrop-blur-sm shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6  hidden md:block ">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 mr-4  ">
            <Link
              to="/"
              className="block"
              aria-label="Harmonize"
            >
              <img
                src={Logo}
                className="w-[45px]"
                alt=""
              />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <div className="invisible md:visible">
                  <a
                    className="btn bg-white border-2 border-gray-300 text-gray-300 hover:border-[#5cbc8b] hover:bg-white !capitalize font-semibold w-full mb-4 sm:w-auto sm:mb-0 rounded-xl  "
                    href="#0"
                  >
                    Coming Soon
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex justify-center block md:hidden">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex md:hidden">
            <Link
              to="/"
              className="block"
              aria-label="Harmonize"
            >
              <img
                src={LogoRect}
                className="w-[200px]"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
