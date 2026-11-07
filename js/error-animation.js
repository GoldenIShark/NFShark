(function () {
  'use strict';

  const ERROR_PAGES = {
    '404': {
      title: 'Halaman tidak ditemukan',
      description: 'Alamat yang kamu buka mungkin salah, sudah dipindahkan, atau halaman tersebut tidak tersedia.',
      pageTitle: 'Halaman Tidak Ditemukan — NFShark'
    },
    '403': {
      title: 'Akses tidak diizinkan',
      description: 'Kamu tidak memiliki izin untuk membuka halaman ini.',
      pageTitle: 'Akses Tidak Diizinkan — NFShark'
    },
    '500': {
      title: 'Terjadi gangguan pada server',
      description: 'Halaman ini tidak dapat diproses saat ini. Silakan coba kembali beberapa saat lagi.',
      pageTitle: 'Gangguan Server — NFShark'
    }
  };

  const page = document.querySelector('[data-error-page]');
  if (!page) return;

  const stage = page.querySelector('[data-error-stage]');
  const shark = page.querySelector('[data-error-shark]');
  const art = page.querySelector('[data-error-shark-art]');
  const codeText = page.querySelector('[data-error-code-text]');
  const title = page.querySelector('[data-error-title]');
  const description = page.querySelector('[data-error-description]');
  if (!stage || !shark || !art || !codeText || !title || !description) return;

  const code = page.dataset.errorCode || '404';
  const fallback = ERROR_PAGES[code] || {
    title: title.textContent,
    description: description.textContent,
    pageTitle: document.title
  };
  codeText.textContent = code;
  codeText.setAttribute('aria-label', `Kode error ${code}`);
  title.textContent = fallback.title;
  description.textContent = fallback.description;
  document.title = fallback.pageTitle;

  const lifecycle = new AbortController();
  const motionTimers = new Set();
  const introTimers = new Set();
  let titleTimer = null;
  let introFrame = null;
  let stopped = false;

  function viewportCenter() {
    return {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
  }

  function schedule(callback, delay, timers) {
    const timer = window.setTimeout(() => {
      timers.delete(timer);
      if (!stopped) callback();
    }, delay);
    timers.add(timer);
    return timer;
  }

  function clearTimers(timers) {
    timers.forEach(window.clearTimeout);
    timers.clear();
  }

  class CharacterController {
    constructor(button) {
      this.button = button;
      this.point = { x: 0, y: 0 };
      this.facing = 1;
    }

    setPosition(point, duration) {
      const dx = point.x - this.point.x;
      const dy = point.y - this.point.y;
      const facing = Math.abs(dx) < 1 ? this.facing : dx < 0 ? -1 : 1;
      const angle = Math.atan2(facing < 0 ? -dy : dy, Math.abs(dx)) * (180 / Math.PI);
      this.button.style.transitionDuration = `${duration}ms`;
      this.button.dataset.facing = String(facing);
      const gazeX = Number(this.button.dataset.gazeX || 0);
      this.button.style.setProperty('--gaze-x', `${gazeX * (facing > 0 ? -1 : 1) * 1.5}px`);
      // Ilustrasi SVG menghadap ke kiri; mirror hanya saat hiu bergerak ke kanan.
      this.button.style.transform = `translate(-50%, -50%) translate3d(${point.x}px, ${point.y}px, 0) rotate(${angle}deg) scaleX(${-facing})`;
      this.point = { x: point.x, y: point.y };
      this.facing = facing;
    }

    freeze() {
      const sharkRect = this.button.getBoundingClientRect();
      const computedTransform = window.getComputedStyle(this.button).transform;
      const center = viewportCenter();
      this.point = {
        x: sharkRect.left + sharkRect.width / 2 - center.x,
        y: sharkRect.top + sharkRect.height / 2 - center.y
      };
      this.button.style.transitionDuration = '0ms';
      this.button.style.transform = computedTransform;
    }

    setSwimming(isSwimming) {
      this.button.classList.toggle('is-swimming', isSwimming);
    }

    setInvestigating(isInvestigating) {
      this.button.classList.toggle('is-investigating', isInvestigating);
    }
  }

  class ExpressionController {
    constructor(button) {
      this.button = button;
    }

    set(expression) {
      this.button.dataset.expression = expression;
    }

    look(x, y) {
      this.button.dataset.gazeX = String(x);
      const gazeX = x * (this.button.dataset.facing === '1' ? -1 : 1);
      this.button.style.setProperty('--gaze-x', `${gazeX * 1.5}px`);
      this.button.style.setProperty('--gaze-y', `${y * 1.5}px`);
    }
  }

  const character = new CharacterController(shark);
  const expression = new ExpressionController(shark);

  class DetectiveModeController {
    constructor(characterController, expressionController, scheduleTask) {
      this.character = characterController;
      this.expression = expressionController;
      this.schedule = scheduleTask;
      this.targetIndex = 0;
    }

    run(kind, onComplete, gaze = { x: 0, y: 0 }) {
      this.character.setSwimming(false);
      this.expression.set(kind === 'user' ? 'surprised' : 'curious');
      this.expression.look(gaze.x, gaze.y);

      this.schedule(() => {
        this.character.setInvestigating(true);
        this.expression.set('focused');
        this.expression.look(-.7, -.2);

        this.schedule(() => {
          this.expression.look(.7, .1);
          const targets = stage.querySelectorAll('.error-decor--document, .error-decor--browser');
          const target = targets[this.targetIndex % targets.length];
          this.targetIndex += 1;
          const point = this.pointNear(target);
          const duration = 950 + Math.random() * 350;
          this.character.setSwimming(true);
          this.character.setPosition(point, duration);

          this.schedule(() => {
            this.character.setSwimming(false);
            this.expression.set('focused');
            this.expression.look(-.5, .15);
            this.schedule(() => {
              this.character.setInvestigating(false);
              this.expression.set('pleased');
              this.expression.look(0, 0);
              this.schedule(() => {
                this.expression.set('curious');
                onComplete();
              }, 700);
            }, 900);
          }, duration + 100);
        }, 500);
      }, kind === 'user' ? 350 : 600);
    }

    pointNear(target) {
      const targetRect = target.getBoundingClientRect();
      const sharkWidth = shark.getBoundingClientRect().width;
      const sharkHeight = shark.getBoundingClientRect().height;
      const center = viewportCenter();
      const targetX = targetRect.left + targetRect.width / 2 - center.x;
      const targetY = targetRect.top + targetRect.height / 2 - center.y;
      const maxX = Math.max(0, center.x - sharkWidth / 2 - 8);
      const maxY = Math.max(0, center.y - sharkHeight / 2 - 8);
      const towardSide = character.point.x < targetX ? -1 : 1;
      const gap = sharkWidth / 2 + targetRect.width / 2 + 12;
      const x = targetX + towardSide * gap;
      return {
        x: Math.max(-maxX, Math.min(maxX, x)),
        y: Math.max(-maxY, Math.min(maxY, targetY))
      };
    }
  }

  const detective = new DetectiveModeController(character, expression, (callback, delay) => (
    schedule(callback, delay, motionTimers)
  ));

  class MovementController {
    constructor(characterController, expressionController, detectiveController) {
      this.character = characterController;
      this.expression = expressionController;
      this.detective = detectiveController;
      this.active = false;
      this.cycles = 0;
    }

    start() {
      if (stopped || this.active) return;
      this.active = true;
      this.next();
    }

    stop() {
      this.active = false;
      clearTimers(motionTimers);
      this.character.setSwimming(false);
      this.character.freeze();
    }

    next() {
      if (!this.active || stopped) return;
      schedule(() => {
        if (!this.active) return;
        this.cycles += 1;
        if (this.cycles % 5 === 0) {
          this.detective.run('search', () => this.next());
          return;
        }
        if (this.cycles % 6 === 0) this.wrap();
        else this.swim();
      }, 500 + Math.random() * 900, motionTimers);
    }

    bounds() {
      const sharkRect = this.character.button.getBoundingClientRect();
      return {
        x: Math.max(0, window.innerWidth / 2 - sharkRect.width / 2 - 8),
        y: Math.max(0, window.innerHeight / 2 - sharkRect.height / 2 - 8)
      };
    }

    randomPoint() {
      const bounds = this.bounds();
      return {
        x: (Math.random() * 2 - 1) * bounds.x,
        y: (Math.random() * 2 - 1) * bounds.y
      };
    }

    swim() {
      this.expression.set(this.cycles % 4 === 0 ? 'confused' : 'curious');
      this.character.setSwimming(true);
      this.character.setPosition(this.randomPoint(), 1700 + Math.random() * 1400);
      schedule(() => {
        this.character.setSwimming(false);
        this.next();
      }, 1800 + Math.random() * 1450, motionTimers);
    }

    wrap() {
      const bounds = this.bounds();
      const side = Math.random() < .5 ? -1 : 1;
      const outside = window.innerWidth / 2 + this.character.button.getBoundingClientRect().width / 2 + 8;
      const y = (Math.random() * 2 - 1) * bounds.y;
      const duration = 1400 + Math.random() * 800;
      this.character.setSwimming(true);
      this.character.setPosition({ x: side * outside, y }, duration);
      schedule(() => {
        this.character.setSwimming(false);
        this.character.setPosition({ x: -side * outside, y }, 0);
        this.expression.set('curious');
        schedule(() => {
          this.character.setSwimming(true);
          this.character.setPosition(this.randomPoint(), 1600 + Math.random() * 900);
          schedule(() => {
            this.character.setSwimming(false);
            this.next();
          }, 1900, motionTimers);
        }, 80, motionTimers);
      }, duration + 40, motionTimers);
    }
  }

  const movement = new MovementController(character, expression, detective);

  class InteractionController {
    constructor(button, movementController, detectiveController) {
      this.button = button;
      this.movement = movementController;
      this.detective = detectiveController;
      this.onClick = this.onClick.bind(this);
      button.addEventListener('click', this.onClick, { signal: lifecycle.signal });
    }

    onClick(event) {
      if (stopped) return;
      this.movement.stop();
      const rect = this.button.getBoundingClientRect();
      const gaze = event.detail === 0 ? { x: 0, y: 0 } : {
        x: Math.max(-1, Math.min(1, (event.clientX - rect.left - rect.width / 2) / (rect.width / 2))),
        y: Math.max(-1, Math.min(1, (event.clientY - rect.top - rect.height / 2) / (rect.height / 2)))
      };
      this.detective.run('user', () => this.movement.start(), gaze);
    }
  }

  class VisualEffectsController {
    constructor() {
      this.waves = new Map();
      this.onPointerDown = this.onPointerDown.bind(this);
      document.addEventListener('pointerdown', this.onPointerDown, {
        passive: true,
        signal: lifecycle.signal
      });
    }

    onPointerDown(event) {
      const target = event.target;
      if (!(target instanceof Element) || target.closest('a, button, input, select, textarea, summary, [contenteditable="true"]')) return;
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('class', 'error-wave');
      svg.setAttribute('viewBox', '0 0 58 38');
      svg.setAttribute('aria-hidden', 'true');
      svg.style.left = `${event.clientX - 29}px`;
      svg.style.top = `${event.clientY - 19}px`;
      const paths = [
        'M3 19c6-8 11 8 18 0s12 8 19 0 11 5 15 0',
        'M7 25c6-7 11 6 17 0s11 6 17 0 9 4 13 0'
      ];
      paths.forEach(data => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', data);
        svg.append(path);
      });
      document.body.append(svg);
      const timer = window.setTimeout(() => {
        this.waves.delete(svg);
        svg.remove();
      }, 850);
      this.waves.set(svg, timer);
    }

    clear() {
      this.waves.forEach((timer, wave) => {
        window.clearTimeout(timer);
        wave.remove();
      });
      this.waves.clear();
    }
  }

  new InteractionController(shark, movement, detective);
  const visualEffects = new VisualEffectsController();

  class AssetLoader {
    constructor(stageElement, artElement) {
      this.stage = stageElement;
      this.art = artElement;
      this.observer = null;
    }

    start(onLoaded) {
      if (!('IntersectionObserver' in window)) {
        this.load(onLoaded);
        return;
      }
      this.observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        this.observer.disconnect();
        this.observer = null;
        this.load(onLoaded);
      });
      this.observer.observe(this.stage);
    }

    async load(onLoaded) {
      for (let attempt = 0; attempt < 3 && !stopped; attempt += 1) {
        try {
          const response = await fetch('assets/image/nfshark-error-shark.svg', {
            signal: lifecycle.signal
          });
          if (!response.ok) throw new Error(`SVG load failed: ${response.status}`);
          const parsed = new DOMParser().parseFromString(await response.text(), 'image/svg+xml');
          if (parsed.documentElement.localName !== 'svg' || parsed.querySelector('parsererror')) {
            throw new Error('Invalid shark SVG');
          }
          this.art.replaceChildren(document.importNode(parsed.documentElement, true));
          onLoaded();
          return;
        } catch (error) {
          if (error.name === 'AbortError' || stopped) return;
          if (attempt === 2) {
            console.error('Animasi hiu tidak dapat dimuat; konten halaman tetap tersedia.', error);
            return;
          }
          try {
            await this.wait(1000);
          } catch (waitError) {
            if (waitError.name !== 'AbortError') throw waitError;
            return;
          }
        }
      }
    }

    wait(delay) {
      return new Promise((resolve, reject) => {
        const onAbort = () => {
          window.clearTimeout(timer);
          reject(new DOMException('Pemuatan aset dibatalkan.', 'AbortError'));
        };
        const timer = window.setTimeout(() => {
          lifecycle.signal.removeEventListener('abort', onAbort);
          resolve();
        }, delay);
        lifecycle.signal.addEventListener('abort', onAbort, { once: true });
      });
    }

    stop() {
      if (this.observer) this.observer.disconnect();
      this.observer = null;
    }
  }

  const assetLoader = new AssetLoader(stage, art);

  function startTitleEffects() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let floating = true;
    codeText.classList.add('is-floating');
    titleTimer = window.setInterval(() => {
      floating = !floating;
      codeText.classList.toggle('is-floating', floating);
      codeText.classList.toggle('is-breathing', !floating);
    }, 2800);
  }

  function startIntro() {
    character.setPosition({
      x: -window.innerWidth / 2 - shark.getBoundingClientRect().width / 2 - 8,
      y: 0
    }, 0);
    document.body.classList.add('is-animation-ready');
    expression.set('curious');
    character.setSwimming(true);
    introFrame = window.requestAnimationFrame(() => {
      if (stopped) return;
      document.body.classList.add('is-intro-running', 'is-shark-visible');
      character.setPosition({ x: 0, y: 0 }, 1150);
    });
    schedule(() => {
      document.body.classList.remove('is-intro-running');
      character.setSwimming(false);
      expression.set('focused');
      expression.look(-.6, .1);
      schedule(() => expression.look(.6, -.1), 200, introTimers);
    }, 3550, introTimers);
    schedule(() => {
      expression.set('curious');
      expression.look(0, 0);
      movement.start();
      startTitleEffects();
    }, 4200, introTimers);
  }

  function cleanUp() {
    if (stopped) return;
    stopped = true;
    lifecycle.abort();
    assetLoader.stop();
    clearTimers(motionTimers);
    clearTimers(introTimers);
    visualEffects.clear();
    if (titleTimer) window.clearInterval(titleTimer);
    if (introFrame !== null) window.cancelAnimationFrame(introFrame);
  }

  window.addEventListener('pagehide', cleanUp, { once: true });
  assetLoader.start(startIntro);
}());