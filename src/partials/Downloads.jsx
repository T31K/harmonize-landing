import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';
import { Emoji } from 'react-apple-emojis';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

import { FaRust } from 'react-icons/fa';
import { SiElectron } from 'react-icons/si';
import { FiPackage } from 'react-icons/fi';
import { BsKeyboard } from 'react-icons/bs';
import { FaApple, FaLinux } from 'react-icons/fa';

import IconBase from './IconBase';

function Downloads() {
  return (
    <section className="relative pb-[100px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10 mt-24">
            <div className=" items-center justify-center">
              <h1 className="h2 mb-4 pr-5">Downloads</h1>
            </div>
            <p className="text-xl text-gray-600"></p>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 lg:pr-4">
              <div className="h-[250px] custom-container my-3">
                <FaApple className="fa-icon"></FaApple>
                <div className="text-lg font-semibold ml-1">Version 0.1.0-beta</div>
                <a
                  className="ml-1 mt-4 p-4 border-2 w-[150px] flex justify-center rounded-lg bg-gray-200 font-bold hover:cursor-pointer hover:bg-gray-300"
                  href="https://github.com/T31K/harmonize-beta-release/raw/master/harmonize_0.1.1-beta.dmg"
                >
                  Download
                </a>
              </div>
            </div>

            <div className="w-full lg:w-6/12 lg:pr-4">
              <div className="h-[250px] custom-container my-3 opacity-70">
                <FaLinux className="fa-icon"></FaLinux>

                <div className="text-lg font-semibold ml-1">Work In Progress</div>
                <p className="ml-1 mt-4">Working hard to get it cross platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Downloads;
