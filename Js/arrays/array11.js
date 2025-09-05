function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce(function (sum, atual) {
        return sum + atual
    }, 0)
}

function avarege() {
    return sum(...arguments) / arguments.length
}

let soma = sum(2, 2, 2)
console.log(soma)

let media = avarege(1, 2, 3, 4, 5)
console.log(media)