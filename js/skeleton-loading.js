(() => {
  'use strict';

  document.documentElement.classList.add('nf-skeleton-loading');

  const textSelector = 'h1,h2,h3,h4,h5,h6,p,li,a,button,label,legend,small,strong,em,blockquote,figcaption,summary,input,textarea,select';
  const ignoredSelector = '[hidden],[aria-hidden="true"],script,style,noscript,template,#nf-loading-screen,.nf-loading-screen';

  const isVisible = (element) => {
    if (element.matches(ignoredSelector) || element.closest(ignoredSelector)) return false;
    return !!(element.getClientRects().length && getComputedStyle(element).visibility !== 'hidden');
  };

  const prepare = (root = document) => {
    root.querySelectorAll(textSelector).forEach((element) => {
      if (!isVisible(element) || !element.textContent.trim() && !element.matches('input,textarea,select,button')) return;
      element.setAttribute('data-nf-skeleton', '');
    });

    root.querySelectorAll('img').forEach((image) => {
      if (image.complete) return;
      image.setAttribute('data-nf-skeleton-media', '');
      const finish = () => image.removeAttribute('data-nf-skeleton-media');
      image.addEventListener('load', finish, { once: true });
      image.addEventListener('error', finish, { once: true });
    });

    root.querySelectorAll('iframe').forEach((frame) => {
      const wrapper = frame.parentElement;
      if (!wrapper || frame.dataset.nfSkeletonBound) return;
      frame.dataset.nfSkeletonBound = 'true';
      wrapper.setAttribute('data-nf-skeleton-frame', '');
      const finish = () => wrapper.removeAttribute('data-nf-skeleton-frame');
      frame.addEventListener('load', finish, { once: true });
      frame.addEventListener('error', finish, { once: true });
    });
  };

  const finishText = () => {
    document.querySelectorAll('[data-nf-skeleton]').forEach((element) => element.removeAttribute('data-nf-skeleton'));
    document.documentElement.classList.remove('nf-skeleton-loading');
  };

  prepare();

  const observer = new MutationObserver((records) => {
    records.forEach((record) => record.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) prepare(node);
    }));
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });

  const finishWhenReady = async () => {
    if (document.fonts && document.fonts.ready) {
      try { await document.fonts.ready; } catch (_) {}
    }
    finishText();
    observer.disconnect();
  };

  if (document.readyState === 'complete') {
    finishWhenReady();
  } else {
    window.addEventListener('load', finishWhenReady, { once: true });
  }
})();