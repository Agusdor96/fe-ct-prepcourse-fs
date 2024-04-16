function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  let resul = [];

  for(let i = 0; i < array.length; i++){
    resul.push(array[i] * i);
  }

  return resul;
    
  }

  let numeros = [5, 4, 3, 2, 1, 0];
  console.log(multiplicarElementosPorIndice(numeros));

module.exports = multiplicarElementosPorIndice;
