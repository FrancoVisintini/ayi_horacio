export const pedirPersonajes = async () => {
  const pedido = await fetch("/personajes")
  const personajes = await pedido.json()
  return personajes
}

export const guardarPersonaje = async (personaje) => {
  const pedido = await fetch("/personajes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personaje)
  })
  const respuesta = await pedido.json()
  return respuesta.data
}