const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/producto_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Base de datos conectada."))
    .catch(err => console.log("Hubo un error al conectarse a la base de datos.", err));