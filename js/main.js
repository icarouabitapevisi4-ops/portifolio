(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('#nav-links');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      navLinks.classList.toggle('open', !isOpen);
      const label = menuButton.querySelector('.sr-only');
      if (label) label.textContent = isOpen ? 'Abrir menu' : 'Fechar menu';
      menuButton.querySelector('[aria-hidden="true"]').textContent = isOpen ? '☰' : '×';
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        const label = menuButton.querySelector('.sr-only');
        if (label) label.textContent = 'Abrir menu';
        menuButton.querySelector('[aria-hidden="true"]').textContent = '☰';
      });
    });
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
