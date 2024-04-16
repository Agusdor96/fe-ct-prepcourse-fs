function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:

   string = string.toLowerCase();

   let longitud = string.length;

   for (let i = 0; i < longitud / 2; i++) {
      if (string[i] !== string[longitud - 1 - i]) {
         return false;
      }
} 
return true;

}

console.log(esPalindromo("Sugus"));

module.exports = esPalindromo;
