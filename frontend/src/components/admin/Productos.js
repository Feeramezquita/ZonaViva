import React from 'react';
import { Link } from 'react-router-dom';


function Productos() {
    return (
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Productos
                        <Link to="#" className="btn btn-primary btn-sm float-end"> Nuevo Producto</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Flores</td>
                                <td>$50</td>
                                <td>2 pieza</td>
                                <td>
                                    <Link to="#" className="btn btn-success btn-sm">Editar</Link>
                                </td>
                                <td>
                                    <Link to="#" className="btn btn-danger btn-sm">Eliminar</Link>
                                </td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Pasto</td>
                                <td>$100</td>
                                <td>5 pieza</td>
                                <td>

                                    <Link to="#" className="btn btn-success btn-sm">Editar</Link>
                                </td>
                                <td>
                                    <Link to="#" className="btn btn-danger btn-sm">Eliminar</Link>
                                </td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Tierra</td>
                                <td>$20</td>
                                <td>100 pieza</td>
                                <td>
                                    <Link to="#" className="btn btn-success btn-sm">Editar</Link>
                                </td>
                                <td>
                                    <Link to="#" className="btn btn-danger btn-sm">Eliminar</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Productos
