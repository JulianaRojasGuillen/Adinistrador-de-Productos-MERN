import React from "react";
import axios from "axios";
import BotonEliminar from "../BotonEliminar/BotonEliminar";

const ProductoDetalle = (props) =>{
    const productoSeleccionado = props.listaProductos.find( (producto, indice) => producto._id === props.match.params.id);

    return(
        (productoSeleccionado) ? 
        (<div>
            <h1>{productoSeleccionado.titulo}</h1>
            <p>Precio: {productoSeleccionado.precio}</p>
            <p>Descripción: {productoSeleccionado.descripcion}</p>
            <BotonEliminar id={productoSeleccionado._id} successCallback={() => props.history.push("/")} />
        </div>):<div>Producto no encontrado</div>
    )
}

export default ProductoDetalle;