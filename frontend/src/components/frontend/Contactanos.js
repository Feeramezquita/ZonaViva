import React from 'react';
import Footer from '../../layouts/frontend/Footer';
import Navbar from '../../layouts/frontend/Navbar';
import '../frontend/styles/Contactanos.css';

function Contactanos() {
    return (
        <div>
            <Navbar />
            <div id='contenido'>
                
                <div>
                    <br></br><br></br><br></br>
                    <h1>Ponte en contacto</h1>
                    <p>Nos encantaria saber lo que piensas de nosotros. Contactanos si tienes alguna pregunta o peticion especial.</p>
                    <h5>Nuestra ubicacion</h5>
                    <p>Prudencia Griffel #629, La Joya, 76180 Santiago de Querétaro, Qro., Mexico</p>
                    <h5>Nuestra correo electronico</h5>
                    <p>contacto@zonaviva.org</p>
                    <h5>Nuestras redes</h5>
                    <div id='imagenes'>
                        <a href='https://www.facebook.com/ZonaVivaQRO/'><img src='https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01/Facebook.webp'></img></a>
                        <a href='https://www.instagram.com/zonavivahuertourbano/?hl=es'><img src='https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_33,h_33,al_c,q_85,usm_0.66_1.00_0.01/Instagram.webp'></img></a>
                    </div>
                    <br></br>
                    <div id='texto' >
                        <p>Si deseas que te contactemos, favor de ingresar tus datos y enviarnoslos</p>    
                        <input placeholder='Nombre'></input>
                        <br></br><br></br>
                        <input type='email' placeholder='Email'></input>
                        <br></br><br></br>
                        <input placeholder='Asunto'></input>
                        <br></br><br></br>
                        <input placeholder='Escribe tu mensaje...'></input>
                        <br></br><br></br>
                    </div>
                    <button>Enviar</button>
                    <br></br><br></br>
                </div>
                <div id='mapa'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29885.348508199826!2d-100.42006679923483!3d20.560737549211144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3454025b3fb7b%3A0x9836f86d8c3e07cb!2sPrudencia%20Griffel%2C%20La%20Joya%2C%2076180%20Santiago%20de%20Quer%C3%A9taro%2C%20Qro.!5e0!3m2!1ses-419!2smx!4v1636396381584!5m2!1ses-419!2smx" ></iframe>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contactanos
