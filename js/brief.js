document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#brief-form');
  if (!form) return;

  const stepOne = document.querySelector('#step-one');
  const stepTwo = document.querySelector('#step-two');
  const nextButton = document.querySelector('#next-step');
  const previousButton = document.querySelector('#previous-step');
  const stepLabel = document.querySelector('#step-label');
  const stepCount = document.querySelector('#step-count');
  const progressBar = document.querySelector('#progress-bar');
  const sourceOtherWrap = document.querySelector('#source-other-wrap');
  const sourceOther = document.querySelector('#source-other');
  const designOtherWrap = document.querySelector('#design-other-wrap');
  const designOther = document.querySelector('#design-other');
  const sourceError = document.querySelector('#source-error');
  const formError = document.querySelector('#form-error');
  const whatsappNumber = '6289630984238';

  const selectedValue = (name) => form.querySelector(`input[name="${name}"]:checked`)?.value || '';
  const showStep = (step) => {
    const first = step === 1;
    stepOne.hidden = !first;
    stepTwo.hidden = first;
    stepLabel.textContent = first ? 'Informasi awal' : 'Informasi kebutuhan website';
    stepCount.textContent = first ? '1 dari 2' : '2 dari 2';
    progressBar.style.width = first ? '50%' : '100%';
    window.scrollTo({ top: 0, behavior: 'auto' });
    (first ? stepOne : stepTwo).querySelector('input, select, textarea, button')?.focus({ preventScroll: true });
  };

  const updateConditionalFields = () => {
    const isSourceOther = selectedValue('source') === 'Lainnya';
    sourceOtherWrap.hidden = !isSourceOther;
    sourceOther.disabled = !isSourceOther;

    const isDesignOther = selectedValue('designStyle') === 'Desain lainnya';
    designOtherWrap.hidden = !isDesignOther;
    designOther.disabled = !isDesignOther;
  };

  form.addEventListener('change', updateConditionalFields);

  nextButton.addEventListener('click', () => {
    sourceError.textContent = '';
    if (!selectedValue('source')) {
      sourceError.textContent = 'Silakan pilih sumber informasi terlebih dahulu.';
      form.querySelector('input[name="source"]')?.focus();
      return;
    }
    showStep(2);
  });

  previousButton.addEventListener('click', () => {
    formError.textContent = '';
    showStep(1);
  });

  const valueOf = (name) => {
    const control = form.elements.namedItem(name);
    if (!control) return '';
    if (control instanceof RadioNodeList) return control.value || '';
    return String(control.value || '').trim();
  };

  const checkedValues = (name) => Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map((input) => input.value);

  const buildMessage = () => {
    const features = checkedValues('features');
    const country = valueOf('phoneCountry').replace(/\D/g, '');
    let number = valueOf('phoneNumber').replace(/\D/g, '');
    if (number.startsWith('0')) number = number.slice(1);
    const phone = [country, number].filter(Boolean).join(' ');

    const lines = [
      '*BRIEF PEMBUATAN WEBSITE — NFSHARK*',
      '_Berikut ringkasan kebutuhan website yang saya ajukan._',
      '',
      '*INFORMASI AWAL*',
      `- Sumber mengetahui NFShark: ${selectedValue('source')}`,
      ...(selectedValue('source') === 'Lainnya' && valueOf('sourceOther') ? [`- Sumber lainnya: ${valueOf('sourceOther')}`] : []),
      '',
      '*INFORMASI PELANGGAN*',
      `- Nama: ${valueOf('customerName')}`,
      `- Bisnis / Proyek: ${valueOf('businessName') || 'Tidak diisi'}`,
      `- WhatsApp: ${phone}`,
      '',
      '*KEBUTUHAN WEBSITE*',
      `- Jenis Website: ${valueOf('websiteType')}`,
      `- Informasi / Fitur: ${features.length ? features.join(', ') : 'Belum ditentukan'}`,
      '',
      '*PREFERENSI DESAIN*',
      `- Gaya Desain: ${selectedValue('designStyle')}`,
      ...(selectedValue('designStyle') === 'Desain lainnya' && valueOf('designOther') ? [`- Detail Desain: ${valueOf('designOther')}`] : []),
      `- Warna / Referensi: ${valueOf('designReference') || 'Tidak diisi'}`,
      '',
      '*MATERI WEBSITE*',
      `- Ketersediaan Materi: ${selectedValue('assetsStatus')}`,
      '',
      '*PAKET DAN ANGGARAN*',
      `- Paket: ${valueOf('packageChoice')}`,
      `- Anggaran: ${valueOf('budget')}`,
      '',
      '*INFORMASI TAMBAHAN*',
      `- Catatan: ${valueOf('additionalNotes') || 'Tidak ada'}`,
      '',
      '*PERSETUJUAN*',
      '- Ketentuan layanan NFShark: Telah dibaca dan disetujui',
      '',
      '_Mohon tinjau ringkasan brief ini. Terima kasih._'
    ];
    return lines.join('\n');
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formError.textContent = '';

    if (!form.reportValidity()) return;

    const country = valueOf('phoneCountry').replace(/[^+\d]/g, '');
    const number = valueOf('phoneNumber').replace(/[\s().-]/g, '');
    if (!/^\+?\d{1,4}$/.test(country) || !/^\d{5,15}$/.test(number)) {
      formError.textContent = 'Periksa kembali kode negara dan nomor WhatsApp Anda.';
      document.querySelector('#phone-country').focus();
      return;
    }

    const message = buildMessage();
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  const requestedPackage = new URLSearchParams(window.location.search).get('paket');
  if (requestedPackage) {
    const packageSelect = document.querySelector('#package-choice');
    const option = Array.from(packageSelect.options).find((item) => item.value.toLowerCase() === requestedPackage.toLowerCase());
    if (option) packageSelect.value = option.value;
  }

  updateConditionalFields();
  showStep(window.location.hash === '#consent' ? 2 : 1);
  if (window.location.hash === '#consent') document.querySelector('#consent').focus({ preventScroll: true });
});