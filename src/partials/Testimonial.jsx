import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';
import Senja from './Senja.jsx';

import IconBase from './IconBase';
import { SiRust } from 'react-icons/si';
import { BsFillBalloonHeartFill } from 'react-icons/bs';
import { TbRadioactiveFilled, TbPackageOff } from 'react-icons/tb';
import { MdScience } from 'react-icons/md';
import {
  BsFillHddStackFill,
  BsKeyboardFill,
  BsFillLightningChargeFill,
  BsPaletteFill,
  BsFillChatHeartFill,
} from 'react-icons/bs';
function Testimonial() {
  return (
    <section className="relative pb-[100px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <BsFillBalloonHeartFill className="text-7xl hover:text-green-300 inline-block text-center mb-3" />
            <div className="flex items-center justify-center">
              <h1 className="h2 mb-4">Why People Love Us </h1>
            </div>
            {/* <p className="text-xl text-gray-600">Our users love Harmonize. </p> */}
          </div>

          <div className="flex flex-wrap">
            <div className="w-full">
              <Senja />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
