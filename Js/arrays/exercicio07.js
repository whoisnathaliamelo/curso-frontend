let inteiros = [1, 2, 3, 6, 8, 3, 2, 6, 86];
let pares = inteiros.filter(num => num % 2 == 0);
let soma = pares.reduce(function (acumulador, numero) {
    return acumulador + numero
}, 0)
console.log(soma)


