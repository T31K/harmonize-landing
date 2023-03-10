import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import { Emoji } from 'react-apple-emojis';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

import { FaRust } from 'react-icons/fa';
import { SiElectron } from 'react-icons/si';
import { FiPackage } from 'react-icons/fi';
import { BsKeyboard } from 'react-icons/bs';
import IconBase from './IconBase';

function FeatureOne() {
  return (
    <section className="relative pb-[100px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="flex justify-center">
              <h1 className="h2 mb-4">Sleek. Intuitive.</h1>
              <img
                src="https://em-content.zobj.net/thumbs/120/apple/325/artist-palette_1f3a8.png"
                className="w-[50px] h-[50px]"
                alt=""
              />
            </div>
            <p className="text-xl text-gray-600">
              Hand-crafted with meticulous attention to detail for the ultimate user experience.
            </p>
          </div>

          <div className="flex flex-wrap my-3">
            <div className="w-full lg:w-6/12 lg:pr-4">
              <div className=" custom-container my-3 ">
                <IconBase src="https://em-content.zobj.net/thumbs/120/apple/325/genie_1f9de.png"></IconBase>
                <div className="text-lg font-semibold ml-1">I summon you!</div>
                <p className="ml-1 mt-4">Seamlessly manage your music and keep the rhythm going, anywhere, anytime.</p>
                <div className="pl-1 mt-5"></div>
              </div>
            </div>

            <div className="w-full lg:w-6/12 lg:pr-4">
              <div className=" custom-container my-3 ">
                <IconBase src="https://em-content.zobj.net/thumbs/120/apple/325/eyes_1f440.png"></IconBase>
                <div className="text-lg font-semibold ml-1">Attention to detail</div>
                <p className="ml-1 mt-4">Deliberate placement of each element and styled with extreme care.</p>
                <div className="pl-1 mt-5"></div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-wrap my-3">
            <div className="w-full lg:w-8/12 lg:pr-4">
              <div className="h-48 lg:h-[50vh] p-3 custom-container">hello</div>
            </div>
            <div className="w-full lg:w-4/12">
              <div className="h-48 lg:h-[50vh] p-3 custom-container">
                <IconBase src="https://em-content.zobj.net/thumbs/120/apple/325/brain_1f9e0.png"></IconBase>

                <div className="text-lg font-semibold ml-1">Focus Up!</div>
                <p className="ml-1 mt-4">
                  Effortlessly type without worrying. Enjoy uninterrupted typing regardless of what you click.
                </p>
                <div className="pl-1 mt-5">
                  <div className="shortcut-container active">
                    <div className="w-[170px]">
                      <kbd className="kbd kbd-sm bg-gray-200">Tab</kbd>
                    </div>
                    <div className="w-[100px]"> Go Down</div>
                  </div>
                  <div className="shortcut-container">
                    <div className="w-[170px]">
                      <kbd className="kbd kbd-sm bg-gray-200">Shift</kbd>
                      <kbd className="kbd kbd-sm bg-gray-200">Tab</kbd>
                    </div>
                    <div className="w-[100px]"> Go Up</div>
                  </div>
                </div>
              </div>{' '}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default FeatureOne;
