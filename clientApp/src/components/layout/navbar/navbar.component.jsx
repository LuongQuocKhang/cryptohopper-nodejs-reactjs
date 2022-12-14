import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'

export class NavbarComponent extends Component {
    render() {

        const logout = async () => {
            AuthService.logout();
            this.props.setToken(null);
            window.location.href = "/login";
        }

        return (
            <>
                <header id="topnav">
                    <div className="topbar-main">
                        <div className="container-fluid">
                            <div className="logo">
                                <Link href="index.html" className="logo">
                                    <span className="logo-small"><i className="mdi mdi-radar"></i></span>
                                    <span className="logo-large"><i className="mdi mdi-radar"></i> Highdmin</span>
                                </Link>
                                <Link href="index.html" className="logo">
                                    <img src="/assets/images/logo_sm.png" alt="" height="26" className="logo-small" />
                                    <img src="/assets/images/logo.png" alt="" height="22" className="logo-large" />
                                </Link>
                            </div>


                            <div className="menu-extras topbar-custom">

                                <ul className="list-unstyled topbar-right-menu float-right mb-0">

                                    <li className="menu-item">
                                        <Link className="navbar-toggle nav-link" href='#'>
                                            <div className="lines">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="dropdown notification-list hide-phone">
                                        <Link className="nav-link dropdown-toggle waves-effect nav-user" data-toggle="dropdown" href="#" role="button"
                                            aria-haspopup="false" aria-expanded="false">
                                            <i className="mdi mdi-earth"></i> English  <i className="mdi mdi-chevron-down"></i>
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated">
                                            <Link href="#" className="dropdown-item">
                                                Spanish
                                            </Link>
                                            <Link href="#" className="dropdown-item">
                                                Italian
                                            </Link>
                                            <Link href="#" className="dropdown-item">
                                                French
                                            </Link>
                                            <Link href="#" className="dropdown-item">
                                                Russian
                                            </Link>

                                        </div>
                                    </li>

                                    <li className="dropdown notification-list">
                                        <Link className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button"
                                            aria-haspopup="false" aria-expanded="false">
                                            <i className="fi-bell noti-icon"></i>
                                            <span className="badge badge-danger badge-pill noti-icon-badge">4</span>
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">
                                            <div className="dropdown-item noti-title">
                                                <h6 className="m-0"><span className="float-right"><Link href="" className="text-dark"><small>Clear All</small></Link> </span>Notification</h6>
                                            </div>

                                            <div className="slimscroll" style={{maxHeight: 230}}>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon bg-success"><i className="mdi mdi-comment-account-outline"></i></div>
                                                    <p className="notify-details">Caleb Flakelar commented on Admin<small className="text-muted">1 min ago</small></p>
                                                </Link>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon bg-info"><i className="mdi mdi-account-plus"></i></div>
                                                    <p className="notify-details">New user registered.<small className="text-muted">5 hours ago</small></p>
                                                </Link>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon bg-danger"><i className="mdi mdi-heart"></i></div>
                                                    <p className="notify-details">Carlos Crouch liked <b>Admin</b><small className="text-muted">3 days ago</small></p>
                                                </Link>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon bg-warning"><i className="mdi mdi-comment-account-outline"></i></div>
                                                    <p className="notify-details">Caleb Flakelar commented on Admin<small className="text-muted">4 days ago</small></p>
                                                </Link>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon bg-purple"><i className="mdi mdi-account-plus"></i></div>
                                                    <p className="notify-details">New user registered.<small className="text-muted">7 days ago</small></p>
                                                </Link>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon bg-custom"><i className="mdi mdi-heart"></i></div>
                                                    <p className="notify-details">Carlos Crouch liked <b>Admin</b><small className="text-muted">13 days ago</small></p>
                                                </Link>
                                            </div>

                                            <Link href="#" className="dropdown-item text-center text-primary notify-item notify-all">
                                                View all <i className="fi-arrow-right"></i>
                                            </Link>

                                        </div>
                                    </li>

                                    <li className="dropdown notification-list">
                                        <Link className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button"
                                            aria-haspopup="false" aria-expanded="false">
                                            <i className="fi-speech-bubble noti-icon"></i>
                                            <span className="badge badge-dark badge-pill noti-icon-badge">6</span>
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">
                                            <div className="dropdown-item noti-title">
                                                <h6 className="m-0"><span className="float-right"><Link href="" className="text-dark"><small>Clear All</small></Link> </span>Chat</h6>
                                            </div>

                                            <div className="slimscroll" style={{maxHeight: 230}}>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon"><img src="/assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                                    <p className="notify-details">Cristina Pride</p>
                                                    <p className="text-muted font-13 mb-0 user-msg">Hi, How are you? What about our next meeting</p>
                                                </Link>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon"><img src="/assets/images/users/avatar-3.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                                    <p className="notify-details">Sam Garret</p>
                                                    <p className="text-muted font-13 mb-0 user-msg">Yeah everything is fine</p>
                                                </Link>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon"><img src="/assets/images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                                    <p className="notify-details">Karen Robinson</p>
                                                    <p className="text-muted font-13 mb-0 user-msg">Wow that's great</p>
                                                </Link>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon"><img src="/assets/images/users/avatar-5.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                                    <p className="notify-details">Sherry Marshall</p>
                                                    <p className="text-muted font-13 mb-0 user-msg">Hi, How are you? What about our next meeting</p>
                                                </Link>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon"><img src="/assets/images/users/avatar-6.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                                    <p className="notify-details">Shawn Millard</p>
                                                    <p className="text-muted font-13 mb-0 user-msg">Yeah everything is fine</p>
                                                </Link>
                                            </div>
                                            <Link href="#" className="dropdown-item text-center text-primary notify-item notify-all">
                                                View all <i className="fi-arrow-right"></i>
                                            </Link>

                                        </div>
                                    </li>

                                    <li className="dropdown notification-list">
                                        <Link className="nav-link dropdown-toggle waves-effect nav-user" data-toggle="dropdown" href="#" role="button"
                                            aria-haspopup="false" aria-expanded="false">
                                            <img src="/assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle" /> <span className="ml-1 pro-user-name">Maxine K <i className="mdi mdi-chevron-down"></i> </span>
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown">
                                            <div className="dropdown-item noti-title">
                                                <h6 className="text-overflow m-0">Welcome !</h6>
                                            </div>
                                            <Link href="#" className="dropdown-item notify-item">
                                                <i className="fi-head"></i> <span>My Account</span>
                                            </Link>
                                            <Link href="#" className="dropdown-item notify-item">
                                                <i className="fi-cog"></i> <span>Settings</span>
                                            </Link>
                                            <Link to='/wallet' className="dropdown-item notify-item">
                                                <i className="fi-help"></i> <span>Wallet</span>
                                            </Link>
                                            <Link href="#" className="dropdown-item notify-item">
                                                <i className="fi-lock"></i> <span>Lock Screen</span>
                                            </Link>
                                            <Link href="#" className="dropdown-item notify-item">
                                                <i className="fi-power"></i> <span>Logout</span>
                                            </Link>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>

                    <div className="navbar-custom">
                        <div className="container-fluid">
                            <div id="navigation">
                                <ul className="navigation-menu">
                                    <li className="has-submenu">
                                        <Link to="/"><i className="icon-speedometer"></i>Dashboard</Link>
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="/swap"><i className="icon-docs"></i>Swap</Link>
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="/tokens"><i className="icon-layers"></i>Tokens</Link>
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="/trade"><i className="icon-docs"></i>Trade</Link>
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="/signals"><i className="icon-fire"></i>Signals</Link>
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="/backtesting"><i className="icon-fire"></i>Back testing</Link>
                                    </li>
                                    <li className="has-submenu">
                                        <Link to="/strategies"><i className="icon-fire"></i>Strategies</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        )
    }
}

export default NavbarComponent