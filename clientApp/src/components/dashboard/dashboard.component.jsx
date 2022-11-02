import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Knob from 'react-canvas-knob';

export class DashboardComponent extends Component {

    state = { value: 50 };

    handleChange = (newValue) => {
        this.setState({ value: newValue });
    };

    render() {
        return (
            <>
                <div className="wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <div className="btn-group float-right">
                                        <ol className="breadcrumb hide-phone p-0 m-0">
                                            <li className="breadcrumb-item"><Link to="#">Highdmin</Link></li>
                                            <li className="breadcrumb-item active">Dashboard</li>
                                        </ol>
                                    </div>
                                    <h4 className="page-title">Dashboard</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card-box">
                                    <h4 className="header-title mb-4">Account Overview</h4>

                                    <div className="row">
                                        <div className="col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card-box mb-0 widget-chart-two">
                                                <div className="float-right">
                                                    <Knob
                                                        value={this.state.value}
                                                        thickness={0.1}
                                                        width={100}
                                                        height={100}
                                                        fgColor={"#66EE66"}
                                                    />
                                                </div>
                                                <div className="widget-chart-two-content">
                                                    <p className="text-muted mb-0 mt-2">Daily Sales</p>
                                                    <h3 className="">$35,715</h3>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card-box mb-0 widget-chart-two">
                                                <div className="float-right">
                                                    <Knob
                                                        value={this.state.value}
                                                        thickness={0.1}
                                                        width={100}
                                                        height={100}
                                                        fgColor={"#66EE66"}
                                                    />
                                                </div>
                                                <div className="widget-chart-two-content">
                                                    <p className="text-muted mb-0 mt-2">Sales Analytics</p>
                                                    <h3 className="">$97,511</h3>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card-box mb-0 widget-chart-two">
                                                <div className="float-right">
                                                    <Knob
                                                        value={this.state.value}
                                                        thickness={0.1}
                                                        width={100}
                                                        height={100}
                                                        fgColor={"#66EE66"}
                                                    />
                                                </div>
                                                <div className="widget-chart-two-content">
                                                    <p className="text-muted mb-0 mt-2">Statistics</p>
                                                    <h3 className="">$954</h3>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-sm-6 col-lg-6 col-xl-3">
                                            <div className="card-box mb-0 widget-chart-two">
                                                <div className="float-right">
                                                    <Knob
                                                        value={this.state.value}
                                                        thickness={0.1}
                                                        width={100}
                                                        height={100}
                                                        fgColor={"#66EE66"}
                                                    />
                                                </div>
                                                <div className="widget-chart-two-content">
                                                    <p className="text-muted mb-0 mt-2">Total Revenue</p>
                                                    <h3 className="">$32,540</h3>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card-box">
                                    <h4 className="header-title">Order Overview</h4>
                                    <div id="flotRealTime" style={{height: 350}} class="flot-chart mt-5"></div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="card-box">
                                    <h4 className="header-title">Sales Overview</h4>

                                    <div id="combine-chart">
                                        <div id="combine-chart-container" className="flot-chart mt-5" style={{ height: 350 }}>
                                        </div>
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
                                                        <img src="assets/images/users/avatar-2.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" />
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
                                                        <img src="assets/images/users/avatar-3.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" />
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
                                                        <img src="assets/images/users/avatar-4.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" />
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
                                                        <img src="assets/images/users/avatar-5.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" />
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
                                                        <img src="assets/images/users/avatar-6.jpg" alt="contact-img" title="contact-img" className="rounded-circle thumb-sm" />
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
                    </div>
                </div>
            </>
        )
    }
}

export default DashboardComponent