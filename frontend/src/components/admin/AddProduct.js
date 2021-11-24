import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../admin/styles/AddProduct.css';
import axios from 'axios';

function AddProduct() {
    const [producto, setProducto] = useState([]);
    const history = useHistory();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [description, setDescription] = useState("");

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
        axios.post('/api/admin/anadirProductos',
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
        <div className="container px-4 " >
            <div className="card tarjeta mt-4">
                <div className="card-header">
                    <h4> Añadir Producto
                    </h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="card-body ">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                                type="name"
                                className="form-control"
                                id="nombreProducto"
                                placeholder="Nombre del producto"
                                name="name"
                                onChange={handleInputName}
                                value={name}
                            />
                        </div>
                        <div className="form-group">
                            <label>Precio</label>
                            <div className="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">$</span>
                                </div>
                                <input
                                    type="text"
                                    class="form-control"
                                    aria-label="Amount (to the nearest dollar)"
                                    name="price"
                                    onChange={handleInputPrice}
                                    value={price}
                                />
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect2">Cantidad</label>
                            <input
                                type="number"
                                class="form-control"
                                name="qty"
                                onChange={handleInputQty}
                                value={qty}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Descripción</label>
                            <input
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={3}
                                name="description"
                                onChange={handleInputDescription}
                                value={description}
                            />
                        </div>
                        <div className="form-group archivo">
                            <input
                                type="file"
                                className="form-control-file"
                                id="exampleFormControlFile1"
                            />
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="form-row">
                            <button type="submit" className="btn btn-primary btn-sm mr-1 botones"> Añadir</button>
                            <Link to="/admin/Productos" className="btn btn-danger btn-sm botones"> Cancelar</Link>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default AddProduct
