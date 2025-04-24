export function initializePrenchimentoPage() {
  const editButtons = document.querySelectorAll('.edit-meta-btn');

  if (editButtons.length === 0) {
    console.warn('Nenhum botão de edição encontrado na página.');
    return;
  }

  editButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const container = this.parentElement;
      const metaInput = container.querySelector('.meta-input.meta-atual');

      if (!metaInput) {
        console.error('Campo de meta não encontrado.');
        return;
      }

      if (metaInput.hasAttribute('readonly')) {
        metaInput.removeAttribute('readonly');
        metaInput.classList.add('editable');
        metaInput.focus();
        this.innerHTML = '✔';
      } else {
        metaInput.setAttribute('readonly', true);
        metaInput.classList.remove('editable');
        this.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.854a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708l-9.793 9.793a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1-.11-.168l9.793-9.793zM11.207 2L2 11.207V13h1.793L14 3.793 11.207 2zM1 13.5V15h1.5l.5-.5H1z"/>
          </svg>
        `;
        alert('Meta atualizada com sucesso!');
      }
    });
  });
}