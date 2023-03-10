import { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/hero-image.png';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              <span className="boost">Harmonize</span> <br />
              productivity{' '}
            </h1>
            <div className="max-w-3xl mx-auto mt-4">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Turbocharge your workflow with seamless music controls.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white border-2 bg-[#5cbc8b] hover:bg-[#5cbc8b] !capitalize hover:border-[#5cbc8b] w-full font-semibold mb-4 sm:w-auto sm:mb-0 rounded-xl"
                    href="#0"
                  >
                    Download for Mac
                  </a>
                </div>
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
                <div className="dialog">
                  <div className="searchContainer">
                    <input
                      placeholder="Search for your favourite songs, lyrics..."
                      className="searchBar"
                      spellCheck={false}
                      value={searchVal}
                      onChange={(e) => setSearchVal(e.target.value)}
                      autoFocus
                    />
                    <kbd className="!ml-4">cmd</kbd>
                    <kbd>/</kbd>
                  </div>
                  <div className="commandWrapper">
                    <div className="nowPlaying">
                      <div className="widget">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/en/d/dc/Justin_Bieber_and_Ariana_Grande_-_Stuck_with_You.png"
                          alt=""
                        />
                        <div className="currentTrack">
                          <h4>Stuck With You</h4>
                          <p>Ariana Grande</p>
                        </div>
                      </div>
                      <div className="controls">
                        <i className="ri-skip-back-fill"></i>
                        <i className={`ri-play-circle-fill`}></i>
                        <i className="ri-skip-forward-fill"></i>
                      </div>
                    </div>
                    <div className="content">
                      {/* {items.map((item, key) => {
                        return (
                          <div
                            className={activeIndex !== key ? 'option' : 'option active'}
                            // onClick={() => playSong(item)}
                          >
                            <div className="left">
                              <img
                                src={item?.album?.images[0]?.url}
                                key={key}
                                className="rounded-sm w-[30px] h-[30px] mr-3"
                                alt=""
                              />
                              <div>
                                <h4>{item.name.length > 36 ? item.name.substring(0, 35) + '...' : item.name}</h4>
                                <p>{item?.artists[0]?.name}</p>
                              </div>
                            </div>
                            <div className="shortcuts">
                              <kbd>⌘</kbd>
                              <kbd>{key + 1}</kbd>
                            </div>
                          </div>
                        );
                      })} */}
                    </div>
                  </div>
                  <div className="footer">
                    <div>
                      <kbd>Esc</kbd>
                      <p>Quit</p>
                    </div>
                    <div>
                      <kbd>cmd</kbd>
                      <kbd>/</kbd>
                      <p>Search</p>
                    </div>
                    <div>
                      <kbd>shift</kbd>
                      <kbd>enter</kbd>
                      <p>Queue</p>
                    </div>
                    <div>
                      <kbd>enter</kbd>
                      <p>Play</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
