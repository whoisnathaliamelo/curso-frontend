function getRandomNumber(inicio = 0, fim = 10, integer = true) {
  if (integer == false) {
    return Math.random() * (fim - inicio + 1) + inicio;
  } else {
    return Math.floor(Math.random() * (fim - inicio) + inicio);
  }
}

console.log(getRandomNumber(5, 10, true));
