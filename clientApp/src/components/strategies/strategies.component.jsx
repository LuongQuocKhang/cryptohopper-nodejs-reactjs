import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './strategies.component.css'

export class StrategiesComponent extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <div className="btn-group float-right">
                                <ol className="breadcrumb hide-phone p-0 m-0">
                                    <li className="breadcrumb-item"><Link to=''>Highdmin</Link></li>
                                    <li className="breadcrumb-item active"><Link to=''>Strategies</Link></li>
                                </ol>
                            </div>
                            <h4 className="page-title">Strategies</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="card-box">
                            <div className='row'>
                                <div className='col-md-12'>
                                    <h4 className="header-title m-t-0 m-b-30" style={{ display: "inline" }}>Strategies Configuration</h4>
                                    <div className="button-list float-right">
                                        <Link type="button" class="btn btn-success waves-light waves-effect"
                                            to='/strategies/new'>New Strategy</Link>
                                        <Link type="button" class="btn btn-success waves-light waves-effect"
                                            to='/AI/new'>New AI</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <a href="#my_strategies" data-toggle="tab" aria-expanded="true" className="nav-link active">
                                                <i className="fi-monitor mr-2"></i> My Strategies
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#market_strategies" data-toggle="tab" aria-expanded="false" className="nav-link">
                                                <i className="fi-head mr-2"></i> Market Strategies
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#algorithm_intelligence" data-toggle="tab" aria-expanded="false" className="nav-link">
                                                <i className="fi-mail mr-2"></i> Algorithm Intelligence
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane show active" id="my_strategies">
                                            <div className='row'>
                                                <div className="col-md-6 col-lg-3">
                                                    <div className="card card-border m-b-30">
                                                        <img className="card-img-top img-fluid" src="https://cdn.cryptohopper.com/images/strategies/default/06%20-%20ico@1x.jpg" alt="Card cap" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="btn btn-custom waves-effect waves-light">Button</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-3">
                                                    <div className="card card-border m-b-30">
                                                        <img className="card-img-top img-fluid" src="https://cdn.cryptohopper.com/images/strategies/default/06%20-%20ico@1x.jpg" alt="Card cap" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="btn btn-custom waves-effect waves-light">Button</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-3">
                                                    <div className="card card-border m-b-30">
                                                        <img className="card-img-top img-fluid" src="https://cdn.cryptohopper.com/images/strategies/default/06%20-%20ico@1x.jpg" alt="Card cap" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="btn btn-custom waves-effect waves-light">Button</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="market_strategies">
                                            <div className='row'>
                                                <div className="col-md-6 col-lg-3">
                                                    <div className="card card-border m-b-30">
                                                        <img className="card-img-top img-fluid" src="https://cdn.cryptohopper.com/images/strategies/default/06%20-%20ico@1x.jpg" alt="Card cap" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="btn btn-custom waves-effect waves-light">Button</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-3">
                                                    <div className="card card-border m-b-30">
                                                        <img className="card-img-top img-fluid" src="https://cdn.cryptohopper.com/images/strategies/default/06%20-%20ico@1x.jpg" alt="Card cap" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="btn btn-custom waves-effect waves-light">Button</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-3">
                                                    <div className="card card-border m-b-30">
                                                        <img className="card-img-top img-fluid" src="https://cdn.cryptohopper.com/images/strategies/default/06%20-%20ico@1x.jpg" alt="Card cap" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="btn btn-custom waves-effect waves-light">Button</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="algorithm_intelligence">
                                            <div className='row'>
                                                <div className="col-md-6 col-lg-3">
                                                    <div className="card card-border m-b-30">
                                                        <img className="card-img-top img-fluid" src="https://cdn.cryptohopper.com/images/strategies/default/06%20-%20ico@1x.jpg" alt="Card cap" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="btn btn-custom waves-effect waves-light">Button</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-3">
                                                    <div className="card card-border m-b-30">
                                                        <img className="card-img-top img-fluid" src="https://cdn.cryptohopper.com/images/strategies/default/06%20-%20ico@1x.jpg" alt="Card cap" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="btn btn-custom waves-effect waves-light">Button</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-3">
                                                    <div className="card card-border m-b-30">
                                                        <img className="card-img-top img-fluid" src="https://cdn.cryptohopper.com/images/strategies/default/06%20-%20ico@1x.jpg" alt="Card cap" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="btn btn-custom waves-effect waves-light">Button</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="settings1">
                                            <div className='row'>
                                                <div className="col-md-6 col-lg-3">
                                                    <div className="card card-border m-b-30">
                                                        <img className="card-img-top img-fluid" src="https://cdn.cryptohopper.com/images/strategies/default/06%20-%20ico@1x.jpg" alt="Card cap" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="btn btn-custom waves-effect waves-light">Button</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-3">
                                                    <div className="card card-border m-b-30">
                                                        <img className="card-img-top img-fluid" src="https://cdn.cryptohopper.com/images/strategies/default/06%20-%20ico@1x.jpg" alt="Card cap" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="btn btn-custom waves-effect waves-light">Button</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-lg-3">
                                                    <div className="card card-border m-b-30">
                                                        <img className="card-img-top img-fluid" src="https://cdn.cryptohopper.com/images/strategies/default/06%20-%20ico@1x.jpg" alt="Card cap" />
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">Some quick example text to build on the card title and make
                                                                up the bulk of the card's content.</p>
                                                            <Link to="#" className="btn btn-custom waves-effect waves-light">Button</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default StrategiesComponent