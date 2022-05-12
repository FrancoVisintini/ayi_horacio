const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')

const app = express()

let personajes = [
  {
    id: 1,
    nombre: "Spiderman",
    bio: "El mejor personaje de todos los tiempos",
    img: "https://i.pinimg.com/originals/f4/b6/b1/f4b6b1c8f9f8f8c8f8f8f8f8f8f8f8f8.jpg"
  }
];

//console.log(`${__dirname}/index.html`)
//console.log(path.resolve(__dirname, 'index.html'))
//app.use([ruta String,] middleware Function)
//app.use("/assets/css/*" , express.static("public"));
app.use(express.static("public"));
app.use(bodyparser.json())

/* app.get('/',(req,res) => {
  console.log(__dirname+'/index.html')
    res.sendFile(__dirname+'/index.html')
}) 
 */

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
    res.send(personajes);
})

/* app.get('/api/personajes',(req,res)=>{
  res.send("API")
}) */

app.listen(3001,console.log('app escuchando en el puerto 3001'))