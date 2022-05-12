//XHR(XMLHttpRequest) API - Fetch API - AXIOS (Libreria Instalable) - Promise API

//Voy y pido por HTTP la url "" (Como no le escribo ningun protocolo entonces el string se agrega al final de la misma url donde se ejecuta el script)
//const pedido = fetch("http://ksdjhgfksdj.com")

//Cuando el pedido termine bien entonces ejecuto la funcion
/* fetch("")
.then((resultado)=>{
  //El callback del then siempre viene con un resultado
  console.log("Then")
  console.log(resultado)
  //resultado.json()  - Convierte el resultado en un objeto JSON
  //resultado.text()  - Convierte el resultado en un string
  //resultado.blob()  - Convierte el resultado en un blob
  
  
  //Me fijo que el codigo de respuesta es 200 
  if(resultado.status >= 400){
    throw new Error("Error "+resultado.status)
  }

  //Si el codigo de respuesta es 200 entonces le doy formato a la respuesta del servidor
  //const resultado_formateado = resultado.text()
  //console.log(resultado_formateado)
  //return resultado_formateado
  return resultado.text()
})
.then((resultado)=>{
  console.log(resultado)
})
.catch((error)=>{
  console.log(error.message)
  console.log("Error")
})
.finally(()=>{
  console.log("Finalizado")
}) */


//console.log("Hola")

/* //
pedido
.catch((error)=>{
  console.log(error.message)
  console.log("Error")
})

//
pedido
.finally(()=>{
  console.log("Finalizado")
}) */
/* document.addEventListener("click",()=>{
  console.log("click");
}) */




/**
 * 
 * 
 * fetch()              =>    Promise {}
 * fetch().then(r=>)    =>    r === Response{}
 * Response.json()      =>    Promise {}
 * 
 * Promise{}            =>   Promise.then().catch()
 * 
 * 
 * .then(()=>{ Promise{}  })    =>   * .then(()=>{ return Promise{}  }).then()
 * 
 * 
 * 
 * 
 */



//   /users   /users/1  /posts/users/  /comments/pots/11

const url = "http://jsonplaceholder.typicode.com"
const users = []
//const [posteos,setPosteos] = useState([])

/* fetch(`${url}/users`)
.then((res)=>{
  //console.log(res)
  return res.json()
  
  res.json()
  .then((res)=>{
    const userId = res[5].id
    fetch()
    .then(()=>{

    })
  })
 
})
.then((res)=>{
  //console.log(res)
  const userId =  res[5].id
  users = res
  //const pedido_de_posteos = fetch(`${url}/posts?userId=${userId}`)
  //console.log(pedido_de_posteos)
  //return pedido_de_posteos
  return fetch(`${url}/posts?userId=${userId}`)
})
.then((res)=>{
  return res.json()
})
.then((res)=>{
  console.log(res)
  //setPosteos(res)
})
.catch((err)=>{
  console.log(err)
})

console.log(users) */


/* 
new Promise(()=>{

})
 */
//async / await
/* async function pedirPosteos(){

} */

const pedirPosteos = async () => { 
  
    const pedido = await fetch(`${url}/users`)
    const users = await pedido.json()
    
}

const resultado = pedirPosteos()
resultado.then((res)=>{
  console.log(res)
})