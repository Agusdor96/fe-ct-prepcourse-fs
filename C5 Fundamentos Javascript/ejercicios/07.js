function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:

  valor = 1
  return typeof valor;
 }

 var resultado = esTipoDato ();
 
 console.log(esTipoDato(resultado));
 
module.exports = esTipoDato;