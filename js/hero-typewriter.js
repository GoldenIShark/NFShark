/* Animasi Typewriter hero NFShark: muncul -> tunggu -> hapus -> tunggu -> loop. */
(() => {
  'use strict';

  const config = window.NFSharkHeroText;
  const target = document.querySelector('[data-nf-typewriter]');
  if (!config || !target) return;

  const characters = Array.from(config.text);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  target.textContent = '';
  target.setAttribute('aria-label', config.text);
  target.setAttribute('aria-live', 'off');

  if (reducedMotion.matches) {
    target.textContent = config.text;
    return;
  }

  let index = 0;
  let timer = null;

  const waitForIntro = (callback) => {
    const intro = document.getElementById('nf-loading-screen');
    if (!intro || !intro.isConnected) {
      callback();
      return;
    }

    const observer = new MutationObserver(() => {
      if (!intro.isConnected) {
        observer.disconnect();
        callback();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  };

  const typeNext = () => {
    if (index < characters.length) {
      index += 1;
      target.textContent = characters.slice(0, index).join('');
      timer = window.setTimeout(typeNext, config.typeSpeed);
      return;
    }
    timer = window.setTimeout(deleteNext, config.completeDelay);
  };

  const deleteNext = () => {
    if (index > 0) {
      index -= 1;
      target.textContent = characters.slice(0, index).join('');
      timer = window.setTimeout(deleteNext, config.deleteSpeed);
      return;
    }
    timer = window.setTimeout(() => {
      index = 0;
      typeNext();
    }, config.emptyDelay);
  };

  waitForIntro(() => {
    typeNext();
  });

  const handleMotionPreference = (event) => {
    if (event.matches) {
      window.clearTimeout(timer);
      target.textContent = config.text;
    }
  };
  if (typeof reducedMotion.addEventListener === 'function') {
    reducedMotion.addEventListener('change', handleMotionPreference);
  }
})();
