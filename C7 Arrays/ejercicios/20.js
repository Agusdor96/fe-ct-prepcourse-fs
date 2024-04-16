function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  let primerElemento = array[0];

  for(let i = 1; i < array.length; i++){
    if(array[i] === primerElemento){
      return true;
    } else {
      return false;
    }
  }
}

let elementos = ["hola", "hola" ];
console.log(todosIguales(elementos));

module.exports = todosIguales;
