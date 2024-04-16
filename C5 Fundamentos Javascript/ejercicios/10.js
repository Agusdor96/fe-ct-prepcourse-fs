function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if(!(fecha instanceof Date)){
    return false;
  }
  
  const anio = fecha.getFullYear();
  const mes = fecha.getMonth();
  const dia = fecha.getDate();
  
  if(isNaN(anio) || anio < 0) { 
    return false;
  }
  if(mes < 0 || mes > 11){
    return false;
  }

  const ultimoDiaDelMes = new Date(anio, mes + 1, 0).getDate();
  if(dia < 1 || dia > ultimoDiaDelMes) {
    return false;
  }

  return true;
}
console.log(esFechaValida(new Date(2020, 2, 16)));

module.exports = esFechaValida;