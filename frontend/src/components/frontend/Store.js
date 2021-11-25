import React, { useEffect, useState } from 'react';
import Navbar from '../../layouts/frontend/Navbar';
import '../frontend/styles/Store.css';
import axios from 'axios';
import Item from './Item';


function Store() {

    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get('/api/admin/productos').then(response => { setItems(response.data) });
    }, []);

    const itemsLista = items.map(item => {
        return (
            <Item key={item.id_item} id={item.id_item}
                nombre={item.nombre_item} precio={item.cuota_recuperacion}
                cantidad={item.num_productos} />
        )
    });

    return (
        <div>
            <Navbar />
            
            <div className="container">
                <div className="row">
                    {itemsLista}
                </div>
            </div>
            
        </div>


    )
}

export default Store
