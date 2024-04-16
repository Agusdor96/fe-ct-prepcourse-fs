function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  let pares = [];

  for(let i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 === 0){
      pares.push(numeros[i]);
    } else {
      continue;
    }

  }
  return pares.length;
}

let eros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(contarParesConContinue(eros));
module.exports = contarParesConContinue;


//for(let i = 0; i < numeros.length; i++){
//if(numeros[i] % 2 === 0){
//    pares ++;
//  } else {
//    continue;