function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  array.sort(function(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b; // Ordenar números de menor a mayor

    } else if (typeof a === 'string' && typeof b === 'string') {
      return a.localeCompare(b);
    }
})

return array;
}


console.log(ordenarArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));
console.log(ordenarArray(['perro', 'gato', 'elefante', 'jirafa', 'mono']));
console.log(ordenarArray([]));
console.log(ordenarArray([42]));
module.exports = ordenarArray;
