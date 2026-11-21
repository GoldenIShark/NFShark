/* Menutup loader NFShark setelah dokumen dan aset pemuatan awal selesai. */
(() => {
  'use strict';

  const loader = document.getElementById('nf-page-loader');
  if (!loader) return;

  const hideLoader = () => {
    if (!loader.isConnected || loader.classList.contains('is-hiding')) return;

    loader.classList.add('is-hiding');
    const removeLoader = () => loader.remove();

    loader.addEventListener('transitionend', (event) => {
      if (event.target === loader && event.propertyName === 'opacity') removeLoader();
    }, { once: true });

    window.setTimeout(removeLoader, 400);
  };

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader, { once: true });
  }
})();
