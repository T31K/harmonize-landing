import '../css/pricing-table.css';
import { BsCheckCircleFill } from 'react-icons/bs';
import { IoMdCloseCircle } from 'react-icons/io';
import { MdRocketLaunch } from 'react-icons/md';
import SafeLink from '../images/safe_link.png';
function Premium() {
  return (
    <>
      <section className="relative pb-[100px]">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
          <div className="pt-12 md:pt-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10 mt-24">
              <div className=" items-center justify-center">
                <MdRocketLaunch className="text-7xl inline-block text-center mb-3" />

                <h1 className="h2 mb-2 pr-5 text-5xl">Launch Event</h1>
              </div>
              <p className="text-xl text-gray-600"></p>
            </div>

            <p className="mb-2 text-3xl font-medium">$29</p>
            <div className="flex justify-center gap-2 mb-[50px]">
              <p className="text-xl font">$0</p>
              <div className="bar w-[50%] bg-gray-300  h-[30px]">
                <div className="progress w-[10%] bg-green-300  h-[30px] "></div>
              </div>
              <p className="text-xl font-medium">$500</p>
            </div>
            <div className="pt-5 flex flex-col -start ">
              <p className="text-md font-medium my-1 text-center">
                Our product has been developed with a lean and minimal approach to ensure a streamlined user experience.
              </p>
              <p className="text-md font-medium my-1 text-center">
                Once we reach our goal of $500 during launch week, we will have the validation needed to continue
                building and improving our product.
              </p>
            </div>
          </div>

          <div className="flex-grow">
            <div className="main rounded-2xl border-2 !mt-[40px]">
              <table className="price-table rounded-2xl">
                <tbody>
                  <tr>
                    <td className="price-blank"></td>
                    <td className="price-blank"></td>
                    <td className="price-table-popular"></td>
                    <td className="price-blank"></td>
                  </tr>
                  <tr className="price-table-head">
                    <td></td>
                    <td>Free</td>
                    <td>Premium</td>
                    <td>Custom</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="price">
                      <br />
                      Free
                      <br />
                      <a className="invisible">Get started</a>
                    </td>
                    <td className="price">
                      <p className="!text-sm">One Time Payment</p>
                      <br />
                      $49
                      <br />
                      <a
                        href="https://buy.stripe.com/5kA2aba86a9eb5e4gh"
                        target="_blank"
                        className="group relative inline-flex items-center overflow-hidden !rounded-2xl !bg-green-400 py-4 px-5 text-lg font-bold outline-none transition duration-300 focus:ring-[0.1875rem] focus:ring-purple-400 bg-stone-800 text-orange-50 shadow-2xl shadow-stone-800/30"
                      >
                        <div className="ease absolute left-5 translate-x-0 opacity-100 transition duration-300 group-hover:-translate-x-full group-hover:opacity-0"></div>
                        <div className="ease translate-x-0 transition duration-300 ">Upgrade Now </div>
                        <div className="ease absolute right-5 translate-x-full opacity-0 transition duration-300 0">
                          <svg
                            className="h-6 w-6 stroke-current stroke-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                          </svg>
                        </div>
                      </a>
                    </td>
                    <td className="price">
                      <br />
                      $399
                      <br />
                      <a className="invisible">Get started</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-asset-updates"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      Search tracks
                    </td>
                    <td>
                      <p>
                        <BsCheckCircleFill className="text-center" />
                      </p>
                    </td>
                    <td>
                      <p>
                        <BsCheckCircleFill className="text-center" />
                      </p>{' '}
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-core-updates"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      View song queue
                    </td>
                    <td>
                      <p className="fill-current text-error-200">
                        <IoMdCloseCircle className="text-center text-lg nope" />
                      </p>{' '}
                    </td>
                    <td>
                      <p>
                        <BsCheckCircleFill className="text-center" />
                      </p>{' '}
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-security-monitoring"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      Playback seeking
                    </td>
                    <td>
                      <p className="text-error-200">
                        <IoMdCloseCircle className="text-center text-lg nope" />
                      </p>{' '}
                    </td>
                    <td>
                      <p>
                        <BsCheckCircleFill className="text-center" />
                      </p>{' '}
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-uptime-monitoring"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      Control volume
                    </td>
                    <td>
                      <p className="text-error-200">
                        <IoMdCloseCircle className="text-center text-lg nope" />
                      </p>{' '}
                    </td>
                    <td>
                      <p>
                        <BsCheckCircleFill className="text-center" />
                      </p>{' '}
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-malware-cleanup"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      Custom color scheme
                    </td>
                    <td>
                      <p className="text-error-200">
                        <IoMdCloseCircle className="text-center text-lg nope" />
                      </p>{' '}
                    </td>
                    <td>
                      <p>
                        <BsCheckCircleFill className="text-center" />
                      </p>{' '}
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-security-audit"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      Vibrancy mode
                    </td>
                    <td>
                      <p className="text-error-200">
                        <IoMdCloseCircle className="text-center text-lg nope" />
                      </p>{' '}
                    </td>
                    <td>
                      <p>
                        <BsCheckCircleFill className="text-center" />
                      </p>{' '}
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-security-audit"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      Daily listening trend
                    </td>
                    <td>
                      <p className="text-error-200">
                        <IoMdCloseCircle className="text-center text-lg nope" />
                      </p>{' '}
                    </td>
                    <td>
                      <p>
                        <BsCheckCircleFill className="text-center" />
                      </p>{' '}
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-priority-support"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      Requests
                    </td>
                    <td>Slows down if high requests</td>
                    <td>Unlimited</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-billing"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      Multi device support
                    </td>
                    <td>
                      <p>
                        <BsCheckCircleFill className="text-center" />
                      </p>{' '}
                    </td>
                    <td>
                      <p>
                        <BsCheckCircleFill className="text-center" />
                      </p>{' '}
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="price">
                      <a
                        href="#"
                        className="invisible"
                      >
                        Get started
                      </a>
                    </td>
                    <td className="price">
                      <a
                        href="https://buy.stripe.com/5kA2aba86a9eb5e4gh"
                        target="_blank"
                        className="group relative inline-flex items-center overflow-hidden !rounded-2xl !bg-green-400 py-4 px-5 text-lg font-bold outline-none transition duration-300 focus:ring-[0.1875rem] focus:ring-purple-400 bg-stone-800 text-orange-50 shadow-2xl shadow-stone-800/30"
                      >
                        <div className="ease absolute left-5 translate-x-0 opacity-100 transition duration-300 group-hover:-translate-x-full group-hover:opacity-0"></div>
                        <div className="ease translate-x-0 transition duration-300 ">Upgrade Now </div>
                        <div className="ease absolute right-5 translate-x-full opacity-0 transition duration-300 0">
                          <svg
                            className="h-6 w-6 stroke-current stroke-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                          </svg>
                        </div>
                      </a>{' '}
                    </td>
                    <td className="price">
                      <a
                        href="#"
                        className="invisible"
                      >
                        Get started
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex-grow p-2 font-medium my-5">
              Please note that our premium features are standalone and not directly related to the Spotify API. <br />
              <br />
              Our premium features do not involve any interaction with the Spotify API or Spotify's servers, the premium
              fees go directly towards keeping our servers and database up and running, and improving the overall
              functionality and reliability of our app.
              <br />
              <br /> We are committed to ensuring that our app and premium features are fully compliant with Spotify's
              Developer Terms of Use, and that they provide a seamless and secure music control experience for our users
            </div>
            <h3 className="text-center mt-5 text-2xl font-bold"> Checkout via</h3>

            <div className="flex items-center justify-center py-5 gap-2">
              <a
                target="_blank"
                href="https://buy.stripe.com/5kA2aba86a9eb5e4gh"
                className="group relative inline-flex items-center overflow-hidden rounded-2xl !bg-[#4f3bf8] py-4 px-5 text-lg font-bold outline-none transition duration-300 focus:ring-[0.1875rem] focus:ring-purple-400 bg-stone-800 text-orange-50 shadow-2xl shadow-stone-800/30"
              >
                <div className="ease absolute left-5 translate-x-0 opacity-100 transition duration-300 group-hover:-translate-x-full group-hover:opacity-0"></div>
                <div className="ease translate-x-0 transition duration-300 ">Stripe Checkout</div>
                <div className="ease absolute right-5 translate-x-full opacity-0 transition duration-300 0">
                  <svg
                    className="h-6 w-6 stroke-current stroke-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://harmonize.lemonsqueezy.com/checkout/buy/5dacf4c1-f987-433a-bfea-4d9227bee55d?media=0"
                target="_blank"
                className="group relative inline-flex items-center overflow-hidden rounded-2xl !bg-[#f0ac26] py-4 px-5 text-lg font-bold outline-none transition duration-300 focus:ring-[0.1875rem] focus:ring-purple-400 bg-stone-800 text-orange-50 shadow-2xl shadow-stone-800/30"
              >
                <div className="ease absolute left-5 translate-x-0 opacity-100 transition duration-300 group-hover:-translate-x-full group-hover:opacity-0"></div>
                <div className="ease translate-x-0 transition duration-300 ">Lemon Squeezy</div>
                <div className="ease absolute right-5 translate-x-full opacity-0 transition duration-300 0">
                  <svg
                    className="h-6 w-6 stroke-current stroke-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
                  </svg>
                </div>
              </a>
            </div>
            <h3 className="text-center mt-5 text-2xl font-bold"> Ensure link is secured</h3>
            <img
              src={SafeLink}
              className="mx-auto block w-[400px] bg-[#f1f0f0] p-4 rounded-2xl"
              alt=""
            />
            <h3 className="text-center mt-5 text-2xl font-bold"> Useful Links</h3>
            <div className="flex flex-col justify-center text-center items-center gap-3 pt-5">
              <a
                href=""
                className="w-[200px] bg-green-200 px-2 py-3 rounded-lg font-semibold"
              >
                Product Hunt
              </a>
              <a
                href=""
                className="w-[200px] bg-green-200 px-2 py-3 rounded-lg font-semibold"
              >
                r/SideProjects
              </a>
              <a
                href=""
                className="w-[200px] bg-green-200 px-2 py-3 rounded-lg font-semibold"
              >
                r/TrueSpotify
              </a>
              <a
                href=""
                className="w-[200px] bg-green-200 px-2 py-3 rounded-lg font-semibold"
              >
                IndieHackers.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Premium;
