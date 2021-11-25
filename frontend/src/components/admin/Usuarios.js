import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Usuario from './Usuario';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        axios.get('/api/admin/usuarios').then(response => { setUsuarios(response.data) });
        console.log(usuarios);
    }, []);

    const usuariosLista = usuarios.map(usuarios => {
        return (
            <Usuario key={usuarios.id_users} id={usuarios.id_users}
                rol={usuarios.nombre_rol} username={usuarios.username}
                nombre={usuarios.nombre_apellido} correo={usuarios.email}/>
        )
    });

    return (
        < div className="container px-4" >
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Usuarios
                        <Link to="/admin/AddUsuario" className="btn btn-primary btn-sm float-end"> Nuevo Usuario</Link>
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
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuariosLista}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Usuarios
