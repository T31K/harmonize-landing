import Header from '../partials/Header';
import Footer from '../partials/Footer';
import '../css/pricing-table.css';

function Premium() {
  return (
    <>
      <section className="relative pb-[100px]">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
          <div className="pt-12 md:pt-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10 mt-24">
              <div className=" items-center justify-center">
                <h1 className="h2 mb-4 pr-5 text-5xl">Launch Event</h1>
              </div>
              <p className="text-xl text-gray-600"></p>
            </div>

            <div className="flex justify-center gap-2 mb-[50px]">
              <p className="text-xl font">$0</p>
              <div className="bar w-[50%] bg-gray-300 rounded-lg h-[30px]">
                <div className="bar w-[30%] bg-green-300  h-[30px] "></div>
              </div>
              <p className="text-xl font-bold">$500</p>
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
          <div className="flex-grow py-5">
            <div className="main rounded-2xl border-2">
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
                    <td className="green-width">Pro</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="price">
                      <br />
                      Free
                      <br />
                      <a href="#">Get started</a>
                    </td>
                    <td className="price">
                      <br />
                      $49
                      <br />
                      <a href="#">Get started</a>
                    </td>
                    <td className="price">
                      <br />
                      $199
                      <br />
                      <a href="#">Get started</a>
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
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
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
                    <td>30 Days</td>
                    <td>90 Days</td>
                    <td>180 Days</td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-security-monitoring"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      Chart Annotations
                    </td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-uptime-monitoring"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      Uptime Monitoring
                    </td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-malware-cleanup"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      Playback seeking{' '}
                    </td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-security-audit"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      Security Audit
                    </td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-security-audit"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      On-Demand Audit
                    </td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-priority-support"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      Priority Support
                    </td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-times"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="#wordpress-billing"
                        className="price-table-help"
                      >
                        <i className="far fa-fw fa-question-circle"></i>
                      </a>{' '}
                      Easy Billing + No Contracts
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                    <td>
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="price">
                      <a href="#">Get started</a>
                    </td>
                    <td className="price">
                      <a href="#">Get started</a>
                    </td>
                    <td className="price">
                      <a href="#">Get started</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Premium;
