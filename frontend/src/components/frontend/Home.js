import React from 'react';
import Footer from '../../layouts/frontend/Footer';
import Navbar from '../../layouts/frontend/Navbar'

import '../frontend/styles/Home.css';

function Home(){
    return(
        
        <div>
            <Navbar />
            <div id='imagen1'>
                
                </div>
                <div className='informacion'>
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <h1>BIENVENIDOS A ZONA VIVA</h1>
                    <br></br><br></br><br></br><br></br>
                    <p className='texto'>
                        Un espacio comunitario e inclusivo, que busca regenerar el tejido social e impulsar una cultura pacífica y consciente a través 
                        de proyectos de permacultura, la construcción de un huerto urbano comunitario y un espacio en donde impartir conocimientos que 
                        permitan el buen vivir en el futuro para la humanidad.
                    </p>
                    <br></br>
                    <p className='texto'>
                    Somos un proyecto que demuestra como es posible lograr una transformación positiva en la sociedad a través de la unión de voluntades 
                    y del trabajo en comunidad, tomando nuestro entorno como prioridad. Una solución alternativa a la problemática ambiental en nuestro días.
                    </p>
                    <br></br><br></br><br></br><br></br>
                </div>
                <div className='cursos'>
                    <div className='texto'>
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                        <h1></h1>
                        <br></br><br></br>
                        <p></p>
                        <button id='boton'></button>
                    </div>
                </div>
                <div id='imagen2'>
                    
                </div>
            <Footer />
        </div>
    )
}

    
export default Home;