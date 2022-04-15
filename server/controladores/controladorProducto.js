const { response } = require('express');
const Producto = require('../modelos/Producto');

const crearProducto = (request, response) => {
    Producto.create(request.body)
        .then(nuevoProducto => {
             response.statusMessage = "Producto creado exitosamente";
            return response.status(200).json({nuevoProducto});
        })
        .catch(err => {
            response.statusMessage = "Error al crear producto";
            return response.status(400).json({error:err});
        })           
}

const obtenerProductos = (request,response) => {
    Producto.find()
        .then(productos=>{
            return response.status(200).json({productos});
        })
        .catch(err=>{
            return response.status(400).json({err});
        });
}

const obtenerProductoxId = (request,reponse) => {
    Producto.findById({_id:request.params.id})
        .then(producto=>{
            return response.status(200).json(producto)
        })
        .catch(err=>{
            response.statusMessage = "Error al obtener producto por id: " + err
            return response.status(400).json({error:err});
        })
}

const editarProducto = (request,response) => {
    Producto.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
        .then(producto=>{
            return response.status(200).json(producto)
        })
        .catch(err=>{
            response.statusMessage = "Error al editar: " + err
            return response.json(err)
        });
}

const eliminarProducto = (request,response) => {
    Producto.findOneAndDelete({_id:request.params.id})
        .then(()=>{
            return response.status(204).end()
        })
        .catch(err=>{
            response.statusMessage = "Error al intentar eliminar un producto: " + err
            return response.status(400).end();
        })
}

const ControladorProducto = {
    crearProducto,
    obtenerProductos,
    obtenerProductoxId,
    editarProducto,
    eliminarProducto
};

module.exports = ControladorProducto;