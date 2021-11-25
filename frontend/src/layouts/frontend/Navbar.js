import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow stick-top">
            <Link className="navbar-brand" to="/home">ZonaViva</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">Inicio <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/nosotros">¿Quienes somos?</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/store">Tienda</Link>
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
                    <li className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></Link>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><Link className="dropdown-item" to="#!">Perfil</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item" to="#!">Logout</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;