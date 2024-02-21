import React from 'react';

function UpcomingBirthday(props) {
    return (
        
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

    );
}

export default UpcomingBirthday;