function esVerdadero(valor) {       
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:

  if(valor){
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }
}

console.log(esVerdadero(true));
console.log(esVerdadero(false));
console.log(esVerdadero(0));
module.exports = esVerdadero;
