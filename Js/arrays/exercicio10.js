function somaLinha(matriz, linha) {
  return matriz[linha].reduce(function (acumulador, numero) {
    return acumulador + numero;
  }, 0);
}

let matriz = [
  [1, 2, 3], 
  [4, 5, 6], 
];

let resultado = somaLinha(matriz, 0);
console.log(resultado);

resultado = somaLinha(matriz, 1);
console.log(resultado); 
