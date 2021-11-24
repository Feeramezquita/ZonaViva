import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../admin/styles/AddProduct.css';
import axios from 'axios';


function EditProduct(props) {

    const product_id = props.match.params.id;
    axios.get(`/api/admin/editarProductos/${product_id}`).then(res => {
        console.log(res.data.item);
    });
    return (
        <div>
            <div className="container px-4 " >
                <div className="card tarjeta mt-4">
                    <div className="card-header">
                        <h4> Editar Producto
                        </h4>
                    </div>
                    <form>
                        <div className="card-body ">
                            <div className="form-group">
                                <label>Nombre</label>
                                <input
                                    type="name"
                                    className="form-control"
                                    id="nombreProducto"
                                    placeholder=""
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
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Descripción</label>
                                <textarea
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows={3}
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
                                <Link to="/admin/Productos" className="btn btn-success btn-sm mr-1 botones"> Editar</Link>
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
