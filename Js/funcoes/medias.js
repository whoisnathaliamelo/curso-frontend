function medias(arguments) {
  if (arguments.length === 0) {
    return 0;
  }
  let soma = 0;
  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
    if (typeof arguments[i] !== "number") {
      return console.log("Digite apenas numeros!");
    }
  }
  return soma / arguments.length;
}

console.log(medias([2, 3, 5, "5", 4]));
