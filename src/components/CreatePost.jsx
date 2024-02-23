import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DeclarContext } from '../utils/context/DeclarObjectProvider';

function CreatePost(props) {

    const { setEtat } = useContext(DeclarContext);

    return (
        
        <div className="col-sm-12">
            <div id="post-modal-data" className="card card-block card-stretch card-height">
                <div className="card-header d-flex justify-content-between">
                    <div className="header-title">
                        <h4 className="card-title">Déclarer un Objet</h4>
                    </div>
                </div>
                
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <div className="user-img">
                            <img src="../assets/images/user/1.jpg" alt="userimg" className="avatar-60 rounded-circle" />
                        </div>

                        <div className="post-text ms-3 w-100 " >
                            <div className="home-message mb-2">
                                <h5 classname="card-title" style={{ fontWeight: "500", fontSize: "18px" }}><p className='text-primary'>Un objet perdu se transforme <br />souvent en objet trouvé !</p></h5>
                            </div>
                            <div className="">
                                <h5 classname="card-title" style={{ fontWeight: "500", fontSize: "12px" }}>Vous avez perdu ou trouvé un objet ? Déclarez-le <br />et la communauté se mobilise pour vous aider à le retrouver.</h5>
                            </div>
                        </div>

                        {/* 
                            <form className="post-text ms-3 w-100 " data-bs-toggle="modal" data-bs-target="#post-modal" action="javascript:void();">
                                <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border: 'none'}} />
                            </form>
                        */}

                    </div>
                    <hr />

                    <ul className="post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                        <div className="d-flex justify-content-between w-100">
                            <div className="d-flex">
                                <li className="me-3 mb-md-0 mb-2">
                                    <Link to="/declaration" onClick={() => setEtat('perdu')} className="btn btn-soft-primary rounded-pill ">
                                        <img src="../assets/images/small/perdu.png" alt="icon" className="img-fluid me-2" /> J'ai Perdu
                                    </Link>
                                </li>
                                <li className="me-3 mb-md-0 mb-2">
                                    <Link to="/declaration" onClick={() => setEtat('trouvé')} className="btn btn-soft-success rounded-pill">
                                        <img src="../assets/images/small/trouve.png" alt="icon" className="img-fluid me-2" /> J'ai Trouvé
                                    </Link>
                                </li>
                            </div>

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
                        </div>
                    </ul>
                </div>

                <div className="modal fade" id="post-modal" tabIndex={-1} aria-labelledby="post-modalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen-sm-down">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="post-modalLabel">Déclaration d'objet</h5>
                                <button type="button" className="btn btn-secondary rounded-circle" data-bs-dismiss="modal"><i className="ri-close-fill" /></button>
                            </div>
                            
                            <div className="modal-body">

                                <div className="align-items-center">
                                    <h6 className='fontWeight mb-2'>État</h6>

                                    <div className='d-flex list-inline'>
                                        <li className="me-3 mb-md-0 mb-2">
                                                <a href="#" className="btn btn-soft-primary rounded-pill">
                                                    <img src="../assets/images/small/perdu.png" alt="icon" className="img-fluid me-2" /> Perdu
                                                </a>
                                        </li>
                                        <li className="me-3 mb-md-0 mb-2">
                                            <a href="#" className="btn btn-soft-success rounded-pill">
                                                <img src="../assets/images/small/trouve.png" alt="icon" className="img-fluid me-2" /> Trouvé
                                            </a>
                                        </li>
                                    </div>

                                </div>

                                <div className="align-items-center mt-4">
                                    <h6 className='fontWeight mb-2'>Où</h6>

                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist"> 
                                        <li className="nav-item">
                                            <a className="nav-link active rounded-pill" id="pills-Adresse-tab" data-bs-toggle="pill" href="#pills-Adresse" role="tab" aria-controls="pills-Adresse" aria-selected="true">Adresse</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link rounded-pill" id="pills-Transport-tab" data-bs-toggle="pill" href="#pills-Transport" role="tab" aria-controls="pills-Transport" aria-selected="false">Transport</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link rounded-pill" id="pills-Aeroport-tab" data-bs-toggle="pill" href="#pills-Aeroport" role="tab" aria-controls="pills-Aeroport" aria-selected="false">Aéroport</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link rounded-pill" id="pills-Police-tab" data-bs-toggle="pill" href="#pills-Police" role="tab" aria-controls="pills-Police" aria-selected="false">Mairie / Police</a>
                                        </li>
                                    </ul>

                                    <div class="tab-content" id="pills-tabContent-2">
                                        <div class="tab-pane fade show active" id="pills-Adresse" role="tabpanel" aria-labelledby="pills-Adresse-tab">
                                            <div className="form-group">
                                                <input type="text" className="form-control rounded-pill" id="address" placeholder="Saisissez l'adresse de la perte / travaille" autoComplete='off' required />
                                            </div>
                                         </div>
                                        <div class="tab-pane fade" id="pills-Transport" role="tabpanel" aria-labelledby="pills-Transport-tab">
                                            <p>Transport - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div class="tab-pane fade" id="pills-Aeroport" role="tabpanel" aria-labelledby="pills-Aeroport-tab">
                                            <p>Aeroport - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div class="tab-pane fade" id="pills-Police" role="tabpanel" aria-labelledby="pills-Police-tab">
                                            <p>Police - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                    </div>


                                </div>

                                <div className="align-items-center mt-4">
                                    <h6 className='fontWeight mb-2'>Quand ?</h6>

                                    <div className='d-flex list-inline'>
                                        <li className="me-3 mb-md-0 mb-2">
                                                <a href="#" className="btn btn-soft-primary rounded-pill" style={{paddingLeft: "20px", paddingRight: "20px"}}>Aujourd'hui</a>
                                        </li>
                                        <li className="me-3 mb-md-0 mb-2">
                                            <a href="#" className="btn btn-soft-success rounded-pill" style={{paddingLeft: "30px", paddingRight: "30px"}}>Hier</a>
                                        </li>
                                        <li className="me-3 mb-md-0 mb-2">
                                            <a className="btn btn-soft-dark rounded-pill" style={{paddingLeft: "20px", paddingRight: "20px" }}>Avant-hier</a>
                                        </li>
                                        <li className="me-3 mb-md-0 mb-2">
                                            <div className='form-group'>
                                                <input type="datetime-local" className="form-control rounded-pill" style={{paddingLeft: "10px"}} id="nputdatetime" defaultValue="2019-12-19T13:45:00" />
                                            </div>
                                        </li>
                                    </div>

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