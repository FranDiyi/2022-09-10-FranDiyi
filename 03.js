/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function cuentaPorFavor(comidas) {
  // La funcion 'cuentaPorFavor' recibe como argumento un array de objetos llamado 'comidas'
  // Cada objeto tiene una propiedad 'nombre' ,'precio' y 'cantidad'.
  // La funcion debe devolver el precio total de las comidas consumidas.
  // Ej:
  // var comidas = [
  //   {
  //     nombre: 'pizza',
  //     cantidad: 6,
  //     precio: 5
  //   },
  //   {
  //     nombre: 'coca-cola',
  //     cantidad: 3,
  //     precio: 1
  //   }
  // ]
  // cuentaPorFavor(comidas) devuelve => 33

  // Tu código aca:
  var acumulado = 0;

  for(var i = 0; i <= comidas.length - 1; i++){
    var pedido = Object.values(comidas[i]);
    total =+ pedido[1] * pedido[2];
    acumulado = acumulado + total;    
  }
  return "el importe total es de: $ "+acumulado;
}

// No modifiques nada debajo de esta linea //

module.exports = cuentaPorFavor