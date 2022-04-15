const express = require('express');
const ProductoRouter = require('./server/rutas/rutaProducto');
const cors = require('cors');
const app = express();

require('./server/config/config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/productos",ProductoRouter);

app.listen(8080, () => {
    console.log("El servidor se encuentra corriendo en el puerto 8080.")
});

