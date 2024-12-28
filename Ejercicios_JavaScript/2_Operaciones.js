/*
2. Realizar operaciones con dos números. Pedir al usuario que ingrese dos números
diferentes y mayores a cero. Para ambos números, calcular lo siguiente: (1.5 Puntos)
● Suma
● Resta
● División
● Multiplicación
● Módulo
*/

function operacionesMatematicas() {
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));

    const suma = num1 + num2;
    const resta = num1 - num2;
    const division = num1 / num2;
    const multiplicacion = num1 * num2;
    const modulo = num1 % num2;

    console.log(`Suma: ${suma}`);
    console.log(`Resta: ${resta}`);
    console.log(`División: ${division}`);
    console.log(`Multiplicación: ${multiplicacion}`);
    console.log(`Módulo: ${modulo}`);
}

operacionesMatematicas();

