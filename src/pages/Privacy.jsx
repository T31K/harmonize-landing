import React from 'react';

import Header from '../partials/Header';

import Footer from '../partials/Footer';

import { MdPrivacyTip } from 'react-icons/md';
import '../css/faq.css';

function Privacy() {
  return (
    <>
      <main className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <section className="relative pb-[100px] pt-[90px]">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
            <div className="pt-12 md:pt-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <MdPrivacyTip className="text-7xl hover:text-green-300 inline-block text-center mb-3" />
                <div className="flex items-center justify-center">
                  <h1 className="h2 mb-4 mt-2">Privacy</h1>
                </div>
              </div>

              <div className="flex flex-wrap">
                <div className="w-full">
                  <div>
                    This Privacy Policy outlines how Harmonize ("the App") collects, uses, and protects the personal
                    information of its users. The App is designed for macOS and allows users to control Spotify. By
                    using the App, you agree to the collection and use of your personal information as described in this
                    Privacy Policy.
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">1. Information Collection and Use:</div>
                    <div>
                      The App collects and uses the following information for the purpose of connecting the user to
                      Spotify's API:
                    </div>
                    <div>
                      Email Address: The App strictly collects the user's email address. This information is used solely
                      for the purpose of connecting the user to Spotify's API and providing access to the App's
                      functionalities.
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">2. Data Security:</div>
                    <div>
                      The App takes reasonable measures to protect the collected personal information from unauthorized
                      access, disclosure, alteration, or destruction. However, no method of transmission or electronic
                      storage is completely secure, and therefore, the App cannot guarantee the absolute security of the
                      information.
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">3. Third-Party Services:</div>
                    <div>
                      The App may use third-party services, such as Spotify's API, to provide its functionalities. These
                      services have their own privacy policies governing the collection, use, and disclosure of personal
                      information. We encourage you to review the privacy policies of these third-party services.
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">4. Data Retention:</div>
                    <div>
                      The App retains the user's email address for as long as necessary to provide access to the App's
                      functionalities. If a user decides to revoke access or delete their account, their email address
                      will be promptly deleted from our records.
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">5. Information Sharing: </div>
                    <div>
                      The App does not share or sell personal information with any third parties, except as required by
                      law or with the user's explicit consent. Children's Privacy:
                    </div>
                  </div>{' '}
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">6. Children's Privacy: </div>
                    <div>
                      The App does not knowingly collect personal information from individuals under the age of 13. If
                      we become aware that we have collected personal information from a child without parental consent,
                      we will take steps to promptly delete the information.
                    </div>
                  </div>{' '}
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">7. Changes to the Privacy Policy: </div>
                    <div>
                      The App may update this Privacy Policy from time to time. We will notify users of any significant
                      changes by providing a prominent notice within the App or by sending an email to the registered
                      email address.
                    </div>
                  </div>{' '}
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">8.Contact Us: </div>
                    <div>
                      If you have any questions or concerns about this Privacy Policy or the App's privacy practices,
                      please contact us at <em>contact@getharmonize.app</em>.
                    </div>
                  </div>{' '}
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">5. Information Sharing: </div>
                    <div>
                      The App does not share or sell personal information with any third parties, except as required by
                      law or with the user's explicit consent. Children's Privacy:
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Privacy;
