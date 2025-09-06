const inteiros = [2, 4, 6, 8, 10];
let soma = inteiros.reduce(function (acumulador, numero) {
  return acumulador + numero
}, 0);

console.log(soma / inteiros.length);
