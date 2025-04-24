export function initializeNavigation() {
  const links = document.querySelectorAll('.app-sidebar-link, .wallet-btn'); // Inclui o botão da carteira
  const content = document.getElementById('content');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const page = link.getAttribute('data-page');

      if (!page) return;

      fetch(page)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erro ao carregar a página');
          }
          return response.text();
        })
        .then((html) => {
          content.innerHTML = html;

          // Reexecutar inicializações específicas após carregar a nova página
          if (page === 'prenchimento.html') {
            import('./prenchimentoPage.js').then(({ initializePrenchimentoPage }) => {
              initializePrenchimentoPage();
            });
          }

          if (page === 'page2.html') {
            import('./page2.js').then(({ initializePage2 }) => {
              initializePage2();
            });
          }

          // Inicializar eventos globais novamente
          import('./modalEvents.js').then(({ initializeModalEvents }) => {
            initializeModalEvents();
          });
        })
        .catch((error) => {
          console.error('Erro:', error);
          content.innerHTML = '<p>Erro ao carregar a página.</p>';
        });
    });
  });
}