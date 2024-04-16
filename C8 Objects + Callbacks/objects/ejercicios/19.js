function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

  for(usuarios of objetoMuchosUsuarios){
    usuarios.esPremium = true;
  };
return objetoMuchosUsuarios;
}

const muchos = [
  { nombre: "Juan", edad: 25, premium: true },
  { nombre: "María", edad: 30, premium: true },
  { nombre: "Pedro", edad: 28, premium: true }
];

module.exports = pasarUsuarioAPremium;
