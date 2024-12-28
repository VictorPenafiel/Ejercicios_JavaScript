// Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que
// la transforme a grados Kelvin y Fahrenheit. (2 Puntos)
// Se debe considerar la siguiente información respecto a la equivalencia de las escalas
// de temperatura:
// ● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
// es 0 °C + 273.15 = 273.15 K
// ● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos
// es (0 °C × 9/5) + 32 = 32 °F

function convertirTemperatura() {
    const celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

    const kelvin = celsius +  273.15;
    const fahrenheit = (celsius *  9/5) +  32;

    console.log(`Kelvin: ${kelvin}`);
    console.log(`Fahrenheit: ${fahrenheit}`);
}

convertirTemperatura();
