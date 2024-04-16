function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:

  objeto[propiedad] = null;

  return objeto;
}

const miObjeto = { nombre: "Juan", edad: 30 };
const nombreProp = "ciudad";

agregarPropiedad(miObjeto, nombreProp);

console.log(miObjeto); 
module.exports = agregarPropiedad;
