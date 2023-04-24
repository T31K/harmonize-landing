import Header from '../partials/Header';
import Footer from '../partials/Footer';
import '../css/pricing-table.css';

function Premium() {
  return (
    <>
      <main className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <div className="flex-grow py-5">
          <div className="main rounded-2xl border-2">
            <table className="price-table rounded-2xl">
              <tbody>
                <tr>
                  <td className="price-blank"></td>
                  <td className="price-blank"></td>
                  <td className="price-table-popular">Most popular</td>
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
                    Devices
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
                    Data Retention
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
                    Weekly Reports
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
        <Footer />
      </main>
    </>
  );
}

export default Premium;
