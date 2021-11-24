import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


function Producto(props) {
    const deleteProduct = (event, id) => {
        event.preventDefault();

        const thisClicked = event.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.delete(`/api/admin/deleteProduct/${id}`).then(response => {
            thisClicked.closest("tr").remove();
        });
    }

    return (
        <tr>
            <th>{props.id}</th>
            <td>{props.nombre}</td>
            <td>{"$" + props.precio}</td>
            <td>{props.cantidad}</td>
            <td>
                <Link to={`/admin/EditProduct/${props.id}`} className="btn btn-success btn-sm">Editar</Link>
            </td>
            <td>
                <button onClick={(event) => deleteProduct(event, props.id)} className="btn btn-danger btn-sm">Eliminar</button>
            </td>
        </tr>
    )
}

export default Producto
