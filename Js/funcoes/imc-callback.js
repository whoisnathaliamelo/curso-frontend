function calcularImc(peso, altura, callback) {
  if (typeof peso !== "number" || typeof altura !== "number") {
    throw new Error("Digite apenas números");
  }

  let imc = peso / altura ** 2;

  if (typeof callback === "function") {
    return callback(imc);
  }

  return `Seu IMC é ${imc.toFixed(2)}`;
}

// Callback para classificação
function classificacaoImc(imc) {
  if (imc >= 16 && imc <= 16.9) {
    return "Seu IMC está muito abaixo do peso";
  }
  if (imc >= 17 && imc <= 18.4) {
    return "Seu IMC está abaixo do peso";
  }
  if (imc >= 18.5 && imc <= 24.9) {
    return "Seu IMC está no peso normal";
  }
  if (imc >= 25 && imc <= 29.9) {
    return "Seu IMC está acima do peso";
  }
  if (imc >= 30 && imc <= 34.9) {
    return "Seu IMC está em Obesidade Grau I";
  }
  if (imc >= 35 && imc <= 40) {
    return "Seu IMC está em Obesidade Grau II";
  }
  if (imc > 40) {
    return "Seu IMC está em Obesidade Grau III";
  }
  return "Valor de IMC fora da classificação";
}

// Testando sem callback
console.log(calcularImc(50, 1.55));

// Testando com callback
console.log(calcularImc(50, 1.55, classificacaoImc));
