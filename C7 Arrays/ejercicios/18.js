function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
//el promedio es la suma de todas las notas / la cantidad de notas

let sumaNotas = 0;
let indice = resultadosTest.length;

for(let i = 0; i < resultadosTest.length; i++){
sumaNotas += resultadosTest[i];
} 

return sumaNotas / indice;

}

let notas = [10, 7, 8, 9, 5, 4, 3, 6];

console.log(promedioResultadosTest(notas));
module.exports = promedioResultadosTest;
