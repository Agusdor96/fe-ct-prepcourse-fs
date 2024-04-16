function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) {
    return null;
  }

  let max = Math.max(...numeros);
  let min = Math.min(...numeros);

  for (let i = min; i <= max; i++) {
    if (!numeros.includes(i)) {
      return i;
    }
  }

  return null; 
}


console.log(encontrarNumeroFaltante([1, 2, 3, 4, 6])); 
console.log(encontrarNumeroFaltante([7, 5, 3, 2, 1])); 
console.log(encontrarNumeroFaltante([]));

module.exports = encontrarNumeroFaltante;