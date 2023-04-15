const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('¿Cuántos años tienes?', (age) => {
    if (age < 12) {
      console.log('No puedes ingresar');
    } else if (age >= 13 && age <= 17) {
      console.log('Puedes ingresar con un adulto responsable');
    } else {
      console.log('Puedes ingresar');
    }
    readline.close();
  });  