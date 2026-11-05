# Catatan Teknis Lintas Agent

Arsip riwayat sebelumnya dipertahankan lengkap di [catatan-v1.md](catatan-v1.md).

---

Tanggal: 2026-11-03

## Area
- Feedback press/release dan ring tap: `js/touch-ripple.js`, `css/common.css`, dan `css/error-animation.css`.
- Kebijakan arsip catatan: `AGENTS.md` dan `.github/copilot-instructions.md`.
- Inventaris fitur: `list/daftar-fitur.json`.

## Fakta dan keputusan teknis
- Efek blur putih 140px/700ms diganti ring garis 42px berdurasi 280ms; batas lima ring aktif dan cleanup dipertahankan.
- Tombol, tautan, summary, kontrol input tombol, dan role button mendapat scale 0.97 saat pointer atau keyboard ditekan lalu kembali saat dilepas/cancel/blur. Ring tidak dibuat pada kontrol, field, label, atau area editable agar tidak mengganggu input.
- Trigger ring memakai pointerdown utama, termasuk mouse kiri, touch, dan pen; klik sekunder serta pointer tambahan diabaikan. CSS ring identik pada stylesheet umum dan stylesheet mandiri halaman error.
- Reduced motion menonaktifkan gerakan ring dan scale. Tidak ada dependensi baru.
- Catatan sebelumnya mencapai 586 baris LF (lebih dari 500) dan 38.667 byte (di bawah 50 KB); arsip dibuat sebagai `catatan-v1.md` dan hash arsip cocok dengan sumber sebelum log aktif diganti.

## Dampak
- Feedback visual kini singkat, berbasis transform/opacity, dan hanya menargetkan elemen interaktif yang sesuai.
- File `common.css` dan `error-animation.css` sama-sama mendukung halaman yang memuat `js/touch-ripple.js` tanpa memasukkan stylesheet umum ke halaman error.

## Status verifikasi
- `node --check js/touch-ripple.js` lulus setelah koreksi terakhir.
- JSON `list/daftar-fitur.json` terbaca; FIT-019 dan `updatedAt: 2026-11-03` diperiksa. Pemeriksaan blok CSS/reduced-motion lulus pada kedua stylesheet dan referensi script ditemukan di 10 halaman.
- Hash arsip sama dengan sumber; log aktif dan arsip tersedia. `git -c core.whitespace=cr-at-eol diff --check` lulus; pemeriksaan default menandai CRLF pada perubahan teks.
- Uji browser tap/press dan reduced motion belum dilakukan.

## Command yang digunakan
- `git status --short`
- `git diff -- catatan.md css/error-animation.css list/daftar-fitur.json`
- `node -e` menghitung 586 baris LF dan memeriksa versi arsip yang ada.
- `Copy-Item` dan `Get-FileHash` untuk membuat arsip dan memastikan salinannya identik.
- `node --check js/touch-ripple.js`
- `node -e` membaca JSON FIT-019 dan memeriksa blok CSS, reduced-motion, serta referensi script halaman.
- `git diff --check` dan `git -c core.whitespace=cr-at-eol diff --check`.
- `Move-Item` memindahkan sumber identik ke `catatan-v1.md` sebelum log baru dibuat.

---

Tanggal: 2026-11-03

## Area
- Sinkronisasi standalone stylesheet halaman error: `css/error-animation.css`.
- Inventaris fitur: `list/daftar-fitur.json` (FIT-022).

## Fakta dan keputusan teknis
- `.error-shark` menggunakan `z-index: 1` dan `.error-content` menggunakan `rgb(16 35 30 / 50%)`, sesuai kutipan pemilik.
- Blok ring tap/press feedback di akhir stylesheet diselaraskan dengan kutipan 42px/280ms dan aturan reduced motion; bagian CSS lainnya tidak diubah.
- FIT-022 diperbarui untuk mencatat alpha 50% dan referensi stylesheet pada empat halaman; FIT-019 tetap akurat dan tidak diubah. `updatedAt` tetap `2026-11-03`.

## Dampak
- Halaman 403, 404, 500, dan error yang memuat stylesheet memakai panel dengan transparansi yang diminta serta ring tap yang konsisten dengan FIT-019.

