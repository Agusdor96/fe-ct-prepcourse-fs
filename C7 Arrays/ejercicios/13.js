function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  let pares = [];

  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      pares.push(array[i]);
    }
  }

  return pares;
}
let array = [5, 6, 88, 3, 102, 91];
console.log(filtrarNumerosPares(array));

module.exports = filtrarNumerosPares;
