function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  let resul = [];

  for(let i = 0; i < array.length; i++){
    resul.push(array[i]*2);
  }

  return resul;
}
let porDos = [2, 3, 89];

console.log(duplicarElementos(porDos));

module.exports = duplicarElementos;
