// Função autoexecutável (IIFE) para isolar o escopo e rodar imediatamente
(function () {
  // Registra um ouvinte de rolagem; a cada scroll chama positionImage()
  window.addEventListener("scroll", positionImage);

  // Seleciona todos os elementos que possuem o atributo [data-paralax]
  // e converte o NodeList em um array (para poder usar forEach, etc.)
  const dataParalaxContainer = [...document.querySelectorAll("[data-paralax]")];

  // Retorna true quando o topo do elemento alcança ou passa do topo do viewport
  // (getBoundingClientRect().top <= 0)
  function isGettingOut(container) {
    return container.getBoundingClientRect().top <= 0;
  }

  // Calcula a nova posição vertical do background para o efeito parallax
  // - Lê a velocidade em data-p-velocity (padrão 0.5)
  // - Usa a distância do topo do elemento até o topo do viewport
  // - Multiplica pela velocidade e inverte o sinal para deslocar o background
  function getNewPosition(c) {
    const v = parseFloat(c.getAttribute("data-p-velocity")) || 0.5;
    return c.getBoundingClientRect().top * v * -1;
  }

  // Atualiza a posição de background de cada elemento com [data-paralax]
  function positionImage() {
    dataParalaxContainer.forEach((c) => {
      // Lê as posições computadas atuais do background (X e Y)
      let originalPositionY = getComputedStyle(c).backgroundPositionY;
      let originalPositionX = getComputedStyle(c).backgroundPositionX;

      // Log para depuração (mostra as posições originais no console)
      console.log(originalPositionX, originalPositionY);

      if (isGettingOut(c)) {
        // Se o elemento já encostou no topo do viewport, aplica o deslocamento parallax no eixo Y
        c.style.backgroundPosition = ` ${originalPositionX} ${getNewPosition(
          c
        )}px `;
      } else {
        // Antes de encostar no topo, mantém o background em Y = 0px (sem deslocamento)
        c.style.backgroundPosition = ` ${originalPositionX} 0px `;
      }
    });
  }

  // Executa uma vez ao carregar para posicionar corretamente,
  // além de continuar reagindo ao evento de scroll
  positionImage();
})();
