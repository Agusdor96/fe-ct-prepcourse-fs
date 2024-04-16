function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:

   
   var tiene = objeto.hasOwnProperty(propiedad);

   return tiene;
}

let miObjeto = {Edad:28, Nombre: "Agustin"};
var tiene = miObjeto.hasOwnProperty("Edad");

console.log(tiene);
module.exports = verificarPropiedad;
