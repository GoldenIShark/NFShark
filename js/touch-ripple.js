/* NFShark press feedback and tap ring
 * Halaman arsip history tidak memuat file ini.
 */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) return;

  const MAX_RINGS = 5;
  const DURATION = 280;
  const PRESS_TARGETS = 'a[href], button, input[type="button"], input[type="submit"], input[type="reset"], summary, [role="button"]';
  const activeRipples = new Set();
  const pointerPresses = new Map();
  const keyboardPresses = new Set();

  const getElement = (target) => target instanceof Element ? target : target.parentElement;
  const getPressTarget = (target) => getElement(target)?.closest(PRESS_TARGETS);

  function syncPressState(element) {
    let pointerPressed = false;
    for (const pressedElement of pointerPresses.values()) {
      if (pressedElement === element) {
        pointerPressed = true;
        break;
      }
    }
    element.classList.toggle('is-pressed', pointerPressed || keyboardPresses.has(element));
  }

  function releasePointer(event) {
    const element = pointerPresses.get(event.pointerId);
    if (!element) return;
    pointerPresses.delete(event.pointerId);
    syncPressState(element);
  }

  document.addEventListener('pointerdown', (event) => {
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return;
    const target = getElement(event.target);
    if (!target || target.closest('[data-no-touch-ripple]')) return;

    const pressTarget = target.closest(PRESS_TARGETS);
    if (pressTarget) {
      pressTarget.classList.add('nf-press-feedback');
      pointerPresses.set(event.pointerId, pressTarget);
      syncPressState(pressTarget);
    }

    if (target.closest(`${PRESS_TARGETS}, input, textarea, select, label, [contenteditable]`)) return;

    if (activeRipples.size >= MAX_RINGS) {
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

  window.addEventListener('pointerup', releasePointer, true);
  window.addEventListener('pointercancel', releasePointer, true);

  document.addEventListener('keydown', (event) => {
    if (event.repeat || (event.key !== 'Enter' && event.key !== ' ')) return;
    const element = getPressTarget(event.target);
    if (!element) return;
    element.classList.add('nf-press-feedback');
    keyboardPresses.add(element);
    syncPressState(element);
  });

  document.addEventListener('keyup', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const pressedElements = [...keyboardPresses];
    keyboardPresses.clear();
    pressedElements.forEach(syncPressState);
  });

  window.addEventListener('blur', () => {
    const pressedElements = new Set([...pointerPresses.values(), ...keyboardPresses]);
    pointerPresses.clear();
    keyboardPresses.clear();
    pressedElements.forEach(syncPressState);
  });
})();
