import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SwapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      firstToken : "ETH",
      secondToken: "USDT"
    }
  }

  openModel = async () => {
    this.setState({
      isOpened: !this.state.isOpened
    });
  }

  swapCurrency = async () => {
    let firstToken = this.state.firstToken;
    let secondToken = this.state.secondToken;
    this.setState({
      ...this.state,
      firstToken: secondToken,
      secondToken: firstToken
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
                  <li className="breadcrumb-item active"><Link to=''>Swap</Link></li>
                </ol>
              </div>
              <h4 className="page-title">Swap Token</h4>
            </div>
          </div>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-lg-4" >
            <div className="card-box">
              <h4 className="header-title m-b-30">Swap</h4>
              <div className="form-group row">
                <div className="col-9">
                  <input className="form-control" type="number" name="number" placeholder='0' />
                </div>

                <div className="col-2" style={{display: "contents"}}>
                  <button type="button" className="token-btn btn btn-outline-pink btn-rounded waves-effect waves-light"
                    data-toggle="modal" data-target="#from_currency" onClick={() => this.openModel()} >{this.state.firstToken}</button>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-10" style={{ textAlign: "center" }}>
                  <button type="button" className="btn btn-outline-secondary btn-rounded waves-light waves-effect"
                    onClick={() => this.swapCurrency()}>
                    <i className="mdi mdi-arrow-down"></i>
                  </button>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-9">
                  <input className="form-control" type="number" name="number" placeholder='0' />
                </div>

                <div className="col-2" style={{display: "contents"}}>
                  <button type="button" className="token-btn btn btn-outline-pink btn-rounded waves-effect waves-light"
                    data-toggle="modal" data-target="#to_currency" onClick={() => this.openModel()}>{this.state.secondToken}</button>
                </div>
              </div>
              <button type="button" className="btn btn-pink btn-rounded waves-effect waves-light" style={{ width: "100%", height: 60 }} disabled>Review swap</button>
            </div>
          </div>
        </div>

        <div id="myModal" className="modal" tabIndex="10" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
        style={{display: this.state.isOpened ? "block" : "none"}}>
          <div className="modal-dialog" style={{top: "20%", border: "solid black 1px"}}>
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={() => this.openModel()}>×</button>
                <h4 className="modal-title" id="myModalLabel">Select token</h4>
              </div>
              <div className="modal-body bordered">
                <div className="form-group row">
                  <label className="col-2 col-form-label">Search</label>
                  <div className="col-10">
                    <input type="text" className="form-control" placeholder="ETH" />
                    <span className="help-block"><small>A block of help text that breaks onto a new line and may extend beyond one line.</small></span>
                  </div>
                </div>
                <hr />
                <div className="form-group row">
                  <label className="col-2 col-form-label">Tokens</label>
                  <div className="col-10">
                    <select multiple className="form-control">
                      <option value={"ETH"}>ETH</option>
                      <option value={"BTC"}>BTC</option>
                      <option value={"USDT"}>USDT</option>
                      <option value={"USDC"}>USDC</option>
                      <option value={"BNB"}>BNB</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light waves-effect" data-dismiss="modal" onClick={() => this.openModel()}>Close</button>
                <button type="button" className="btn btn-light waves-effect" data-dismiss="modal" onClick={() => this.openModel()}>Select</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SwapComponent