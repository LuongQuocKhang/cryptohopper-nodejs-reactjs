import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TradeViewChart from 'react-crypto-chart';

export class TradeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            containerStyle: {
                minHeight: '500px',
                minWidth: '400px',
                marginBottom: '30px',
            },
            chartLayout: {
                layout: {
                    backgroundColor: "#ffffff",
                    textColor: "#253248",
                },
                grid: {
                    vertLines: {
                        color: "#838fa3",
                    },
                    horzLines: {
                        color: "#838fa3",
                    },
                },
                priceScale: {
                    borderColor: "#485c7b",
                },
                timeScale: {
                    borderColor: "#485c7b",
                    timeVisible: true,
                    secondsVisible: false,
                }
            },
            candleStickConfig: {
                upColor: "green",
                downColor: "red",
                borderDownColor: "transparent",
                borderUpColor: "transparent",
                wickDownColor: "gray",
                wickUpColor: "gray"
            },
            pair: "BTCUSDT",
            interval: "15m"
        }
    }

    componentDidMount() {
        window.initAmountRange();
    }

    changeTimeInternal = async (time) => {
        this.setState({
            interval: time
        })
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
                                    <li className="breadcrumb-item active">Trade</li>
                                </ol>
                            </div>
                            <h4 className="page-title">Token Detail</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="card-box task-detail">
                            <div className="media mt-0 m-b-30">
                                <img className="d-flex mr-3 rounded-circle" alt="64x64" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png" style={{ height: 48, width: 48 }} />
                                <div className="media-body">
                                    <h5 className="media-heading mb-0 mt-0">Bitcoin</h5>
                                    <span className="badge badge-danger">BTC</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-12'>
                                    <div className='button-list'>
                                        <button type="button" className="btn btn-outline-pink btn-rounded waves-effect waves-light"
                                            onClick={() => this.changeTimeInternal("1m")}>1m</button>
                                        <button type="button" className="btn btn-outline-pink btn-rounded waves-effect waves-light"
                                            onClick={() => this.changeTimeInternal("15m")}>15m</button>
                                        <button type="button" className="btn btn-outline-pink btn-rounded waves-effect waves-light"
                                            onClick={() => this.changeTimeInternal("1h")}>1h</button>
                                        <button type="button" className="btn btn-outline-pink btn-rounded waves-effect waves-light"
                                            onClick={() => this.changeTimeInternal("1d")}>4h</button>
                                        <button type="button" className="btn btn-outline-pink btn-rounded waves-effect waves-light"
                                            onClick={() => this.changeTimeInternal("1d")}>1d</button>
                                    </div>

                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className='col-12'>
                                    <TradeViewChart
                                        containerStyle={this.state.containerStyle}
                                        chartLayout={this.state.chartLayout}
                                        candleStickConfig={this.state.candleStickConfig}
                                        pair={this.state.pair}
                                        interval={this.state.interval}
                                    />
                                </div>
                            </div>


                        </div>

                        <div className="clearfix"></div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card-box">
                            <h4 className="header-title m-t-0 m-b-30">Order</h4>
                            <div className="form-group row">
                                <div className='col-12'>
                                    <ul className="nav nav-pills navtab-bg nav-justified pull-in ">
                                        <li className="nav-item">
                                            <a href="#home1" data-toggle="tab" aria-expanded="false" className="nav-link">
                                                <i className="fi-monitor mr-2"></i> BUY
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#profile1" data-toggle="tab" aria-expanded="true" className="nav-link active">
                                                <i className="fi-head mr-2"></i> SELL
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-12">
                                    <input type="text" className="form-control" placeholder="Price" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <input type="text" className="form-control" placeholder="Amount" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="range_02" class="col-lg-2 control-label"><b>Amounts</b></label>
                                <div class="col-lg-10">
                                    <input type="text" id="range_02" />
                                </div>
                            </div>
                            <button type="button" className="btn btn-pink btn-rounded waves-effect waves-light" style={{ width: "100%", height: 60 }} disabled>
                                BUY/SELL
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default TradeComponent