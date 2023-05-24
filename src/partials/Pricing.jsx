import { Link } from 'react-router-dom';
import { FaMoneyBillWave } from 'react-icons/fa';
import { useState } from 'react';

import Check from './Check.jsx';

function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="relative pb-[100px]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8 md:pb-8">
            <FaMoneyBillWave className="text-7xl hover:text-green-300 inline-block text-center mb-3" />
            <div className="flex justify-center">
              <h1 className="h2 mb-4">Pricing</h1>
            </div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto hidden md:flex md:justify-center">
            <div className="custom-container opacity-[85%]">
              <p className="uppercase text-sm font-medium text-gray-400">Pro</p>

              <p className="mt-4 text-4xl text-gray-500 font-medium">
                <div className="price-wrapper">
                  {/* <div className="price-slash"></div> */}
                  <div className="price text-4xl font-bold">$0</div>
                </div>
                {/* <span className="price ml-3">$29</span> */}
              </p>

              <p className="mt-4 font-medium text-gray-600">Free to use</p>

              <div className="mt-8">
                <ul className="grid grid-cols-1 gap-4">
                  <li className="inline-flex items-center text-gray-700 font-semibold">General Controls</li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Play/pause track
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Previous/next track
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Toggle shuffle/repeat
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Start Radio
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Like current song
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check disable />
                    Song change notification
                  </li>
                  <li className="inline-flex items-center text-gray-700 font-semibold mt-2">Queue tab</li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check disable />
                    View song queue
                  </li>
                  <li className="inline-flex items-center text-gray-700 font-semibold mt-2">Now Playing tab</li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check disable />
                    Dedicated Now Playing page
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check disable />
                    Dedicated playback controls
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check disable />
                    Progress bar
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check disable />
                    Precise playback seeking
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check disable />
                    Volume bar
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check disable />
                    Precise volume seeking
                  </li>
                  <li className="inline-flex items-center text-gray-700 font-semibold mt-2">Search tab</li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Tracks/album/playlists
                  </li>
                  <li className="inline-flex items-center text-gray-700 font-semibold mt-2">Library tab</li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Saved tracks/album/playlists
                  </li>
                </ul>
              </div>

              <div className="mt-8 invisible">
                <div className="text-gray-700 font-semibold text-center mt-5 mb-3">Upgrade Now</div>
                <div className="flex gap-1">
                  <a
                    target="_blank"
                    href="https://buy.stripe.com/4gw8yzcge4OUc9idQU"
                    className="bg-[#4f3bf8] hover:bg-gray-500 px-4 py-3 font-semibold rounded-xl flex items-center whitespace-nowrap !text-sm text-center w-[100%] text-white justify-center"
                  >
                    Stripe
                  </a>
                  <a
                    target="_blank"
                    href="https://buy.stripe.com/4gw8yzcge4OUc9idQU"
                    className="bg-[#f0ac26] hover:bg-gray-500 px-4 py-3 font-semibold rounded-xl flex items-center whitespace-nowrap !text-sm text-center w-[100%] text-white justify-center"
                  >
                    Lemon Squeezy
                  </a>
                </div>
              </div>
            </div>

            <div className="custom-container border-2">
              <p className="uppercase text-sm font-medium text-gray-500">Pro</p>

              <p className="mt-4 text-4xl text-gray-700 font-medium">
                <div className="price-wrapper">
                  {/* <div className="price-slash"></div> */}
                  <div className="price text-4xl font-bold">$9.99</div>
                </div>
                {/* <span className="price ml-3">$29</span> */}
              </p>

              <p className="mt-4 font-medium text-gray-700">One time payment</p>

              <div className="mt-8">
                <ul className="grid grid-cols-1 gap-4">
                  <li className="inline-flex items-center text-gray-900 font-semibold">General Controls</li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Play/pause track
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Previous/next track
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Toggle shuffle/repeat
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Start Radio
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Like current song
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Song change notification
                  </li>
                  <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Queue tab</li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    View song queue
                  </li>
                  <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Now Playing tab</li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Dedicated Now Playing page
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Dedicated playback controls
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Progress bar
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Precise playback seeking
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Volume bar
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Precise volume seeking
                  </li>
                  <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Search tab</li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Tracks/album/playlists
                  </li>
                  <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Library tab</li>
                  <li className="inline-flex items-center text-gray-600">
                    <Check />
                    Saved tracks/album/playlists
                  </li>
                </ul>
              </div>

              <div className="mt-8 ">
                <div className="text-gray-700 font-semibold text-center mt-5 mb-3">Upgrade Now</div>
                <div className="flex gap-1">
                  <a
                    target="_blank"
                    href="https://buy.stripe.com/4gw8yzcge4OUc9idQU"
                    className="bg-[#4f3bf8] hover:bg-gray-500 px-4 py-3 font-semibold rounded-xl flex items-center whitespace-nowrap !text-sm text-center w-[100%] text-white justify-center"
                  >
                    Stripe
                  </a>
                  <a
                    target="_blank"
                    href="https://buy.stripe.com/4gw8yzcge4OUc9idQU"
                    className="bg-[#f0ac26] hover:bg-gray-500 px-4 py-3 font-semibold rounded-xl flex items-center whitespace-nowrap !text-sm text-center w-[100%] text-white justify-center"
                  >
                    Lemon Squeezy
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 mx-auto flex md:hidden">
            <div className="flex justify-around">
              <p
                className={`custom-container-tab  text-sm font-medium text-gray-500 !text-xl border-1 ${
                  activeTab === 0 ? '!border-b-0 text-green-500' : ''
                } pt-3 bg-[#fafafa] w-full`}
                onClick={() => setActiveTab(0)}
              >
                Free
              </p>
              <p className=" custom-container-tab-between text-sm font-medium text-gray-400 !text-xl border-1 pt-3 bg-[#fafafa] w-[30px] "></p>
              <p
                className={`custom-container-tab  text-sm font-semibold text-gray-500 !text-xl border-1 ${
                  activeTab === 1 ? '!border-b-0 text-green-500' : ''
                } pt-3 bg-[#fafafa] w-full`}
                onClick={() => setActiveTab(1)}
              >
                Premium
              </p>
            </div>
            {activeTab === 0 ? (
              <div className="custom-container-mobile opacity-[85%]">
                <p className="mt-4 text-4xl text-gray-500 font-medium">
                  <div className="price-wrapper">
                    {/* <div className="price-slash"></div> */}
                    <div className="price text-4xl font-bold">$0</div>
                  </div>
                  {/* <span className="price ml-3">$29</span> */}
                </p>

                <p className="mt-4 font-medium text-gray-600">Free to use</p>

                <div className="mt-8">
                  <ul className="grid grid-cols-1 gap-4">
                    <li className="inline-flex items-center text-gray-700 font-semibold">General Controls</li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Play/pause track
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Previous/next track
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Toggle shuffle/repeat
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Start Radio
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Like current song
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check disable />
                      Song change notification
                    </li>
                    <li className="inline-flex items-center text-gray-700 font-semibold mt-2">Queue tab</li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check disable />
                      View song queue
                    </li>
                    <li className="inline-flex items-center text-gray-700 font-semibold mt-2">Now Playing tab</li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check disable />
                      Dedicated Now Playing page
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check disable />
                      Dedicated playback controls
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check disable />
                      Progress bar
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check disable />
                      Precise playback seeking
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check disable />
                      Volume bar
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check disable />
                      Precise volume seeking
                    </li>
                    <li className="inline-flex items-center text-gray-700 font-semibold mt-2">Search tab</li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Tracks/album/playlists
                    </li>
                    <li className="inline-flex items-center text-gray-700 font-semibold mt-2">Library tab</li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Saved tracks/album/playlists
                    </li>
                  </ul>
                </div>

                <div className="mt-8 invisble ">
                  <div className="text-gray-700 font-semibold text-center mt-5 mb-3">Upgrade Now</div>
                  <div className="flex gap-1">
                    <a
                      target="_blank"
                      href="https://buy.stripe.com/4gw8yzcge4OUc9idQU"
                      className="bg-[#4f3bf8] hover:bg-gray-500 px-4 py-3 font-semibold rounded-xl flex items-center whitespace-nowrap !text-sm text-center w-[100%] text-white justify-center"
                    >
                      Stripe
                    </a>
                    <a
                      target="_blank"
                      href="https://buy.stripe.com/4gw8yzcge4OUc9idQU"
                      className="bg-[#f0ac26] hover:bg-gray-500 px-4 py-3 font-semibold rounded-xl flex items-center whitespace-nowrap !text-sm text-center w-[100%] text-white justify-center"
                    >
                      Lemon Squeezy
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="custom-container-mobile ">
                <p className="mt-4 text-4xl text-gray-700 font-medium">
                  <div className="price-wrapper">
                    {/* <div className="price-slash"></div> */}
                    <div className="price text-4xl font-bold">$9.99</div>
                  </div>
                  {/* <span className="price ml-3">$29</span> */}
                </p>

                <p className="mt-4 font-medium text-gray-700">One time payment</p>

                <div className="mt-8">
                  <ul className="grid grid-cols-1 gap-4">
                    <li className="inline-flex items-center text-gray-900 font-semibold">General Controls</li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Play/pause track
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Previous/next track
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Toggle shuffle/repeat
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Start Radio
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Like current song
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Song change notification
                    </li>
                    <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Queue tab</li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      View song queue
                    </li>
                    <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Now Playing tab</li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Dedicated Now Playing page
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Dedicated playback controls
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Progress bar
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Precise playback seeking
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Volume bar
                    </li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Precise volume seeking
                    </li>
                    <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Search tab</li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Tracks/album/playlists
                    </li>
                    <li className="inline-flex items-center text-gray-900 font-semibold mt-2">Library tab</li>
                    <li className="inline-flex items-center text-gray-600">
                      <Check />
                      Saved tracks/album/playlists
                    </li>
                  </ul>
                </div>

                <div className="mt-8 ">
                  <div className="text-gray-700 font-semibold text-center mt-5 mb-3">Upgrade Now</div>
                  <div className="flex gap-1">
                    <a
                      target="_blank"
                      href="https://buy.stripe.com/4gw8yzcge4OUc9idQU"
                      className="bg-[#4f3bf8] hover:bg-gray-500 px-4 py-3 font-semibold rounded-xl flex items-center whitespace-nowrap !text-sm text-center w-[100%] text-white justify-center"
                    >
                      Stripe
                    </a>
                    <a
                      target="_blank"
                      href="https://buy.stripe.com/4gw8yzcge4OUc9idQU"
                      className="bg-[#f0ac26] hover:bg-gray-500 px-4 py-3 font-semibold rounded-xl flex items-center whitespace-nowrap !text-sm text-center w-[100%] text-white justify-center"
                    >
                      Lemon Squeezy
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
