import express from "express"

const server = express()

server.get("/",(req,res)=>{
  //Buffer
  res.send({nombre:"Horacio"})
  //res.end("Hola mundo desde Express")
})

server.listen(8000)