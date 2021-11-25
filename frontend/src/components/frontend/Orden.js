import React, { useEffect, useState } from 'react';
import Navbar from '../../layouts/frontend/Navbar';
import { Link } from 'react-router-dom';


function Orden(props) {

    function handleSubmit(event) {
    }
    console.log(props);
    return (
        <div>
            <Navbar />
            <div className="container px-4 " >
            <div className="card tarjeta mt-4">
                <div className="card-header">
                    <h4> Comprar
                    </h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="card-body ">
                        <div className="form-group">
                            <label>Nombre</label>
                        </div>
                        <div className="form-group">
                            <label>Precio</label>
                            <div className="input-group">
                                
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Descripción</label>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect2">Cantidad Deseada</label>
                            <input
                                type="number"
                                class="form-control"
                                name="qty"
                            />
                        </div>
                        {/* <div className="form-group archivo">
                            <input
                                type="file"
                                className="form-control-file"
                                id="exampleFormControlFile1"
                            />
                        </div> */}
                    </div>
                    <div className="card-footer">
                        <div className="form-row">
                            <button type="submit" className="btn btn-primary btn-sm mr-1 botones"> Añadir</button>
                            <Link to="/admin/Productos" className="btn btn-danger btn-sm botones"> Cancelar</Link>
                        </div>
                    </div>
                </form>

            </div>
        </div>
        </div>

    )
}

export default Orden
