import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Producto from './Producto';

function Productos() {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        axios.get('/api/admin/productos')
            .then(response => { setProductos(response.data) });
    }, []);

    const productosLista = productos.map(producto => {
        return (
            <Producto key={producto.id_item} id={producto.id_item}
                nombre={producto.nombre_item} precio={producto.cuota_recuperacion}
                cantidad={producto.num_productos} />
        )
    });

    return (
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Productos
                        <Link to="/admin/AddProduct" className="btn btn-primary btn-sm float-end"> Nuevo Producto</Link>
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
                            {productosLista}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Productos
