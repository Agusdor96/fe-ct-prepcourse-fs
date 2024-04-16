function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código: 

   let conLetraA = arrayOfStrings.filter(palabra => palabra.startsWith('a') || palabra.startsWith('A'));

   return conLetraA;
      
}

let palabras = ["abajo","jamaica", "buzo", "alerta", "Azteca", "Arbol"];
let conLetraA = filter(palabras);

console.log(conLetraA);


module.exports = filter;
