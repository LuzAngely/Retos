const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let i = 5;

let j = 2;
let suma = 1;

let k = 1
let factorial = 1;

let l = 3;

let m = 1;

console.log('1. Imprimir los números entre el 5 y el 20, saltando de tres en tres.');
console.log('2. Sumatoria de los números de 0 al 100');
console.log('3. Factorial de 6');
console.log('4. Secuencia fibonaci hasta el valor ingresado');
console.log('5. Cuales son los múltiplos de 3 o de 5 desde el 1 al 30')

readline.question('Por favor seleccione la opción que desee (solo el número)', (respuesta) => {

    if (respuesta == 1) {
        while (i >= 5 && i <= 20) {
            console.log('Número:', i);
            i += 3
        }

    } else if (respuesta == 2){
        while (j >= 2 && j <= 100) {
            console.log(suma,'+', j);
            suma = suma+j;
            console.log(suma)
            j++;
        }

    } else if (respuesta == 3) {
        while (k <= 6){
            factorial=factorial*k;
            k++;
        }
                console.log('El factorial de 6 es:', factorial)

    } else if (respuesta == 4) {
        readline.question('Escriba el numero al cual le quiere calcular la serie Fibonacci', (numero) => {
            while ((l - 3) < numero) {
                let Fibonacci = l - 1 + l - 2;
                console.log(l, ' ', Fibonacci);
                l = Fibonacci;
            }
            readline.close();
        });
    } else if (respuesta == 5){
        while (m>= 0 && m<= 30){
            if (m % 3 === 0 && m % 5 === 0) {
                console.log(m,'pim pom');

              } else if (m % 3 === 0) {
                console.log(m, 'pim');

              } else if (m % 5 === 0) {
                console.log(m, 'pom');

              } else {
                console.log(m);
              }
            m++;
        }
    } else {
        console.log('Opción inválida');
    }


    readline.close();
});
