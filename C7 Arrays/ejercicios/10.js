function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:


  for(let i = 0; i < array.length; i++){
  if(typeof array[i] === "string" && array[i].length >= 5){
    return array[i];
   }
  }
 return undefined;

}


console.log(obtenerPrimerStringLargo(['hello', 'worlds', 'this', 'is', 'a', 'test']));
console.log(obtenerPrimerStringLargo(['this', "is", 'a','test', 'with','a','long','string']));
console.log(obtenerPrimerStringLargo(['this', 'is', 'a', 'test']));
module.exports = obtenerPrimerStringLargo;
