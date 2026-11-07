document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.google-form-panel').forEach((panel) => {
    const googleContent = panel.querySelector('[data-google-form-content]');
    const iframe = googleContent?.querySelector('iframe[data-src]');
    const manualButton = panel.querySelector('[data-form-choice="manual"]');
    const legacyForm = document.getElementById(manualButton?.getAttribute('aria-controls'));
    const status = panel.querySelector('[data-form-status]');
    const buttons = panel.querySelectorAll('[data-form-choice]');

    if (!googleContent || !iframe || !legacyForm || !status || buttons.length === 0) return;

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const useGoogleForm = button.dataset.formChoice === 'google';
        googleContent.hidden = !useGoogleForm;
        legacyForm.open = !useGoogleForm;
        buttons.forEach((choice) => {
          choice.setAttribute('aria-pressed', String(choice === button));
        });

        if (useGoogleForm) {
          if (!iframe.hasAttribute('src')) iframe.src = iframe.dataset.src;
          status.textContent = 'Google Form dipilih dan ditampilkan di halaman. Jika tidak muncul, gunakan tautan buka di tab baru.';
        } else {
          status.textContent = 'Formulir alternatif dibuka di bawah panel ini.';
        }
      });
    });
  });
});