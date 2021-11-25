import axios from 'axios';
import React from 'react';
import {Link, useHistory} from 'react-router-dom';

import swal from 'sweetalert';

function Navbar() {

    const history = useHistory();

    const logoutSubmit = (e) => {
        e.preventDefault();

        axios.post(`/api/logout`).then(res => {
            if(res.data.status === 200){
                localStorage.removeItem('auth_token', res.data.token);
                localStorage.removeItem('auth_name', res.data.username);
                swal("Success", res.data.message, "success");
                history.push('/');
            }
        });
    }

    var AuthButtons = '';

    if(!localStorage.getItem('auth_token')){
        AuthButtons = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul>
        )
    }else{
        AuthButtons = (
            <li className="nav-item">
                    <button type="button" onClick={logoutSubmit} className="nav-link btn btn-danger btn-sm text-white" to="/logout">Logout</button>
            </li>
        )
    }

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
                        <a className="nav-link" href="https://www.paypal.com/donate/?cmd=_donations&business=contacto@zonaviva.org&item_name=Zona%20Viva%20Huerto%20Urbano&currency_code=MXN">Donativos</a>
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