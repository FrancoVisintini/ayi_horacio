const mongoose = require('mongoose');

const ProductosSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
    imagen: String,
    categoria: String
},{
    timestamps: true
})

const ProductosModel = mongoose.model('Productos',ProductosSchema)

module.exports = ProductosModel