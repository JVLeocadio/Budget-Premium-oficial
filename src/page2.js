export function initializePage2() {
  console.log("Página 2 carregada!");

  // Exemplo de funcionalidade específica da página 2
  const openModalBtn = document.getElementById("open-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const modal = document.getElementById("details-modal");

  if (openModalBtn && closeModalBtn && modal) {
    // Abrir o modal
    openModalBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    // Fechar o modal
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Fechar o modal ao clicar fora do conteúdo
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
}