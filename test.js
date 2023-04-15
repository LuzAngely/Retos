const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

let lamparaPrendida = 1;

if (lamparaPrendida === 1) {
  readline.question('La lámpara está prendida. ¿Desea apagarla? Ingrese 0 para apagarla', (respuesta) => {
    if (respuesta === '0') {
      lamparaPrendida = 0;
      console.log('La lámpara está apagada');
    } else {
      console.log('La lámpara sigue prendida');
    }
    readline.close();
  });
} else {
  readline.question('La lámpara está apagada. ¿Desea prenderla? Ingrese 1 para prenderla', (respuesta) => {
    if (respuesta === '1') {
      lamparaPrendida = 1;
      console.log('La lámpara está prendida');
    } else {
      console.log('La lámpara sigue apagada');
    }
    readline.close();
  });
}
