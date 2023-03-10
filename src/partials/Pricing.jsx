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
              <h1 className="h2 mb-4 mr-[20px] ml-[30px]">Pricing</h1>
              <img
                src="https://em-content.zobj.net/thumbs/120/apple/325/artist-palette_1f3a8.png"
                className="w-[50px] h-[50px] "
                alt=""
              />
            </div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
            <div className="shadow p-5 rounded-lg border-t-4 border-gray-200 bg-white">
              <p className="uppercase text-sm font-medium text-gray-500">free</p>

              <p className="mt-4 text-3xl text-gray-700 font-medium">
                Free <span className="text-base font-normal"></span>
              </p>

              <p className="mt-4 font-medium text-gray-700 invisible">One time payment</p>

              <div className="mt-8">
                <ul className="grid grid-cols-1 gap-4">
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-green-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Search tracks
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Search albums
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Search playlists
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Search podcasts
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Custom color scheme
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-yellow-300"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Requests slows down if high volume
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <button className="bg-gray-400 hover:bg-gray-500 px-3 py-2 cursor-default font-semibold rounded-lg w-full text-white">
                  Free
                </button>
              </div>
            </div>

            <div className="shadow p-5 rounded-lg border-t-4 border-green-400 bg-white">
              <p className="uppercase text-sm font-medium text-gray-500">Pro</p>

              <p className="mt-4 text-3xl text-gray-700 font-medium">
                $49 <span className="text-base font-normal"></span>
              </p>

              <p className="mt-4 font-medium text-gray-700">One time payment</p>

              <div className="mt-8">
                <ul className="grid grid-cols-1 gap-4">
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Search tracks
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Search albums
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Search playlists
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Search podcasts
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Custom color scheme
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Unlimited usage
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <button className="bg-[#5cbc8b] hover:bg-gray-500 px-3 py-2 font-semibold rounded-lg w-full text-white">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureOne;
