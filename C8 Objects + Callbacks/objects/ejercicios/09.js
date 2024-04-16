function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:

  var nuevo = {nombre: nombre, email: email, password: password};

  return nuevo;
}

let prueba = nuevoUsuario("Agustin", "agus@gmail.com", "1929hola");
console.log(prueba);

module.exports = nuevoUsuario;
