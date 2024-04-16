function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:

  array.unshift(elemento);

  if (typeof elemento !== 'number') {
    return typeof elemento;
  }

  return array;
}


console.log(agregarItemAlComienzoDelArray([10, 10, 16, 12], 10));
console.log(agregarItemAlComienzoDelArray([97, 72, 94], "hello"));
module.exports = agregarItemAlComienzoDelArray;
