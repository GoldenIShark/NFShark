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
