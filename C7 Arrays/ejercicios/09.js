function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   let aleatorio = Math.floor(Math.random() * array.length);

   return array[aleatorio];

    
}
let arr = [10, 22, 30];
console.log(obtenerElementoAleatorio(arr));

module.exports = obtenerElementoAleatorio;
