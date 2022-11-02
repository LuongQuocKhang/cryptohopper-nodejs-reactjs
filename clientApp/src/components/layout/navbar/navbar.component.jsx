import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavbarComponent extends Component {
    render() {
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
                                    <img src="assets/images/logo_sm.png" alt="" height="26" className="logo-small" />
                                    <img src="assets/images/logo.png" alt="" height="22" className="logo-large" />
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
                                                    <div className="notify-icon"><img src="assets/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                                    <p className="notify-details">Cristina Pride</p>
                                                    <p className="text-muted font-13 mb-0 user-msg">Hi, How are you? What about our next meeting</p>
                                                </Link>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon"><img src="assets/images/users/avatar-3.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                                    <p className="notify-details">Sam Garret</p>
                                                    <p className="text-muted font-13 mb-0 user-msg">Yeah everything is fine</p>
                                                </Link>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon"><img src="assets/images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                                    <p className="notify-details">Karen Robinson</p>
                                                    <p className="text-muted font-13 mb-0 user-msg">Wow that's great</p>
                                                </Link>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon"><img src="assets/images/users/avatar-5.jpg" className="img-fluid rounded-circle" alt="" /> </div>
                                                    <p className="notify-details">Sherry Marshall</p>
                                                    <p className="text-muted font-13 mb-0 user-msg">Hi, How are you? What about our next meeting</p>
                                                </Link>
                                                <Link href="#" className="dropdown-item notify-item">
                                                    <div className="notify-icon"><img src="assets/images/users/avatar-6.jpg" className="img-fluid rounded-circle" alt="" /> </div>
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
                                            <img src="assets/images/users/avatar-1.jpg" alt="user" className="rounded-circle" /> <span className="ml-1 pro-user-name">Maxine K <i className="mdi mdi-chevron-down"></i> </span>
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
                                            <Link href="#" className="dropdown-item notify-item">
                                                <i className="fi-help"></i> <span>Support</span>
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
                                        <Link href="index.html"><i className="icon-speedometer"></i>Dashboard</Link>
                                    </li>

                                    <li className="has-submenu">
                                        <Link href="#"><i className="icon-layers"></i>Apps</Link>
                                        <ul className="submenu">
                                            <li><Link href="apps-calendar.html">Calendar</Link></li>
                                            <li><Link href="apps-tickets.html">Tickets</Link></li>
                                            <li><Link href="apps-taskboard.html">Task Board</Link></li>
                                            <li><Link href="apps-task-detail.html">Task Detail</Link></li>
                                            <li><Link href="apps-contacts.html">Contacts</Link></li>
                                            <li><Link href="apps-projects.html">Projects</Link></li>
                                            <li><Link href="apps-companies.html">Companies</Link></li>
                                            <li><Link href="apps-file-manager.html">File Manager</Link></li>
                                        </ul>
                                    </li>

                                    <li className="has-submenu">
                                        <Link href="#"><i className="icon-briefcase"></i>UI Elements</Link>
                                        <ul className="submenu megamenu">
                                            <li>
                                                <ul>
                                                    <li><Link href="ui-typography.html">Typography</Link></li>
                                                    <li><Link href="ui-cards.html">Cards</Link></li>
                                                    <li><Link href="ui-buttons.html">Buttons</Link></li>
                                                    <li><Link href="ui-modals.html">Modals</Link></li>
                                                    <li><Link href="ui-spinners.html">Spinners</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <ul>
                                                    <li><Link href="ui-ribbons.html">Ribbons</Link></li>
                                                    <li><Link href="ui-tooltips-popovers.html">Tooltips & Popover</Link></li>
                                                    <li><Link href="ui-checkbox-radio.html">Checkboxs-Radios</Link></li>
                                                    <li><Link href="ui-tabs.html">Tabs</Link></li>
                                                    <li><Link href="ui-progressbars.html">Progress Bars</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <ul>
                                                    <li><Link href="ui-notifications.html">Notification</Link></li>
                                                    <li><Link href="ui-grid.html">Grid</Link></li>
                                                    <li><Link href="ui-sweet-alert.html">Sweet Alert</Link></li>
                                                    <li><Link href="ui-bootstrap.html">Bootstrap UI</Link></li>
                                                    <li><Link href="ui-range-slider.html">Range Slider</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="has-submenu">
                                        <Link href="#"><i className="icon-fire"></i>Components</Link>
                                        <ul className="submenu">
                                            <li className="has-submenu">
                                                <Link href="#">Email</Link>
                                                <ul className="submenu">
                                                    <li><Link href="email-inbox.html">Inbox</Link></li>
                                                    <li><Link href="email-read.html">Read Email</Link></li>
                                                    <li><Link href="email-compose.html">Compose Email</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="widgets.html">Widgets</Link>
                                            </li>
                                            <li className="has-submenu">
                                                <Link href="#">Charts</Link>
                                                <ul className="submenu">
                                                    <li><Link href="chart-flot.html">Flot Chart</Link></li>
                                                    <li><Link href="chart-morris.html">Morris Chart</Link></li>
                                                    <li><Link href="chart-google.html">Google Chart</Link></li>
                                                    <li><Link href="chart-chartist.html">Chartist Chart</Link></li>
                                                    <li><Link href="chart-chartjs.html">Chartjs Chart</Link></li>
                                                    <li><Link href="chart-sparkline.html">Sparkline Chart</Link></li>
                                                    <li><Link href="chart-knob.html">Jquery Knob</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu">
                                                <Link href="#">Forms</Link>
                                                <ul className="submenu">
                                                    <li><Link href="form-elements.html">Form Elements</Link></li>
                                                    <li><Link href="form-advanced.html">Form Advanced</Link></li>
                                                    <li><Link href="form-validation.html">Form Validation</Link></li>
                                                    <li><Link href="form-pickers.html">Form Pickers</Link></li>
                                                    <li><Link href="form-wizard.html">Form Wizard</Link></li>
                                                    <li><Link href="form-mask.html">Form Masks</Link></li>
                                                    <li><Link href="form-summernote.html">Summernote</Link></li>
                                                    <li><Link href="form-wysiwig.html">Wysiwig Editors</Link></li>
                                                    <li><Link href="form-x-editable.html">X Editable</Link></li>
                                                    <li><Link href="form-uploads.html">Multiple File Upload</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu">
                                                <Link href="#">Icons</Link>
                                                <ul className="submenu">
                                                    <li><Link href="icons-materialdesign.html">Material Design</Link></li>
                                                    <li><Link href="icons-dripicons.html">Dripicons</Link></li>
                                                    <li><Link href="icons-fontawesome.html">Font awesome</Link></li>
                                                    <li><Link href="icons-feather.html">Feather Icons</Link></li>
                                                    <li><Link href="icons-simpleline.html">Simple Line Icons</Link></li>
                                                </ul>
                                            </li>

                                            <li className="has-submenu">
                                                <Link href="#">Tables</Link>
                                                <ul className="submenu">
                                                    <li><Link href="tables-basic.html">Basic Tables</Link></li>
                                                    <li><Link href="tables-datatable.html">Data Tables</Link></li>
                                                    <li><Link href="tables-responsive.html">Responsive Table</Link></li>
                                                    <li><Link href="tables-tablesaw.html">Tablesaw Tables</Link></li>
                                                    <li><Link href="tables-foo.html">Foo Tables</Link></li>
                                                </ul>
                                            </li>

                                            <li className="has-submenu">
                                                <Link href="#">Maps</Link>
                                                <ul className="submenu">
                                                    <li><Link href="maps-google.html">Google Maps</Link></li>
                                                    <li><Link href="maps-vector.html">Vector Maps</Link></li>
                                                    <li><Link href="maps-mapael.html">Mapael Maps</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="has-submenu">
                                        <Link href="#"><i className="icon-docs"></i>Pages</Link>
                                        <ul className="submenu megamenu">
                                            <li>
                                                <ul>
                                                    <li><Link href="page-starter.html">Starter Page</Link></li>
                                                    <li><Link href="page-login.html">Login</Link></li>
                                                    <li><Link href="page-register.html">Register</Link></li>
                                                    <li><Link href="page-logout.html">Logout</Link></li>
                                                    <li><Link href="page-recoverpw.html">Recover Password</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <ul>
                                                    <li><Link href="page-lock-screen.html">Lock Screen</Link></li>
                                                    <li><Link href="page-confirm-mail.html">Confirm Mail</Link></li>
                                                    <li><Link href="page-404.html">Error 404</Link></li>
                                                    <li><Link href="page-404-alt.html">Error 404-alt</Link></li>
                                                    <li><Link href="page-500.html">Error 500</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="has-submenu">
                                        <Link href="#"><i className="icon-present"></i>Extra Pages</Link>
                                        <ul className="submenu megamenu">
                                            <li>
                                                <ul>
                                                    <li><Link href="extras-timeline.html">Timeline</Link></li>
                                                    <li><Link href="extras-profile.html">Profile</Link></li>
                                                    <li><Link href="extras-invoice.html">Invoice</Link></li>
                                                    <li><Link href="extras-faq.html">FAQ</Link></li>
                                                    <li><Link href="extras-pricing.html">Pricing</Link></li>
                                                    <li><Link href="extras-email-template.html">Email Templates</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <ul>
                                                    <li><Link href="extras-ratings.html">Ratings</Link></li>
                                                    <li><Link href="extras-search-results.html">Search Results</Link></li>
                                                    <li><Link href="extras-gallery.html">Gallery</Link></li>
                                                    <li><Link href="extras-maintenance.html">Maintenance</Link></li>
                                                    <li><Link href="extras-coming-soon.html">Coming Soon</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
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