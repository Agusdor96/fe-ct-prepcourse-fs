function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:

  if(array.length > 0){
    return array.pop();
  }
}
let elemento =  ["Hola", 55, "Jesus"];
console.log(devolverUltimoElemento(elemento));


module.exports = devolverUltimoElemento;
