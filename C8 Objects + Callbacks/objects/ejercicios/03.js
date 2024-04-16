const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:

  objeto[propiedad] = valor;
  return objeto;

};

let miObjeto = {Edad:28, Nombre: "Agustin"};
console.log("antes:", miObjeto);

miObjeto = agregarNuevaPropiedad(miObjeto, "ciudad", "Lima");
console.log("después:", miObjeto);
module.exports = agregarNuevaPropiedad;
