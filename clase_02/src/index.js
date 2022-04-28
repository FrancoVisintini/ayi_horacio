//import archivoDos from "./archivo_dos"

//console.log(archivoDos)

//import fs from "fs"
//import utils from "util"
//import url from "url"

//const http = require("http")
//import childProcess from "child_process"

//console.log(childProcess.fork())

//libuv
//console.log(process)


import http from "http"

const server = http.createServer((req,res)=>{
  res.end("Hola Mundo Test")
})

server.listen(8000)