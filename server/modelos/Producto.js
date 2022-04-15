const mongoose = require('mongoose');

const SchemaProducto = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Title is required."],
        minlength: [2, "Title must have at least 2 characters."]
    },
    price:{
        type:Number,
        required:[true,"Price is required."],
        min: [0, "Price must be min 0."]
    },
    description:{
        type:String,
        required:[true,"Description is required."],
        minlength: [2, "Description must have at least 2 characters."]
    }
}, {timestamps:true})

const Producto = mongoose.model("productos",SchemaProducto);

module.exports = Producto;