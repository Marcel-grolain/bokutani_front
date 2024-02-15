import React from 'react';

function Index(props) {
    return (
        <>
            {/* Wrapper Start */}
            <div className="wrapper">
            <div className="iq-sidebar  sidebar-default ">
                <div id="sidebar-scrollbar">
                <nav className="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" className="iq-menu">
                    <li className="active">
                        <a href="../dashboard/index.html" className=" "> 
                        <i className="las la-newspaper" /><span>Newsfeed</span>
                        </a>
                    </li>
                    <li className>
                        <a href="../app/profile.html" className=" ">
                        <i className="las la-user" /><span>Profile</span>
                        </a>
                    </li>
                    <li className>
                        <a href="../app/group.html" className=" ">
                        <i className="las la-users" /><span>Group</span>
                        </a>
                    </li>
                    <li className=" ">
                        <a href="../app/todo.html" className=" ">
                        <i className="las la-check-circle" /><span>Todo</span>
                        </a>
                    </li>
                    <li className=" ">
                        <a href="../dashboard/calendar.html" className=" ">
                        <i className="las la-calendar" /><span>Calendar</span>
                        </a>
                    </li>
                    <li className=" ">
                        <a href="#mailbox" data-bs-toggle="collapse" className="  collapsed" aria-expanded="false">
                        <i className="ri-mail-line" /><span>Email</span><i className="ri-arrow-right-s-line iq-arrow-right" />
                        </a>
                        <ul id="mailbox" className="iq-submenu collapse" data-bs-parent="#iq-sidebar-toggle">
                        <li className>
                            <a href="../app/email.html"><i className="  ri-inbox-line" />Inbox</a>
                        </li>
                        <li className>
                            <a href="../app/email-compose.html"><i className="ri-edit-line" />Email Compose</a>
                        </li>
                        </ul>
                    </li>
                    <li className>
                        <a href="#ui-elements" data-bs-toggle="collapse" className="  collapsed" aria-expanded="false"><i className="ri-focus-2-line" /><span>Ui-Elements</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                        <ul id="ui-elements" className="iq-submenu collapse" data-bs-parent="#iq-sidebar-toggle">
                        <li className>
                            <a href="#ui-kit" data-bs-toggle="collapse" className="  collapsed" aria-expanded="false"><i className="ri-pencil-ruler-line" /><span>UI Kit</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                            <ul id="ui-kit" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                            <li className>
                                <a href="../dashboard/ui-color.html"><i className="ri-font-color" />Colors</a>
                            </li>
                            <li className=" ">
                                <a href="../dashboard/ui-typography.html"><i className="ri-text" />Typography</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-alerts.html"><i className="ri-alert-line" />Alerts</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-badges.html"><i className="ri-building-3-line" />Badges</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-breadcrumb.html"><i className="ri-menu-2-line" />Breadcrumb</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-buttons.html"><i className="ri-checkbox-blank-line" />Buttons</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-cards.html"><i className="ri-bank-card-line" />Cards</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-carousel.html"><i className="ri-slideshow-line" />Carousel</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-embed-video.html"><i className="ri-slideshow-2-line" />Video</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-grid.html"><i className="ri-grid-line" />Grid</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-images.html"><i className="ri-image-line" />Images</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-list-group.html"><i className="ri-file-list-3-line" />list
                                Group</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-modal.html"><i className="ri-stop-mini-line" />Modal</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-notifications.html"><i className="ri-notification-line" />Notifications</a>
                            </li>
                            <li className>
                                <a href="ui-pagination.html"><i className="ri-pages-line" />Pagination</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-popovers.html"><i className="ri-folder-shield-2-line" />Popovers</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-progressbars.html"><i className="ri-battery-low-line" />Progressbars</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-tabs.html"><i className="ri-database-line" />Tabs</a>
                            </li>
                            <li className>
                                <a href="../dashboard/ui-tooltips.html"><i className="ri-record-mail-line" />Tooltips</a>
                            </li>
                            </ul>
                        </li>
                        <li className>
                            <a href="#forms" className="  collapsed" data-bs-toggle="collapse" aria-expanded="false"><i className="ri-profile-line" /><span>Forms</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                            <ul id="forms" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                            <li className>
                                <a href="../dashboard/form-layout.html"><i className="ri-tablet-line" />Form Elements</a>
                            </li>
                            <li className>
                                <a href="../dashboard/form-validation.html"><i className="ri-device-line" />Form
                                Validation</a></li>
                            <li className>
                                <a href="../dashboard/form-switch.html"><i className="ri-toggle-line" />Form Switch</a>
                            </li>
                            <li className>
                                <a href="../dashboard/form-chechbox.html"><i className="ri-checkbox-line" />Form
                                Checkbox</a></li>
                            <li className>
                                <a href="../dashboard/form-radio.html"><i className="ri-radio-button-line" />Form Radio</a>
                            </li>
                            </ul>
                        </li>
                        <li className>
                            <a href="#wizard-form" className="  collapsed" data-bs-toggle="collapse" aria-expanded="false"><i className="ri-archive-drawer-line" /><span>Forms
                                Wizard</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                            <ul id="wizard-form" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                            <li className>
                                <a href="../dashboard/form-wizard.html"><i className="ri-clockwise-line" />Simple Wizard</a>
                            </li>
                            <li className>
                                <a href="../dashboard/form-wizard-validate.html"><i className="ri-clockwise-2-line" />Validate Wizard</a>
                            </li>
                            <li className>
                                <a href="../dashboard/form-wizard-vertical.html"><i className="ri-anticlockwise-line" />Vertical Wizard</a>
                            </li>
                            </ul>
                        </li>
                        <li className>
                            <a href="#tables" className="  collapsed" data-bs-toggle="collapse" aria-expanded="false"><i className="ri-table-line" /><span>Table</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                            <ul id="tables" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                            <li className>
                                <a href="../dashboard/tables-basic.html"><i className="ri-table-line" />Basic Tables</a>
                            </li>
                            <li className>
                                <a href="../dashboard/data-table.html"><i className="ri-database-line" />Data Table</a>
                            </li>
                            <li className>
                                <a href="../dashboard/table-editable.html"><i className="ri-refund-line" />Editable Table</a></li>
                            </ul>
                        </li>
                        <li className>
                            <a href="#icons" className="  collapsed" data-bs-toggle="collapse" aria-expanded="false"><i className="ri-list-check" /><span>Icons</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                            <ul id="icons" className="iq-submenu collapse" data-bs-parent="#ui-elements">
                            <li className>
                                <a href="../dashboard/icon-fontawesome-5.html"><i className="ri-facebook-fill" />Font Awesome 5</a>
                            </li>
                            <li className>
                                <a href="../dashboard/icon-lineawesome.html"><i className="ri-keynote-line" />line Awesome</a>
                            </li>
                            <li className>
                                <a href="../dashboard/icon-remixicon.html"><i className="ri-remixicon-line" />Remixicon</a>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li className>
                        <a href="#pages" className="  collapsed" data-bs-toggle="collapse" aria-expanded="false"><i className="ri-pages-line" /><span>Pages</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                        <ul id="pages" className="iq-submenu collapse" data-bs-parent="#iq-sidebar-toggle">
                        <li className>
                            <a href="#authentication" className="  collapsed" data-bs-toggle="collapse" aria-expanded="false"><i className="ri-pages-line" /><span>Authentication</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                            <ul id="authentication" className="iq-submenu collapse" data-bs-parent="#pages">
                            <li className>
                                <a href="../dashboard/sign-in.html"><i className="ri-login-box-line" />Login</a>
                            </li>
                            <li className>
                                <a href="../dashboard/sign-up.html"><i className="ri-login-circle-line" />Register</a>
                            </li>
                            <li className>
                                <a href="../dashboard/pages-recoverpw.html"><i className="ri-record-mail-line" />Recover Password</a>
                            </li>
                            <li className>
                                <a href="../dashboard/pages-confirm-mail.html"><i className="ri-file-code-line" />Confirm Mail</a>
                            </li>
                            <li className>
                                <a href="../dashboard/pages-lock-screen.html"><i className="ri-lock-line" />Lock Screen</a>
                            </li>
                            </ul>
                        </li>
                        <li className>
                            <a href="#extra-pages" className="  collapsed" data-bs-toggle="collapse" aria-expanded="false"><i className="ri-pantone-line" /><span>Extra Pages</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                            <ul id="extra-pages" className="iq-submenu collapse" data-bs-parent="#pages">
                            <li className>
                                <a href="../dashboard/pages-timeline.html"><i className="ri-map-pin-time-line" />Timeline</a>
                            </li>
                            <li className>
                                <a href="../dashboard/pages-invoice.html"><i className="ri-question-answer-line" />Invoice</a>
                            </li>
                            <li className>
                                <a href="../dashboard/blank-page.html"><i className="ri-invision-line" />Blank Page</a>
                            </li>
                            <li className>
                                <a href="../dashboard/pages-error.html"><i className="ri-error-warning-line" />Error 404</a>
                            </li>
                            <li className>
                                <a href="../dashboard/pages-error-500.html"><i className="ri-error-warning-line" />Error 500</a>
                            </li>
                            <li className>
                                <a href="../dashboard/pages-pricing.html"><i className="ri-price-tag-line" />Pricing</a>
                            </li>
                            <li className>
                                <a href="../dashboard/pages-pricing-one.html"><i className="ri-price-tag-2-line" />Pricing 1</a>
                            </li>
                            <li className>
                                <a href="../dashboard/pages-maintenance.html"><i className="ri-archive-line" />Maintenance</a>
                            </li>
                            <li className>
                                <a href="../dashboard/pages-comingsoon.html"><i className="ri-mastercard-line" />Coming Soon</a>
                            </li>
                            <li className>
                                <a href="../dashboard/pages-faq.html"><i className="ri-compasses-line" />Faq</a>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </nav>
                <div className="p-5" />
                </div>
            </div>
            <div className="iq-top-navbar">
                <div className="iq-navbar-custom">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <div className="iq-navbar-logo d-flex justify-content-between">
                    <a href="../dashboard/index.html">
                        <img src="../assets/images/logo.png" className="img-fluid" alt />
                        <span>SocialV</span>
                    </a>
                    <div className="iq-menu-bt align-self-center">
                        <div className="wrapper-menu">
                        <div className="main-circle"><i className="ri-menu-line" /></div>
                        </div>
                    </div>
                    </div>
                    <div className="iq-search-bar device-search">
                    <form action="#" className="searchbox">
                        <a className="search-link" href="#"><i className="ri-search-line" /></a>
                        <input type="text" className="text search-input" placeholder="Search here..." />
                    </form>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                    <i className="ri-menu-3-line" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  ms-auto navbar-list">
                        <li>
                        <a href="../dashboard/index.html" className="  d-flex align-items-center">
                            <i className="ri-home-line" />
                        </a>
                        </li>
                        <li className="nav-item dropdown">
                        <a href="#" className="dropdown-toggle" id="group-drop" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ri-group-line" /></a>
                        <div className="sub-drop sub-drop-large dropdown-menu" aria-labelledby="group-drop">
                            <div className="card shadow-none m-0">
                            <div className="card-header d-flex justify-content-between bg-primary">
                                <div className="header-title">
                                <h5 className="mb-0 text-white">Friend Request</h5>
                                </div>
                                <small className="badge  bg-light text-dark ">4</small>
                            </div>
                            <div className="card-body p-0">
                                <div className="iq-friend-request">
                                <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                    <img className="avatar-40 rounded" src="../assets/images/user/01.jpg" alt />
                                    <div className="ms-3">
                                        <h6 className="mb-0 ">Jaques Amole</h6>
                                        <p className="mb-0">40 friends</p>
                                    </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                    <a href="javascript:void();" className="me-3 btn btn-primary rounded">Confirm</a>
                                    <a href="javascript:void();" className="me-3 btn btn-secondary rounded">Delete Request</a>
                                    </div>
                                </div>
                                </div>
                                <div className="iq-friend-request">
                                <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                    <img className="avatar-40 rounded" src="../assets/images/user/02.jpg" alt />
                                    <div className="ms-3">
                                        <h6 className="mb-0 ">Lucy Tania</h6>
                                        <p className="mb-0">12 friends</p>
                                    </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                    <a href="javascript:void();" className="me-3 btn btn-primary rounded">Confirm</a>
                                    <a href="javascript:void();" className="me-3 btn btn-secondary rounded">Delete Request</a>
                                    </div>
                                </div>
                                </div>
                                <div className="iq-friend-request">
                                <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                    <img className="avatar-40 rounded" src="../assets/images/user/03.jpg" alt />
                                    <div className=" ms-3">
                                        <h6 className="mb-0 ">Manny Petty</h6>
                                        <p className="mb-0">3 friends</p>
                                    </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                    <a href="javascript:void();" className="me-3 btn btn-primary rounded">Confirm</a>
                                    <a href="javascript:void();" className="me-3 btn btn-secondary rounded">Delete Request</a>
                                    </div>
                                </div>
                                </div>
                                <div className="iq-friend-request">
                                <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                    <img className="avatar-40 rounded" src="../assets/images/user/04.jpg" alt />
                                    <div className="ms-3">
                                        <h6 className="mb-0 ">Marsha Mello</h6>
                                        <p className="mb-0">15 friends</p>
                                    </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                    <a href="javascript:void();" className="me-3 btn btn-primary rounded">Confirm</a>
                                    <a href="javascript:void();" className="me-3 btn btn-secondary rounded">Delete Request</a>
                                    </div>
                                </div>
                                </div>
                                <div className="text-center">
                                <a href="#" className=" btn text-primary">View More Request</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </li>
                        <li className="nav-item dropdown">
                        <a href="#" className="search-toggle   dropdown-toggle" id="notification-drop" data-bs-toggle="dropdown">
                            <i className="ri-notification-4-line" />
                        </a>
                        <div className="sub-drop dropdown-menu" aria-labelledby="notification-drop">
                            <div className="card shadow-none m-0">
                            <div className="card-header d-flex justify-content-between bg-primary">
                                <div className="header-title bg-primary">
                                <h5 className="mb-0 text-white">All Notifications</h5>
                                </div>
                                <small className="badge  bg-light text-dark">4</small>
                            </div>
                            <div className="card-body p-0">
                                <a href="#" className="iq-sub-card">
                                <div className="d-flex align-items-center">
                                    <div className>
                                    <img className="avatar-40 rounded" src="../assets/images/user/01.jpg" alt />
                                    </div>
                                    <div className="ms-3 w-100">
                                    <h6 className="mb-0 ">Emma Watson Bni</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-0">95 MB</p>
                                        <small className="float-right font-size-12">Just Now</small>
                                    </div>
                                    </div>
                                </div>
                                </a>
                                <a href="#" className="iq-sub-card">
                                <div className="d-flex align-items-center">
                                    <div className>
                                    <img className="avatar-40 rounded" src="../assets/images/user/02.jpg" alt />
                                    </div>
                                    <div className="ms-3 w-100">
                                    <h6 className="mb-0 ">New customer is join</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-0">Cyst Bni</p>
                                        <small className="float-right font-size-12">5 days ago</small>
                                    </div>
                                    </div>
                                </div>
                                </a>
                                <a href="#" className="iq-sub-card">
                                <div className="d-flex align-items-center">
                                    <div className>
                                    <img className="avatar-40 rounded" src="../assets/images/user/03.jpg" alt />
                                    </div>
                                    <div className="ms-3 w-100">
                                    <h6 className="mb-0 ">Two customer is left</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-0">Cyst Bni</p>
                                        <small className="float-right font-size-12">2 days ago</small>
                                    </div>  
                                    </div>
                                </div>
                                </a>
                                <a href="#" className="iq-sub-card">
                                <div className="d-flex align-items-center">
                                    <div className>
                                    <img className="avatar-40 rounded" src="../assets/images/user/04.jpg" alt />
                                    </div>
                                    <div className="w-100 ms-3">
                                    <h6 className="mb-0 ">New Mail from Fenny</h6>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-0">Cyst Bni</p>
                                        <small className="float-right font-size-12">3 days ago</small>
                                    </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </li>
                        <li className="nav-item dropdown">
                        <a href="#" className="dropdown-toggle" id="mail-drop" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ri-mail-line" />
                        </a>
                        <div className="sub-drop dropdown-menu" aria-labelledby="mail-drop">
                            <div className="card shadow-none m-0">
                            <div className="card-header d-flex justify-content-between bg-primary">
                                <div className="header-title bg-primary">
                                <h5 className="mb-0 text-white">All Message</h5>
                                </div>
                                <small className="badge bg-light text-dark">4</small>
                            </div>
                            <div className="card-body p-0 ">
                                <a href="#" className="iq-sub-card">
                                <div className="d-flex  align-items-center">
                                    <div className>
                                    <img className="avatar-40 rounded" src="../assets/images/user/01.jpg" alt />
                                    </div>
                                    <div className=" w-100 ms-3">
                                    <h6 className="mb-0 ">Bni Emma Watson</h6>
                                    <small className="float-left font-size-12">13 Jun</small>
                                    </div>
                                </div>
                                </a>
                                <a href="#" className="iq-sub-card">
                                <div className="d-flex align-items-center">
                                    <div className>
                                    <img className="avatar-40 rounded" src="../assets/images/user/02.jpg" alt />
                                    </div>
                                    <div className="ms-3">
                                    <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                    <small className="float-left font-size-12">20 Apr</small>
                                    </div>
                                </div>
                                </a>
                                <a href="#" className="iq-sub-card">
                                <div className="d-flex align-items-center">
                                    <div className>
                                    <img className="avatar-40 rounded" src="../assets/images/user/03.jpg" alt />
                                    </div>
                                    <div className="ms-3">
                                    <h6 className="mb-0 ">Why do we use it?</h6>
                                    <small className="float-left font-size-12">30 Jun</small>
                                    </div>
                                </div>
                                </a>
                                <a href="#" className="iq-sub-card">
                                <div className="d-flex align-items-center">
                                    <div className>
                                    <img className="avatar-40 rounded" src="../assets/images/user/04.jpg" alt />
                                    </div>
                                    <div className="ms-3">
                                    <h6 className="mb-0 ">Variations Passages</h6>
                                    <small className="float-left font-size-12">12 Sep</small>
                                    </div>
                                </div>
                                </a>
                                <a href="#" className="iq-sub-card">
                                <div className="d-flex align-items-center">
                                    <div className>
                                    <img className="avatar-40 rounded" src="../assets/images/user/05.jpg" alt />
                                    </div>
                                    <div className="ms-3">
                                    <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                    <small className="float-left font-size-12">5 Dec</small>
                                    </div>
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                        </li>
                        <li className="nav-item dropdown">
                        <a href="#" className="   d-flex align-items-center dropdown-toggle" id="drop-down-arrow" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="../assets/images/user/1.jpg" className="img-fluid rounded-circle me-3" alt="user" />
                            <div className="caption">
                            <h6 className="mb-0 line-height">Bni Cyst</h6>
                            </div>
                        </a>
                        <div className="sub-drop dropdown-menu caption-menu" aria-labelledby="drop-down-arrow">
                            <div className="card shadow-none m-0">
                            <div className="card-header  bg-primary">
                                <div className="header-title">
                                <h5 className="mb-0 text-white">Hello Bni Cyst</h5>
                                <span className="text-white font-size-12">Available</span>
                                </div>
                            </div>
                            <div className="card-body p-0 ">
                                <a href="../app/profile.html" className="iq-sub-card iq-bg-primary-hover">
                                <div className="d-flex align-items-center">
                                    <div className="rounded card-icon bg-soft-primary">
                                    <i className="ri-file-user-line" />
                                    </div>
                                    <div className="ms-3">
                                    <h6 className="mb-0 ">My Profile</h6>
                                    <p className="mb-0 font-size-12">View personal profile details.</p>
                                    </div>
                                </div>
                                </a>
                                <a href="../app/profile-edit.html" className="iq-sub-card iq-bg-warning-hover">
                                <div className="d-flex align-items-center">
                                    <div className="rounded card-icon bg-soft-warning">
                                    <i className="ri-profile-line" />
                                    </div>
                                    <div className="ms-3">
                                    <h6 className="mb-0 ">Edit Profile</h6>
                                    <p className="mb-0 font-size-12">Modify your personal details.</p>
                                    </div>
                                </div>
                                </a>
                                <a href="../app/account-setting.html" className="iq-sub-card iq-bg-info-hover">
                                <div className="d-flex align-items-center">
                                    <div className="rounded card-icon bg-soft-info">
                                    <i className="ri-account-box-line" />
                                    </div>
                                    <div className="ms-3">
                                    <h6 className="mb-0 ">Account settings</h6>
                                    <p className="mb-0 font-size-12">Manage your account parameters.</p>
                                    </div>
                                </div>
                                </a>
                                <a href="../app/privacy-setting.html" className="iq-sub-card iq-bg-danger-hover">
                                <div className="d-flex align-items-center">
                                    <div className="rounded card-icon bg-soft-danger">
                                    <i className="ri-lock-line" />
                                    </div>
                                    <div className="ms-3">
                                    <h6 className="mb-0 ">Privacy Settings</h6>
                                    <p className="mb-0 font-size-12">Control your privacy parameters.
                                    </p>
                                    </div>
                                </div>
                                </a>
                                <div className="d-inline-block w-100 text-center p-3">
                                <a className="btn btn-primary iq-sign-btn" href="../dashboard/sign-in.html" role="button">Sign
                                    out<i className="ri-login-box-line ms-2" /></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </li>
                    </ul>               
                    </div>
                </nav>
                </div>
            </div>       <div className="right-sidebar-mini right-sidebar">
                <div className="right-sidebar-panel p-0">
                <div className="card shadow-none">
                    <div className="card-body p-0">
                    <div className="media-height p-3" data-scrollbar="init">
                        <div className="d-flex align-items-center mb-4">
                        <div className="iq-profile-avatar status-online">
                            <img className="rounded-circle avatar-50" src="../assets/images/user/01.jpg" alt />
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Anna Sthesia</h6>
                            <p className="mb-0">Just Now</p>
                        </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                        <div className="iq-profile-avatar status-online">
                            <img className="rounded-circle avatar-50" src="../assets/images/user/02.jpg" alt />
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Paul Molive</h6>
                            <p className="mb-0">Admin</p>
                        </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                        <div className="iq-profile-avatar status-online">
                            <img className="rounded-circle avatar-50" src="../assets/images/user/03.jpg" alt />
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Anna Mull</h6>
                            <p className="mb-0">Admin</p>
                        </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                        <div className="iq-profile-avatar status-online">
                            <img className="rounded-circle avatar-50" src="../assets/images/user/04.jpg" alt />
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Paige Turner</h6>
                            <p className="mb-0">Admin</p>
                        </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                        <div className="iq-profile-avatar status-online">
                            <img className="rounded-circle avatar-50" src="../assets/images/user/11.jpg" alt />
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Bob Frapples</h6>
                            <p className="mb-0">Admin</p>
                        </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                        <div className="iq-profile-avatar status-online">
                            <img className="rounded-circle avatar-50" src="../assets/images/user/02.jpg" alt />
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Barb Ackue</h6>
                            <p className="mb-0">Admin</p>
                        </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                        <div className="iq-profile-avatar status-online">
                            <img className="rounded-circle avatar-50" src="../assets/images/user/03.jpg" alt />
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Greta Life</h6>
                            <p className="mb-0">Admin</p>
                        </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                        <div className="iq-profile-avatar status-away">
                            <img className="rounded-circle avatar-50" src="../assets/images/user/12.jpg" alt />
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Ira Membrit</h6>
                            <p className="mb-0">Admin</p>
                        </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                        <div className="iq-profile-avatar status-away">
                            <img className="rounded-circle avatar-50" src="../assets/images/user/01.jpg" alt />
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Pete Sariya</h6>
                            <p className="mb-0">Admin</p>
                        </div>
                        </div>
                        <div className="d-flex align-items-center">
                        <div className="iq-profile-avatar">
                            <img className="rounded-circle avatar-50" src="../assets/images/user/02.jpg" alt />
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Monty Carlo</h6>
                            <p className="mb-0">Admin</p>
                        </div>
                        </div>
                    </div>
                    <div className="right-sidebar-toggle bg-primary text-white mt-3">
                        <i className="ri-arrow-left-line side-left-icon" />
                        <i className="ri-arrow-right-line side-right-icon"><span className="ms-3 d-inline-block">Close Menu</span></i>
                    </div>
                    </div>
                </div>
                </div>
            </div>       <div id="content-page" className="content-page">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 row m-0 p-0">
                    <div className="col-sm-12">
                        <div id="post-modal-data" className="card card-block card-stretch card-height">
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                            <h4 className="card-title">Create Post</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                            <div className="user-img">
                                <img src="../assets/images/user/1.jpg" alt="userimg" className="avatar-60 rounded-circle" />
                            </div>
                            <form className="post-text ms-3 w-100 " data-bs-toggle="modal" data-bs-target="#post-modal" action="javascript:void();">
                                <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border: 'none'}} />
                            </form>
                            </div>
                            <hr />
                            <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                            <li className="me-3 mb-md-0 mb-2">
                                <a href="#" className="btn btn-soft-primary">
                                <img src="../assets/images/small/07.png" alt="icon" className="img-fluid me-2" /> Photo/Video
                                </a>
                            </li>
                            <li className="me-3 mb-md-0 mb-2">
                                <a href="#" className="btn btn-soft-primary">
                                <img src="../assets/images/small/08.png" alt="icon" className="img-fluid me-2" /> Tag Friend
                                </a>
                            </li>
                            <li className="me-3">
                                <a href="#" className="btn btn-soft-primary">
                                <img src="../assets/images/small/09.png" alt="icon" className="img-fluid me-2" /> Feeling/Activity
                                </a>
                            </li>
                            <li>
                                <button className="btn btn-soft-primary">
                                <div className="card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                    <div className="dropdown-toggle" id="post-option" data-bs-toggle="dropdown">
                                        <i className="ri-more-fill" />
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="post-option" style={{}}>
                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Check in</a>
                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Live Video</a>
                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Gif</a>
                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Watch Party</a>
                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#post-modal">Play with Friend</a>
                                    </div>
                                    </div>
                                </div>
                                </button>
                            </li>
                            </ul>
                        </div>
                        <div className="modal fade" id="post-modal" tabIndex={-1} aria-labelledby="post-modalLabel" aria-hidden="true">
                            <div className="modal-dialog   modal-fullscreen-sm-down">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="post-modalLabel">Create Post</h5>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"><i className="ri-close-fill" /></button>
                                </div>
                                <div className="modal-body">
                                <div className="d-flex align-items-center">
                                    <div className="user-img">
                                    <img src="../assets/images/user/1.jpg" alt="userimg" className="avatar-60 rounded-circle img-fluid" />
                                    </div>
                                    <form className="post-text ms-3 w-100" action="javascript:void();">
                                    <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border: 'none'}} />
                                    </form>
                                </div>
                                <hr />
                                <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="../assets/images/small/07.png" alt="icon" className="img-fluid" /> Photo/Video</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="../assets/images/small/08.png" alt="icon" className="img-fluid" /> Tag Friend</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="../assets/images/small/09.png" alt="icon" className="img-fluid" /> Feeling/Activity</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="../assets/images/small/10.png" alt="icon" className="img-fluid" /> Check in</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="../assets/images/small/11.png" alt="icon" className="img-fluid" /> Live Video</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="../assets/images/small/12.png" alt="icon" className="img-fluid" /> Gif</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="../assets/images/small/13.png" alt="icon" className="img-fluid" /> Watch Party</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><a href="#" /><img src="../assets/images/small/14.png" alt="icon" className="img-fluid" /> Play with Friends</div>
                                    </li>
                                </ul>
                                <hr />
                                <div className="other-option">
                                    <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className="user-img me-3">
                                        <img src="../assets/images/user/1.jpg" alt="userimg" className="avatar-60 rounded-circle img-fluid" />
                                        </div>
                                        <h6>Your Story</h6>
                                    </div>
                                    <div className="card-post-toolbar">
                                        <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            <span className="btn btn-primary">Friend</span>
                                        </span>
                                        <div className="dropdown-menu m-0 p-0">
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-save-line h4" />
                                                <div className="data ms-2">
                                                <h6>Public</h6>
                                                <p className="mb-0">Anyone on or off Facebook</p>
                                                </div>
                                            </div>
                                            </a>
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-close-circle-line h4" />
                                                <div className="data ms-2">
                                                <h6>Friends</h6>
                                                <p className="mb-0">Your Friend on facebook</p>
                                                </div>
                                            </div>
                                            </a>
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-user-unfollow-line h4" />
                                                <div className="data ms-2">
                                                <h6>Friends except</h6>
                                                <p className="mb-0">Don't show to some friends</p>
                                                </div>
                                            </div>
                                            </a>
                                            <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                                <i className="ri-notification-line h4" />
                                                <div className="data ms-2">
                                                <h6>Only Me</h6>
                                                <p className="mb-0">Only me</p>
                                                </div>
                                            </div>
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary d-block w-100 mt-3">Post</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card card-block card-stretch card-height">
                        <div className="card-body">
                            <div className="user-post-data">
                            <div className="d-flex justify-content-between">
                                <div className="me-3">
                                <img className="rounded-circle img-fluid" src="../assets/images/user/01.jpg" alt />
                                </div>
                                <div className="w-100">
                                <div className="d-flex justify-content-between">
                                    <div className>
                                    <h5 className="mb-0 d-inline-block">Anna Sthesia</h5>
                                    <span className="mb-0 d-inline-block">Add New Post</span>
                                    <p className="mb-0 text-primary">Just Now</p>
                                    </div>
                                    <div className="card-post-toolbar">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        <i className="ri-more-fill" />
                                        </span>
                                        <div className="dropdown-menu m-0 p-0">
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <div className="h4">
                                                <i className="ri-save-line" />
                                            </div>
                                            <div className="data ms-2">
                                                <h6>Save Post</h6>
                                                <p className="mb-0">Add this to your saved items</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-close-circle-line h4" />
                                            <div className="data ms-2">
                                                <h6>Hide Post</h6>
                                                <p className="mb-0">See fewer posts like this.</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-user-unfollow-line h4" />
                                            <div className="data ms-2">
                                                <h6>Unfollow User</h6>
                                                <p className="mb-0">Stop seeing posts but stay friends.</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-notification-line h4" />
                                            <div className="data ms-2">
                                                <h6>Notifications</h6>
                                                <p className="mb-0">Turn on notifications for this post</p>
                                            </div>
                                            </div>
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="mt-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                            </div>
                            <div className="user-post">
                            <div className=" d-grid grid-rows-2 grid-flow-col gap-3">
                                <div className="row-span-2 row-span-md-1">
                                <img src="../assets/images/page-img/p2.jpg" alt="post-image" className="img-fluid rounded w-100" />
                                </div>
                                <div className="row-span-1">
                                <img src="../assets/images/page-img/p1.jpg" alt="post-image" className="img-fluid rounded w-100" />
                                </div>
                                <div className="row-span-1 ">
                                <img src="../assets/images/page-img/p3.jpg" alt="post-image" className="img-fluid rounded w-100" />
                                </div>
                            </div>
                            </div>
                            <div className="comment-area mt-3">
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <div className="like-block position-relative d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="like-data">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        <img src="../assets/images/icon/01.png" className="img-fluid" alt />
                                        </span>
                                        <div className="dropdown-menu py-2">
                                        <a className="ms-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Like"><img src="../assets/images/icon/01.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Love"><img src="../assets/images/icon/02.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Happy"><img src="../assets/images/icon/03.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="HaHa"><img src="../assets/images/icon/04.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Think"><img src="../assets/images/icon/05.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sade"><img src="../assets/images/icon/06.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Lovely"><img src="../assets/images/icon/07.png" className="img-fluid" alt /></a>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="total-like-block ms-2 me-3">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        140 Likes
                                        </span>
                                        <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Max Emum</a>
                                        <a className="dropdown-item" href="#">Bill Yerds</a>
                                        <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                        <a className="dropdown-item" href="#">Tara Misu</a>
                                        <a className="dropdown-item" href="#">Midge Itz</a>
                                        <a className="dropdown-item" href="#">Sal Vidge</a>
                                        <a className="dropdown-item" href="#">Other</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="total-comment-block">
                                    <div className="dropdown">
                                    <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        20 Comment
                                    </span>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Max Emum</a>
                                        <a className="dropdown-item" href="#">Bill Yerds</a>
                                        <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                        <a className="dropdown-item" href="#">Tara Misu</a>
                                        <a className="dropdown-item" href="#">Midge Itz</a>
                                        <a className="dropdown-item" href="#">Sal Vidge</a>
                                        <a className="dropdown-item" href="#">Other</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                                <a href="javascript:void();" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn"><i className="ri-share-line" />
                                    <span className="ms-1">99 Share</span></a>                           
                                </div>
                            </div>
                            <hr />
                            <ul className="post-comments list-inline p-0 m-0">
                                <li className="mb-2">
                                <div className="d-flex">
                                    <div className="user-img">
                                    <img src="../assets/images/user/02.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ms-3">
                                    <h6>Monty Carlo</h6>
                                    <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                    <div className="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                    </div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="d-flex">
                                    <div className="user-img">
                                    <img src="../assets/images/user/03.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ms-3">
                                    <h6>Paul Molive</h6>
                                    <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                    <div className="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                <input type="text" className="form-control rounded" placeholder="Enter Your Comment" />
                                <div className="comment-attagement d-flex">
                                <a href="javascript:void();"><i className="ri-link me-3" /></a>
                                <a href="javascript:void();"><i className="ri-user-smile-line me-3" /></a>
                                <a href="javascript:void();"><i className="ri-camera-line me-3" /></a>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card card-block card-stretch card-height">
                        <div className="card-body">
                            <div className="user-post-data">
                            <div className="d-flex justify-content-between">
                                <div className="me-3">
                                <img className="rounded-circle img-fluid" src="../assets/images/user/03.jpg" alt />
                                </div>
                                <div className="w-100">
                                <div className="d-flex  justify-content-between">
                                    <div className>
                                    <h5 className="mb-0 d-inline-block">Barb Ackue</h5>
                                    <span className="mb-0 d-inline-block">Added New Image in a Post</span>
                                    <p className="mb-0 text-primary">1 hour ago</p>
                                    </div>
                                    <div className="card-post-toolbar">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" id="postdata-5" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        <i className="ri-more-fill" />
                                        </span>
                                        <div className="dropdown-menu m-0 p-0" aria-labelledby="postdata-5">
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-save-line h4" />
                                            <div className="data ms-2">
                                                <h6>Save Post</h6>
                                                <p className="mb-0">Add this to your saved items</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-close-circle-line h4" />
                                            <div className="data ms-2">
                                                <h6>Hide Post</h6>
                                                <p className="mb-0">See fewer posts like this.</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-user-unfollow-line h4" />
                                            <div className="data ms-2">
                                                <h6>Unfollow User</h6>
                                                <p className="mb-0">Stop seeing posts but stay friends.</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-notification-line h4" />
                                            <div className="data ms-2">
                                                <h6>Notifications</h6>
                                                <p className="mb-0">Turn on notifications for this post</p>
                                            </div>
                                            </div>
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="mt-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                            </div>
                            <div className="user-post">
                            <a href="javascript:void();"><img src="../assets/images/page-img/p4.jpg" alt="post-image" className="img-fluid rounded w-100" /></a>
                            </div>
                            <div className="comment-area mt-3">
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <div className="like-block position-relative d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="like-data">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        <img src="../assets/images/icon/01.png" className="img-fluid" alt />
                                        </span>
                                        <div className="dropdown-menu py-2">
                                        <a className="ms-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Like"><img src="../assets/images/icon/01.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Love"><img src="../assets/images/icon/02.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Happy"><img src="../assets/images/icon/03.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="HaHa"><img src="../assets/images/icon/04.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Think"><img src="../assets/images/icon/05.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sade"><img src="../assets/images/icon/06.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Lovely"><img src="../assets/images/icon/07.png" className="img-fluid" alt /></a>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="total-like-block ms-2 me-3">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        140 Likes
                                        </span>
                                        <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Max Emum</a>
                                        <a className="dropdown-item" href="#">Bill Yerds</a>
                                        <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                        <a className="dropdown-item" href="#">Tara Misu</a>
                                        <a className="dropdown-item" href="#">Midge Itz</a>
                                        <a className="dropdown-item" href="#">Sal Vidge</a>
                                        <a className="dropdown-item" href="#">Other</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="total-comment-block">
                                    <div className="dropdown">
                                    <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        20 Comment
                                    </span>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Max Emum</a>
                                        <a className="dropdown-item" href="#">Bill Yerds</a>
                                        <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                        <a className="dropdown-item" href="#">Tara Misu</a>
                                        <a className="dropdown-item" href="#">Midge Itz</a>
                                        <a className="dropdown-item" href="#">Sal Vidge</a>
                                        <a className="dropdown-item" href="#">Other</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                                <a href="javascript:void();" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn"><i className="ri-share-line" />
                                    <span className="ms-1">99 Share</span></a>
                                </div>
                            </div>
                            <hr />
                            <ul className="post-comments list-inline p-0 m-0">
                                <li className="mb-2">
                                <div className="d-flex ">
                                    <div className="user-img">
                                    <img src="../assets/images/user/02.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ms-3">
                                    <h6>Monty Carlo</h6>
                                    <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                    <div className="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                    </div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="d-flex ">
                                    <div className="user-img">
                                    <img src="../assets/images/user/03.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ms-3">
                                    <h6>Paul Molive</h6>
                                    <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                    <div className="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                <input type="text" className="form-control rounded" placeholder="Enter Your Comment" />
                                <div className="comment-attagement d-flex">
                                <a href="javascript:void();"><i className="ri-link me-3" /></a>
                                <a href="javascript:void();"><i className="ri-user-smile-line me-3" /></a>
                                <a href="javascript:void();"><i className="ri-camera-line me-3" /></a>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card card-block card-stretch card-height">
                        <div className="card-body">
                            <div className="user-post-data">
                            <div className="d-flex justify-content-between">
                                <div className="me-3">
                                <img className="rounded-circle img-fluid" src="../assets/images/user/04.jpg" alt />
                                </div>
                                <div className="w-100">
                                <div className=" d-flex  justify-content-between">
                                    <div className>
                                    <h5 className="mb-0 d-inline-block">Ira Membrit</h5>
                                    <p className="mb-0 d-inline-block">Update her Status</p>
                                    <p className="mb-0 text-primary">6 hour ago</p>
                                    </div>
                                    <div className="card-post-toolbar">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        <i className="ri-more-fill" />
                                        </span>
                                        <div className="dropdown-menu m-0 p-0">
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-save-line h4" />
                                            <div className="data ms-2">
                                                <h6>Save Post</h6>
                                                <p className="mb-0">Add this to your saved items</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-close-circle-line h4" />
                                            <div className="data ms-2">
                                                <h6>Hide Post</h6>
                                                <p className="mb-0">See fewer posts like this.</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-user-unfollow-line h4" />
                                            <div className="data ms-2">
                                                <h6>Unfollow User</h6>
                                                <p className="mb-0">Stop seeing posts but stay friends.</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-notification-line h4" />
                                            <div className="data ms-2">
                                                <h6>Notifications</h6>
                                                <p className="mb-0">Turn on notifications for this post</p>
                                            </div>
                                            </div>
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="mt-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                            </div>
                            <div className="comment-area mt-3">
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <div className="like-block position-relative d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="like-data">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        <img src="../assets/images/icon/01.png" className="img-fluid" alt />
                                        </span>
                                        <div className="dropdown-menu py-2">
                                        <a className="ms-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Like"><img src="../assets/images/icon/01.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Love"><img src="../assets/images/icon/02.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Happy"><img src="../assets/images/icon/03.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="HaHa"><img src="../assets/images/icon/04.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Think"><img src="../assets/images/icon/05.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sade"><img src="../assets/images/icon/06.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Lovely"><img src="../assets/images/icon/07.png" className="img-fluid" alt /></a>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="total-like-block ms-2 me-3">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        140 Likes
                                        </span>
                                        <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Max Emum</a>
                                        <a className="dropdown-item" href="#">Bill Yerds</a>
                                        <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                        <a className="dropdown-item" href="#">Tara Misu</a>
                                        <a className="dropdown-item" href="#">Midge Itz</a>
                                        <a className="dropdown-item" href="#">Sal Vidge</a>
                                        <a className="dropdown-item" href="#">Other</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="total-comment-block">
                                    <div className="dropdown">
                                    <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        20 Comment
                                    </span>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Max Emum</a>
                                        <a className="dropdown-item" href="#">Bill Yerds</a>
                                        <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                        <a className="dropdown-item" href="#">Tara Misu</a>
                                        <a className="dropdown-item" href="#">Midge Itz</a>
                                        <a className="dropdown-item" href="#">Sal Vidge</a>
                                        <a className="dropdown-item" href="#">Other</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                                <a href="javascript:void();" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn"><i className="ri-share-line" />
                                    <span className="ms-1">99 Share</span></a>
                                </div>
                            </div>
                            <hr />
                            <ul className="post-comments list-inline p-0 m-0">
                                <li className="mb-2">
                                <div className="d-flex">
                                    <div className="user-img">
                                    <img src="../assets/images/user/02.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ms-3">
                                    <h6>Monty Carlo</h6>
                                    <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                    <div className="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                    </div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="d-flex ">
                                    <div className="user-img">
                                    <img src="../assets/images/user/03.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ms-3">
                                    <h6>Paul Molive</h6>
                                    <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                    <div className="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                <input type="text" className="form-control rounded" placeholder="Enter Your Comment" />
                                <div className="comment-attagement d-flex">
                                <a href="javascript:void();"><i className="ri-link me-3" /></a>
                                <a href="javascript:void();"><i className="ri-user-smile-line me-3" /></a>
                                <a href="javascript:void();"><i className="ri-camera-line me-3" /></a>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card card-block card-stretch card-height">
                        <div className="card-body">
                            <div className="post-item">
                            <div className="d-flex justify-content-between">
                                <div className="me-3">
                                <img className="rounded-circle img-fluid avatar-60" src="../assets/images/user/1.jpg" alt />
                                </div>
                                <div className="w-100">
                                <div className="d-flex justify-content-between">
                                    <div className>
                                    <h5 className="mb-0 d-inline-block">Bni Cyst</h5>
                                    <p className="ms-1 mb-0 d-inline-block">Changed Profile Picture</p>
                                    <p className="mb-0">3 day ago</p>
                                    </div>
                                    <div className="card-post-toolbar">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        <i className="ri-more-fill" />
                                        </span>
                                        <div className="dropdown-menu m-0 p-0">
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-save-line h4" />
                                            <div className="data ms-2">
                                                <h6>Save Post</h6>
                                                <p className="mb-0">Add this to your saved items</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-close-circle-line h4" />
                                            <div className="data ms-2">
                                                <h6>Hide Post</h6>
                                                <p className="mb-0">See fewer posts like this.</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-user-unfollow-line h4" />
                                            <div className="data ms-2">
                                                <h6>Unfollow User</h6>
                                                <p className="mb-0">Stop seeing posts but stay friends.</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-notification-line h4" />
                                            <div className="data ms-2">
                                                <h6>Notifications</h6>
                                                <p className="mb-0">Turn on notifications for this post</p>
                                            </div>
                                            </div>
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="user-post text-center">
                            <a href="javascript:void();"><img src="../assets/images/page-img/p5.jpg" alt="post-image" className="img-fluid rounded w-100 mt-3" /></a>
                            </div>
                            <div className="comment-area mt-3">
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <div className="like-block position-relative d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="like-data">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        <img src="../assets/images/icon/01.png" className="img-fluid" alt />
                                        </span>
                                        <div className="dropdown-menu py-2">
                                        <a className="ms-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Like"><img src="../assets/images/icon/01.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Love"><img src="../assets/images/icon/02.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Happy"><img src="../assets/images/icon/03.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="HaHa"><img src="../assets/images/icon/04.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Think"><img src="../assets/images/icon/05.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sade"><img src="../assets/images/icon/06.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Lovely"><img src="../assets/images/icon/07.png" className="img-fluid" alt /></a>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="total-like-block ms-2 me-3">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        140 Likes
                                        </span>
                                        <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Max Emum</a>
                                        <a className="dropdown-item" href="#">Bill Yerds</a>
                                        <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                        <a className="dropdown-item" href="#">Tara Misu</a>
                                        <a className="dropdown-item" href="#">Midge Itz</a>
                                        <a className="dropdown-item" href="#">Sal Vidge</a>
                                        <a className="dropdown-item" href="#">Other</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="total-comment-block">
                                    <div className="dropdown">
                                    <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        20 Comment
                                    </span>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Max Emum</a>
                                        <a className="dropdown-item" href="#">Bill Yerds</a>
                                        <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                        <a className="dropdown-item" href="#">Tara Misu</a>
                                        <a className="dropdown-item" href="#">Midge Itz</a>
                                        <a className="dropdown-item" href="#">Sal Vidge</a>
                                        <a className="dropdown-item" href="#">Other</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                                <a href="javascript:void();" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn"><i className="ri-share-line" />
                                    <span className="ms-1">99 Share</span></a>
                                </div>
                            </div>
                            <hr />
                            <ul className="post-comments list-inline p-0 m-0">
                                <li className="mb-2">
                                <div className="d-flex">
                                    <div className="user-img">
                                    <img src="../assets/images/user/02.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ms-3">
                                    <h6>Monty Carlo</h6>
                                    <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                    <div className="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                    </div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="d-flex">
                                    <div className="user-img">
                                    <img src="../assets/images/user/03.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ms-3">
                                    <h6>Paul Molive</h6>
                                    <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                    <div className="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                <input type="text" className="form-control rounded" placeholder="Enter Your Comment" />
                                <div className="comment-attagement d-flex">
                                <a href="javascript:void();"><i className="ri-link me-3" /></a>
                                <a href="javascript:void();"><i className="ri-user-smile-line me-3" /></a>
                                <a href="javascript:void();"><i className="ri-camera-line me-3" /></a>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card card-block card-stretch card-height">
                        <div className="card-body">
                            <div className="user-post-data">
                            <div className="d-flex justify-content-between">
                                <div className="me-3">
                                <img className="rounded-circle img-fluid" src="../assets/images/user/02.jpg" alt />
                                </div>
                                <div className="w-100">
                                <div className="d-flex justify-content-between">
                                    <div className>
                                    <h5 className="mb-0 d-inline-block">Paige Turner</h5>
                                    <p className="mb-0 d-inline-block">Added New Video in his Timeline</p>
                                    <p className="mb-0 text-primary">1 day ago</p>
                                    </div>
                                    <div className="card-post-toolbar">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        <i className="ri-more-fill" />
                                        </span>
                                        <div className="dropdown-menu m-0 p-0">
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-save-line h4" />
                                            <div className="data ms-2">
                                                <h6>Save Post</h6>
                                                <p className="mb-0">Add this to your saved items</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-close-circle-line h4" />
                                            <div className="data ms-2">
                                                <h6>Hide Post</h6>
                                                <p className="mb-0">See fewer posts like this.</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-user-unfollow-line h4" />
                                            <div className="data ms-2">
                                                <h6>Unfollow User</h6>
                                                <p className="mb-0">Stop seeing posts but stay friends.</p>
                                            </div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item p-3" href="#">
                                            <div className="d-flex align-items-top">
                                            <i className="ri-notification-line h4" />
                                            <div className="data ms-2">
                                                <h6>Notifications</h6>
                                                <p className="mb-0">Turn on notifications for this post</p>
                                            </div>
                                            </div>
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="mt-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                            </div>
                            <div className="user-post">
                            <div className="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/j_GsIanLxZk?rel=0" allowFullScreen />
                            </div>
                            </div>
                            <div className="comment-area mt-3">
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <div className="like-block position-relative d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="like-data">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        <img src="../assets/images/icon/01.png" className="img-fluid" alt />
                                        </span>
                                        <div className="dropdown-menu py-2">
                                        <a className="ms-2 me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Like"><img src="../assets/images/icon/01.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Love"><img src="../assets/images/icon/02.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Happy"><img src="../assets/images/icon/03.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="HaHa"><img src="../assets/images/icon/04.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Think"><img src="../assets/images/icon/05.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Sade"><img src="../assets/images/icon/06.png" className="img-fluid" alt /></a>
                                        <a className="me-2" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Lovely"><img src="../assets/images/icon/07.png" className="img-fluid" alt /></a>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="total-like-block ms-2 me-3">
                                    <div className="dropdown">
                                        <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        140 Likes
                                        </span>
                                        <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Max Emum</a>
                                        <a className="dropdown-item" href="#">Bill Yerds</a>
                                        <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                        <a className="dropdown-item" href="#">Tara Misu</a>
                                        <a className="dropdown-item" href="#">Midge Itz</a>
                                        <a className="dropdown-item" href="#">Sal Vidge</a>
                                        <a className="dropdown-item" href="#">Other</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="total-comment-block">
                                    <div className="dropdown">
                                    <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                        20 Comment
                                    </span>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Max Emum</a>
                                        <a className="dropdown-item" href="#">Bill Yerds</a>
                                        <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                        <a className="dropdown-item" href="#">Tara Misu</a>
                                        <a className="dropdown-item" href="#">Midge Itz</a>
                                        <a className="dropdown-item" href="#">Sal Vidge</a>
                                        <a className="dropdown-item" href="#">Other</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="share-block d-flex align-items-center feather-icon mt-2 mt-md-0">
                                <a href="javascript:void();" data-bs-toggle="offcanvas" data-bs-target="#share-btn" aria-controls="share-btn"><i className="ri-share-line" />
                                    <span className="ms-1">99 Share</span></a>
                                </div>
                            </div>
                            <hr />
                            <ul className="post-comments list-inline p-0 m-0">
                                <li className="mb-2">
                                <div className="d-flex flex-wrap">
                                    <div className="user-img">
                                    <img src="../assets/images/user/02.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ms-3">
                                    <h6>Monty Carlo</h6>
                                    <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                    <div className="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                    </div>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <div className="d-flex flex-wrap">
                                    <div className="user-img">
                                    <img src="../assets/images/user/03.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                                    </div>
                                    <div className="comment-data-block ms-3">
                                    <h6>Paul Molive</h6>
                                    <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                    <div className="d-flex flex-wrap align-items-center comment-activity">
                                        <a href="javascript:void();">like</a>
                                        <a href="javascript:void();">reply</a>
                                        <a href="javascript:void();">translate</a>
                                        <span> 5 min </span>
                                    </div>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                                <input type="text" className="form-control rounded" placeholder="Enter Your Comment" />
                                <div className="comment-attagement d-flex">
                                <a href="javascript:void();"><i className="ri-link me-3" /></a>
                                <a href="javascript:void();"><i className="ri-user-smile-line me-3" /></a>
                                <a href="javascript:void();"><i className="ri-camera-line me-3" /></a>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                        <div className="header-title">
                            <h4 className="card-title">Stories</h4>
                        </div>
                        </div>
                        <div className="card-body">
                        <ul className="media-story list-inline m-0 p-0">
                            <li className="d-flex mb-3 align-items-center">
                            <i className="ri-add-line" />
                            <div className="stories-data ms-3">
                                <h5>Creat Your Story</h5>
                                <p className="mb-0">time to story</p>
                            </div>
                            </li>
                            <li className="d-flex mb-3 align-items-center active">
                            <img src="../assets/images/page-img/s2.jpg" alt="story-img" className="rounded-circle img-fluid" />
                            <div className="stories-data ms-3">
                                <h5>Anna Mull</h5>
                                <p className="mb-0">1 hour ago</p>
                            </div>
                            </li>
                            <li className="d-flex mb-3 align-items-center">
                            <img src="../assets/images/page-img/s3.jpg" alt="story-img" className="rounded-circle img-fluid" />
                            <div className="stories-data ms-3">
                                <h5>Ira Membrit</h5>
                                <p className="mb-0">4 hour ago</p>
                            </div>
                            </li>
                            <li className="d-flex align-items-center">
                            <img src="../assets/images/page-img/s1.jpg" alt="story-img" className="rounded-circle img-fluid" />
                            <div className="stories-data ms-3">
                                <h5>Bob Frapples</h5>
                                <p className="mb-0">9 hour ago</p>
                            </div>
                            </li>
                        </ul>
                        <a href="#" className="btn btn-primary d-block mt-3">See All</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                        <div className="header-title">
                            <h4 className="card-title">Events</h4>
                        </div>
                        <div className="card-header-toolbar d-flex align-items-center">
                            <div className="dropdown">
                            <div className="dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                <i className="ri-more-fill h4" />
                            </div>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style={{}}>
                                <a className="dropdown-item" href="#"><i className="ri-eye-fill me-2" />View</a>
                                <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill me-2" />Delete</a>
                                <a className="dropdown-item" href="#"><i className="ri-pencil-fill me-2" />Edit</a>
                                <a className="dropdown-item" href="#"><i className="ri-printer-fill me-2" />Print</a>
                                <a className="dropdown-item" href="#"><i className="ri-file-download-fill me-2" />Download</a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card-body">
                        <ul className="media-story list-inline m-0 p-0">
                            <li className="d-flex mb-4 align-items-center ">
                            <img src="../assets/images/page-img/s4.jpg" alt="story-img" className="rounded-circle img-fluid" />
                            <div className="stories-data ms-3">
                                <h5>Web Workshop</h5>
                                <p className="mb-0">1 hour ago</p>
                            </div>
                            </li>
                            <li className="d-flex align-items-center">
                            <img src="../assets/images/page-img/s5.jpg" alt="story-img" className="rounded-circle img-fluid" />
                            <div className="stories-data ms-3">
                                <h5>Fun Events and Festivals</h5>
                                <p className="mb-0">1 hour ago</p>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                        <div className="header-title">
                            <h4 className="card-title">Upcoming Birthday</h4>
                        </div>
                        </div>
                        <div className="card-body">
                        <ul className="media-story list-inline m-0 p-0">
                            <li className="d-flex mb-4 align-items-center">
                            <img src="../assets/images/user/01.jpg" alt="story-img" className="rounded-circle img-fluid" />
                            <div className="stories-data ms-3">
                                <h5>Anna Sthesia</h5>
                                <p className="mb-0">Today</p>
                            </div>
                            </li>
                            <li className="d-flex align-items-center">
                            <img src="../assets/images/user/02.jpg" alt="story-img" className="rounded-circle img-fluid" />
                            <div className="stories-data ms-3">
                                <h5>Paul Molive</h5>
                                <p className="mb-0">Tomorrow</p>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                        <div className="header-title">
                            <h4 className="card-title">Suggested Pages</h4>
                        </div>
                        <div className="card-header-toolbar d-flex align-items-center">
                            <div className="dropdown">
                            <div className="dropdown-toggle" id="dropdownMenuButton01" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                <i className="ri-more-fill h4" />
                            </div>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton01">
                                <a className="dropdown-item" href="#"><i className="ri-eye-fill me-2" />View</a>
                                <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill me-2" />Delete</a>
                                <a className="dropdown-item" href="#"><i className="ri-pencil-fill me-2" />Edit</a>
                                <a className="dropdown-item" href="#"><i className="ri-printer-fill me-2" />Print</a>
                                <a className="dropdown-item" href="#"><i className="ri-file-download-fill me-2" />Download</a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="card-body">
                        <ul className="suggested-page-story m-0 p-0 list-inline">
                            <li className="mb-3">
                            <div className="d-flex align-items-center mb-3">
                                <img src="../assets/images/page-img/42.png" alt="story-img" className="rounded-circle img-fluid avatar-50" />
                                <div className="stories-data ms-3">
                                <h5>Iqonic Studio</h5>
                                <p className="mb-0">Lorem Ipsum</p>
                                </div>
                            </div>
                            <img src="../assets/images/small/img-1.jpg" className="img-fluid rounded" alt="Responsive image" />
                            <div className="mt-3"><a href="#" className="btn d-block"><i className="ri-thumb-up-line me-2" /> Like Page</a></div>
                            </li>
                            <li className>
                            <div className="d-flex align-items-center mb-3">
                                <img src="../assets/images/page-img/42.png" alt="story-img" className="rounded-circle img-fluid avatar-50" />
                                <div className="stories-data ms-3">
                                <h5>Cakes &amp; Bakes </h5>
                                <p className="mb-0">Lorem Ipsum</p>
                                </div>
                            </div>
                            <img src="../assets/images/small/img-2.jpg" className="img-fluid rounded" alt="Responsive image" />
                            <div className="mt-3"><a href="#" className="btn d-block"><i className="ri-thumb-up-line me-2" /> Like Page</a></div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-12 text-center">
                    <img src="../assets/images/page-img/page-load-loader.gif" alt="loader" style={{height: 100}} />
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* Wrapper End*/}
            
        </>
    );
}

export default Index;