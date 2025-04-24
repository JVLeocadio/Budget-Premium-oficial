export function initializeModalEvents() {
    const viewButtons = document.querySelectorAll(".add-participant");
    const modals = document.querySelectorAll(".modal");
  
    viewButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = "flex";
        }
      });
    });
  
    modals.forEach((modal) => {
      const closeBtn = modal.querySelector(".close-btn");
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    });
  
    window.addEventListener("click", (event) => {
      modals.forEach((modal) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    });
  }