import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow stick-top">
            <Link className="navbar-brand" to="#">ZonaViva</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/home">Inicio <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/store">Tienda</Link>
                    <Link className="nav-link" to="/nosotros">¿Quienes somos?</Link>
                </li>
               
                <li className="nav-item">
                    <Link className="nav-link" to="#">Donativos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contactanos">Contactos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
                </ul>
            </div>
            </nav>
    );
}

export default Navbar;