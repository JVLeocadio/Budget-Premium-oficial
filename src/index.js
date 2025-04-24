import {  initializeTheme, initializeDarkMode  } from './darkMode.js';
import { initializeModalEvents } from './modalEvents.js';
import { initializeModalDetails } from './modalDetails.js';
import { updateMetaEvents } from './updateMeta.js';
import { initializeNavigation } from './navigation.js';
import { initializePage2 } from './page2.js';
import { initializePrenchimentoPage } from './prenchimentoPage.js';

document.addEventListener('DOMContentLoaded', () => {
// Inicializa o tema salvo no localStorage
initializeTheme();

// Configura o botão de alternância de tema
initializeDarkMode();

  // Inicializar eventos globais
  initializeModalEvents();
  initializeModalDetails();
  updateMetaEvents();
  
  
  // Inicializar navegação dinâmica
  initializeNavigation();


  initializePrenchimentoPage();

  // Verificar se a página atual é a page2.html
  const currentPage = document.body.getAttribute('data-page');
  if (currentPage === 'page2') {
    initializePage2();
  }
});