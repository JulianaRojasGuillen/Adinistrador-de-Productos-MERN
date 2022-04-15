import './Lista.css';
import React, { useEffect} from 'react';
import { useState } from 'react';
import axios from 'axios';
import BotonEliminar from '../BotonEliminar/BotonEliminar';
import {Link} from 'react-router-dom';


const Lista = (props) => {

    const {productos, setProductos} = props;
    console.log("productos de Lista: " + productos);
    
    useEffect(() => {
        axios.get("http://localhost:8080/api/productos")
            .then(response => {
                setProductos((prev) => response.data)
            })
            .catch(err => console.log(err));
    },[])

    const successCallBack = (productId) =>{
        setProductos(productos.filter(producto => producto._id !== productId));
    }
    
    return(
        <div>
            <h1> Lista de Productos </h1>
            {
                productos.map((producto, index) => {
                    return (
                    <div key={"prod_"+index}>
                        <Link to={`/${producto._id}`}>
                            {producto.title}
                        </Link>
                        {/* <BotonEliminar id={producto._id} successCallBack={() => successCallBack(producto._id)}/> */}
                    </div>)
                    })
            }
        </div>
    )

}

export default Lista;