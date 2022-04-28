/**
 * VALOR
 * Number 
 * String 
 * Boolean 
 * Null 
 * undefined 
 * Symbol 
 * 
 * REFERENCIA
 *  Object 
 *  Object
 *  Array
 *  Function
 *  Error
 *  Date
 *  JSON
 *  Math
 */


 var a = 1
 var b = a
 
 console.log(b)//1
 console.log(a)//1
 
 b = 30
 
 console.log(b)//30
 console.log(a)//1
 
 
 var a = { x: 1 }
 var b = a
 
 b.x = 10
 
 console.log(a)
 console.log(b)
 
 
 //Notacion de objetos
 
 var a = { x: 1 }
 var prop = "x"
 
 console.log(a.prop)//undefined
 
 
 
 //WEB API : Fetch - Storage - IndexedDB 
 //https://developer.mozilla.org/en-US/docs/Web/API
 
 //Asincrono
 
 
 
 //BUCLE DE EVENTOS / EVENT LOOP
 //Triggers / Timers / Loaders/Resource
 
 //https://www.youtube.com/watch?v=8aGhZQkoFbQ
 
 //Worker Queue
 
 document.addEventListener("click",()=>{})
 
 setTimeout(()=>{
   console.log("Primero")
 })
 
 Promise.resolve().then(()=>{
   console.log("Segundo")
 })
 
 //async/await
 
 
 
 
 
 //HTTP
 
 //REQUEST
 
 //URL/IP
 //METODO/VERBO : GET - POST - PUT - PATCH - DELETE - OPTIONS - HEAD ...
 //BODY/Payload : Data cruda
 //HEADERS : 
 //Accept-Languages : es;es-AR;fr;...
 
 //RESPONSE
 //CODIGO : 1(Informativos) - 2(Buenos) - 3(Redirecciones) - 4(Err Cliente) - 5(Err Servidor)
 //MENSAJE : Acompaña al codigo
 //BODY/Payload : Data cruda
 //HEADERS : 
 //Content-Length
 //Server : Win32 Apache php/7.0
 //Content-Type : application/x-www-form-urlencoded
 
 //Orientacion a Objetos por Prototipos
 
 //Prototipos : Son objetos que sirven de molde(referencia) de otros objetos/*  */