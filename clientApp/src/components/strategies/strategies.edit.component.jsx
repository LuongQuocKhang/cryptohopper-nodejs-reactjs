import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class StrategiesEditComponent extends Component {

    componentDidMount() {
        window.drawResultChart({}, "");
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="btn-group float-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li className="breadcrumb-item"><Link to=''>Highdmin</Link></li>
                                    <li className="breadcrumb-item"><Link to=''>Strategies</Link></li>
                                    <li className="breadcrumb-item active"><Link to=''>Edit</Link></li>
                                </ol>
                            </div>
                            <h4 className="page-title">Edit strategy</h4>
                        </div>
                    </div>
                </div>


                <div className="row">

                    <div className="col-4">
                        <div className="card-box">
                            <h4 className="m-t-0 header-title">Input Types</h4>
                            <p className="text-muted m-b-30 font-14">
                                Create new trading strategy
                            </p>

                            <div className="row">
                                <div className="col-12">
                                    <div className="p-20">
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Name : </label>
                                            <div className="col-10">
                                                <input type="text" className="form-control" value="Name of your strategy.." />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label">Description</label>
                                            <div className="col-10">
                                                <textarea className="form-control" rows="5"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className="col-12">
                                    <div className="card-box">
                                        <h3 className="panel-title ">Info</h3>

                                        <div className="row m-t-10 m-b-15">
                                            <div className="col-md-2">
                                                <span className="fa fa-calendar fa-lg text-info m-t-10"></span>
                                            </div>
                                            <div className="col-md-10">
                                                <p className="b-0"><em>Created on</em><br />
                                                    11/07/2022 12:09:31 PM</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <span className="fa fa-pencil-square-o fa-lg text-info m-t-10"></span>
                                            </div>
                                            <div className="col-md-10">
                                                <p className="b-0"><em>Last modified on</em><br />11/07/2022 12:09:31 PM</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="card-box">
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className="button-list float-left">
                                        <Link type="button" className="btn btn-success waves-light waves-effect"
                                            to='/strategies/new'>
                                            <i className='mdi mdi-content-save-all'></i> Save</Link>
                                        <button type="button" className="btn btn-info waves-light waves-effect">
                                            <i className='mdi mdi-chart-line'></i> Indicators</button>
                                        <button type="button" className="btn btn-info waves-light waves-effect">
                                            <i className="fa fa-cloud m-r-5"></i> Candle Patterns
                                        </button>
                                        <button type="button" className="btn btn-info waves-light waves-effect">
                                            <i className="mdi mdi-play-circle-outline"></i> Test
                                        </button>
                                        <button type="button" className="btn btn-info waves-light waves-effect">
                                            <i className='mdi mdi-code-tags'></i> Code
                                        </button>
                                        <button type="button" class="btn btn-danger waves-light waves-effect">
                                            <i className='mdi mdi-delete'></i> Delete
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-12">
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
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className='row' id='test_tab'>
                                <div className="col-md-12">
                                    <div class="progress m-b-20">
                                        <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    <div id="test_strategy_chart" style={{ height: 350 }} className="flot-chart mt-5">
                                        <div id="test_strategy_chart_div_container" style={{ height: 350 }}>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-4 m-b-30">
                                    <h4>Backtest Result</h4>
                                    <p><strong>Max profit:</strong> 0.00 %</p>
                                    <p><strong>Strategy:</strong> Multiple TA</p>
                                    <p><strong>Candle size:</strong> 1 hour</p>
                                    <p><strong>Stop-loss:</strong> Disabled</p>
                                    <p><strong>Trailing stop-loss:</strong> Disabled</p>
                                    <p><strong>Trailing stop-buy:</strong> Disabled</p>
                                    <p><strong>Succesful sells: </strong><span className="text-success">0 (0 %)</span></p>
                                    <p><strong>Sells with loss:</strong> <span className="text-danger">0 (0 %)</span></p>
                                    <p><strong>Average holding time: </strong>n/a</p>
                                    <p><strong>Date found:</strong> 11/07/2022 10:41:35 AM</p>
                                    <p className="m-t-10">
                                        <button type="button" onclick="deployConfig(11377062)" className="btn btn-success btn-block waves-effect waves-light">Deploy this configuration</button>
                                        <a href="/backtesting?share=11377062" className="btn btn-default btn-block waves-effect waves-light">Share</a>
                                    </p>
                                </div>
                                <div className='col-md-8'>
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
                                            </tbody>
                                        </table>
                                    </div>
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
                                            </tbody>
                                        </table>
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

export default StrategiesEditComponent