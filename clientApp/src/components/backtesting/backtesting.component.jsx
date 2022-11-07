import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class BacktestingComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isBacktested: true
        }
    }
    componentDidMount() {
        // window.initFlotChart("rgb(251, 17, 142)");

        if(this.state.isBacktested) {
            window.drawResultChart({}, "");
        }
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
                                    <li className="breadcrumb-item active"><Link to=''>Backtesting</Link></li>
                                </ol>
                            </div>
                            <h4 className="page-title">Backtesting</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="card-box">
                            <h4 className="header-title m-t-0 m-b-30">Configurations</h4>

                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a href="#config_tester" data-toggle="tab" aria-expanded="true" className="nav-link active">
                                        <i className="fi-monitor mr-2"></i> Config tester
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#backtest_history" data-toggle="tab" aria-expanded="false" className="nav-link">
                                        <i className="fi-head mr-2"></i>Backtest history
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#config_finder" data-toggle="tab" aria-expanded="false" className="nav-link">
                                        <i className="fi-mail mr-2"></i> Config finder ( multiple TA )
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#help" data-toggle="tab" aria-expanded="false" className="nav-link">
                                        <i className="fi-cog mr-2"></i> Help
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane show active" id="config_tester">
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Currency</label>
                                        <div className="col-10">
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Load Config</label>
                                        <div className="col-10">
                                            <button type="button" className="btn btn-outline-secondary waves-light waves-effect">Load Existing Config</button>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Candle size</label>
                                        <div className="col-10">
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Sell based on strategy</label>
                                        <div className="col-10">
                                            <input type="checkbox" checked data-plugin="switchery" data-color="#1bb99a" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Take profit at <span className="text-danger">*</span> </label>
                                        <div className="col-10">
                                            <input type="text" required parsley-type="text" className="form-control"
                                                id="inputEmail3" placeholder="tabke profit" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Stop-loss</label>
                                        <div className="col-10">
                                            <input type="checkbox" checked data-plugin="switchery" data-color="#1bb99a" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Trailing stop-loss</label>
                                        <div className="col-10">
                                            <input type="checkbox" checked data-plugin="switchery" data-color="#1bb99a" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Trailing stop-buy</label>
                                        <div className="col-10">
                                            <input type="checkbox" checked data-plugin="switchery" data-color="#1bb99a" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2">Select period</label>
                                        <div className="col-10">
                                            <p>
                                                <a className="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    Show/hide Multiple TA config settings
                                                </a>
                                            </p>
                                            <div className="collapse" id="collapseExample">
                                                <div className="card card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Select period</label>
                                        <div className="col-10">
                                            <input type="checkbox" checked data-plugin="switchery" data-color="#1bb99a" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-2"></div>
                                        <div className="col-10">
                                            <button type="button" className="btn btn-success waves-light waves-effect">Start Backtest</button>
                                        </div>
                                    </div>

                                    <hr />

                                    <div>
                                        <div className="form-group row" style={{ display: this.state.isBacktested ? "flex" : "none" }}>
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
                                            <div className="col-8">
                                                <div className="progress m-b-20">
                                                    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>

                                                <div id="test_strategy_chart" style={{ height: 350 }} className="flot-chart mt-5">
                                                    <div id="test_strategy_chart_div_container" style={{ height: 350 }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane" id="backtest_history">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="card-box">
                                                <h4 className="header-title mb-3">CryotoHopper Output</h4>

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
                                    </div>
                                </div>
                                <div className="tab-pane" id="config_finder">
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Currency</label>
                                        <div className="col-10">
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Load Config</label>
                                        <div className="col-10">
                                            <button type="button" className="btn btn-outline-secondary waves-light waves-effect">Load Existing Config</button>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Candle size</label>
                                        <div className="col-10">
                                            <select className="form-control">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Sell based on strategy</label>
                                        <div className="col-10">
                                            <input type="checkbox" checked data-plugin="switchery" data-color="#1bb99a" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Take profit at <span className="text-danger">*</span> </label>
                                        <div className="col-10">
                                            <input type="text" required parsley-type="text" className="form-control"
                                                id="inputEmail3" placeholder="tabke profit" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Stop-loss</label>
                                        <div className="col-10">
                                            <input type="checkbox" checked data-plugin="switchery" data-color="#1bb99a" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Trailing stop-loss</label>
                                        <div className="col-10">
                                            <input type="checkbox" checked data-plugin="switchery" data-color="#1bb99a" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Trailing stop-buy</label>
                                        <div className="col-10">
                                            <input type="checkbox" checked data-plugin="switchery" data-color="#1bb99a" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2">Select period</label>
                                        <div className="col-10">
                                            <p>
                                                <a className="" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                    Show/hide Multiple TA config settings
                                                </a>
                                            </p>
                                            <div className="collapse" id="collapseExample">
                                                <div className="card card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-2 col-form-label">Select period</label>
                                        <div className="col-10">
                                            <input type="checkbox" checked data-plugin="switchery" data-color="#1bb99a" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-2"></div>
                                        <div className="col-10">
                                            <button type="button" className="btn btn-success waves-light waves-effect">Find Config</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="help">
                                    <h3>Let the search begin!</h3>
                                    <p>Start backtesting your configuration and find the best settings for each coin! Whenever there already is a best configuration found it will show this when selecting a coin. You will be notified when you find a new best configuration.</p>


                                    <h3 className="m-t-40">How it works</h3>
                                    <p>The config tester uses your configuration to see how it would have performed in the past. It checks the history candles of the coin you have chosen and with the candle size you have chosen and mimicks buys and sells based on your configuration. </p>
                                    <p>Whenever you have found a succesful configuration you can choose to deploy this configuration. This will remove the coin from existing config pools and create a new config pool for this coin or if there already is an existing pool solely for this coin then it will update that config pool.</p>
                                    <p>The backtesting tool does not calculate trading fees.</p>

                                    <h3 className="m-t-40">The results</h3>
                                    <p>The maximum profit result of the config tester and config finder are called maximum profits because in the test it does not take in if your hopper would buy that coin or a different one and your hopper does not exactly run every 5 min, 15 min, or 1 day. The maximum profit is based on the total invested at the moment vs the returns.</p>
                                    <p>After testing you will see successful sells and sells with losses. Even with stop-loss disabled you will see sells with losses because at the end of the test all open positions will be sold against the last rate which will maybe result in sells with losses.</p>
                                    <p>After retesting an old backtested configuration it could be that the results are different, this is ofcourse because the historical data has been changed and updated with new historical data. Therefor retest your configurations every now and then to stay sure you are using the best config each coin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BacktestingComponent