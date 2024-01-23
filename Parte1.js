// var vs let vs const

// edad
var edad = 10;
var edad = 20;

console.log(edad);

var edad = 10;

if (true) {
  var edad = 20;
  console.log(edad);
}

// let
let edad = 10;
edad = 20;
console.log(edad);

let edad = 10;

// edad dentro del if se le llama scope
if (true) {
  let edad = 20;
  console.log(edad);
}

// const

const edad = 10
// const edad = 20 ( no se puede volver a definir una constante )

if(true) {
    const edad = 20
    console.log(edad)
}

const persona = {
    nombre: 'Juanito',
    edad: 20
}

persona.edad = 21
persona.pais = 'Chile'

console.log(persona)