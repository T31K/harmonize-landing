import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

import IconBase from './IconBase';
import { SiRust } from 'react-icons/si';
import { TbRadioactiveFilled, TbPackageOff } from 'react-icons/tb';
import { MdScience } from 'react-icons/md';
import {
  BsFillHddStackFill,
  BsKeyboardFill,
  BsFillLightningChargeFill,
  BsPaletteFill,
  BsFillChatHeartFill,
} from 'react-icons/bs';
function FeatureThree() {
  return (
    <section className="relative pb-[100px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <MdScience className="text-7xl inline-block text-center mb-3" />
            <div className="flex items-center justify-center">
              <h1 className="h2 mb-4">Feature-Packed</h1>
            </div>
            <p className="text-xl text-gray-600">Transform your workflow with the recipe for success. </p>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-3/12 lg:pr-4">
              <div className="h-[300px] custom-container-alt my-3">
                <SiRust className="text-8xl inline-block text-center mb-3 text-center" />
                <div className="text-2xl text-center font-semibold ml-1">Backed by Rust</div>
              </div>
            </div>

            <div className="w-full lg:w-3/12 lg:pr-4">
              <div className="h-[300px] custom-container-alt my-3">
                <TbRadioactiveFilled className="text-8xl inline-block text-center mb-3 text-center" />
                <div className="text-2xl text-center font-semibold ml-1">Bye, Electron!</div>
              </div>
            </div>

            <div className="w-full lg:w-3/12 lg:pr-4">
              <div className="h-[300px] custom-container-alt my-3">
                <TbPackageOff className="text-8xl inline-block text-center mb-3 text-center" />
                <div className="text-2xl text-center font-semibold ml-1">Minimal Dependency</div>
              </div>
            </div>

            <div className="w-full lg:w-3/12 lg:pr-4">
              <div className="h-[300px] custom-container-alt my-3">
                <BsFillHddStackFill className="text-8xl inline-block text-center mb-3 text-center" />
                <div className="text-2xl text-center font-semibold ml-1">Menubar Resident</div>
              </div>
            </div>

            <div className="w-full lg:w-3/12 lg:pr-4">
              <div className="h-[300px] custom-container-alt my-3">
                <BsKeyboardFill className="text-8xl inline-block text-center mb-3 text-center" />
                <div className="text-2xl text-center font-semibold ml-1">Keyboard Wizardry</div>
              </div>
            </div>

            <div className="w-full lg:w-3/12 lg:pr-4">
              <div className="h-[300px] custom-container-alt my-3">
                <BsFillLightningChargeFill className="text-8xl inline-block text-center mb-3 text-center" />
                <div className="text-2xl text-center font-semibold ml-1">Blazing Fast</div>
              </div>
            </div>

            <div className="w-full lg:w-3/12 lg:pr-4">
              <div className="h-[300px] custom-container-alt my-3">
                <BsPaletteFill className="text-8xl inline-block text-center mb-3 text-center" />
                <div className="text-2xl text-center font-semibold ml-1">Beautifully Crafted</div>
              </div>
            </div>

            <div className="w-full lg:w-3/12 lg:pr-4">
              <div className="h-[300px] custom-container-alt my-3">
                <BsFillChatHeartFill className="text-8xl inline-block text-center mb-3 text-center" />
                <div className="text-2xl text-center font-semibold ml-1">Passion Project</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureThree;
