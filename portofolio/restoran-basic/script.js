/**
 * Aura Rasa — Interaksi Vanilla JS Ringan (Paket Basic NFShark)
 * Tanpa library berat, ramah aksesibilitas keyboard dan mobile.
 */

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('#site-nav');
  const navLinks = document.querySelectorAll('.site-nav a');

  if (menuToggle && siteNav) {
    const setNavOpen = (isOpen) => {
      siteNav.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Tutup navigasi' : 'Buka navigasi');
      document.body.classList.toggle('menu-open', isOpen);
    };

    menuToggle.addEventListener('click', () => {
      setNavOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => setNavOpen(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && siteNav.classList.contains('open')) {
        setNavOpen(false);
        menuToggle.focus();
      }
    });

    window.matchMedia('(min-width: 861px)').addEventListener('change', (event) => {
      if (event.matches) setNavOpen(false);
    });
  }
});
