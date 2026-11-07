document.addEventListener('DOMContentLoaded', () => {
  const whatsappNumber = '6289630984238';
  const whatsappChannel = 'https://whatsapp.com/channel/0029Vb8fNGa1XquV0XHc6z22';
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav a');
  const scrollTopBtn = document.querySelector('.scroll-top');
  const siteHeader = document.querySelector('.site-header');
  const packageList = document.querySelector('#package-list');
  const packageStatus = document.querySelector('#package-status');
  const portfolioGrid = document.querySelector('.portfolio-grid');
  const portfolioToggle = document.querySelector('.portfolio-toggle');
  const portfolioCards = portfolioGrid ? Array.from(portfolioGrid.querySelectorAll('.portfolio-card')) : [];
  const portfolioLimit = 10;
  const previewDialog = document.querySelector('#portfolio-preview');
  const previewFrame = document.querySelector('#preview-dialog-frame');
  const previewTitle = document.querySelector('#preview-dialog-title');
  const previewStatus = document.querySelector('#preview-dialog-status');
  const previewDirectLink = document.querySelector('#preview-dialog-direct-link');
  const previewCloseButton = document.querySelector('.preview-dialog-close');
  let activePreviewTrigger = null;
  let previewLoadTimeout = null;

  const renderPackageCard = (pkg) => {
    const tierClass = `package-card--${pkg.name.toLowerCase()}`;
    return `
      <article class="package-card ${tierClass}${pkg.featured ? ' featured' : ''} reveal">
        ${pkg.badge ? `<div class="package-badge">${pkg.badge}</div>` : ''}
        <div>
          <h3>${pkg.displayName}</h3>
          <p class="package-price">${pkg.price}</p>
          <p class="package-description">${pkg.description}</p>
          <p class="package-estimate">Estimasi pengerjaan: ${pkg.estimate}</p>
        </div>
        <ul class="package-features">${pkg.features.map((feature) => `<li>${feature}</li>`).join('')}</ul>
        <details class="package-order-options">
          <summary class="btn ${pkg.name === 'Custom' ? 'btn-secondary' : 'btn-primary'}">${pkg.button}</summary>
          <div class="package-order-choices">
            <a href="#" data-package-name="${pkg.displayName}" data-package-price="${pkg.price}" class="btn btn-primary package-order">WhatsApp</a>
            <a href="brief.html?paket=${encodeURIComponent(pkg.name)}" class="btn btn-secondary package-brief">Pesan dengan Brief</a>
          </div>
        </details>
      </article>
    `;
  };

  const pesanPaket = (namaPaket, harga) => {
    const message = namaPaket.includes('Custom')
      ? 'Halo NFShark, saya ingin mendiskusikan kebutuhan website melalui Paket Fleksibel (Custom). Mohon informasi lebih lanjut.'
      : `Halo NFShark, saya tertarik dengan paket ${namaPaket} seharga ${harga}. Saya ingin berkonsultasi mengenai kebutuhan website dan proses pengerjaannya. Terima kasih.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const bindPackageButtons = () => {
    packageList?.querySelectorAll('.package-order').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        pesanPaket(button.dataset.packageName, button.dataset.packagePrice);
      });
    });
  };

  const observer = 'IntersectionObserver' in window
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.add('reveal-pending');
        }
      });
    }, { threshold: 0.12 })
    : null;

  const revealItems = document.querySelectorAll('.reveal');
  revealItems.forEach((item) => observer?.observe(item));

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav?.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
      menuToggle?.setAttribute('aria-label', 'Buka menu');
    });
  });

  if (portfolioGrid && portfolioToggle) {
    portfolioCards.forEach((card, index) => { card.hidden = index >= portfolioLimit; });
    portfolioToggle.hidden = portfolioCards.length <= portfolioLimit;
    portfolioToggle.addEventListener('click', () => {
      const showAll = portfolioToggle.getAttribute('aria-expanded') !== 'true';
      portfolioCards.forEach((card, index) => {
        card.hidden = !showAll && index >= portfolioLimit;
        if (!card.hidden && !card.classList.contains('visible')) observer?.observe(card);
      });
      portfolioToggle.setAttribute('aria-expanded', String(showAll));
      portfolioToggle.textContent = showAll ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Semua';
    });
  }

  if (previewDialog && previewFrame && previewTitle && previewStatus && previewDirectLink && previewCloseButton) {
    document.querySelectorAll('.portfolio-preview-trigger').forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const demoUrl = trigger.dataset.demoUrl;
        const demoTitle = trigger.dataset.demoTitle;
        if (!demoUrl || !demoTitle || typeof previewDialog.showModal !== 'function') return;
        activePreviewTrigger = trigger;
        previewTitle.textContent = demoTitle;
        previewFrame.title = `Pratinjau ${demoTitle}`;
        previewDirectLink.href = demoUrl;
        previewStatus.textContent = 'Memuat pratinjau. Jika tidak tampil, gunakan Buka demo langsung.';
        previewDialog.showModal();
        previewFrame.src = demoUrl;
        previewLoadTimeout = window.setTimeout(() => {
          previewStatus.textContent = 'Pratinjau belum merespons setelah 12 detik. Anda dapat membuka demo langsung.';
        }, 12000);
      });
    });
    previewFrame.addEventListener('load', () => {
      if (!previewDialog.open) return;
      window.clearTimeout(previewLoadTimeout);
      previewStatus.textContent = 'Status isi pratinjau tidak dapat dipastikan oleh browser. Jika kosong atau gagal, buka demo langsung.';
    });
    const closePreview = () => {
      window.clearTimeout(previewLoadTimeout);
      previewFrame.removeAttribute('src');
      previewStatus.textContent = 'Pratinjau belum dimuat.';
      if (activePreviewTrigger?.isConnected) activePreviewTrigger.focus();
      activePreviewTrigger = null;
    };
    previewDialog.addEventListener('close', closePreview);
    previewCloseButton.addEventListener('click', () => previewDialog.close());
    previewDialog.addEventListener('click', (event) => {
      if (event.target === previewDialog) previewDialog.close();
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });

  if (packageList) {
    packageList.setAttribute('aria-busy', 'true');
    if (packageStatus) {
      packageStatus.hidden = false;
      packageStatus.textContent = 'Memuat informasi paket…';
    }
    fetch('data/packages.json')
      .then((response) => {
        if (!response.ok) throw new Error('Gagal memuat data paket');
        return response.json();
      })
      .then((packages) => {
        packageList.innerHTML = packages.map(renderPackageCard).join('');
        packageList.querySelectorAll('.reveal').forEach((item) => observer?.observe(item));
        bindPackageButtons();
        if (packageStatus) packageStatus.hidden = true;
      })
      .catch(() => {
        if (packageStatus) {
          packageStatus.hidden = false;
          packageStatus.textContent = 'Informasi paket belum dapat dimuat. Silakan hubungi NFShark melalui WhatsApp.';
        }
      })
      .finally(() => packageList.setAttribute('aria-busy', 'false'));
  }

  const updateScrollState = () => {
    scrollTopBtn?.classList.toggle('visible', window.scrollY > 300);
    siteHeader?.classList.toggle('scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();
  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });

  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());

  document.querySelectorAll('a[href*="whatsapp.com/channel/"]').forEach((link) => {
    link.href = whatsappChannel;
  });
});
