function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:

  delete objeto[propiedad];

  return objeto;
}

let miObjeto = {navidad: "bolas"};

delete miObjeto.navidad;

console.log(miObjeto);

module.exports = eliminarPropiedad;
