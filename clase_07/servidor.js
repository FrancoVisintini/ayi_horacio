const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const {createHash} = require("crypto")

//bcrypt - jwt
const hash = createHash("md5").update("123456").digest("hex")
console.log(hash)

//mongodb
//mongoose
//schema : una referencia del schema de validacion
//model : una referencia de las colecciones
//document : cada registro
//mongoose.model
//new mongoose.Schema
//https://mongoosejs.com/docs/guide.html
//https://mongoosejs.com/docs/queries.html

const UsuariosSchema = new mongoose.Schema({
  nombre: {
    type: String
  },
  apellido : {
    type : String
  },
  email : {
    type : String
  },
  password : {
    type : String
  }
},{
  timestamps : true
})


//Modelo de Usuarios
const Usuarios = mongoose.model('Usuarios', UsuariosSchema)





const app = express();

app.use(bodyParser.json())

app.get("/", (req, res) => {
  //db.usuarios.find()
  const usuarios = Usuarios.find()
  usuarios
  .then((resultado)=>{
    console.log(resultado)
    res.send(resultado);
  })
  .catch(()=>{
    res.status(500).send("Hubo un errror al traer los usuarios")
  })
})

app.post("/usuarios", (req, res) => {

  //const nombre = req.body.nombre
  const {nombre,apellido,email,password} = req.body

  //db.usuarios.insert({nombre:nombre})
  //const nuevo_usuario = new Usuarios({nombre:nombre})
  const nuevo_usuario = new Usuarios({nombre,apellido,email,password})
  nuevo_usuario.save()
    .then(() => {
      console.log('se guardo')
      res.send("llego")
    })
    .catch(() => {
      console.log('no se guardo')
      res.status(500).send("No se pudo almacenar")
    })
    
})


mongoose.connect("mongodb://127.0.0.1:27017/usuarios")
  .then(() => {

    console.log("conectado a mongodb");

    app.listen(3000, () => {
      console.log("servidor corriendo en el puerto 3000");
    })
  })
  .catch(err => {
    console.log(err);
  })
