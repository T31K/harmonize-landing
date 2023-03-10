import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

import { FaRust } from 'react-icons/fa';
import { SiElectron } from 'react-icons/si';
import { FiPackage } from 'react-icons/fi';
import { BsKeyboard } from 'react-icons/bs';
import IconBase from './IconBase';

function FeatureThree() {
  return (
    <section className="relative pb-[100px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="flex items-center justify-center">
              <h1 className="h2 mb-4 ml-[70px]">
                Lightweight.
                <br /> Lightning Fast.
              </h1>
              <img
                src="https://em-content.zobj.net/thumbs/120/apple/325/high-voltage_26a1.png"
                alt=""
                className="inline w-[70px]"
              />
            </div>
            <p className="text-xl text-gray-600">
              Ensuring your productivity never slows down , achieve more in less time.
            </p>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 lg:pr-4">
              <div className="h-[250px] custom-container my-3">
                <IconBase src="https://em-content.zobj.net/thumbs/120/apple/325/mechanical-arm_1f9be.png"></IconBase>
                <div className="text-lg font-semibold ml-1">Backed by Rust</div>
                <p className="ml-1 mt-4">
                  Built on top of Tauri with Rust, with performance and security at it's core.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-4/12 lg:pr-4">
              <div className="h-[250px] custom-container my-3">
                <IconBase src="https://em-content.zobj.net/thumbs/120/apple/325/atom-symbol_269b-fe0f.png"></IconBase>

                <div className="text-lg font-semibold ml-1">Bye, Electron!</div>
                <p className="ml-1 mt-4">
                  Say goodbye to bloated memory and large app file sizes. A simple app should stay simple.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-4/12 lg:pr-4">
              <div className="h-[250px] custom-container my-3">
                <IconBase src="https://em-content.zobj.net/thumbs/120/apple/325/balance-scale_2696-fe0f.png"></IconBase>
                <div className="text-lg font-semibold ml-1">Minimal dependency</div>
                <p className="ml-1 mt-4">
                  Developed with a minimalist approach, to deliver top-notch performance with without all the extra
                  baggage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureThree;
