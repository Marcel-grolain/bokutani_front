import React from 'react';
import { Link } from 'react-router-dom';

function Error404(props) {
    return (
        <div className="wrapper">
            <div className="container p-0">
                <div className="row no-gutters height-self-center">
                    <div className="col-sm-12 text-center align-self-center">
                        <div className="iq-error position-relative mt-5">
                            <img src="../assets/images/error/400.png" className="img-fluid iq-error-img" alt="Error'404" />
                            <h2 className="mb-0 text-center">Oops! Cette page est introuvable.</h2>
                            <p className="text-center">La page demandée n'existe pas.</p>
                            <Link className="btn btn-primary mt-3 rounded-pill" to="/"><i className="ri-home-4-line" /> Back to Home</Link>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error404;