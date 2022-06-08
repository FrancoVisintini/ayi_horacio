const express = require('express');
const { getAllProductsController , createProductController , editProductController , deleteProductController } = require('../controllers/ProductosController');



const app = express.Router() //app es middleware

app.get("/",getAllProductsController)

app.post("/",createProductController)

app.put("/",editProductController)

app.delete("/",deleteProductController)


module.exports = app;