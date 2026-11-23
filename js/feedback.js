const FEEDBACK_CONFIG = {
  email: 'nfshark.web@gmail.com',
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#feedback-form');
  const status = document.querySelector('#feedback-status');
  const guidance = document.querySelector('#report-guidance');
  const emailLink = document.querySelector('#feedback-email-link');

  if (!form || !status || !guidance || !emailLink) return;

  emailLink.href = `mailto:${FEEDBACK_CONFIG.email}`;

  const updateGuidance = () => {
    const selectedType = form.querySelector('input[name="type"]:checked');
    if (selectedType && selectedType.value === 'Lapor Bug') {
      guidance.textContent = 'Jelaskan masalah yang Anda temukan, apa yang terjadi, dan jika memungkinkan langkah yang dilakukan sebelum masalah muncul.';
    } else if (selectedType) {
      guidance.textContent = 'Jelaskan ide atau perubahan yang menurut Anda dapat membuat NFShark lebih mudah digunakan.';
    } else {
      guidance.textContent = 'Pilih jenis laporan untuk melihat panduan pengisian.';
    }
  };

  form.querySelectorAll('input[name="type"]').forEach((radio) => {
    radio.addEventListener('change', updateGuidance);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.textContent = '';
    status.removeAttribute('data-state');

    const selectedType = form.querySelector('input[name="type"]:checked');
    const titleField = form.querySelector('#report-title');
    const descriptionField = form.querySelector('#report-description');
    const emailField = form.querySelector('#report-email');

    if (!selectedType) {
      status.textContent = 'Pilih jenis laporan: Saran atau Lapor Bug.';
      status.dataset.state = 'error';
      form.querySelector('input[name="type"]').focus();
      return;
    }

    if (!titleField.value.trim()) {
      status.textContent = 'Judul wajib diisi. Silakan lengkapi field Judul.';
      status.dataset.state = 'error';
      titleField.focus();
      return;
    }

    if (!descriptionField.value.trim()) {
      status.textContent = 'Deskripsi wajib diisi. Silakan lengkapi field Deskripsi.';
      status.dataset.state = 'error';
      descriptionField.focus();
      return;
    }

    if (!emailField.validity.valid) {
      status.textContent = 'Format email belum benar. Periksa kembali field Email atau kosongkan jika tidak ingin dihubungi.';
      status.dataset.state = 'error';
      emailField.reportValidity();
      return;
    }

    if (!form.checkValidity()) {
      status.textContent = 'Periksa kembali field wajib yang belum lengkap.';
      status.dataset.state = 'error';
      form.reportValidity();
      return;
    }

    const report = Object.fromEntries(new FormData(form).entries());
    const subject = `[${report.type}] ${String(report.title).trim()}`;
    const optionalFields = [
      ['Nama', report.name],
      ['Email', report.email],
      ['Halaman/Fitur', report.location],
      ['Perangkat/Browser', report.environment],
    ];
    const contextFields = optionalFields
      .filter(([, value]) => typeof value === 'string' && value.trim() !== '')
      .map(([label, value]) => `${label}: ${value.trim()}`);
    const bodySections = [
      'Kepada: NFShark',
      [
        '=== IDENTITAS LAPORAN ===',
        `Jenis: ${report.type}`,
        `Judul: ${String(report.title).trim()}`,
      ].join('\r\n'),
    ];

    if (contextFields.length > 0) {
      bodySections.push([
        '=== KONTEKS ===',
        ...contextFields,
      ].join('\r\n'));
    }

    bodySections.push([
      '=== DESKRIPSI ===',
      String(report.description).replace(/\r\n?/g, '\n'),
    ].join('\r\n'));

    const body = bodySections.join('\r\n\r\n');
    const mailtoUrl = `mailto:${FEEDBACK_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    status.textContent = 'Aplikasi email akan dibuka. Email belum terkirim sampai Anda menekan Kirim di aplikasi email.';
    status.dataset.state = 'notice';
    window.location.href = mailtoUrl;
  });
});
