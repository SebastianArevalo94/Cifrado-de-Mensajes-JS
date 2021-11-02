const cifrar = () => {
  function toBinary(number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
      num = parseInt(num / 2);
      binary = (num % 2) + binary;
    }
    return binary;
  }

  function toDecimal(num) {
    return parseInt(num, 2);
  }
  let msj = document.getElementById('msj').value;
  let key = parseInt(document.getElementById('key').value);

  if (!msj) {
    document.getElementById('display').innerHTML =
      '<p class="center red">Escribe un mensaje para cifrar.</p>';
  } else {
    //constantes
    const abc0 = 'abcdefghijklmnopqrstuvwxyz';
    const tilMin = 'ábcdéfghíjklmnópqrstúvwxyz';
    const abc1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const tilMay = 'ÁBCDÉFGHÍJKLMNÓPQRSTÚVWXYZ';
    const num = '0123456789';
    const regex = /(\d+)/g;

    //variables
    let keyL0 = 0;
    let keyL1 = 0;
    let keyL2 = 0;
    let keyL3 = 0;
    let newMsj = '';

    //Obtener numeros del mensaje
    let array = msj.match(regex);

    //Buscar y reemplazar decimal por binario

    if (array !== null) {
      for (let x of array) {
        msj = msj.replace(x, toBinary(x));
      }
    }

    //Cifrado del mensaje *-*-*-*

    for (let i of msj) {
      //si es minuscula sin tilde
      if (abc0.includes(i)) {
        keyL0 = abc0.indexOf(i) + key;
        if (keyL0 > abc0.length) {
          keyL0 -= abc0.length;
        }
        if (keyL0 == 26) {
          keyL0 = 0;
        }
        newMsj += abc0[keyL0];
        //si es mayuscula sin tilde
      } else if (abc1.includes(i)) {
        keyL1 = abc1.indexOf(i) + key;
        if (keyL1 > abc1.length) {
          keyL1 -= abc1.length;
        }
        if (keyL1 == 26) {
          keyL1 = 0;
        }
        newMsj += abc1[keyL1];
      } //si es minuscula con tilde
      else if (tilMin.includes(i)) {
        keyL2 = tilMin.indexOf(i) + key;
        if (keyL2 > tilMin.length) {
          keyL2 -= tilMin.length;
        }
        if (keyL2 == 26) {
          keyL2 = 0;
        }
        newMsj += tilMin[keyL2];
        //si es mayuscula con tilde
      } else if (tilMay.includes(i)) {
        keyL3 = tilMay.indexOf(i) + key;
        if (keyL3 > tilMay.length) {
          keyL3 -= tilMay.length;
        }
        if (keyL3 == 26) {
          keyL3 = 0;
        }
        newMsj += tilMay[keyL3];
      }
      //si no es una letra
      else {
        newMsj += i;
      }
    }
    let html = `<p class="center">Mensaje cifrado: ${newMsj}</p>`;
    document.getElementById('display').innerHTML = html;
    // return newMsj;
  }
};

const clean = () => {
  document.getElementById('display').innerHTML = ' ';
};
