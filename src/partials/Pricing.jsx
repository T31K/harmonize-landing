import { Link } from 'react-router-dom';
import { FaMoneyBillWave } from 'react-icons/fa';

function Pricing() {
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

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
            <div className=" custom-container opacity-[80%] ">
              <p className="uppercase text-sm font-medium text-gray-500">Basic</p>

              <p className="mt-4 text-3xl text-gray-700 font-medium">
                <div className="price-wrapper">
                  <div className="price font-bold">Free</div>
                </div>
              </p>

              <p className="mt-4 font-medium text-gray-700 invisible">One time payment</p>

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
                      className="w-4 h-4 mr-2 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    View song queue <span className="bg-gray-200 px-2 rounded-md ml-3">WIP</span>
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Playback seeking <span className="bg-gray-200 px-2 rounded-md ml-3">WIP</span>
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Control volume <span className="bg-gray-200 px-2 rounded-md ml-3">WIP</span>
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Custom color scheme <span className="bg-gray-200 px-2 rounded-md ml-3">WIP</span>
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Slows down if high requests
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  target="_blank"
                  href="https://buy.stripe.com/5kA2aba86a9eb5e4gh"
                >
                  <button className="bg-gray-500 hover:bg-gray-500 px-4 py-3 font-semibold rounded-xl  w-[150px] text-white">
                    Free To Use
                  </button>
                </a>
              </div>
            </div>

            <div className="custom-container">
              <p className="uppercase text-sm font-medium text-gray-500">Pro</p>

              <p className="mt-4 text-3xl text-gray-700 font-medium">
                <div className="price-wrapper">
                  {/* <div className="price-slash"></div> */}
                  <div className="price font-bold">$49</div>
                </div>
                {/* <span className="price ml-3">$29</span> */}
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
                    View song queue <span className="bg-gray-200 px-2 rounded-md ml-3">WIP</span>
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Playback seeking <span className="bg-gray-200 px-2 rounded-md ml-3">WIP</span>
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Control volume <span className="bg-gray-200 px-2 rounded-md ml-3">WIP</span>
                  </li>
                  <li className="inline-flex items-center text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 fill-current text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                    </svg>
                    Custom color scheme <span className="bg-gray-200 px-2 rounded-md ml-3">WIP</span>
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
                <a
                  target="_blank"
                  href="https://buy.stripe.com/5kA2aba86a9eb5e4gh"
                >
                  <button className="bg-[#5cbc8b] hover:bg-gray-500 px-4 py-3 font-semibold rounded-xl  w-[150px] text-white">
                    Upgrade Now
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex">
            <Link
              className="group relative inline-flex mx-auto items-center bg-green-300 overflow-hidden rounded-2xl py-4 px-5 mt-5 text-lg font-bold outline-none transition duration-300 focus:ring-[0.1875rem] focus:ring-purple-400 bg-gray-800 -5 hidden dark:hidden sm:flex"
              to="/premium"
            >
              <div className="ease absolute left-5 translate-x-0 opacity-100 transition duration-300"></div>
              <div className="ease translate-x-0 transition duration-300">See All Features </div>
              <div className="ease absolute right-5 translate-x-full opacity-0 transition duration-300 "></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
