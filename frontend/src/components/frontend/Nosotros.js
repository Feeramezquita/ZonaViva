import React from 'react';
import Footer from '../../layouts/frontend/Footer';
import Navbar from '../../layouts/frontend/Navbar';
import '../frontend/styles/Nosotros.css';

function Nosotros() {
    return (
        <div><Navbar />
        <div id='nosotros'>
        <h1 className='texto'>Nuestra Historia</h1>
        <p></p>
        <img className='imagen' src='https://static.wixstatic.com/media/2d47c8_d4c82e24a02b42ffbf6a275634395ce7~mv2.jpg/v1/fill/w_450,h_253,al_c,q_80,usm_0.66_1.00_0.01/DJI_0253.webp'></img>
        <br></br>
        <p className='texto'>
            Hace un par de años, en lo que antes era un terreno abandonado y habitado por la delincuencia, en la colonia la Joya en 
            Querétaro, nació Zona Viva. Un proyecto que ha logrado recuperar un espacio que dañaba a la comunidad que lo rodeaba para 
            convertirlo en un espacio de paz, armonía y comunidad.
        </p><br></br>
        <p className='texto'> 
            Para lograr esto, estamos construyendo un huerto urbano, en el que 
            cultivamos alimentos con prácticas agro-ecológicas responsables y amigables con el medio ambiente, sin la necesidad de usar 
            químicos industrializados ni desperdiciar agua. De hecho, uno de los pilares fundamentales del proyecto es la regeneración 
            del suelo: lo que hace unos años se consideraba tierra pobre en nutrientes, hoy es tierra fértil en la que casi cualquier 
            planta puede crecer.
        </p > <br></br>
        <p className='texto'>
            También impartimos diversos cursos y talleres en el espacio, de crecimiento personal y espiritual, 
            permaculturales, de agroecología, artístico-culturales, entre otros, con los que buscamos educar y concientizar a la población 
            del reto que enfrentamos como especie ante un inminente colapso del sistema y el ritmo de vida tan acelerado que llevamos, 
            conocimientos que hagan posible un buen vivir en el futuro para la humanidad. 
        </p> <br></br>
        <p className='texto'>
            Zona Viva busca ser un agente de cambio, un 
            proyecto que demuestre que es posible lograr una transformación positiva en la sociedad a través de la unión de voluntades y 
            del trabajo en comunidad. Una solución alternativa a la problemática ambiental en nuestro días.
        </p> <br></br>
        <p className='texto'>
            Aún nos falta mucho para lograrlo, pero estamos convencidos que, con tu ayuda, podremos lograrlo en menos tiempo y con mayor 
            impacto. Te invitamos a ser parte de este gran proyecto, inscribiéndote a nuestros talleres, como voluntarix o compartiendo y 
            difundiendo lo que estamos haciendo en el espacio. Cualquier ayuda significa mucho para nosotros y como antes se ha demostrado, 
            la verdadera unión hace la fuerza. 
        </p> <br></br>
    </div>
    <Footer />
    </div>
    )
}

export default Nosotros
