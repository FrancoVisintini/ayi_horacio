const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const rutasProductos = require('./routes/ProductosRutas');

const app = express()
const PORT = process.env.PORT || 5000


//WEBSERVER CONFIG
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


//WEBSERVER ROUTES
app.use("/productos",rutasProductos)


//DB CONNECTION
mongoose.connect("mongodb://localhost:27017/test")
.then(()=>{
    console.log("Connected to mongodb")
})


//WEBSERVER LISTEN
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})