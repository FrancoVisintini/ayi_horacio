//import express from "express"
const express = require("express")
const validator = require("validator")
const bodyParser = require("body-parser")
//https://www.npmjs.com/package/validator
const cookieParser = require("cookie-parser")

//https://www.npmjs.com/package/cookie-parser

const app = express()

//Middleware 
//app.use(()=>{})
/* 
app.use((req, res, next) => {
  console.log("Request received")
  next()
}) 
*/

app.use(express.static("public"))
app.use(bodyParser.json())
app.use(cookieParser())

//app.use(bodyParser.urlencoded({ extended: false }))

//ABM - CRUD - Create Read Update Delete
//GET - POST - PUT - PATCH - DELETE ...
//InstanciaDeExpress.<metodoDeHTTP>(string|array|RegEx,function([error,]request,response[,next]){})
/* app.get("/", (req, res) => {
  //res.send("<h1>Hola mundo</h1>")
  //res.send({x:1})
  //res.send([{x:1},{x:2}])
  //res.json([{x:1},{x:2}])
  //res.json({x:1})
  res.sendfile(__dirname + "/index.html")
})
 */



/* 
app.post()

app.delete()

app.put() 
*/

/* 
app.get("/usuario/:id",(req,res)=>{


  //?x=1&y=2 / MIME TYPE : application/www-x-form-urlencoded

  //   /usuarios
  //   /usuarios/1

  //console.log(req.query.booleano)
  //Object.keys(req.query).length > 2
  //Number(req.query.x)

  //validator.<metodo>(string[,options])
  //console.log(validator.isNumeric(req.query.x))
  //console.log(validator.isAlpha(req.query.x))

  //console.log(req.params)

  console.log(req.headers)

  console.log(req.get("accept"))


  //req.query
  //req.params
  res.sendFile(__dirname + "/index.html")
}) */

/* /\d{1,2}\.\d{3}.\d{3}/ */

/**
 * 
 * ESPECIALES LUGAR
 * 
 * ESPECIALES GRUPO
 * 
 * ESPECIALES CANTIDAD
 * 
 */

/* app.get(/usuarios\/\d/,(req,res)=>{ 
  res.sendFile(__dirname + "/index.html")
}) */


/* 

podria coincidir con usuar o usuarios

app.get("/usuar(ios)?",()=>{

}) 

*/




/* 

app.post("/usuarios",(req,res)=>{

  
  req.on("data",(data)=>{
    console.log(data)
  })
 

  console.log(req.body)

  res.json({ok:true})
}) 

*/


app.get("/",(req,res)=>{
  //res.set("Content-Type","text/plain")
  //res.set("test","true")
  //console.log(req.cookies)
  //console.log(req.headers.cookie)
  //res.cookie("test","true",{ maxAge: 1000 * 60 * 60 * 24 * 365 })
  //res.send("<h1>Hola mundo</h1>")
  //res.writeHead(500,"Not Found",{"content-type":"text/plain"})
  //res.end("<h1>Hola mundo</h1>")
  //res.status(500)
  //res.send("<h1>Hola mundo</h1>")
  res.send("<h1>Hola mundo</h1>")
})




const usuarios = []


//1 ruta por get para la landing
//1 ruta por get para mostrar el array de usuarios
//1 ruta por post para agregar un usuario
//1 ruta por delete para borrar un usuario
//1 ruta por put para actualizar un usuario


app.listen(8000, () => {
  console.log("server is running on port 8000")
})