## Status verifikasi
- Pemeriksaan diagnostik CSS tidak menemukan error. Assertion Node mem-parse JSON serta memeriksa blok CSS persis, deklarasi selector, FIT-022, dan referensi empat halaman.
- `git diff --check` standar menandai CRLF pada baris yang berubah; `git -c core.whitespace=cr-at-eol diff --check` lulus.
- Uji visual atau interaksi browser belum dilakukan.

## Command yang digunakan
- `git status --short`
- `git diff -- css/error-animation.css`
- `node -e` mem-parse `list/daftar-fitur.json` dan memeriksa nilai CSS, FIT-022, serta referensi stylesheet.
- `git diff --check`
- `git -c core.whitespace=cr-at-eol diff --check`


---

Tanggal: 2026-11-04

## Area
- Aturan kerja agent untuk pemeriksaan read-only: `AGENTS.md`, `.github/copilot-instructions.md`, `.github/agents/website-developer.agent.md`, `.github/agents/pengembangan-agent.md`, dan `.agents/agents/ask.agent.md`.

## Fakta dan keputusan teknis
- Ditambahkan pengecualian pencatatan: pekerjaan yang hanya membaca, mencari, memeriksa struktur, atau mengaudit file tanpa menambah, mengubah, atau menghapus file tidak perlu membuat atau memperbarui `catatan.md`.
- Pekerjaan read-only tetap harus melaporkan file yang diperiksa dan temuan. Jika ada perubahan file, kewajiban pencatatan dan sinkronisasi dokumentasi yang relevan kembali berlaku.
- Pemeriksaan font menemukan bahwa `assets/fonts/fonts.css` merujuk `assets/fonts/Telma-Light.woff2`, tetapi GitHub Contents API mengembalikan 404 untuk path tersebut. Tidak ada perubahan pada aset font atau tampilan website dalam tugas ini.

## Dampak
- Agent tidak lagi diwajibkan membuat log perubahan palsu atau kosong ketika hanya melakukan pemeriksaan tanpa perubahan.
- Perubahan file tetap tercatat melalui aturan yang sudah ada.

## Status verifikasi
- Instruksi agent diperbarui pada lima file dan catatan perubahan ini.
- Pemeriksaan font bersifat pemeriksaan repository; pemuatan font melalui browser/Google Search Console belum diuji ulang.

## Command yang digunakan
- GitHub repository search untuk `Telma`, `Telma-Light.woff2`, `catatan.md`, dan file instruksi agent.
- GitHub file fetch untuk memeriksa isi file terkait dan menguji keberadaan `assets/fonts/Telma-Light.woff2`.


---

Tanggal: 2026-11-04

## Area
- Perbaikan pemuatan font Telma: `assets/fonts/fonts.css`, dokumentasi `assets/fonts/README.md`, inventaris `list/daftar-fitur.json`, dan temuan `list/daftar-masalah.json`.

## Fakta dan keputusan teknis
- Aset yang telah diunggah bernama `assets/fonts/Telma-Light.ttf` (118.396 byte), bukan WOFF2.
- Pemeriksaan base64 file menunjukkan signature TrueType `00 01 00 00`; aset dapat digunakan langsung sebagai font TTF.
- `@font-face` sebelumnya meminta `Telma-Light.woff2`, sehingga path tidak cocok dengan file yang tersedia.
- CSS diperbaiki untuk meminta `./Telma-Light.ttf` dengan format `truetype`, bobot 300 dan `font-display: swap` tetap dipertahankan. Tidak ada perubahan desain atau fallback Times New Roman.
- Dokumentasi font dan status FIT-021 diselaraskan. MAS-003 ditambahkan sebagai temuan yang telah diperbaiki pada source.

## Dampak
- Browser kini diarahkan ke aset font yang benar; heading yang menggunakan token Telma dapat memuat font tersebut setelah perubahan ter-deploy.
- TTF dipakai langsung untuk saat ini. WOFF2 dapat dipertimbangkan kemudian untuk ukuran unduhan yang lebih kecil.

## Status verifikasi
- Path file TTF dikonfirmasi ada di `assets/fonts/`; ukuran 118.396 byte dan signature file cocok dengan TrueType.
- Isi CSS, README, dan JSON inventaris diperbarui. Pemeriksaan browser, Network panel, dan Google Search Console belum dilakukan; keberhasilan pemuatan runtime belum diklaim.

