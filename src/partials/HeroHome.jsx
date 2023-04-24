import { useState } from 'react';
import Modal from '../utils/Modal';
import { Link } from 'react-router-dom';

import HeroGif from '../images/hero.gif';
import { MdDownloadForOffline, MdRocketLaunch } from 'react-icons/md';
function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center md:pb-16">
            <h1
              className="text-5xl md:text-6xl !text-gray-900 font-bold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <mark className="bg-transparent !font-black text-gray-900 shadow-[inset_0_-0.35em_0_0_rgb(27,170,107)]">
                Turbocharged
              </mark>
              <br />
              music controls
            </h1>
            <div className="max-w-3xl mx-auto mt-4">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                A beautifully designed app for music at your fingertips <br /> from anywhere, at anytime.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <Link
                  to="/beta_download"
                  className="group relative inline-flex items-center overflow-hidden rounded-2xl hover:bg-[#1baa6b] py-4 pr-5 pl-[3.25rem] text-lg font-bold outline-none transition duration-300 focus:ring-[0.1875rem] focus:ring-purple-400 bg-stone-800 text-orange-50 shadow-2xl shadow-stone-800/30"
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
              <div className="mt-5 font-medium flex items-center justify-center ">
                <span className="font-medium flex items-center mr-3">
                  37 Downloads
                  <MdDownloadForOffline className="text-xl " />
                </span>
                <span className="font-medium flex items-center">
                  9 Subscribers
                  <MdRocketLaunch className="text-xl " />
                </span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center">
                <img
                  src={HeroGif}
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
