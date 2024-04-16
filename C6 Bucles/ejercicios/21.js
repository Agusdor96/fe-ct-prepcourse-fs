function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  if (numero <= 0) {
    return false;
  }

  while(numero !== 1){
    if(numero % 2 !== 0){
      return false;
    }
    numero /= 2;
  }
return true;
}


console.log(esPotenciaDeDos(8));
console.log(esPotenciaDeDos(21));
module.exports = esPotenciaDeDos;
