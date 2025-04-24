export function updateMetaEvents() {
    const updateButtons = document.querySelectorAll(".update-meta-btn");
  
    updateButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const container = this.parentElement;
        const metaAtual = container.querySelector(".meta-atual strong");
        const metaInput = container.querySelector(".meta-input");
  
        if (metaInput.value.trim() !== "") {
          metaAtual.textContent = metaInput.value.trim();
          metaInput.value = "";
          alert("Meta atualizada com sucesso!");
        } else {
          alert("Por favor, insira um valor válido para a meta.");
        }
      });
    });
  }