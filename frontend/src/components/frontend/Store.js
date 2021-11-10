import React from 'react'
import Navbar from '../../layouts/frontend/Navbar';
import '../frontend/styles/Store.css';



function Store() {
    return (
        <div>
            <Navbar />
            <div className="row px-5 pt-5">
                <div className="col-md-4 mt-4 mt-sm-0 card-container">
                    <div className="card text-center product p-4 pt-5 border-0 h-100 rounded-0">
                        <img
                            className="img-fluid d-block mx-auto"
                            src="https://raw.githubusercontent.com/solodev/bootstrap-cards-shopping-cart/master/images/gear-glasses.jpg"
                            alt="Pilot Aviator Glasses Gear Image"
                        />
                        <div className="card-body p-4 py-0 h-xs-440p">
                            <h5 className="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">
                                Pilot Aviator Glasses
                            </h5>
                            <p className="price">$45.00</p>
                        </div>
                        <p className="btn w-100 px-4 mx-auto">
                            <input
                                type="submit"
                                className="btn btn-dark btn-lg w-100"
                                name="add-button"
                                defaultValue="Buy Now"
                            />
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mt-4 mt-sm-0 card-container">
                    <div className="card text-center product p-4 pt-5 border-0 h-100 rounded-0">
                        <img
                            className="img-fluid d-block mx-auto"
                            src="https://raw.githubusercontent.com/solodev/bootstrap-cards-shopping-cart/master/images/gear-hat.jpg"
                            alt="Command Hats Gear Image"
                        />
                        <div className="card-body p-4 py-0 h-xs-440p">
                            <h5 className="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">
                                Command Hats
                            </h5>
                            <p className="price">$15.00</p>
                        </div>
                        <p className="btn w-100 px-4 text-center mx-auto">
                            <input
                                type="submit"
                                className="btn btn-dark btn-lg w-100"
                                name="add-button"
                                defaultValue="Buy Now"
                            />
                        </p>
                    </div>
                </div>
                <div className="col-md-4 mt-4 mt-sm-0 card-container">
                    <div className="card text-center product p-4 pt-5 border-0 h-100 rounded-0">
                        <img
                            className="img-fluid d-block mx-auto"
                            src="https://raw.githubusercontent.com/solodev/bootstrap-cards-shopping-cart/master/images/gear-tshirt.jpg"
                            alt="Mission T-Shirts Gear Image"
                        />
                        <div className="card-body p-4 py-0 h-xs-440p">
                            <h5 className="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">
                                Mission T-Shirts
                            </h5>
                            <p className="price">$25.00</p>
                        </div>
                        <p className="btn w-100 px-4 mx-auto">
                            <input
                                type="submit"
                                className="btn btn-dark btn-lg w-100"
                                name="add-button"
                                defaultValue="Buy Now"
                            />
                        </p>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Store
