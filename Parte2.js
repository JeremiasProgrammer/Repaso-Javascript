// funciones

function sumar (num) {
    console.log(num)
}
sumar(10)

const sumarDos = (num1, num2) => {
    return(num1 + num2)
}

const resultado = sumarDos(20, 30)
console.log(resultado)


const mensaje = nombre => { // solo se puede dejar sin el parentesis cuando es una sola variable
    return 'Hola soy ' + nombre
}

const resultadoDos = mensaje('Jeremias')
console.log(resultadoDos)


const sumaTres = (num = 1) => {
    console.log(num + 3)
}

sumaTres(9)