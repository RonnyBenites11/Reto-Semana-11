// Reto 2 
// Ejercicio 1
// function calcularPromedio(arreglo) {
//     if (arreglo.length === 0) {
//         console.log("El arreglo está vacío.");
//         return;
//     }
//     let suma = 0;
//     for (let i = 0; i < arreglo.length; i++) {
//         suma += arreglo[i];
//     }
//     let promedio = suma / arreglo.length;
//     console.log("Promedio:", promedio);
// }
// arreglo = [2, 6, 1, 8];
// calcularPromedio(arreglo);
// Ejercicio 2
// function ultimoNum( arreglo){
//     if (arreglo.length === 0) {
//            console.log("El arreglo está vacío.");
//                return;
//            }
//     let ultimoElemento = arreglo[arreglo.length - 1];
//     console.log("Último elemento:", ultimoElemento);
// }
//  arreglo = [4, 20, 5, 10];
// ultimoNum(arreglo);
// Ejercicio 3
// function sumarNumPares(arreglo) {
//     let sumaPares = 0;
//     for (let i = 0; i < arreglo.length; i++) {
//         if (arreglo[i] % 2 === 0) {
//             sumaPares += arreglo[i];
//         }
//     }
//     console.log("Suma de los números pares:", sumaPares);
// }

// let numeros = [1, 2, 5, 8, 9, 12, 2, 3];
// sumarNumPares(numeros);
// Ejercicio 4
// function calcularFactorial(numero) { 
//     let factorial = 1;  
//     for (let i = numero; i > 0; i--) {
//         factorial *= i;
//     }  
//     console.log("El factorial de", numero, "es:", factorial);
// }
// let numeroIngresado = 10;
// calcularFactorial(numeroIngresado);
// Ejercicio 5
// function verificarImparPar() {
//     for (let i = 1; i <= 15; i++) {
//         if (i % 2 === 0) {
//             console.log(i + " es par");
//         } else {
//             console.log(i + " es impar");
//         }
//     }
// }
// verificarImparPar();
// Ejercicio 06
// function mostrarLoteria() {
//     let numero1 = parseInt(prompt("Ingresa el primer número (entre 1 y 50):"));
//     let numero2 = parseInt(prompt("Ingresa el segundo número (entre 1 y 50):"));
//     for (let i = 1; i <= 50; i++) {
//         if (i === numero1 || i === numero2) {
//             console.log(i + " ¡Lotería!");
//         } else {
//             console.log(i);
//         }
//     }
// }
// mostrarLoteria();
// Ejercicio 07
// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         }
//         else if (i % 3 === 0) {
//             console.log("Fizz");
//         }
//         else if (i % 5 === 0) {
//             console.log("Buzz");
//         }
//         else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();
// Ejercicio 08
// function calcularPrecioHelado(topping) {
//     let precioBase = 50; 
//     let precioFinal; 
//     switch(topping.toLowerCase()) {
//         case "oreo":
//             precioFinal = precioBase + 10;
//             break;
//         case "kitkat":
//             precioFinal = precioBase + 15;
//             break;
//         case "brownie":
//             precioFinal = precioBase + 20;
//             break;
//         default:
//             console.log("No tenemos este topping, lo sentimos.");
//             precioFinal = precioBase;
//     }
//     console.log("El precio del helado es: " + precioFinal + " MXN");
// }
// let toppingElegido = prompt("¿Bienvenido a MC Donald`s qué topping te gustaría para tu helado?");
// calcularPrecioHelado(toppingElegido);
// Ejercicio 09
// function calcularCostoPrograma(nivel, beca) {
//     let duracion;
//     switch(nivel.toLowerCase()) {
//         case "course":
//             costoMensual = 4999;
//             duracion = 2;
//             break;
//         case "carrera":
//             costoMensual = 3999;
//             duracion = 6;
//             break;
//         case "master":
//             costoMensual = 2999;
//             duracion = 12;
//             break;
//         default:
//             console.log("Nivel no válido.");
//             return;
//     }
//     let descuento = 0;
//       switch(beca.toLowerCase()) {
//         case "facebook":
//             descuento = 0.20;
//             break;
//         case "google":
//             descuento = 0.15;
//             break;
//         case "jesua":
//             descuento = 0.50;
//             break;
//         case "ninguna":
//             descuento = 0;
//             break;
//         default:
//             console.log("Beca no válida.");
//             return;
//     }
//     let precioMensualConDescuento = costoMensual * (1 - descuento);
//     let costoTotal = precioMensualConDescuento * duracion;
//     console.log("El precio mensual con descuento es: " + precioMensualConDescuento+ " MXN");
//     console.log("El costo total por la duración del programa es: " + costoTotal + " MXN");
// }
// let nivelElegido = prompt("Elige el nivel del programa (Course, Carrera, Master):");
// let becaElegida = prompt("¿Cuentas con alguna beca? (Facebook, Google, Jesua, Ninguna):");
// calcularCostoPrograma(nivelElegido, becaElegida);
// Ejercicio 10
function calcularCostoTotal(tipoVehiculo, kmsRecorridos, litrosConsumidos) {
    let precioKilometro;
    switch(tipoVehiculo.toLowerCase()) {
        case "coche":
            precioKilometro = 0.20;
            break;
        case "moto":
            precioKilometro = 0.10;
            break;
        case "autobús":
            precioKilometro = 0.50;
            break;
        default:
            console.log("Tipo de vehículo no válido.");
            return;
    }
    let costoBase = precioKilometro * kmsRecorridos;
    let cargoExtra;

    if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
        cargoExtra = 5;
    } else if (litrosConsumidos > 100) {
        cargoExtra = 10;
    } else {
        console.log("Cantidad de litros consumidos no válida.");
        return;
    }
    let costoTotal = costoBase + cargoExtra;
    console.log("El total a pagar es: " + costoTotal.toFixed(2) + " MXN");
}
let tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobús):");
let kmsRecorridos = parseFloat(prompt("Ingrese los kilómetros recorridos:"));
let litrosConsumidos = parseFloat(prompt("Ingrese los litros consumidos:"));

calcularCostoTotal(tipoVehiculo, kmsRecorridos, litrosConsumidos);


    
