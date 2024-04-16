function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:

  sumaLikes = 0;
  
  for(post of objetoUsuario.posts){
    if(typeof post.likes === "number"){
      sumaLikes += post.likes;
    }
  }
  
  return sumaLikes;

}

//objeto = posts:[ {likes: 10}
//                 {likes: 15} 
//]; 

module.exports = sumarLikesDeUsuario;
