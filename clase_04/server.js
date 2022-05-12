const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')

const app = express()

let personajes = [];

//console.log(`${__dirname}/index.html`)
//console.log(path.resolve(__dirname, 'index.html'))
//app.use([ruta String,] middleware Function)
//app.use("/assets/css/*" , express.static("public"));
app.use(express.static("public"));
app.use(bodyparser.json())

app.get('/',(req,res) => {
    res.sendFile(__dirname+'/index.html')
}) 


//appication/x-www-form-urlencoded
//bodyPrser.urlencoded({extended: false})
//nombre=Juan&apellido=Perez

app.delete('/personajes/:id', (req,res) => {
    const echado = Number(req.params.id);
    personajes = personajes.filter((personaje)=>{
      return personaje.id !== echado
    })
    res.send({mensaje: 'personaje eliminado', data: personajes, error: false})
}) 


app.post('/personajes', (req,res)=>{

    //Object Property Shorthand
    /* const nombre = "horacio"
    const persona = { nombre : nombre }
    const persona = { nombre } */

    let {nombre} = req.body;
    personajes.push({nombre, id: personajes.length+1});
    res.send({mensaje :'personaje agregado',data :personajes,error:false})
})

app.get('/personajes',(req,res)=>{
    res.send({data:personajes});
})

app.listen(8080,console.log('app escuchando en el puerto 8080'))