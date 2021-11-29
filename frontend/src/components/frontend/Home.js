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
                        <h1>Nuestros productos</h1>
                        <br></br><br></br>
                        <p>No solamente ofrecemos talleres de crecimiento personal y espiritual, en Zona Viva tambien ofrecemos diversos productos que pueden ser de tu utilidad si tienes pensado comenzar con un huerto o ya tienes uno.</p>
                        <p>Si deseas conocer nuestros productos da clic en el boton.</p>
                        <a href='http://localhost:3000/store'><button id='boton'>Tienda</button></a>
                    </div>
                </div>
                <div className='informacion'>
                    <div className='texto'>
                        <br></br>
                        <h2>Conocer a nuestro equipo de trabajo:</h2>
                        <br></br>
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={process.env.PUBLIC_URL + '/imagenes/tere.png'}  class='imagenes_carrusel'></img>
                                    <div>
                                        <h3>Tere</h3>
                                        <p>Tere es una permacultora ejemplar y de corazón. Comenzó a trabajar en Zona Viva como voluntaria desde el inicio del proyecto. Hoy, Tere se encarga de gestionar los cursos, talleres y actividades que se llevan a cabo en Zona Viva.</p>
                                    </div>
                                    <br></br>
                                </div>
                                <div class="carousel-item">
                                    <img src={process.env.PUBLIC_URL + '/imagenes/joselo.png'} class='imagenes_carrusel' ></img>
                                    <div>
                                        <h3>Joselo</h3>
                                        <p>Joselo es es un experto en ecología, agricultura, y construcción sustentable. Se encarga de la siembra y recolección en Zona Viva, la construcción de bancales e invernaderos, y también imparte cursos y talleres.</p>
                                    </div>
                                    <br></br>
                                </div>
                                <div class="carousel-item">
                                    <img src={process.env.PUBLIC_URL + '/imagenes/eduardo.png'} class='imagenes_carrusel' ></img>
                                    <div>
                                        <h3>Eduardo</h3>
                                        <p>Eduardo nos ayuda a comunicar todo lo que hacemos en Zona Viva, genera contenido de manera creativa e innovadora para que más personas conozcan y se sumen al proyecto.</p>
                                    </div>
                                    <br></br>
                                </div>
                                <div class="carousel-item">
                                    <img src={process.env.PUBLIC_URL + '/imagenes/marce.png'} class='imagenes_carrusel' ></img>
                                    <div>
                                        <h3>Marce</h3>
                                        <p>Marce tuvo la visión y dedicación de gestionar un espacio público sin uso, para convertirlo en un centro de convivencia social. Actualmente es la directora del proyecto.</p>
                                    </div>
                                    <br></br>
                                </div>
                                <div class="carousel-item">
                                    <img src={process.env.PUBLIC_URL + '/imagenes/javier.png'} class='imagenes_carrusel' ></img>
                                    <div>
                                        <h3>Javier</h3>
                                        <p>Javier ha sido parte de Zona Viva desde su fundación. Opera y administra la logística del proyecto, coordina talleristas y asistentes y siempre esta buscando nuevos cursos que ofrecer.</p>
                                    </div>
                                    <br></br>
                                </div>
                                <div class="carousel-item">
                                    <img src={process.env.PUBLIC_URL + '/imagenes/sergio.png'} class='imagenes_carrusel' ></img>
                                    <div>
                                        <h3>Sergio</h3>
                                        <p>Sergio es el arquitecto del proyecto. Desde el primer día que visitó el espacio, entendió el gran potencial que tiene y desde entonces, ha trabajado día y noche para lograr el huerto urbano de nuestros sueños.</p>
                                    </div>
                                    <br></br>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <p>Si quieres ser parte de nuestro equipo, ¡escríbenos o visítanos!</p>
                </div>
                <div id='imagen2'>    
                </div>
            <Footer />
        </div>
    )
}

    
export default Home;