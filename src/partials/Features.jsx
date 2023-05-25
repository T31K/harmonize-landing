import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

import { FaRust } from 'react-icons/fa';
import { SiElectron } from 'react-icons/si';
import { FiPackage } from 'react-icons/fi';
import { BsKeyboard } from 'react-icons/bs';

import FeatureOne from './FeatureOne.jsx';
import FeatureTwo from './FeatureTwo.jsx';
import FeatureThree from './FeatureThree.jsx';
import FeatureFour from './FeatureFour.jsx';
import FAQ from './FAQ.jsx';
import Testimonial from './Testimonial.jsx';
import Pricing from './Pricing.jsx';
import Contact from './Contact.jsx';

function Features() {
  return (
    <>
      <Testimonial />
      {/* <FeatureTwo /> */}
      <FeatureOne />
      <FeatureThree />
      <FeatureFour />
      <FAQ />
      <Pricing />
      <Contact />
    </>
  );
}

export default Features;
