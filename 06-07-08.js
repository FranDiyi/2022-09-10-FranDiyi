/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function crearClaseProfesor() {
  // Crear una clase para construir objeto de tipo Profesor.
  // el constructor debe recibir:
  // nombre (string) , edad (integer) , cursos (array de strings) , certificados (array de objetos)
  // Esta funcion debe retonar la clase Profesor.

  class Profesor {    
    
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
      this._curso = [];
      this.certificados = [];     
    }

    addCertificado(nombre, entidad, anio){
      // el metodo addCertificado recibe un string nombre, un string entidad y  un entero anio y debe agregar un objeto:
      // { nombre: nombre, entidad: entidad, anio: anio} al arreglo de certificados del profesor.      // no debe retornar nada.
      var objetoCertificado = {nombre: nombre, entidad: entidad, anio: anio }
      
      this.certificados.push(objetoCertificado);
    }

    addCurso(curso) {
      // este método debe agregar un Curso (curso) al arreglo de Cursos del profesor.
      // no debe retornar nada.
      this.curso.push(curso);
    }

    getCursos() {
      // Escribe una función que retorne un arreglo con los cursos del profesor
      // Ej:
      // persona.getCursos() // retorna ['javascript 1', 'javascript 2'];
      return this._curso;
      
    }

    getCertificados() {
      // Escribe una función que retorne la cantidad de certificados que tiene un profesor
      // Ej:
      // persona.getCertificados() // retorna 3      
      return this.certificados.length;
    }

    getUltimoCertificado() {
      // Escribe una función que retorne el ultimo certificado de un profesor (anio mas alto)
      // ej, si la persona tuviera estos certificados:
      // {
      //   certificados: [{
      //     nombre: 'Ingenieria',
      //     anio: 2004,
      //     entidad: 'UNT',
      //   }, {
      //     nombre: 'Master en Datos',
      //     anio: 2012,
      //     entidad: 'UBA'
      //   }]
      // }
      // persona.getUltimoCertificado() // retorna { nombre: 'Master en Datos', anio: 2012', entidad: 'UBA'};
      var ultimo = this.certificados.length - 1;
      return this.certificados[ultimo];
    }
  };

  return Profesor;
}
// No modifiques nada debajo de esta linea //

module.exports = crearClaseProfesor