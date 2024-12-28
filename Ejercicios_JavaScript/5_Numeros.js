// Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden
// a continuación. (2 Puntos)
// ● La suma de todos los números.
// ● El promedio de los 5 números ingresados.


let numeros = [];
for (let i =  0; i <  5; i++) {
    let numero = prompt(`Ingrese el número ${i +  1}:`);
    numeros.push(parseFloat(numero));
}

let suma = numeros.reduce((a, b) => a + b,  0);

let promedio = suma /  5;

console.log(`La suma de todos los números es: ${suma}`);
console.log(`El promedio de los  5 números ingresados es: ${promedio}`);