## Command yang digunakan
- GitHub Contents API untuk memeriksa isi direktori `assets/fonts/` dan mengambil metadata aset font.
- GitHub file fetch untuk memeriksa CSS, README, katalog `list/index.json`, `list/daftar-fitur.json`, `list/daftar-masalah.json`, serta `catatan.md`.


---

Tanggal: 2026-11-05

## Area
- Perbaikan pemuatan Telma setelah aset diganti menjadi OpenType: `assets/fonts/fonts.css` dan halaman aktif yang memuat registry font.
- Konsistensi penggunaan font judul: `css/common.css`, `css/style-studio.css`, `assets/fonts/README.md`, `Daftar-UI.md`, `list/daftar-fitur.json`, dan `list/daftar-masalah.json`.

## Fakta dan keputusan teknis
- Aset terbaru yang tersedia adalah `assets/fonts/Telma-Light.otf`; file TTF sebelumnya sudah tidak tersedia. Signature base64 aset OTF diawali `OTTO`, sesuai kontainer OpenType.
- `@font-face` diperbarui agar memuat `./Telma-Light.otf` dengan format `opentype`, tetap memakai nama keluarga `Telma Light`, bobot 300, dan `font-display: swap`.
- Heading global H1–H6 dan heading editorial NFShark Studio menggunakan bobot 300 agar sesuai dengan varian Telma Light yang didaftarkan. Selector editorial seperti `.serif-heading`, `.serif-italic`, `.stat-item strong`, dan `.feature-number` diselaraskan ke bobot 300; teks umum tetap Times New Roman.
- Komentar stylesheet, README font, katalog UI, FIT-021, dan MAS-003 diperbarui agar tidak lagi menyebut file TTF sebagai aset aktif.
- Tautan registry font pada halaman aktif diberi query versi `v=20261105-1` untuk meminta browser mengambil CSS terbaru setelah perubahan nama aset.

## Dampak
- Browser diarahkan ke nama file dan format font yang sekarang tersedia.
- Selector heading yang menggunakan token Telma konsisten meminta bobot Light; fallback Times New Roman untuk teks umum tidak diubah.

## Status verifikasi
- Repository source diperiksa pada branch `main`; file OTF ditemukan dan signature kontainernya teridentifikasi sebagai OpenType.
- Referensi font pada `css/common.css` dan `css/style-studio.css` diperiksa; kedua stylesheet menggunakan token font Telma yang didefinisikan di `assets/fonts/fonts.css`.
- Semua halaman aktif yang memuat registry font diperbarui untuk cache-busting.
- Uji render browser, respons HTTP aset pada domain produksi, dan Google Search Console belum dilakukan; keberhasilan runtime belum diklaim.

## Command yang digunakan
- GitHub fetch/search untuk memeriksa aset font, seluruh referensi Telma, stylesheet, halaman aktif, dokumentasi, inventaris fitur/masalah, dan catatan teknis.
- Pemeriksaan signature OpenType dari awalan base64 aset `Telma-Light.otf`.


---

Tanggal: 2026-11-05

## Area
- Skeleton loading global: `css/common.css`, `css/error-animation.css`, dan `js/skeleton-loading.js`.
- Integrasi pada halaman aktif: `index.html`, `brief.html`, `faq.html`, `feedback.html`, `persetujuan.html`, `ui-preview.html`, `403.html`, `404.html`, `500.html`, dan `error.html`.
- Inventaris fitur: `list/daftar-fitur.json` (FIT-023).

## Fakta dan keputusan teknis
- Ditambahkan efek skeleton shimmer global untuk teks, tautan, tombol, label, kontrol formulir, gambar yang belum selesai dimuat, dan area iframe.
- Script bersama ditautkan dengan atribut `defer` di bagian `head` pada 10 halaman aktif agar proses persiapan dimulai lebih awal.
- Placeholder teks dibersihkan setelah event `window.load` dan `document.fonts.ready`; placeholder gambar dan iframe dibersihkan melalui event load/error masing-masing.
- Animasi shimmer mengikuti `prefers-reduced-motion`; intro loading utama NFShark tetap dipertahankan dan dikecualikan dari placeholder teks.
- Halaman arsip `history/` dan website demo pelanggan di `portofolio/` tidak diubah.

