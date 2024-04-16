function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:

if(str1.length !== str2.length){
   return false;
}

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

if (str1 === "" && str2 === "") {
   return true;
 }

let letrastr1 = str1.split("");
let letrastr2 = str2.split("");

letrastr1.sort();
letrastr2.sort();

for(i = 0; i < letrastr1.length && i < letrastr2.length; i++){
   if(letrastr1[i].includes(letrastr2[i])){
      return true;
   } else{
      return false;
   }
}
};

module.exports = esAnagrama;
