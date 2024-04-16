const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:

  var todas = Object.keys(objeto);

  return todas;
};

let miObjeto = {Edad:28, Nombre: "Agustin"};

var todas = Object.keys(miObjeto);
console.log(todas);
module.exports = listarPropiedades;
