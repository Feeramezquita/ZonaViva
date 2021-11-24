import React from 'react';
import { Link } from 'react-router-dom';


function Producto(props) {
    return (
        <tr>
            <th>{props.id}</th>
            <td>{props.nombre}</td>
            <td>{props.precio}</td>
            <td>{props.cantidad}</td>
            <td>
                <Link to={`/admin/EditProduct/${props.id}`} className="btn btn-success btn-sm">Editar</Link>
            </td>
            <td>
                <Link to="#" className="btn btn-danger btn-sm">Eliminar</Link>
            </td>
        </tr>
    )
}

export default Producto
