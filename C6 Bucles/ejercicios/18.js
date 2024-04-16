function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

    let producto = 1;
  
    // Iterar desde a hasta b e ir multiplicando los números
    for (let i = a; i <= b; i++) {
      producto *= i;
    }

    if (Object.is(producto, -0)) {
      return 0;
    }
  
    return producto;
  }

console.log(productoEntreNúmeros(-5, 5));
console.log(productoEntreNúmeros(4, 11));
module.exports = productoEntreNúmeros;