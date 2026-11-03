/* NFShark White Blur Ripple
 * Efek sentuhan/klik global untuk halaman aktif. Halaman arsip history tidak memuat file ini.
 */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) return;

  const MAX_RIPPLES = 5;
  const DURATION = 700;
  const activeRipples = new Set();

  document.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    if (event.target.closest('[data-no-touch-ripple]')) return;

    if (activeRipples.size >= MAX_RIPPLES) {
      const oldest = activeRipples.values().next().value;
      if (oldest) {
        oldest.remove();
        activeRipples.delete(oldest);
      }
    }

    const ripple = document.createElement('span');
    ripple.className = 'nf-touch-ripple';
    ripple.setAttribute('aria-hidden', 'true');
    ripple.style.left = event.clientX + 'px';
    ripple.style.top = event.clientY + 'px';

    document.body.appendChild(ripple);
    activeRipples.add(ripple);

    const cleanup = () => {
      ripple.remove();
      activeRipples.delete(ripple);
    };

    ripple.addEventListener('animationend', cleanup, { once: true });
    window.setTimeout(cleanup, DURATION + 150);
  }, { passive: true });
})();
