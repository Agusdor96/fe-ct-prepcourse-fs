function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:

   if (typeof callback === 'function') {

   const resultado = callback(string);
   return resultado;
   } else {
      return string;
   }

   function transformarMayusculas(texto) {
      return texto.toUpperCase(); // Devuelve el texto en mayúsculas
    }
    
    let cadenaOriginal = "Hola mundo";
    let cadenaModificada = cambiarCadena(cadenaOriginal, transformarMayusculas);
    console.log(cadenaModificada); 
   
} 
module.exports = cambiarCadena;
