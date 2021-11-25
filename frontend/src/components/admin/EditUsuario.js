import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';


function EditUsuario(props) {
    const user_id = props.match.params.id;
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rol, setRol] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        axios.get(`/api/admin/editUsuario/${user_id}`).then(response => {
            if (response.data.status === 200) {

                const user = response.data.user;

                setUsername(user.username);
                setName(user.nombre_apellido);
                setEmail(user.email);
                setRol(user.id_rol);
                setPassword(user.password);

                // console.log(username);
            }
        });
    }, []);
    // console.log(usuario_id);


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
        axios.post(`/api/admin/updateUsuario/${user_id}`,
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
                    <h4> Editar Usuario</h4>
                </div>
                <form onSubmit={handleSubmit} enctype="multipart/form-data">
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
                            <button type="submit" className="btn btn-primary success btn-sm mr-1 botones"> Editar</button>
                            <Link to="/admin/usuarios" className="btn btn-danger btn-sm botones"> Cancelar</Link>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default EditUsuario
