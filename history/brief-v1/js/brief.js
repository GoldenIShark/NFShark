document.addEventListener('DOMContentLoaded', () => {
  const whatsappNumber = '6289630984238';
  const draftPrefix = 'adSharksBrief_';
  const metaCookie = `${draftPrefix}meta`;
  const cookieLifetime = 2 * 24 * 60 * 60;
  const chunkSize = 3000;
  const maximumChunks = 40;
  const form = document.querySelector('#brief-form');
  const draftStatus = document.querySelector('#draft-status');
  const feedback = document.querySelector('#brief-feedback');
  const summary = document.querySelector('#brief-summary');
  const review = document.querySelector('.brief-review');
  const customField = document.querySelector('#custom-needs-field');
  const customInput = document.querySelector('#custom-needs');
  const packageSelect = document.querySelector('#package-choice');
  let saveTimer;

  if (!form) return;

  const setCookie = (name, value, maxAge = cookieLifetime) => {
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
  };

  const readCookie = (name) => {
    const prefix = `${encodeURIComponent(name)}=`;
    const entry = document.cookie.split(';').map((part) => part.trim()).find((part) => part.startsWith(prefix));
    return entry ? decodeURIComponent(entry.slice(prefix.length)) : null;
  };

  const removeCookie = (name) => {
    setCookie(name, '', 0);
  };

  const cookieStorageAvailable = () => {
    const testName = `${draftPrefix}test`;
    try {
      setCookie(testName, 'ok', 60);
      const available = readCookie(testName) === 'ok';
      removeCookie(testName);
      return available;
    } catch {
      return false;
    }
  };

  const encodeDraft = (draft) => {
    const bytes = new TextEncoder().encode(JSON.stringify(draft));
    let binary = '';
    bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
    return btoa(binary);
  };

  const decodeDraft = (encoded) => {
    const bytes = Uint8Array.from(atob(encoded), (character) => character.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  };

  const removeDraft = () => {
    document.cookie.split(';').forEach((part) => {
      const name = part.trim().split('=')[0];
      let decodedName = name;
      try { decodedName = decodeURIComponent(name); } catch { return; }
      if (decodedName.startsWith(draftPrefix)) removeCookie(decodedName);
    });
  };

  const readDraft = () => {
    const count = Number.parseInt(readCookie(metaCookie) || '', 10);
    if (!Number.isInteger(count) || count < 1 || count > maximumChunks) return null;

    try {
      let encoded = '';
      for (let index = 0; index < count; index += 1) {
        const chunk = readCookie(`${draftPrefix}${index}`);
        if (chunk === null) return null;
        encoded += chunk;
      }
      const draft = decodeDraft(encoded);
      return draft && typeof draft === 'object' && !Array.isArray(draft) ? draft : null;
    } catch {
      return null;
    }
  };

  const getFormState = () => {
    const state = {};
    Array.from(form.elements).forEach((control) => {
      if (!control.name) return;
      state[control.name] = control.type === 'checkbox' ? control.checked : control.value;
    });
    return state;
  };

  const restoreDraft = (draft) => {
    Array.from(form.elements).forEach((control) => {
      if (!control.name || !Object.hasOwn(draft, control.name)) return;
      if (control.type === 'checkbox') control.checked = draft[control.name] === true;
      else if (typeof draft[control.name] === 'string') control.value = draft[control.name];
    });
    updateCustomField();
  };

  const saveDraft = () => {
    if (!cookieStorageAvailable()) {
      draftStatus.textContent = 'Cookies tidak tersedia. Draft tidak dapat disimpan di browser ini.';
      return;
    }

    const state = getFormState();
    const hasContent = Object.values(state).some((value) => value === true || (typeof value === 'string' && value.trim() !== ''));
    if (!hasContent) {
      removeDraft();
      draftStatus.textContent = 'Draft kosong. Isian akan disimpan di browser ini selama 2 hari.';
      return;
    }

    try {
      const encoded = encodeDraft(state);
      const chunks = encoded.match(new RegExp(`.{1,${chunkSize}}`, 'g')) || [];
      if (chunks.length > maximumChunks) throw new Error('Draft terlalu besar');

      const previousCount = Number.parseInt(readCookie(metaCookie) || '0', 10) || 0;
      chunks.forEach((chunk, index) => setCookie(`${draftPrefix}${index}`, chunk));
      chunks.forEach((chunk, index) => {
        if (readCookie(`${draftPrefix}${index}`) !== chunk) throw new Error('Cookie tidak dapat disimpan');
      });
      setCookie(metaCookie, String(chunks.length));
      if (readCookie(metaCookie) !== String(chunks.length)) throw new Error('Cookie tidak dapat disimpan');
      for (let index = chunks.length; index < previousCount; index += 1) removeCookie(`${draftPrefix}${index}`);
      draftStatus.textContent = 'Draft tersimpan di browser ini. Draft akan kedaluwarsa 2 hari setelah perubahan terakhir.';
    } catch {
      draftStatus.textContent = 'Draft belum dapat disimpan. Periksa pengaturan cookies browser Anda.';
    }
  };

  const scheduleSave = () => {
    window.clearTimeout(saveTimer);
    saveTimer = window.setTimeout(saveDraft, 300);
  };

  const updateCustomField = () => {
    const isCustom = packageSelect.value === 'Custom';
    customField.hidden = !isCustom;
    customInput.disabled = !isCustom;
  };

  const getControlValue = (control) => {
    if (control.type === 'checkbox') return control.checked ? 'Disetujui' : 'Belum disetujui';
    return control.value.trim() || 'Tidak diisi';
  };

  const renderSummary = () => {
    const fragment = document.createDocumentFragment();
    form.querySelectorAll('.brief-section').forEach((section) => {
      const sectionElement = document.createElement('section');
      sectionElement.className = 'summary-section';
      const heading = document.createElement('h3');
      heading.textContent = section.dataset.sectionTitle;
      sectionElement.append(heading);

      const definitionList = document.createElement('dl');
      section.querySelectorAll('input, textarea, select').forEach((control) => {
        if (control.disabled) return;
        const label = control.labels && control.labels[0];
        const labelText = label ? label.dataset.summaryLabel : control.dataset.summaryLabel;
        if (!labelText) return;

        const term = document.createElement('dt');
        const value = document.createElement('dd');
        term.textContent = labelText;
        value.textContent = getControlValue(control);
        definitionList.append(term, value);
      });
      sectionElement.append(definitionList);
      fragment.append(sectionElement);
    });
    summary.replaceChildren(fragment);
  };

  const toggleSection = (button, expanded) => {
    const content = document.getElementById(button.getAttribute('aria-controls'));
    if (!content) return;
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? 'Tutup bagian' : 'Selengkapnya';
    content.hidden = !expanded;
  };

  document.querySelectorAll('.section-toggle').forEach((button) => {
    const content = document.getElementById(button.getAttribute('aria-controls'));
    if (content) content.hidden = false;
    button.addEventListener('click', () => {
      toggleSection(button, button.getAttribute('aria-expanded') !== 'true');
    });
  });

  const clearValidation = () => {
    form.querySelectorAll('[aria-invalid="true"]').forEach((control) => control.removeAttribute('aria-invalid'));
    form.querySelectorAll('.has-error').forEach((field) => field.classList.remove('has-error'));
  };

  const validateForm = () => {
    clearValidation();
    const invalidControls = Array.from(form.querySelectorAll('[aria-required="true"]')).filter((control) => {
      if (control.type === 'checkbox') return !control.checked;
      const value = control.value.trim();
      if (!value) return true;
      return control.id === 'budget' && Number(value) < 100000;
    });

    invalidControls.forEach((control) => {
      control.setAttribute('aria-invalid', 'true');
      const field = control.closest('.field, .consent-item');
      if (field) field.classList.add('has-error');
    });
    return invalidControls;
  };

  const createWhatsappMessage = () => {
    const lines = ['BRIEF WEBSITE - NFShark', ''];
    form.querySelectorAll('.brief-section').forEach((section) => {
      const sectionLines = [];
      section.querySelectorAll('input, textarea, select').forEach((control) => {
        if (control.disabled) return;
        const label = control.labels && control.labels[0];
        const labelText = label ? label.dataset.summaryLabel : control.dataset.summaryLabel;
        const value = control.type === 'checkbox' ? (control.checked ? 'Disetujui' : '') : control.value.trim();
        if (labelText && value) sectionLines.push(`${labelText}: ${value}`);
      });
      lines.push(section.dataset.sectionTitle);
      if (sectionLines.length) lines.push(...sectionLines);
      lines.push('');
    });
    return lines.join('\n').trim();
  };

  const loadExistingDraft = () => {
    if (!cookieStorageAvailable()) {
      draftStatus.textContent = 'Cookies tidak tersedia. Draft tidak dapat disimpan di browser ini.';
      return;
    }
    const draft = readDraft();
    if (draft) {
      restoreDraft(draft);
      draftStatus.textContent = 'Draft sebelumnya dipulihkan. Draft kedaluwarsa 2 hari setelah perubahan terakhir.';
    }
  };

  const applyPackageParameter = () => {
    const requestedPackage = new URLSearchParams(window.location.search).get('paket');
    if (!requestedPackage) return false;
    const option = Array.from(packageSelect.options).find((item) => item.value === requestedPackage);
    if (!option) return false;
    packageSelect.value = requestedPackage;
    updateCustomField();
    return true;
  };

  form.addEventListener('input', () => {
    feedback.textContent = '';
    renderSummary();
    scheduleSave();
  });
  form.addEventListener('change', () => {
    updateCustomField();
    feedback.textContent = '';
    renderSummary();
    scheduleSave();
  });

  document.querySelector('#send-brief').addEventListener('click', () => {
    const invalidControls = validateForm();
    if (invalidControls.length) {
      const invalidLabels = invalidControls.map((control) => {
        const label = control.labels && control.labels[0];
        return label ? label.dataset.summaryLabel : control.dataset.summaryLabel;
      }).filter(Boolean);
      feedback.textContent = `Mohon lengkapi atau periksa: ${invalidLabels.join(', ')}. Budget minimum Rp100.000.`;

      const firstInvalid = invalidControls[0];
      const section = firstInvalid.closest('.brief-section');
      if (section) {
        const toggle = section.querySelector('.section-toggle');
        if (toggle && toggle.getAttribute('aria-expanded') !== 'true') toggleSection(toggle, true);
      }
      firstInvalid.scrollIntoView({ behavior: 'auto', block: 'center' });
      firstInvalid.focus({ preventScroll: true });
      renderSummary();
      return;
    }

    feedback.textContent = '';
    renderSummary();
    review.open = true;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(createWhatsappMessage())}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });

  document.querySelector('#reset-brief').addEventListener('click', () => {
    if (!window.confirm('Hapus semua isian brief dan draft yang tersimpan di browser ini?')) return;
    window.clearTimeout(saveTimer);
    form.reset();
    clearValidation();
    feedback.textContent = '';
    document.querySelectorAll('.section-toggle').forEach((button) => toggleSection(button, true));
    updateCustomField();
    removeDraft();
    draftStatus.textContent = 'Draft kosong. Isian akan disimpan di browser ini selama 2 hari.';
    renderSummary();
    review.open = false;
  });

  window.addEventListener('pagehide', () => {
    window.clearTimeout(saveTimer);
    saveDraft();
  });

  loadExistingDraft();
  const hasPackageParameter = applyPackageParameter();
  renderSummary();
  updateCustomField();
  if (hasPackageParameter) scheduleSave();
});
