function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:

  let nuevoValor = 0;

  do {
    num += 5;
    nuevoValor++;
  } while(nuevoValor < 8);

  return num;
}

console.log(doWhile(5));
module.exports = doWhile;