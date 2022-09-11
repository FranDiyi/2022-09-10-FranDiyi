/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function masFrecuente(array) {
  // La funcion llamada 'masFrecuente' recibe como argumento un array de numeros enteros
  // y debe devolver el número entero que mas veces aparece (el más frecuente).
  // ej:
  // masFrecuente([1,1,2,3,4]) => 1
  // masFrecuente([3,2,3,2,3,3]) => 3
  // Nota: Los numeros pueden NO estar ordenados

  // Tu código aca:
  if(array instanceof Array){
    let ocurrencias = new Map();

    array.forEach((valor, indice, arreglo)=>{
      if(ocurrencias.has(valor)){
        ocurrencias.set(valor, ocurrencias.get(valor) + 1);
      }else{
        ocurrencias.set(valor, 1);
      }
    });
    var entero = [...ocurrencias.entries()].reduce((a, v) => v[1] > a[1] ? v : a);    
    return entero[0];
  }
}

// No modifiques nada debajo de esta linea //

module.exports = masFrecuente