import React from 'react';

function PageStory(props) {
    return (
        
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

    );
}

export default PageStory;