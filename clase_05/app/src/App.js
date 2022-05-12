import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { guardarPersonaje, pedirPersonajes } from './utils';

//fetch("http://localhost:3001/...")

//fetch("/personajes") Funciona con proxy
/* 
const pedido = fetch("/personajes")
console.log(pedido)
 */


function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {


    console.log("useEffect")
    //aca hacer el pedido una unica vez por dependencias
    pedirPersonajes()
      .then((personajes) => {
        setPersonajes(personajes)
      })

    /*     
        fetch("/personajes")
          .then((data) => {
            return data.json()
          })
          .then(data => {
            //const personajes = data.data
            //const {data} = data
            //const {data:personajes} = data
            //.then(({data})=>{ })
            //console.log(data)
            setPersonajes(data)
          }) */

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const nombre = e.target.elements.nombre.value
    const personaje = { nombre }

    guardarPersonaje(personaje)
      .then((nuevoPersonajes) => {
        setPersonajes(nuevoPersonajes)
      })

    /* fetch("/personajes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify()
    })
      .then((res) => {
        return res.json()
      })
      .then(({ data }) => {
        setPersonajes(data)
      }) */
  }

  return (
    <div>
      <h1>App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" id="nombre" placeholder='Nombre del Personaje' />
        </div>
        <button>Guardar</button>
      </form>
      {/* <button>Traer Personajes</button> */}
      <ul>
        {personajes.length > 0
          ? personajes.map(personaje => <li>{personaje.nombre}</li>)
          : "...cargando"}
      </ul>
    </div>
  );
}

export default App;




//function foo({x:res}){
  //console.log(res)
  //console.log(x)
  //console.log(a)
  //const x = a.x
  //const res = a.x
  //const obj = a
  //const {x} = a
  //const {x:res} = a
//}



/* const foo = ({x}) => {

}


foo({x:1}) */