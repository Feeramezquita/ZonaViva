import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../admin/styles/AddProduct.css';
import axios from 'axios';

function EditProduct(props) {
    const [productos, setProductos] = useState([]);
    const product_id = props.match.params.id;
    const history = useHistory();
    const [name, setName] = useState("");
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect(() => {
        axios.get(`/api/admin/editProduct/${product_id}`).then(response => {
            if (response.data.status === 200) {

                const producto = response.data.producto;
                const item = response.data.item;

                setName(item.nombre_item);
                setPrice(item.cuota_recuperacion);
                setQty(producto.num_productos);
                setDescription(item.descripcion_item);
                // console.log(item.nombre_item);
            }
        });
    }, []);

    function handleInputName(event) {
        setName(event.target.value);
    }
    function handleInputPrice(event) {
        setPrice(event.target.value);
    }
    function handleInputQty(event) {
        setQty(event.target.value);
    }

    function handleInputDescription(event) {
        setDescription(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(name, price, qty, description);
        axios.post(`/api/admin/updateProduct/${product_id}`,
            {
                name,
                price,
                qty,
                description
            })
            .then(response => {
                console.log(response)
                history.push('/admin/productos');
            })
    }
    return (
        <div>
            <div className="container px-4 " >
                <div className="card tarjeta mt-4">
                    <div className="card-header">
                        <h4> Editar Producto
                        </h4>
                    </div>
                    <form onSubmit={handleSubmit} enctype="multipart/form-data">
                        <div className="card-body ">
                            <div className="form-group">
                                <label>Nombre</label>
                                <input
                                    type="name"
                                    className="form-control"
                                    id="nombreProducto"
                                    required
                                    value={name}
                                    onChange={handleInputName}

                                />
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                    </div>
                                    <input
                                        type="number"
                                        step="0.01"
                                        className="form-control"
                                        required
                                        value={price}
                                        onChange={handleInputPrice}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect2">Cantidad</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    required
                                    value={qty}
                                    onChange={handleInputQty}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Descripción</label>
                                <input
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    required
                                    value={description}
                                    onChange={handleInputDescription}
                                />
                            </div>
                            {/* <div className="form-group archivo">
                                <input
                                    type="file"
                                    className="form-control-file"
                                    id="exampleFormControlFile1"
                                />
                            </div> */}
                        </div>
                        <div className="card-footer">
                            <div className="form-row">
                                <button type="submit" className="btn btn-success btn-sm mr-1 botones"> Editar</button>
                                <Link to="/admin/Productos" className="btn btn-danger btn-sm botones"> Cancelar</Link>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}

export default EditProduct
