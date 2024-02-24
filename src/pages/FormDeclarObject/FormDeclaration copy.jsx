import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DeclarContext } from '../../utils/context/DeclarObjectProvider';



function FormDeclaration({ sidebar, topNavbar, rightSidebar, footer }) {

    const { etatDeclaration, setEtat } = useContext(DeclarContext)

    const [pushBtn1, updatePushBtn1] = useState("active")
    const [pushBtn2, updatePushBtn2] = useState("trouvé")

    const [pushBtn3, updatePushBtn3] = useState("active")
    const [pushBtn4, updatePushBtn4] = useState("hier")
    const [pushBtn5, updatePushBtn5] = useState("avantHier")

    useEffect(() => {
        if (etatDeclaration === "perdu" || etatDeclaration === '') {
            updatePushBtn1("active");
            updatePushBtn2("trouvé");
        } else {
            updatePushBtn2("active");
            updatePushBtn1("perdu");
        }
    }, [etatDeclaration]);
    

    return (
        <>
            <div className="wrapper">

                {sidebar}

                {topNavbar}

                {rightSidebar}

                <div id="content-page" className="content-page">

                    <div className="container">
                        <div className="row">

                            <div className="col-sm-12">
                                <div className="card position-relative inner-page-bg bg-primary" style={{height: 150}}>
                                    <div className="inner-page-title">
                                        <h3 className="text-white">Déclaration d'objet</h3>
                                        <p className="text-white">Vous avez {etatDeclaration !== '' ? etatDeclaration : '...'} un objet</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-12">
                                <div className="card">

                                    <div className="card-header d-flex justify-content-between">
                                        <div className="header-title">
                                        <h4 className="card-title">Formulaire de déclaration</h4>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <form id="form-wizard1" className="text-center">

                                            <ul id="top-tab-list" className="p-0 row list-inline mb-4">
                                                <li className="col-lg-3 col-md-6 text-start mb-2 active" id="account">
                                                    <Link to="#">
                                                        <i className="ri-lock-unlock-line" /><span>Account</span>
                                                    </Link>
                                                </li>
                                                <li id="personal" className="col-lg-3 col-md-6 mb-2 text-start">
                                                    <Link to="#">
                                                        <i className="ri-user-fill" /><span>Personal</span>
                                                    </Link>
                                                </li>
                                                <li id="payment" className="col-lg-3 col-md-6 mb-2 text-start">
                                                    <Link to="#">
                                                        <i className="ri-camera-fill" /><span>Image</span>
                                                    </Link>
                                                </li>
                                                <li id="confirm" className="col-lg-3 col-md-6 mb-2 text-start">
                                                    <Link to="#">
                                                        <i className="ri-check-fill" /><span>Finish</span>
                                                    </Link>
                                                </li>
                                            </ul>

                                            <fieldset>
                                                <div className="form-card text-start mb-5">

                                                    <div className="row">
                                                        <div className="col-12" style={{textAlign: 'right', paddingRight: "2%"}}>
                                                            <h5 className="steps fontWeight">Étape 1 - 4</h5>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="row pt-3">
                                                        <div className="col-lg-6">
                                                            <h6 className='fontWeight mb-2'>État</h6>
                                                            <div className='d-flex justify-content-between'>
                                                                <button type="button" onClick={() => { updatePushBtn1("active"); updatePushBtn2("trouvé"); setEtat('perdu')}} style={{marginRight: "2%"}} className={"btn btn-soft-primary rounded-pill w-100 " + pushBtn1}  autoComplete="off">Perdu</button>
                                                                <button type="button" onClick={() => { updatePushBtn2("active"); updatePushBtn1("perdu"); setEtat('trouvé')}} className={"btn btn-soft-primary rounded-pill w-100 " + pushBtn2}  autoComplete="off" aria-pressed="true">Trouvé</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-10 align-items-center mt-4">
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
                                                                <div className="form-group">
                                                                    <input type="text" className="form-control rounded-pill" id="address" placeholder="Sélectionnez un réseau..." autoComplete='off' required />
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane fade" id="pills-Aeroport" role="tabpanel" aria-labelledby="pills-Aeroport-tab">
                                                                <div className="form-group">
                                                                    <input type="text" className="form-control rounded-pill" id="address" placeholder="Rechercher" autoComplete='off' required />
                                                                </div>
                                                            </div>
                                                            <div class="tab-pane fade" id="pills-Police" role="tabpanel" aria-labelledby="pills-Police-tab">
                                                                <div className="form-group">
                                                                    <input type="text" className="form-control rounded-pill" id="address" placeholder="Selectionnez une ville où un commisariat de police" autoComplete='off' required />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="row mt-4">
                                                        <div className="col-lg-12">
                                                            <h6 className='fontWeight mb-2'>Quand ?</h6>
                                                            <div className='d-flex justify-content-between '>

                                                                <div className="row w-100">
                                                                    <div class="col-sm-6 col-md-3 col-lg-3 mb-3 mb-md-0">
                                                                        <button type="button" onClick={() => { updatePushBtn3("active"); updatePushBtn4("hier"); updatePushBtn5("avantHier")}} style={{marginRight: "2%"}} className={"btn btn-soft-primary rounded-pill w-100 " + pushBtn3}  autoComplete="off">Aujourd'hui</button>
                                                                    </div>
                                                                    <div class="col-sm-6 col-md-3 col-lg-3 mb-3 mb-md-0">
                                                                        <button type="button" onClick={() => { updatePushBtn4("active"); updatePushBtn3("aujourdhui"); updatePushBtn5("avantHier")}} style={{marginRight: "2%"}} className={"btn btn-soft-primary rounded-pill w-100 " + pushBtn4}  autoComplete="off" aria-pressed="true">Hier</button>
                                                                    </div>
                                                                    <div class="col-sm-6 col-md-3 col-lg-3 mb-3 mb-md-0">
                                                                        <button type="button" onClick={() => { updatePushBtn5("active"); updatePushBtn3("aujourdhui"); updatePushBtn4("hier")}} style={{marginRight: "2%"}} className={"btn btn-soft-primary rounded-pill w-100 " + pushBtn5}  autoComplete="off" aria-pressed="true">Avant-hier</button>
                                                                    </div>
                                                                    <div class="col-sm-6 col-md-3 col-lg-3 mb-3 mb-md-0">
                                                                        <input type="datetime-local" className="form-control rounded-pill" style={{paddingLeft: "10px"}} id="nputdatetime" defaultValue="2019-12-19T13:45:00" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>

                                                {/* voici le bouton qui cause problème par rapport au problème expliqué plus haut*/}
                                                <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Next">Suivant</button>
                                            </fieldset>

                                            <fieldset>
                                                <div className="form-card text-start">
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <h3 className="mb-4">Personal Information:</h3>
                                                        </div>
                                                        <div className="col-5">
                                                            <h2 className="steps">Step 2 - 4</h2>
                                                        </div>
                                                    </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">First Name: *</label>
                                                            <input type="text" className="form-control" name="fname" placeholder="First Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Last Name: *</label>
                                                            <input type="text" className="form-control" name="lname" placeholder="Last Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Contact No.: *</label>
                                                            <input type="text" className="form-control" name="phno" placeholder="Contact No." />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="form-label">Alternate Contact No.: *</label>
                                                            <input type="text" className="form-control" name="phno_2" placeholder="Alternate Contact No." />
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Next">Suivant</button>
                                                <button type="button" name="previous" className="btn btn-dark previous action-button-previous float-end me-3" value="Previous">Précédent</button>
                                            </fieldset>

                                            <fieldset>
                                                <div className="form-card text-start">
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <h3 className="mb-4">Image Upload:</h3>
                                                        </div>
                                                        <div className="col-5">
                                                            <h2 className="steps">Step 3 - 4</h2>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Upload Your Photo:</label>
                                                        <input type="file" className="form-control" name="pic" accept="image/*" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Upload Signature Photo:</label>
                                                        <input type="file" className="form-control" name="pic-2" accept="image/*" />
                                                    </div>
                                                </div>
                                                <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Submit">Poster</button>
                                                <button type="button" name="previous" className="btn btn-dark previous action-button-previous float-end me-3" value="Previous">Précédent</button>
                                            </fieldset>

                                            <fieldset>
                                                <div className="form-card">
                                                    <div className="row">
                                                        <div className="col-7">
                                                            <h3 className="mb-4 text-left">Finish:</h3>
                                                        </div>
                                                        <div className="col-5">
                                                            <h2 className="steps">Étape 4 - 4</h2>
                                                        </div>
                                                    </div>

                                                    <br /><br />
                                                    <h2 className="text-success text-center"><strong>SUCCÈS !</strong></h2>
                                                    <br />

                                                    <div className="row justify-content-center">
                                                        <div className="col-3">
                                                            <img src="../assets/images/page-img/img-success.png" className="img-fluid" alt="fit-image" />
                                                        </div>
                                                    </div>
                                                    
                                                    <br /><br />
                                                    <div className="row justify-content-center">
                                                        <div className="col-7 text-center">
                                                            <h5 className="purple-text text-center">Vous vous êtes inscrit avec succès</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>

                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            {footer}
        </>
    );
}

export default FormDeclaration;