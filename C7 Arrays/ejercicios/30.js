function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  let seguimiento = {}; 
  
  for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    if (seguimiento[num]) {
      return num; 
    } else {
      seguimiento[num] = 1; 
    }
  }
  
  return undefined;
}

console.log(encontrarElementoRepetido([1, 2, 3, 4, 2, 5]));
console.log(encontrarElementoRepetido([1, 2, 3, 4, 5]));

module.exports = encontrarElementoRepetido;