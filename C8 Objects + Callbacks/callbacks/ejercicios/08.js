const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:

for(let elemento of array){
  if(callback(elemento)){
    return elemento;
  }
}

return "No se encontró el elemento";


}

let numeros = 
[{name: 'John', age: 25},
{name: 'Jane', age: 30},
{name: 'Bob', age: 40}];


function existe (numeros){
  return numeros.age === 25;
}

let resultado = buscarElemento(numeros, existe);
console.log(resultado);
module.exports = buscarElemento;
