import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function AddUsuario() {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rol, setRol] = useState("4");
    const [password, setPassword] = useState("");

    function handleInputUsername(event) {
        setUsername(event.target.value);
    }

    function handleInputName(event) {
        setName(event.target.value);
    }

    function handleInputEmail(event) {
        setEmail(event.target.value);
    }

    function handleInputRol(event) {
        setRol(event.target.value);
    }


    function handleInputPassword(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(username, name, email, rol, password);
        axios.post('/api/admin/anadirUsuarios',
            {
                username,
                name,
                email,
                rol,
                password
            })
            .then(response => {
                console.log(response)
                history.push('/admin/usuarios');
            })
    }

    return (
        <div className="container px-4 " >
            <div className="card tarjeta mt-4">
                <div className="card-header">
                    <h4> Añadir Usuario </h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="card-body ">
                        <div className="form-group">
                            <label>Usuario</label>
                            <input
                                type="name"
                                className="form-control"
                                id="Usuario"
                                placeholder="Usuario"
                                required
                                onChange={handleInputUsername}
                                value={username}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nombre Completo</label>
                            <input
                                type="name"
                                className="form-control"
                                id="nombreUsuario"
                                placeholder="Nombre del usuario"
                                required
                                onChange={handleInputName}
                                value={name}
                            />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Correo</label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="name@example.com"
                                required
                                onChange={handleInputEmail}
                                value={email}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputState">Rol</label>
                            <select id="inputState" className="form-control" required onChange={handleInputRol}>
                                <option value="4">Usuario</option>
                                <option value="1">Administrador</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Contraseña</label>
                            <input
                                type="password"
                                class="form-control"
                                id="rol"
                                placeholder="Contraseña"
                                required
                                onChange={handleInputPassword}
                                value={password}
                            />
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="form-row">
                            <button type="submit" className="btn btn-primary btn-sm mr-1 botones"> Añadir</button>
                            <Link to="/admin/usuarios" className="btn btn-danger btn-sm botones"> Cancelar</Link>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default AddUsuario
