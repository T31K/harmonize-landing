import React, { useState, useRef } from 'react';
import FullscreenGif from '../images/fullscreen.gif';
import { SlEyeglass, SlMusicTone } from 'react-icons/sl';
import { RiUserHeartFill, RiMusic2Fill, RiRocket2Fill } from 'react-icons/ri';

import { MdAutoGraph } from 'react-icons/md';
import Search from '../images/search.png';
import Footer from '../images/footer.png';
import NowPlaying from '../images/nowplaying.png';
import Queue from '../images/queue.png';
import Library from '../images/library.png';

import Check from './Check';
function FeatureOne() {
  const videoRef = useRef(null);
  const [videoControls, setVideoControls] = useState(true);
  const playVideo = () => {
    setVideoControls(false);
    videoRef.current.play();
  };

  return (
    <section className="relative pb-[100px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <MdAutoGraph className="text-7xl inline-block text-center mb-3" />
            <div className="flex justify-center">
              <h1 className="h2 mb-4 mr-5 ">Why not Raycast or Alfred? </h1>
            </div>
            <p className="text-xl text-gray-600">Your search for an alternative ends here.</p>
          </div>

          <div className="hidden md:flex justify-center gap-2 mb-[100px]">
            <div className="flex items-center custom-container !py-1 !px-4 !rounded-xl gap-1">
              <RiMusic2Fill className="text-4xl inline-block text-center bg-gray-200 p-2  rounded-xl" />
              <div>Dedicated Music Controls</div>
            </div>
            <div className="flex items-center custom-container !py-1 !px-4 !rounded-xl gap-1">
              <RiUserHeartFill className="text-4xl inline-block text-center bg-gray-200 p-2  rounded-xl" />
              <div>Power UX for Power Users</div>
            </div>
            <div className="flex items-center custom-container !py-1 !px-4 !rounded-xl gap-1">
              <RiRocket2Fill className="text-4xl inline-block text-center bg-gray-200 p-2  rounded-xl" />
              <div>More Robust Features </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="custom-container col-6">
              <RiMusic2Fill className="text-4xl inline-block text-center bg-gray-200 p-2 mb-3 rounded-xl" />
              <div className="text-xl font-semibold">Dedicated Music Controls</div>
              <div className="flex flex-col gap-4">
                <div className="mt-3">Built specifically for</div>
                <div class="flex flex-col items-start">
                  <div className="flex">
                    <Check />
                    <p>Power Users</p>
                  </div>
                  <div className="flex">
                    <Check />
                    <p>Music Enthusiasts </p>
                  </div>
                </div>
                <p>By focusing solely on music control, Harmonize's UI is purpose-built for music and music alone.</p>

                <p className="mt-4">
                  Unlike Raycast & Alfred, where music control is just a small part of a third-party integration.
                </p>
              </div>
            </div>
            <div className="custom-container">
              <img
                src={NowPlaying}
                alt=""
                className="rounded-[18px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-[50px]">
            <div className="custom-container col-6 md:order-last">
              <RiUserHeartFill className="text-4xl inline-block text-center bg-gray-200 p-2 mb-3 rounded-xl" />
              <div className="text-xl font-semibold">Power UX for Power Users </div>
              <div className="flex flex-col gap-4">
                <div class="flex flex-col items-start mt-3">
                  <div className="flex">
                    <Check />
                    <p>Omnipresent Search</p>
                  </div>
                </div>
                <p>Regardless of where you are within the app, simply start typing to search</p>
                <p>
                  This stands in contrast to Raycast/Afred's approach, where users have to search for "search songs" and
                  then enter before starting their search.{' '}
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <div class="flex flex-col items-start mt-3">
                  <div className="flex">
                    <Check />
                    <p>Streamlined Keyboard Shortcuts</p>
                  </div>
                </div>
                <p>
                  With Harmonize, all actions are laid out upfront. This eliminates the need for repetitive & additional
                  keystrokes quick access to desired actions.{' '}
                </p>
                <p>
                  Unlike Raycast/Alfred, where users may sometimes have to press enter multiple times to navigate
                  through options and reach their desired action.
                </p>
              </div>
            </div>
            <div className="custom-container">
              <div className="h-[400px] flex items-center">
                <img
                  src={Search}
                  alt=""
                  className="rounded-[18px]"
                />
              </div>
              <img
                src={Footer}
                alt=""
                className="rounded-[10px] mt-[50px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-2 mt-[50px]">
            <div className="custom-container mb-5">
              <div className="flex items-center gap-4 justify-between pr-0 md:pr-[5.5rem]">
                <div>
                  <RiRocket2Fill className="text-4xl inline-block text-center bg-gray-200 p-2 mb-3 rounded-xl" />
                  <div className="text-xl font-semibold">More Robust Features</div>
                </div>
                <div>
                  <div className="flex">
                    <Check />
                    <p> Library Page </p>
                  </div>
                  <div className="flex">
                    <Check />
                    <p>View Song Queue </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="custom-container">
              <img
                src={Library}
                alt=""
                className="rounded-[18px]"
              />
            </div>
            <div className="custom-container">
              <img
                src={Queue}
                alt=""
                className="rounded-[18px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureOne;
