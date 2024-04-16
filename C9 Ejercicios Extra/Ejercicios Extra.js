/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  let array = Object.entries(objeto).map(([key, value]) => [key, value]);

  return array;
}

let obje = {D: 1, B: 2, C: 3}
let prueba = Object.entries(obje).map(([key, value]) => [key, value]);
console.log(prueba);

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  let objeto = {};

  for(let letra of string){
    if(objeto.hasOwnProperty(letra)){
      objeto[letra]++;
    } else{
      objeto[letra] = 1;
    }
  }
  return objeto;
}

let string = "adsjfdsfsfjsdjfhacabcsbajda";
let obje2 = numberOfCharacters(string);

console.log(obje2);

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  let mayusculas = "";
  let minusculas = "";

   for (let letra of string) {
    if (letra === letra.toUpperCase()) {
      mayusculas += letra;
    } else {
      minusculas += letra;
    }
  }
  let resultado = mayusculas + minusculas;

  return resultado;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
let palabras = frase.split(" ");

for(let i = 0; i < palabras.length; i++){
  let palabra = palabras[i];
  let palabraInvertida = palabra.split("").reverse().join("");
  palabras[i] = palabraInvertida;
}

let fraseinver = palabras.join(" ");
return fraseinver;
}

let resultado = asAmirror("The Henry Challenge is close!");
console.log(resultado);

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  let string = numero.toString();
  let invertido = string.split("").reverse().join("");

      if(string === invertido){
      return "Es capicua"
    } else{
      return "No es capicua";
    }
  }
 

 let resultado2 = capicua(2552);
 console.log(resultado2);

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  let letras = ["a", "b", "c"];
  let array = string.toLowerCase().split("");


  for(let i = 0; i < array.length; i++){
    if(letras.includes(array[i])){
      array[i] = "";
    }
  }
 let nuevoString = array.join("");
 return nuevoString;

}

console.log(deleteAbc("CadA"));


function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  arrayOfStrings.sort((a, b) => a.length - b.length);

  return arrayOfStrings;
  
}
console.log(sortArray(["computadora", "living", "musica", "You", "are", "beautiful", "looking"]));



function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  let enComun = [];

  for(let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i]) && !enComun.includes(array1[i])) {
      enComun.push(array1[i]);
    } 
  }

  return enComun;
}

console.log(buscoInterseccion([6,5,2,20,7,50,70],[6,8,70,20,]));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
