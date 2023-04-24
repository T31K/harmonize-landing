import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

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

            <div class="group flex flex-col items-center justify-center text-center">
              <svg
                class="mb-5 h-[4.5rem] w-[4.5rem] overflow-visible fill-current"
                viewBox="0 0 29 28"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M0 15C0 19.5703 2.49609 21.668 7.89844 21.8086C7.79297 21.2812 7.73438 20.6953 7.72266 20.0859C3.43359 19.9102 1.72266 18.2461 1.72266 14.8242V7.01953C1.72266 6.08203 1.88672 5.21484 2.27344 4.46484C3.55078 5.47266 6.08203 5.91797 8.89453 5.89453C9.29297 5.16797 9.75 4.41797 10.0078 4.10156C9.84375 4.125 9.21094 4.18359 8.55469 4.18359C5.90625 4.18359 3.23438 3.42188 2.21484 2.51953C1.91016 2.26172 1.5 2.28516 1.24219 2.61328C0.480469 3.5625 0 4.92188 0 6.91406V15ZM18.7383 27.3281C25.1953 27.3281 28.1602 25.0312 28.1602 19.8047V10.8867C28.1602 8.68359 27.6328 7.19531 26.8008 6.14062C26.5195 5.78906 26.0742 5.76562 25.7227 6.04688C24.6094 7.03125 21.668 7.875 18.7383 7.875C15.7969 7.875 12.8672 7.03125 11.7422 6.04688C11.3906 5.76562 10.9453 5.78906 10.6641 6.14062C9.83203 7.19531 9.30469 8.68359 9.30469 10.8867V19.8047C9.30469 25.0312 12.2695 27.3281 18.7383 27.3281ZM18.7383 25.4414C13.3125 25.4414 11.1914 23.625 11.1914 19.6172V10.9922C11.1914 9.96094 11.3672 9 11.8008 8.16797C13.1953 9.25781 15.832 9.76172 18.7383 9.76172C21.6328 9.76172 24.2695 9.25781 25.6641 8.16797C26.0977 9 26.2734 9.96094 26.2734 10.9922V19.6172C26.2734 23.625 24.1523 25.4414 18.7383 25.4414Z"></path>
                <path
                  class="origin-center transition duration-300 group-hover:-translate-y-0.5"
                  d="M18.7383 6.26953C21.7383 6.26953 24.1523 5.61328 24.1523 4.76953C24.1523 3.90234 21.7383 3.25781 18.7383 3.25781C15.7266 3.25781 13.3125 3.90234 13.3125 4.76953C13.3125 5.61328 15.7266 6.26953 18.7383 6.26953Z"
                ></path>
                <path
                  class="origin-center transition duration-300 group-hover:-translate-y-0.5 group-hover:delay-150"
                  d="M13.4766 1.37109C13.4766 2.14453 11.2852 2.73047 8.55469 2.73047C5.82422 2.73047 3.63281 2.14453 3.63281 1.37109C3.63281 0.585938 5.82422 0 8.55469 0C11.2852 0 13.4766 0.585938 13.4766 1.37109Z"
                ></path>
              </svg>
              <h2 class="text-3xl font-bold">
                High fidelity
                <br />
                sound
              </h2>
            </div>
            <div class="group flex flex-col items-center justify-center text-center">
              <svg
                class="mb-5 h-[4.5rem] w-[4.5rem] overflow-visible fill-current"
                viewBox="0 0 29 28"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M0 15C0 19.5703 2.49609 21.668 7.89844 21.8086C7.79297 21.2812 7.73438 20.6953 7.72266 20.0859C3.43359 19.9102 1.72266 18.2461 1.72266 14.8242V7.01953C1.72266 6.08203 1.88672 5.21484 2.27344 4.46484C3.55078 5.47266 6.08203 5.91797 8.89453 5.89453C9.29297 5.16797 9.75 4.41797 10.0078 4.10156C9.84375 4.125 9.21094 4.18359 8.55469 4.18359C5.90625 4.18359 3.23438 3.42188 2.21484 2.51953C1.91016 2.26172 1.5 2.28516 1.24219 2.61328C0.480469 3.5625 0 4.92188 0 6.91406V15ZM18.7383 27.3281C25.1953 27.3281 28.1602 25.0312 28.1602 19.8047V10.8867C28.1602 8.68359 27.6328 7.19531 26.8008 6.14062C26.5195 5.78906 26.0742 5.76562 25.7227 6.04688C24.6094 7.03125 21.668 7.875 18.7383 7.875C15.7969 7.875 12.8672 7.03125 11.7422 6.04688C11.3906 5.76562 10.9453 5.78906 10.6641 6.14062C9.83203 7.19531 9.30469 8.68359 9.30469 10.8867V19.8047C9.30469 25.0312 12.2695 27.3281 18.7383 27.3281ZM18.7383 25.4414C13.3125 25.4414 11.1914 23.625 11.1914 19.6172V10.9922C11.1914 9.96094 11.3672 9 11.8008 8.16797C13.1953 9.25781 15.832 9.76172 18.7383 9.76172C21.6328 9.76172 24.2695 9.25781 25.6641 8.16797C26.0977 9 26.2734 9.96094 26.2734 10.9922V19.6172C26.2734 23.625 24.1523 25.4414 18.7383 25.4414Z"></path>
                <path
                  class="origin-center transition duration-300 group-hover:-translate-y-0.5"
                  d="M18.7383 6.26953C21.7383 6.26953 24.1523 5.61328 24.1523 4.76953C24.1523 3.90234 21.7383 3.25781 18.7383 3.25781C15.7266 3.25781 13.3125 3.90234 13.3125 4.76953C13.3125 5.61328 15.7266 6.26953 18.7383 6.26953Z"
                ></path>
                <path
                  class="origin-center transition duration-300 group-hover:-translate-y-0.5 group-hover:delay-150"
                  d="M13.4766 1.37109C13.4766 2.14453 11.2852 2.73047 8.55469 2.73047C5.82422 2.73047 3.63281 2.14453 3.63281 1.37109C3.63281 0.585938 5.82422 0 8.55469 0C11.2852 0 13.4766 0.585938 13.4766 1.37109Z"
                ></path>
              </svg>
              <h2 class="text-3xl font-bold">
                High fidelity
                <br />
                sound
              </h2>
            </div>
            <div class="group flex flex-col items-center justify-center text-center">
              <svg
                class="mb-5 h-[4.5rem] w-[4.5rem] overflow-visible fill-current"
                viewBox="0 0 29 28"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M0 15C0 19.5703 2.49609 21.668 7.89844 21.8086C7.79297 21.2812 7.73438 20.6953 7.72266 20.0859C3.43359 19.9102 1.72266 18.2461 1.72266 14.8242V7.01953C1.72266 6.08203 1.88672 5.21484 2.27344 4.46484C3.55078 5.47266 6.08203 5.91797 8.89453 5.89453C9.29297 5.16797 9.75 4.41797 10.0078 4.10156C9.84375 4.125 9.21094 4.18359 8.55469 4.18359C5.90625 4.18359 3.23438 3.42188 2.21484 2.51953C1.91016 2.26172 1.5 2.28516 1.24219 2.61328C0.480469 3.5625 0 4.92188 0 6.91406V15ZM18.7383 27.3281C25.1953 27.3281 28.1602 25.0312 28.1602 19.8047V10.8867C28.1602 8.68359 27.6328 7.19531 26.8008 6.14062C26.5195 5.78906 26.0742 5.76562 25.7227 6.04688C24.6094 7.03125 21.668 7.875 18.7383 7.875C15.7969 7.875 12.8672 7.03125 11.7422 6.04688C11.3906 5.76562 10.9453 5.78906 10.6641 6.14062C9.83203 7.19531 9.30469 8.68359 9.30469 10.8867V19.8047C9.30469 25.0312 12.2695 27.3281 18.7383 27.3281ZM18.7383 25.4414C13.3125 25.4414 11.1914 23.625 11.1914 19.6172V10.9922C11.1914 9.96094 11.3672 9 11.8008 8.16797C13.1953 9.25781 15.832 9.76172 18.7383 9.76172C21.6328 9.76172 24.2695 9.25781 25.6641 8.16797C26.0977 9 26.2734 9.96094 26.2734 10.9922V19.6172C26.2734 23.625 24.1523 25.4414 18.7383 25.4414Z"></path>
                <path
                  class="origin-center transition duration-300 group-hover:-translate-y-0.5"
                  d="M18.7383 6.26953C21.7383 6.26953 24.1523 5.61328 24.1523 4.76953C24.1523 3.90234 21.7383 3.25781 18.7383 3.25781C15.7266 3.25781 13.3125 3.90234 13.3125 4.76953C13.3125 5.61328 15.7266 6.26953 18.7383 6.26953Z"
                ></path>
                <path
                  class="origin-center transition duration-300 group-hover:-translate-y-0.5 group-hover:delay-150"
                  d="M13.4766 1.37109C13.4766 2.14453 11.2852 2.73047 8.55469 2.73047C5.82422 2.73047 3.63281 2.14453 3.63281 1.37109C3.63281 0.585938 5.82422 0 8.55469 0C11.2852 0 13.4766 0.585938 13.4766 1.37109Z"
                ></path>
              </svg>
              <h2 class="text-3xl font-bold">
                High fidelity
                <br />
                sound
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureThree;
