import React from 'react';
import { Link } from 'react-router-dom';


function EditUsuario() {
    return (
        <div className="container px-4 " >
            <div className="card tarjeta mt-4">
                <div className="card-header">
                    <h4> Editar Usuario</h4>
                </div>
                <form>
                    <div className="card-body ">
                        <div className="form-group">
                            <label>Usuario</label>
                            <input
                                type="name"
                                className="form-control"
                                id="Usuario"
                                placeholder="Usuario"
                            />
                        </div>
                        <div csName="form-group">
                            <div className="form-group">
                                <label>Nombre Completo</label>
                                <input
                                    type="name"
                                    className="form-control"
                                    id="nombreUsuario"
                                    placeholder="Nombre del usuario"
                                />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Correo</label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Contraseña</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Contraseña"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="form-row">
                            <Link to="/admin/Productos" className="btn btn-success btn-sm mr-1 botones"> Editar</Link>
                            <Link to="/admin/Productos" className="btn btn-danger btn-sm botones"> Cancelar</Link>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default EditUsuario
