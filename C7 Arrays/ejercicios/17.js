function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  let resul = 0;

  for(let i = 0; i < arrayOfNums.length; i++){
      resul += arrayOfNums[i];
  }

  return resul;
}

let prueba = [1, 2, 3, 4, 5];
console.log(agregarNumeros(prueba));

module.exports = agregarNumeros;


//Otra forma de resolverlo

//let arreglo = [1, 2, 3, 4, 5];

// Utilizamos reduce para sumar todos los elementos del arreglo

//let suma = arreglo.reduce(function(acumulador, elementoActual) {
//  return acumulador + elementoActual;
//}, 0);

//console.log(suma); // Debería imprimir 15
