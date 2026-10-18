// FUNÇÃO GENÉRICA: Limpa apenas o bloco onde o botão foi clicado
function resetCurrentBlock(event) {
  // 1. Identifica o botão que foi clicado
  const clickedButton = event.target;

  // 2. Encontra a <section class="block"> onde este botão está guardado
  const currentBlock = clickedButton.closest(".block");

  if (currentBlock) {
    // 3. Procura e limpa apenas os inputs que estão DENTRO deste bloco
    const inputs = currentBlock.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));

    // 4. Procura e limpa apenas o <span> de resultado que está DENTRO deste bloco
    const resultSpan = currentBlock.querySelector("h3 span");
    if (resultSpan) {
      resultSpan.innerText = "";
    }
  }
}

// ATIVAÇÃO DOS BOTÕES: Procura todos os botões de reset e ativa-os
window.addEventListener("DOMContentLoaded", () => {
  const resetButtons = document.querySelectorAll(".btn-reset");

  resetButtons.forEach((button) => {
    button.addEventListener("click", resetCurrentBlock);
  });
});
