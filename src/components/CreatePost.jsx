import React from 'react';

function CreatePost(props) {
    return (
        
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

    );
}

export default CreatePost;