function calcularAreaRetangulo(l, a) {
    if (typeof l !== "number" || typeof a !== "number") {
        throw Error("CalcularAreaRetangulo aceita dois parâmentros do tipo number")
    }
    return l * a
}

function calcularAreaCirculo(r) {
  if (typeof r !== "number") {
    throw Error("CalcularAreaCirculo aceita um parâmentro do tipo number");
  }
  return Math.PI * r * r
}