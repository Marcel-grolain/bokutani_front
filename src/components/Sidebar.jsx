import React from 'react';

function Sidebar(props) {
    return (

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
    );
}

export default Sidebar;