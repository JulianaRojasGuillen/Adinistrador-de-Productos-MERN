const express = require ('express');
const ControladorProducto = require('./../controladores/controladorProducto');

const ProductoRouter = express.Router();

ProductoRouter.get("/", ControladorProducto.obtenerProductos);
ProductoRouter.post("/nuevo", ControladorProducto.crearProducto);
ProductoRouter.get("/:id", ControladorProducto.obtenerProductoxId);
ProductoRouter.put("/:id",ControladorProducto.editarProducto);
ProductoRouter.delete("/:id",ControladorProducto.eliminarProducto);

module.exports = ProductoRouter;
