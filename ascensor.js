const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Si desea abrir las puertas. por favor escriba "abrir", si desea cerrarlas esciba "cerrar"', (respuesta) => {

    if (respuesta === 'cerrar') {
        console.log('Cerrando puertas');
    } else if (respuesta === 'abrir') {
        console.log('Abriendo puertas');
    }else {
        console.log('Hubo un error en el momente de digitar su respuesta, recuerde que debe se igual que en el texto');
    }

    readline.close();
  });
