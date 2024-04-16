function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:

   list.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
          return 1;
        } else if (a[sortBy] > b[sortBy]) {
          return -1; 
        } else {
          return 0;
        }
      });
    
      return list; 
    }
    
    // Ejemplo de uso:
    const listaObjetos = [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }];
    const sortBy = "a"; //ordenar por la propiedad a;
    const listaOrdenada = sort(sortBy, listaObjetos);
    console.log(listaOrdenada); 
    
    module.exports = sort;
