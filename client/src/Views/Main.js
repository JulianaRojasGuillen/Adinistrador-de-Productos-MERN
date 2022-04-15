import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Formulario from '../Componentes/Formulario/Formulario';
import Lista from '../Componentes/Lista/Lista';
import { response } from 'express';
import EditarProducto from '../Componentes/EditarProducto/EditarProducto';
import ProductoDetalle from '../Componentes/ProductoDetalle/ProductoDetalle';

const Main = () => {

        const productoInicial = {
            title: '',
            price: 0,
            description: ''
        }

        const[cargado, setCargado] = useState(true);
        const[productos, setProductos] = useState([]);

        useEffect(()=>{
            //if(cargado) {
                axios.get("http://localhost:8080/api/productos")
                .then(response=>{
                    setProductos((prev) => response.data);
                })
                .catch(err=>{
                    console.log("ocurrio un error Main useeffect :"+err);
                });
                //setCargado(false);
            //}
        },[]);

        const crearProducto = (producto) =>{
            axios.post("http://localhost:8080/api/productos/nuevo", producto)
                .then( (response) => {
                    alert("Se ha creado un nuevo producto");
                    setCargado(true);
                    setProductos(prev => [...prev,response.data]);
                })
                .catch( err => {
                console.log ("Error crear producto Main: " + err);
                });
        }

        const editarProducto = (e) =>{
            const id = e.target.id.value;
            const datosaActualizar = {
              titulo: e.target.titulo.value,
              precio:e.target.precio.value,
              descripcion:e.target.descripcion.value
            }
        
            axios.put("http://localhost:8080/api/productos/"+id,datosaActualizar)
              .then(response => {
                let productosActualizados = [...listaProductos];
                const indice = productosActualizados.findIndex((producto) => producto._id === id);
                productosActualizados[indice] = response.data;
                setListaProductos(productosActualizados);
              })
          }
          
        return (
            <div>
                <Formulario productoInicial={productoInicial} submitAction = {crearProducto}/> 
                <Lista productos = {productos} setProductos={setProductos}/>
            </div>
        );
}

export default Main;