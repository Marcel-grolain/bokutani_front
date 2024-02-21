import React from 'react';

function MediaEvents(props) {
    return (
        
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

    );
}

export default MediaEvents;