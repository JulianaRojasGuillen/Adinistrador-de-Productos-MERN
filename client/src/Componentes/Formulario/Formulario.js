import './Formulario.css';
import React from 'react';
import { useState } from 'react';

const Formulario = (props) =>{

    const {productoInicial, submitAction} = props;

    const [producto, setProducto] = useState(productoInicial);

    const cambiarDatos = (e) => {
        setProducto({
            ...producto,
          [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        submitAction(producto);
        setProducto(productoInicial);
    }

    return (
        <div>
            <h1>
                    Product Manager
            </h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='title'>Title: </label>
                    <input  type='text' id='title' name='title'
                            value = {producto.title}
                            onChange={cambiarDatos}/>
                                 
                </div>
                <div>
                    <label htmlFor='price'>Price: </label>
                    <input  type='text' id='price' name='price'
                            value={producto.price}
                            onChange={cambiarDatos}/>
                </div>
                <div>
                    <label htmlFor='description'>Description: </label>
                    <textarea   id='description' name='description'
                                value={producto.description}
                                onChange={cambiarDatos}/>
                </div>
                <button type='submit'>
                    Create
                </button>
            </form>
        </div>
    );
};

export default Formulario;