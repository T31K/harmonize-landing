import React from 'react';

import Header from '../partials/Header';

import Footer from '../partials/Footer';

import { MdOutlineAttachMoney } from 'react-icons/md';
import '../css/faq.css';

function Refund() {
  return (
    <>
      <main className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <section className="relative pb-[100px] pt-[90px]">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
            <div className="pt-12 md:pt-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <MdOutlineAttachMoney className="text-7xl hover:text-green-300 inline-block text-center mb-3" />
                <div className="flex items-center justify-center">
                  <h1 className="h2 mb-4 mt-2">Refund</h1>
                </div>
              </div>

              <div className="flex flex-wrap">
                <div className="w-full">
                  <div>
                    This Refund Policy outlines the terms and conditions for refunds related to the use of the Harmonize
                    App ("the App"). By using the App, you agree to comply with this refund policy.
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">1. One-Time Payment:</div>
                    <div>
                      The Harmonize App operates on a one-time payment model. Once the payment is made for the premium
                      features of the App, the purchase is considered final, and no automatic recurring charges or
                      subscriptions are associated with it.
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">2. Eligibility for Refunds:</div>
                    <div>
                      We understand that exceptional circumstances may arise where a refund may be requested. Refunds
                      will be considered on a case-by-case basis and may be granted under the following circumstances: -
                      Technical Issues: If you encounter significant technical issues that prevent you from using the
                      App as intended, and our support team is unable to resolve the issue satisfactorily. -
                      Dissatisfaction with App Performance: If you are unsatisfied with the App's performance or if it
                      does not meet your reasonable expectations.
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">3. Refund Request and Premium Features Revocation:</div>
                    <div>
                      To request a refund, please follow the steps outlined below: - Contact our support team at
                      [contact email address] within [number of days, e.g., 7 days] of your purchase. - Provide detailed
                      information about the issue or reason for your refund request. - If a refund is approved, please
                      note that the premium features associated with the purchase will be revoked, and you will no
                      longer have access to those features.
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">4. Non-Eligible Situations:</div>
                    <div>
                      Refunds may not be granted under the following circumstances: - Change of Mind: If you simply
                      change your mind or decide that you no longer want to use the App after the purchase. -
                      Incompatibility: If the App is incompatible with other software or applications on your device,
                      unless explicitly stated otherwise.
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">5. Refund Amount and Method:</div>
                    <div>
                      If your refund request is approved, we will refund the amount paid for the App via the original
                      payment method used for the purchase.
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">6. Third-Party Platforms:</div>
                    <div>
                      If you purchased the App through a third-party platform (e.g., the Mac App Store), refunds may be
                      subject to the refund policies of that platform. You may need to contact the platform's support
                      team for assistance with refund requests.
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">7. Changes to the Refund Policy:</div>
                    <div>
                      We reserve the right to modify or update this Refund Policy at any time. Any changes will be
                      effective immediately upon posting the updated policy. It is your responsibility to review the
                      refund policy periodically for any changes.
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">8. Contact Us:</div>
                    <div>
                      If you have any questions or need further assistance regarding refunds, please contact our support
                      team at [contact email address].
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 mt-5">
                    <div className="font-semibold">9. Agreement:</div>
                    <div>
                      By using the App and requesting a refund, you acknowledge that you have read and understood this
                      Refund Policy and agree to its terms and conditions.
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

export default Refund;
