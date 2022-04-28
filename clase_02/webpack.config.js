//module.exports.mode = "production";
//module.exports.target = "node";

module.exports = {
  mode : "production",
  target : "node",
  entry : "./src/server.js"
}

//Entry : Es el punto de entrada

//Output : Es el punto de salida

//Plugins : Es un array de nuevas instancias de plugins
//module.exports.plugins = [new Plugin()]

//Module : Determina que le va a pasar a cada module que le pidas a webpack que intente leer
//module.exports.module = { rules : [ {} ] }