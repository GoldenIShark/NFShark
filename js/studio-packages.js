(() => {
  "use strict";

  const list = document.getElementById("studio-package-list");
  const status = document.getElementById("studio-package-status");
  if (!list) return;

  const whatsappNumber = "6289630984238";
  const formatFeatureList = (features) => {
    const ul = document.createElement("ul");
    (Array.isArray(features) ? features : []).forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      ul.append(li);
    });
    return ul;
  };

  const createCell = (content, className) => {
    const td = document.createElement("td");
    if (className) td.className = className;
    if (content instanceof Node) td.append(content);
    else td.textContent = content ?? "";
    return td;
  };

  const renderPackage = (pkg) => {
    const row = document.createElement("tr");
    if (pkg.featured) row.className = "studio-package-featured";

    const title = document.createElement("div");
    title.className = "table-plan-title";
    const name = document.createElement("span");
    name.textContent = pkg.name || "Paket";
    title.append(name);
    if (pkg.featured) {
      const badge = document.createElement("span");
      badge.className = "badge-editorial badge-lime";
      badge.textContent = pkg.badge || "REKOMENDASI";
      title.append(badge);
    }
    const titleCell = document.createElement("th");
    titleCell.setAttribute("scope", "row");
    titleCell.append(title);
    row.append(titleCell);

    const price = document.createElement("span");
    price.className = "table-price";
    price.textContent = pkg.price || "Konsultasi";
    row.append(createCell(price));

    row.append(createCell(formatFeatureList(pkg.features)));
    row.append(createCell(pkg.estimate || "Menyesuaikan"));

    const maintenance = document.createElement("div");
    const duration = document.createElement("strong");
    duration.textContent = pkg.maintenanceLabel || "Dikonfirmasi saat penawaran";
    maintenance.append(duration);
    if (pkg.maintenanceNote) {
      const note = document.createElement("small");
      note.textContent = pkg.maintenanceNote;
      maintenance.append(note);
    }
    row.append(createCell(maintenance));

    const actionCell = document.createElement("td");
    actionCell.className = "table-action-cell";
    const link = document.createElement("a");
    link.className = pkg.name === "Custom" ? "btn package-custom-action" : "btn btn-lime";
    const message = pkg.name === "Custom"
      ? "Halo NFShark, saya ingin berkonsultasi mengenai Paket Custom dan menyesuaikan kebutuhan website. Mohon arahan untuk langkah selanjutnya."
      : `Halo NFShark, saya ingin memesan website dengan Paket ${pkg.name} seharga ${pkg.price}. Mohon konfirmasi rincian paket dan langkah pemesanan selanjutnya.`;
    link.href = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = pkg.name === "Custom" ? "Diskusi" : (pkg.button || "Pesan Paket");
    actionCell.append(link);
    row.append(actionCell);
    return row;
  };

  fetch("data/packages.json")
    .then((response) => {
      if (!response.ok) throw new Error("Data paket tidak dapat dimuat.");
      return response.json();
    })
    .then((packages) => {
      if (!Array.isArray(packages) || packages.length === 0) throw new Error("Data paket kosong atau tidak valid.");
      const fragment = document.createDocumentFragment();
      packages.forEach((pkg) => fragment.append(renderPackage(pkg)));
      list.replaceChildren(fragment);
      if (status) status.textContent = "Informasi paket berhasil dimuat.";
    })
    .catch(() => {
      list.replaceChildren();
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.colSpan = 6;
      cell.textContent = "Informasi paket belum dapat dimuat. Silakan muat ulang halaman atau hubungi NFShark.";
      row.append(cell);
      list.append(row);
      if (status) status.textContent = "Gagal memuat data paket.";
    });
})();
