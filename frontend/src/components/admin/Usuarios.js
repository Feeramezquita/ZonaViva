import React from 'react'
import { Link } from 'react-router-dom';

function Usuarios() {
    return (
        < div className="container px-4" >
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Usuarios
                        <Link to="/admin/AddProduct" className="btn btn-primary btn-sm float-end"> Nuevo Producto</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Rol</th>
                                <th>Username</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Contraseña</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Admin</td>
                                <td>fersito</td>
                                <td>Fernando Amezquita</td>
                                <td>Fer@outlook.com</td>
                                <td>1234456</td>
                                <td>
                                    <Link to="/admin/EditUsuario" className="btn btn-success btn-sm">Editar</Link>
                                </td>
                                <td>
                                    <Link to="#" className="btn btn-danger btn-sm">Eliminar</Link>
                                </td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Cliente</td>
                                <td>Jesusito</td>
                                <td>Jesus </td>
                                <td>Jesus@outlook.com</td>
                                <td>12345</td>
                                <td>

                                    <Link to="#" className="btn btn-success btn-sm">Editar</Link>
                                </td>
                                <td>
                                    <Link to="#" className="btn btn-danger btn-sm">Eliminar</Link>
                                </td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Cliente</td>
                                <td>Alexito</td>
                                <td>Alex</td>
                                <td>Alex@outlook.com</td>
                                <td>23232124</td>
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

    )
}

export default Usuarios
