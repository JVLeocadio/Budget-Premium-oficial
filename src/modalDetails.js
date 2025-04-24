export function initializeModalDetails() {
    const openModalBtn = document.getElementById("open-modal");
    const closeModalBtn = document.getElementById("close-modal");
    const modal = document.getElementById("details-modal");
  
    if (openModalBtn) {
      openModalBtn.addEventListener("click", function () {
        modal.style.display = "flex";
      });
    }
  
    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", function () {
        modal.style.display = "none";
      });
    }
  
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }