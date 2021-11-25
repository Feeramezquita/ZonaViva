import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Acciones</div>
                    <Link className="nav-link" to="/admin/dashboard">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                        Dashboard
                    </Link>
                    <Link className="nav-link" to="/admin/productos">
                        <div className="sb-nav-link-icon"><i className="fas fa-box-open"></i></div>
                        Productos
                    </Link>
                    <Link className="nav-link" to="#">
                        <div className="sb-nav-link-icon"><i className="fas fa-users"></i></div>
                        Usuarios
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;