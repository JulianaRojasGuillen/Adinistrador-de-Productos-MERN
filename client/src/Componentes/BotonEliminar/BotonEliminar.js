import './BotonEliminar.css'
import React from "react";
import axios from "axios";

const BotonEliminar = (props) =>{
    const {productId, successCallback} = props;

    const eliminarProducto = (id) =>{
        axios.delete("http://localhost:8080/api/productos/"+id)
          .then(response =>{
              alert("Producto Eliminado.");
            successCallback();
          })
          .catch(err=>{
              console.log("Error al intentar eliminar producto : " + err);
          })
    }

    return (
        <div>
            <button onClick={eliminarProducto}>Eliminar</button>
        </div>
    )
}

export default BotonEliminar;