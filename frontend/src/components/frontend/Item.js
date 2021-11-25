import React from 'react';
import { Link } from 'react-router-dom';
import Orden from './Orden';


function Item(props) {

    return (
                <div className="col-md-4 mt-4 mt-sm-0 card-container">
                    <div className="card text-center product p-4 pt-5 border-0 h-100 rounded-0">
                        <img
                            className="img-fluid d-block mx-auto"
                            src="https://raw.githubusercontent.com/solodev/bootstrap-cards-shopping-cart/master/images/gear-glasses.jpg"
                            alt="Pilot Aviator Glasses Gear Image"
                        />
                        <div className="card-body p-4 py-0 h-xs-440p">
                            <h5 className="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">
                                {props.nombre}
                            </h5>
                            <p className="price">${props.precio}</p>
                        </div>
                        <div>
                        </div>
                        <p className="btn w-100 px-4 mx-auto">
                            <Link to='/orden' className="btn btn-secondary">Comprar</Link>
                        </p>
                    </div>
                </div>

    )
}

export default Item