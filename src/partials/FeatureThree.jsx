import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

import IconBase from './IconBase';
import { FiMonitor } from 'react-icons/fi';
import LeftGif from '../images/left.gif';
import RightGif from '../images/right.gif';

function FeatureThree() {
  return (
    <section className="relative pb-[100px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <FiMonitor className="text-7xl inline-block text-center mb-3" />
            <FiMonitor className="text-7xl inline-block text-center mb-3" />
            <div className="flex items-center justify-center">
              <h1 className="h2 mb-4 ">Two is better than one</h1>
            </div>
            <p className="text-xl text-gray-600">Detects which monitor you’re on, so you don't have to.</p>
          </div>

          <div className="flex gap-3">
            <img
              src={LeftGif}
              className="!w-[50%] rounded-2xl "
              alt=""
            />
            <img
              src={RightGif}
              className="!w-[50%] rounded-2xl "
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureThree;
