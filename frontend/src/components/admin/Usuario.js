import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Usuario(props) {
    const deleteUser = (event, id) => {
        event.preventDefault();

        const thisClicked = event.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.delete(`/api/admin/deleteUsuario/${id}`).then(response => {
            thisClicked.closest("tr").remove();
        });
    }
    return (
        <tr>
            <th>{props.id}</th>
            <td>{props.rol}</td>
            <td>{props.username}</td>
            <td>{props.nombre}</td>
            <td>{props.correo}</td>
            <td>
                <Link to={`/admin/EditUsuario/${props.id}`} className="btn btn-success btn-sm">Editar</Link>
            </td>
            <td>
                <button onClick={(event) => deleteUser(event, props.id)} className="btn btn-danger btn-sm">Eliminar</button>
            </td>
        </tr>
    )
}

export default Usuario
