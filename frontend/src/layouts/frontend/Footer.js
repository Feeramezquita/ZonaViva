import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; ZonaViva</div>
                            <div>
                                <Link to="#">Politica de Privacidad</Link>
                                &middot;
                                <Link to="#">Terminos &amp; Condiciones</Link>
                            </div>
                        </div>
                    </div>
                </footer>
    );
}

export default Footer;