## Dampak
- Pengunjung mendapat penanda visual sementara saat halaman dan media sedang dimuat.
- Tidak ada framework, backend, atau dependensi baru.

## Status verifikasi
- File CSS dan JavaScript serta referensi script pada 10 halaman diperbarui di branch `main`.
- Inventaris FIT-023 diperbarui.
- `node --check js/skeleton-loading.js` lulus setelah file diambil dari repository dan diperiksa secara lokal.
- Uji browser, uji visual, dan perilaku iframe lintas-origin belum dilakukan; keberhasilan runtime belum diklaim.

## Command yang digunakan
- GitHub fetch/update untuk membaca dan memperbarui file terkait.
- Pemeriksaan struktur JSON `list/daftar-fitur.json` melalui JSON.parse sebelum pembaruan.


---

Tanggal: 2026-11-05

## Area
- Otomatisasi pemeriksaan dan deployment: `.github/workflows/nfshark-automation.yml`.
- Pemeriksaan integritas HTML dan referensi lokal: `.github/scripts/check_site_integrity.py`.
- Penyiapan direktori publik GitHub Pages: `.github/scripts/prepare_pages.py`.
- Progres pengujian berkelanjutan: `list/daftar-rencana.json` (REN-012).

## Fakta dan keputusan teknis
- Workflow NFShark Automation berjalan pada push, Pull Request menuju `main`, pemicu manual, dan jadwal mingguan setiap Senin pukul 10.00 WIB.
- Job Quality Check memeriksa sintaks seluruh JavaScript pada `js/`, validitas semua JSON terlacak, sintaks skrip Python otomasi, dan keberadaan file proyek wajib.
- Job Website & Deployment Package Test memeriksa referensi lokal pada atribut HTML `href`, `src`, `poster`, dan `data`; lalu membangun direktori staging `site/` dari halaman HTML root, CNAME, aset, CSS, data, JavaScript, portofolio. Arsip `history/` tetap tersimpan di repository tetapi tidak dipublikasikan karena sebagian arsip masih memakai path aset lama.
- File internal seperti `.github/`, `AGENTS.md`, `catatan.md`, dan `list/` tidak disalin ke paket publik. File `.nojekyll` dibuat agar GitHub Pages tidak memproses aset melalui Jekyll.
- Job Deploy hanya berjalan pada push ke `main` atau pemicu manual dari `main`, dan menunggu Quality Check serta Website Test berhasil. Push ke branch lain, Pull Request, dan jadwal mingguan tidak menerbitkan website.
- GitHub Pages artifact diunggah dari direktori staging; tidak ada dependensi build frontend atau backend baru.
- REN-012 diperbarui untuk mencatat implementasi awal otomasi; uji browser, aksesibilitas menyeluruh, dan audit performa belum termasuk cakupan.

## Dampak
- Pemeriksaan dasar berjalan otomatis sebelum publikasi.
- Paket GitHub Pages dibatasi pada file website yang dipilih, sehingga dokumentasi dan instruksi internal tidak ikut dipublikasikan.
- Deployment dari `main` terhubung pada hasil pemeriksaan; workflow tidak otomatis menggabungkan branch lain.

## Status verifikasi
- Run pertama gagal pada enumerasi file JSON karena pemisah NUL pada skrip inline; ekspresi diperbaiki.
- Run berikutnya pada commit workflow `ec3e961771c450682dbb254b2bd30a016031df97`: Quality Check berhasil; job Website Test masih berjalan saat pencatatan awal.
- Pemeriksaan integritas HTML dan hasil deployment perlu dipastikan dari penyelesaian run terbaru. Belum mengklaim deployment produksi berhasil.
- Catatan aktif sebelum penambahan: 181 baris dan 11.594 byte; masih di bawah batas arsip 500 baris atau 50 KB.

## Command yang digunakan
- GitHub fetch untuk membaca struktur repository, `catatan.md`, katalog `list/index.json`, rencana REN-012, file website, dan status workflow.
- GitHub create/update file untuk menambahkan skrip, workflow, dan memperbarui dokumen progres.
- GitHub Actions run/job inspection untuk memeriksa langkah yang berhasil dan gagal.
