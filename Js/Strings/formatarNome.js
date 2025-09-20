function formatarNome(nomeCompleto) {
  // Remove espaços extras apenas das pontas (início/fim).
  // Ex.: "  Daniel Morales  " -> "Daniel Morales"
  nomeCompleto = nomeCompleto.trim();

  // Encontra o índice do primeiro espaço dentro da string.
  // Se não houver espaço, indexOf retorna -1.
  let primeiroEspaco = nomeCompleto.indexOf(" ");

  // Caso não exista espaço, significa que só há um nome.
  // Nesse caso, apenas retorna o próprio nome.
  if (primeiroEspaco < 0) {
    return nomeCompleto;
  }

  // Separamos o primeiro nome: do início até o primeiro espaço (não incluso).
  // Ex.: "Daniel Morales" -> "Daniel"
  let primeiroNome = nomeCompleto.slice(0, primeiroEspaco);

  // O "sobrenome" aqui é tudo que vem depois do primeiro espaço:
  // pode incluir nomes do meio + sobrenome.
  // Ex.: "Daniel Tapias Morales" -> "Tapias Morales"
  let sobreNome = nomeCompleto.slice(primeiroEspaco + 1);

  // Monta no formato "Sobrenome(s), PrimeiroNome".
  // Ex.: "Tapias Morales, Daniel"
  return sobreNome + ", " + primeiroNome;
}

// Exemplos de uso:
console.log(formatarNome("Daniel")); // Daniel  (sem espaço, retorna igual)
console.log(formatarNome("Daniel Morales")); // Morales, Daniel
console.log(formatarNome("Daniel Tapias Morales")); // Tapias Morales, Daniel
