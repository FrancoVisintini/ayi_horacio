//DOM
const form = document.querySelector(".form");

//Events
form.addEventListener("submit", (e) => {
  e.preventDefault()

  const nombre = e.target.elements.nombre.value

  //AJAX : Asynchronous JavaScript And XML
  //$.ajax()
  //axios
  //fetch(ruta String[,option Object])
  //fetch("")

  fetch("/personajes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      /* "content-type" : "application/x-www-form-urlencoded" */
    },
    body: JSON.stringify({
      nombre
    })
    /* body : `nombre=${nombre}&apellido=${apellido}` */
  })

})


const boton = document.querySelector(".boton");

boton.addEventListener("click", () => {
  const promise = fetch("/personajes")
  promise
    .then(data => data.json())
    .then(data => {

      const lista = document.createElement("ul");
      data.data.forEach(personaje => {

        const item = document.createElement("li");
        const button = document.createElement("button");
        button.innerText = "Eliminar";
        
        button.addEventListener("click", () => {
          fetch("/personajes/"+personaje.id, {method: "DELETE"})
        })

        item.innerText = personaje.nombre;
        item.appendChild(button);
        lista.appendChild(item);
      })

      document.body.appendChild(lista);

    })

  })


/* const promise = new Promise((res, rej) => {
  //
})

promise
  .then(() => {

  })
  .catch(() => {

  }) */