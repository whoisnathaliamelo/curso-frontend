(function () {
  const userName =  ;
  const elemento = document.querySelector(".top-bar p ");
  if (userName) {
    elemento.textContent += userName;
  } else {
    elemento.parentElement.style.display = "none"; // PARA ESCONDER
    //       elemento.remove() // PARA REMOVER
  }
})();
