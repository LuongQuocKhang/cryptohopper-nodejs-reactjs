import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class WalletComponent extends Component {
  state = { value: 50 };

  handleChange = (newValue) => {
      this.setState({ value: newValue });
  };

  componentDidMount() {
      window.initKnob();
      window.initFlotChart("rgb(251, 17, 142)");
      window.initDonutChart();
      window.initBiPolarChar();
  }
  render() {
      return (
          <>
              <div className="row">
                  <div className="col-sm-12">
                      <div className="page-title-box">
                          <div className="btn-group float-right">
                              <ol className="breadcrumb hide-phone p-0 m-0">
                                  <li className="breadcrumb-item"><Link to="#">Highdmin</Link></li>
                                  <li className="breadcrumb-item active">Wallet</li>
                              </ol>
                          </div>
                          <h4 className="page-title">Wallet</h4>
                      </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-12">
                      <div className="card-box">
                          <h4 className="header-title mb-4">Account Overview</h4>

                          <div className="row">
                              <div className="col-md-6 col-xl-3">
                                  <div className="card-box tilebox-one">
                                      <i className="icon-layers float-right text-muted"></i>
                                      <h6 className="text-muted text-uppercase mt-0">Orders</h6>
                                      <h2 className="m-b-20" data-plugin="counterup">1,587</h2>
                                      <span className="badge badge-custom"> +11% </span> <span className="text-muted">From previous period</span>
                                  </div>
                              </div>

                              <div className="col-md-6 col-xl-3">
                                  <div className="card-box tilebox-one">
                                      <i className="icon-paypal float-right text-muted"></i>
                                      <h6 className="text-muted text-uppercase mt-0">Revenue</h6>
                                      <h2 className="m-b-20">$<span data-plugin="counterup">46,782</span></h2>
                                      <span className="badge badge-danger"> -29% </span> <span className="text-muted">From previous period</span>
                                  </div>
                              </div>

                              <div className="col-md-6 col-xl-3">
                                  <div className="card-box tilebox-one">
                                      <i className="icon-chart float-right text-muted"></i>
                                      <h6 className="text-muted text-uppercase mt-0">Average Price</h6>
                                      <h2 className="m-b-20">$<span data-plugin="counterup">15.9</span></h2>
                                      <span className="badge badge-custom"> 0% </span> <span className="text-muted">From previous period</span>
                                  </div>
                              </div>

                              <div className="col-md-6 col-xl-3">
                                  <div className="card-box tilebox-one">
                                      <i className="icon-rocket float-right text-muted"></i>
                                      <h6 className="text-muted text-uppercase mt-0">Product Sold</h6>
                                      <h2 className="m-b-20" data-plugin="counterup">1,890</h2>
                                      <span className="badge badge-custom"> +89% </span> <span className="text-muted">Last year</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-xl-6">
                      <div className="card-box">
                          <h4 className="header-title">Account Balances</h4>
                          <div id="flotRealTime" style={{ height: 350 }} className="flot-chart mt-5"></div>
                      </div>
                  </div>

                  <div className="col-xl-6">
                      <div className="card-box">
                          <h4 className="header-title">Sales Overview</h4>

                          <div id="combine-chart">
                              <div id="bi-polar-bar" className="ct-chart ct-golden-section" style={{ height: 370 }}></div>
                          </div>

                      </div>
                  </div>
              </div>

              <div className="row">
                  <div className="col-xl-8">
                      <div className="card-box">
                          <h4 className="header-title mb-3">Wallet Balances</h4>

                          <div className="table-responsive">
                              <table className="table table-hover table-centered m-0">

                                  <thead>
                                      <tr>
                                          <th>Profile</th>
                                          <th>Name</th>
                                          <th>Currency</th>
                                          <th>Balance</th>
                                          <th>Reserved in orders</th>
                                          <th>Action</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>
                                              <img src="/assets/images/users/avatar-2.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" />
                                          </td>

                                          <td>
                                              <h5 className="m-0 font-weight-normal">Tomaslau</h5>
                                              <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                          </td>

                                          <td>
                                              <i className="mdi mdi-currency-btc text-primary"></i> BTC
                                          </td>

                                          <td>
                                              0.00816117 BTC
                                          </td>

                                          <td>
                                              0.00097036 BTC
                                          </td>

                                          <td>
                                              <Link href="#" className="btn btn-sm btn-custom"><i className="mdi mdi-plus"></i></Link>
                                              <Link href="#" className="btn btn-sm btn-danger"><i className="mdi mdi-minus"></i></Link>
                                          </td>
                                      </tr>

                                      <tr>
                                          <td>
                                              <img src="/assets/images/users/avatar-3.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" />
                                          </td>

                                          <td>
                                              <h5 className="m-0 font-weight-normal">Erwin E. Brown</h5>
                                              <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                          </td>

                                          <td>
                                              <i className="mdi mdi-currency-eth text-primary"></i> ETH
                                          </td>

                                          <td>
                                              3.16117008 ETH
                                          </td>

                                          <td>
                                              1.70360009 ETH
                                          </td>

                                          <td>
                                              <Link href="#" className="btn btn-sm btn-custom"><i className="mdi mdi-plus"></i></Link>
                                              <Link href="#" className="btn btn-sm btn-danger"><i className="mdi mdi-minus"></i></Link>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <img src="/assets/images/users/avatar-4.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" />
                                          </td>

                                          <td>
                                              <h5 className="m-0 font-weight-normal">Margeret V. Ligon</h5>
                                              <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                          </td>

                                          <td>
                                              <i className="mdi mdi-currency-eur text-primary"></i> EUR
                                          </td>

                                          <td>
                                              25.08 EUR
                                          </td>

                                          <td>
                                              12.58 EUR
                                          </td>

                                          <td>
                                              <Link href="#" className="btn btn-sm btn-custom"><i className="mdi mdi-plus"></i></Link>
                                              <Link href="#" className="btn btn-sm btn-danger"><i className="mdi mdi-minus"></i></Link>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <img src="/assets/images/users/avatar-5.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" />
                                          </td>

                                          <td>
                                              <h5 className="m-0 font-weight-normal">Jose D. Delacruz</h5>
                                              <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                          </td>

                                          <td>
                                              <i className="mdi mdi-currency-cny text-primary"></i> CNY
                                          </td>

                                          <td>
                                              82.00 CNY
                                          </td>

                                          <td>
                                              30.83 CNY
                                          </td>

                                          <td>
                                              <Link href="#" className="btn btn-sm btn-custom"><i className="mdi mdi-plus"></i></Link>
                                              <Link href="#" className="btn btn-sm btn-danger"><i className="mdi mdi-minus"></i></Link>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <img src="/assets/images/users/avatar-6.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" />
                                          </td>

                                          <td>
                                              <h5 className="m-0 font-weight-normal">Luke J. Sain</h5>
                                              <p className="mb-0 text-muted"><small>Member Since 2017</small></p>
                                          </td>

                                          <td>
                                              <i className="mdi mdi-currency-btc text-primary"></i> BTC
                                          </td>

                                          <td>
                                              2.00816117 BTC
                                          </td>

                                          <td>
                                              1.00097036 BTC
                                          </td>

                                          <td>
                                              <Link href="#" className="btn btn-sm btn-custom"><i className="mdi mdi-plus"></i></Link>
                                              <Link href="#" className="btn btn-sm btn-danger"><i className="mdi mdi-minus"></i></Link>
                                          </td>
                                      </tr>

                                  </tbody>
                              </table>
                          </div>
                      </div>

                  </div>

                  <div className="col-xl-4">
                      <div className="card-box">
                          <h4 className="m-t-0 header-title">Total Wallet Balance</h4>


                          <div id="donut-chart">
                              <div id="donut-chart-container" className="flot-chart mt-5" style={{ height: 340 }}>
                              </div>
                          </div>

                      </div>

                  </div>
              </div>

              <div className="row">
                  <div className="col-lg-12">
                      <div className="card-box">
                          <h4 className="header-title mb-4">Last Transactions</h4>

                          <ul className="list-unstyled transaction-list slimscroll mb-0">
                              <li>
                                  <i className="dripicons-arrow-down text-success"></i>
                                  <span className="tran-text">Advertising</span>
                                  <span className="float-right text-success tran-price">+$230</span>
                                  <span className="float-right text-muted">07/09/2017</span>
                                  <span className="clearfix"></span>
                              </li>

                              <li>
                                  <i className="dripicons-arrow-up text-danger"></i>
                                  <span className="tran-text">Support licence</span>
                                  <span className="float-right text-danger tran-price">-$965</span>
                                  <span className="float-right text-muted">07/09/2017</span>
                                  <span className="clearfix"></span>
                              </li>

                              <li>
                                  <i className="dripicons-arrow-down text-success"></i>
                                  <span className="tran-text">Extended licence</span>
                                  <span className="float-right text-success tran-price">+$830</span>
                                  <span className="float-right text-muted">07/09/2017</span>
                                  <span className="clearfix"></span>
                              </li>

                              <li>
                                  <i className="dripicons-arrow-down text-success"></i>
                                  <span className="tran-text">Advertising</span>
                                  <span className="float-right text-success tran-price">+$230</span>
                                  <span className="float-right text-muted">05/09/2017</span>
                                  <span className="clearfix"></span>
                              </li>

                              <li>
                                  <i className="dripicons-arrow-up text-danger"></i>
                                  <span className="tran-text">New plugins added</span>
                                  <span className="float-right text-danger tran-price">-$452</span>
                                  <span className="float-right text-muted">05/09/2017</span>
                                  <span className="clearfix"></span>
                              </li>

                              <li>
                                  <i className="dripicons-arrow-down text-success"></i>
                                  <span className="tran-text">Google Inc.</span>
                                  <span className="float-right text-success tran-price">+$230</span>
                                  <span className="float-right text-muted">04/09/2017</span>
                                  <span className="clearfix"></span>
                              </li>

                              <li>
                                  <i className="dripicons-arrow-up text-danger"></i>
                                  <span className="tran-text">Facebook Ad</span>
                                  <span className="float-right text-danger tran-price">-$364</span>
                                  <span className="float-right text-muted">03/09/2017</span>
                                  <span className="clearfix"></span>
                              </li>

                              <li>
                                  <i className="dripicons-arrow-down text-success"></i>
                                  <span className="tran-text">New sale</span>
                                  <span className="float-right text-success tran-price">+$230</span>
                                  <span className="float-right text-muted">03/09/2017</span>
                                  <span className="clearfix"></span>
                              </li>

                              <li>
                                  <i className="dripicons-arrow-down text-success"></i>
                                  <span className="tran-text">Advertising</span>
                                  <span className="float-right text-success tran-price">+$230</span>
                                  <span className="float-right text-muted">29/08/2017</span>
                                  <span className="clearfix"></span>
                              </li>

                              <li>
                                  <i className="dripicons-arrow-up text-danger"></i>
                                  <span className="tran-text">Support licence</span>
                                  <span className="float-right text-danger tran-price">-$854</span>
                                  <span className="float-right text-muted">27/08/2017</span>
                                  <span className="clearfix"></span>
                              </li>
                          </ul>

                      </div>
                  </div>
              </div>
          </>
      )
  }
}

export default WalletComponent