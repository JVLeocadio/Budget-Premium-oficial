export function initializeDarkMode() {
  const themeToggleButton = document.getElementById('theme-toggle-button');

  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', function () {
      // Alterna a classe "checked" no botão
      this.classList.toggle('checked');

      // Alterna a classe "dark" no <html> para trocar o tema
      document.documentElement.classList.toggle('dark');
    });
  }
}

export function toggleTheme() {
  const htmlElement = document.documentElement;

  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

// Initialize theme based on saved preference
export function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}