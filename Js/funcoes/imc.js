function calcularImc(peso, altura) {
  if (arguments.length !== 2) {
    throw new Error("Digite o peso e a altura");
  }
  if (typeof peso !== "number" || typeof altura !== "number") {
    throw new Error("Digite apenas números");
  }

  let imc = peso / altura ** 2;
  console.log(`Seu IMC é ${imc.toFixed(2)} `);

  function classificacaoImc(imc) {
    if (imc > 16 && imc < 16.9) {
      console.log("Seu IMC está muito abaixo do peso");
    }
    if (imc > 17 && imc < 18.4) {
      console.log("Seu IMC está abaixo do peso");
    }
    if (imc > 18.5 && imc < 24.9) {
      console.log("Seu IMC está no peso normal");
    }
    if (imc > 25 && imc < 29.9) {
      console.log("Seu IMC está acima do peso");
    }
    if (imc > 30 && imc < 34.9) {
      console.log("Seu IMC está em Obesidade Grau I");
    }
    if (imc > 35 && imc < 40) {
      console.log("Seu IMC está em Obesidade Grau II");
    }
    if (imc > 40) {
      console.log("Seu IMC está em Obesidade Grau III");
    }
  }
  classificacaoImc(imc);
}

console.log(calcularImc(100, 1.55));
