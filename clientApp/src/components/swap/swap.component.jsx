import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SwapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    }
  }

  openModel = async () => {
    this.setState({
      isOpened: !this.state.isOpened
    });
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

                <div className="col-2">
                  <button type="button" className="token-btn btn btn-outline-pink btn-rounded waves-effect waves-light"
                    data-toggle="modal" data-target="#from_currency" onClick={() => this.openModel()} >ETH</button>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-10" style={{ textAlign: "center" }}>
                  <button type="button" className="btn btn-outline-secondary btn-rounded waves-light waves-effect"><i className="mdi mdi-arrow-down"></i></button>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-9">
                  <input className="form-control" type="number" name="number" placeholder='0' />
                </div>

                <div className="col-2">
                  <button type="button" className="token-btn btn btn-outline-pink btn-rounded waves-effect waves-light"
                    data-toggle="modal" data-target="#to_currency">USDT</button>
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
                <h4 className="modal-title" id="myModalLabel">Modal Heading</h4>
              </div>
              <div className="modal-body bordered">
                <h6>Text in a modal</h6>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                <hr />
                <h6>Overflowing text to show scroll behavior</h6>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light waves-effect" data-dismiss="modal" onClick={() => this.openModel()}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SwapComponent