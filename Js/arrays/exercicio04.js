const inteiros = [2, 4, 6, 8, 10]
let maior = inteiros[0]
for (let i = 1; i < inteiros.length; i++) {
    if (inteiros[i] > maior) {
        maior = inteiros[i]
    }
}
console.log(maior)