const FAQ_QUESTION_RECIPIENT = 'nfshark.web@gmail.com';

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  const siteHeader = document.querySelector('.site-header');
  const searchInput = document.querySelector('#faq-search');
  const emptyMessage = document.querySelector('#faq-empty');
  const categories = Array.from(document.querySelectorAll('.faq-category'));
  const questionForm = document.querySelector('#faq-question-form');
  const questionStatus = document.querySelector('#faq-question-status');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (siteHeader) {
    const updateHeader = () => siteHeader.classList.toggle('scrolled', window.scrollY > 24);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  if (questionForm && questionStatus) {
    const submitButton = questionForm.querySelector('button[type="submit"]');
    let submissionPending = false;

    questionForm.addEventListener('submit', (event) => {
      event.preventDefault();
      questionStatus.removeAttribute('data-state');

      if (submissionPending) return;

      if (!questionForm.checkValidity()) {
        questionStatus.textContent = 'Periksa kembali kategori, pertanyaan, persetujuan publikasi, dan format alamat email.';
        questionStatus.dataset.state = 'error';
        questionForm.reportValidity();
        return;
      }

      const formData = new FormData(questionForm);
      const name = String(formData.get('name') || '').trim();
      const email = String(formData.get('email') || '').trim();
      const category = String(formData.get('category') || '').trim();
      const question = String(formData.get('question') || '').trim().replace(/\r\n?|\n/g, '\r\n');
      const subject = `[NFShark FAQ] Pertanyaan Baru - ${category}`;
      const body = [
        'Pertanyaan baru dari halaman FAQ NFShark',
        '',
        `Nama: ${name || '-'}`,
        `Alamat email: ${email || '-'}`,
        `Kategori: ${category}`,
        'Persetujuan publikasi: Ya',
        `Waktu pengiriman: ${new Date().toLocaleString('id-ID')}`,
        '',
        'Pertanyaan:',
        question,
      ].join('\r\n');
      const mailtoUrl = `mailto:${FAQ_QUESTION_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      submissionPending = true;
      if (submitButton) submitButton.disabled = true;
      questionStatus.textContent = 'Aplikasi email akan dibuka dengan draf pertanyaan. Email belum terkirim sampai kamu menekan Kirim di aplikasi email.';
      questionStatus.dataset.state = 'notice';

      try {
        window.location.href = mailtoUrl;
      } catch {
        questionStatus.textContent = 'Aplikasi email tidak dapat dibuka. Data belum terkirim; coba gunakan aplikasi email di perangkatmu.';
        questionStatus.dataset.state = 'error';
      }

      window.setTimeout(() => {
        submissionPending = false;
        if (submitButton) submitButton.disabled = false;
      }, 1500);
    });
  }

  if (!searchInput || !emptyMessage) return;

  const normalize = (value) => value.toLocaleLowerCase('id').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  searchInput.addEventListener('input', () => {
    const query = normalize(searchInput.value.trim());
    let visibleCount = 0;

    categories.forEach((category) => {
      const items = Array.from(category.querySelectorAll('.faq-item'));
      let categoryCount = 0;

      items.forEach((item) => {
        const matches = !query || normalize(item.textContent).includes(query);
        item.hidden = !matches;
        if (matches) {
          categoryCount += 1;
          visibleCount += 1;
        }
      });

      category.hidden = categoryCount === 0;
    });

    emptyMessage.hidden = visibleCount > 0;
  });
});