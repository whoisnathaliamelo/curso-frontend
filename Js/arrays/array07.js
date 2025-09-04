const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9];

const numerosNovos = numeros.reduce(function (numerosNovos, numeroAtual) {
    if (numerosNovos.indexOf(numeroAtual) < 0) {
        numerosNovos.push(numeroAtual)
    }
    return numerosNovos
}, [])
 
console.log(numerosNovos)