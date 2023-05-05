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
                <div className="invisible md:visible pl-5">
                  <Link
                    className="group relative inline-flex items-center overflow-hidden rounded-2xl py-4 pr-5 pl-[3.25rem] text-lg font-bold outline-none transition duration-300 focus:ring-[0.1875rem] focus:ring-purple-400 bg-stone-800 bg-opacity-5 hidden dark:hidden sm:flex"
                    to="/download"
                  >
                    <div className="ease absolute left-5 translate-x-0 opacity-100 transition duration-300 group-hover:-translate-x-full group-hover:opacity-0">
                      <svg
                        className="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19.37 7.648c-.114.088-2.11 1.213-2.11 3.715 0 2.894 2.54 3.918 2.616 3.944-.011.062-.403 1.402-1.34 2.767-.834 1.201-1.706 2.4-3.032 2.4s-1.667-.77-3.198-.77c-1.492 0-2.022.796-3.235.796-1.214 0-2.06-1.112-3.033-2.477C4.911 16.42 4 13.93 4 11.566c0-3.791 2.465-5.802 4.891-5.802 1.29 0 2.364.847 3.173.847.77 0 1.972-.897 3.438-.897.556 0 2.553.05 3.867 1.934Zm-4.564-3.54c.607-.719 1.036-1.718 1.036-2.716 0-.138-.012-.279-.037-.392-.987.037-2.161.657-2.87 1.478-.555.632-1.074 1.63-1.074 2.643 0 .152.026.304.037.353.063.011.164.025.266.025.885 0 1.998-.593 2.642-1.39Z"></path>
                      </svg>
                    </div>
                    <div className="ease translate-x-0 transition duration-300 group-hover:-translate-x-8">
                      Download for Mac
                    </div>
                    <div className="ease absolute right-5 translate-x-full opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      <svg
                        className="h-6 w-6 stroke-current stroke-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                      </svg>
                    </div>
                  </Link>
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
