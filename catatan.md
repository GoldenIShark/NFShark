# Catatan Teknis Lintas Agent

Tanggal: 2026-11-07

## Area
- Situs utama NFShark: fondasi UI, pratinjau portofolio, dan pemuatan paket.
- Instruksi repository dan pemeriksaan teknis sesi ini.

## Fakta dan keputusan
- Stack situs utama tetap HTML, CSS, dan Vanilla JavaScript; tidak ada dependensi baru.
- Pengingat: jika ditanya apa saja yang diminta untuk diingat, ingatkan bahwa pratinjau portofolio bukan lewat tombol, melainkan melalui elemen gambar seperti pada lampiran (`div.portfolio-image` pada kartu portofolio).
- Pengingat desain: bagian navbar dan footer dibuat profesional dengan susunan dua kolom.
- Rencana perubahan berikutnya: perbarui kontak email dan media sosial; pada halaman Brief, gunakan `iframe` Google Forms untuk pengisian data dan jadikan pertanyaan pertama “Bagaimana Anda menemukan website ini?”; saran dan laporan bug juga menggunakan Google Forms. Alamat email, akun sosial, dan URL form belum diberikan, jadi jangan mengarang atau menggantinya sebelum tersedia.
- Catatan kelayakan: Google Forms dapat disematkan di halaman menggunakan `iframe` dari opsi “Kirim/Send” > “Sematkan HTML/Embed HTML”. Gunakan URL embed form yang benar; form perlu dapat diakses oleh pengisi dan ukuran iframe perlu disesuaikan untuk tampilan mobile. Pengumpulan serta penyimpanan jawaban dikelola Google Forms.
- Pengingat tambahan: pengedit Figma sebagai pelengkap.
- `css/common.css` menjadi fondasi token, reset, container, header/nav, tombol, footer, serta kontrol bersama. `css/common-animasi.css` memuat gerak ulang pakai; animasi paket dan layout beranda tetap di `css/style.css`.
- Tombol primary root memakai fill grass; secondary root transparan dengan border putih dan berubah grass saat interaksi. Preview `ui-components.css` memakai fill grass dan border putih untuk secondary/outline serta glass pada permukaan terang agar kontrasnya terjaga; markup `ui-preview.html` tetap terisolasi.
- Halaman utama, FAQ, Brief, dan Feedback memuat stylesheet dalam urutan `common.css`, `common-animasi.css`, lalu stylesheet halaman.
- Pratinjau demo memakai dialog native. `iframe` hanya menerima `src` setelah tombol pratinjau ditekan; event `load` tidak dipakai sebagai bukti keberhasilan dan tautan langsung tetap tersedia.
- Daftar paket memberikan status loading dan fallback Basic pada kegagalan. Skeleton tidak dipakai karena jeda fetch yang berarti belum dibuktikan.
- CSS reveal beranda progresif: item hanya disembunyikan setelah observer melaporkan item tidak terlihat. Tanpa JavaScript, `IntersectionObserver`, atau saat reduced motion aktif, konten tetap terlihat.
- Folder `portofolio/`, markup `ui-preview.html`, URL/kontak/akun, dan monogram demo tidak diubah. Pada tugas warna tombol, `css/ui-components.css` hanya diubah untuk varian tombol.

## Dampak
- Empat halaman utama sekarang berbagi fondasi CSS; komponen dan animasi khusus halaman tetap di stylesheet pemiliknya.
- Dialog pratinjau dapat dihentikan saat ditutup, memberi timeout dan pesan yang tidak mengklaim status demo, serta mempertahankan fallback buka langsung.
- Animasi bersama menghormati `prefers-reduced-motion` tanpa selector universal atau override `!important`.

## Status
- Implementasi selesai. Pemeriksaan editor dan `node --check js/script.js` tidak menemukan error.
- Empat halaman utama diperiksa pada lebar 320, 375, 390, 414, 768, 1024, dan 1280 px. Semua stylesheet termuat dalam urutan yang dimaksud dan tidak ditemukan overflow horizontal atau error console pada halaman utama.
- Dialog diuji dengan aktivasi keyboard, Escape, tombol tutup, pemulihan fokus, fallback link, pemuatan lokal, route gagal, timeout 12 detik, dan buka-tutup cepat. Dialog tidak overflow pada ketujuh lebar yang diuji.
- Fetch paket diuji sukses dan gagal; masing-masing mengakhiri `aria-busy=false`, dengan empat paket atau fallback Basic. Reduced motion, menu keyboard, screenshot beranda desktop 1280 px, dan modal mobile 375 px juga diperiksa.
- Warna tombol diperiksa pada halaman root: primary hijau; secondary transparan dengan teks/border putih; hover/active hijau. Preview terisolasi diuji untuk secondary, outline, hover, pressed, glass terang, dan disabled.
- Server lokal mencatat 404 untuk permintaan otomatis browser ke `/favicon.ico`; tidak ada referensi favicon yang ditambahkan dalam tugas ini dan temuan tersebut tidak diubah karena di luar file sasaran.
- Skeleton sengaja tidak ditambahkan karena latensi fetch yang bermakna belum terukur.

## Command dan batasan
- `git status --short --branch`, `git diff --stat`, dan `git diff --name-only` tersedia dan berhasil dijalankan sebelum edit.
- Perubahan lokal yang teramati sebelum tugas: `.github/agents/website-developer.agent.md` berubah; `css/ui-components.css` dan `ui-preview.html` belum dilacak. CSS preview kemudian diubah hanya untuk warna tombol sesuai permintaan; markup preview dan semua demo portofolio dipertahankan.
- `node --check js/script.js` tersedia dan berhasil. `git diff --check` default melaporkan karakter CR pada akhir baris file CRLF; pemeriksaan read-only `git -c core.whitespace=cr-at-eol diff --check` selesai tanpa temuan.
- Tidak ada command yang diblokir atau tidak tersedia pada sesi ini. Jika command kelak tidak tersedia, gunakan pemeriksaan read-only editor/VS Code dan catat sebagai keterbatasan, bukan sebagai command yang gagal.

## Perubahan homepage — 2026-11-07
- Branch sasaran: `local`; halaman utama disusun ulang mengikuti naskah final yang disetujui.
- File yang diganti: `index.html`, `css/style.css`, `js/script.js`, dan `data/packages.json`. Tidak menyalin atau mengganti file proyek lain.
- Konten meliputi hero, Tentang, tiga kelompok layanan, lima kartu portofolio, enam keunggulan, tiga tahap pengerjaan, empat paket, CTA WhatsApp, footer, dan tautan WhatsApp Channel resmi.
- Tautan demo hanya ditambahkan untuk direktori portofolio yang ditemukan pada branch local. Aura Rasa ditampilkan sebagai konsep UI karena folder demo terpisah tidak ditemukan.
- Paket harga dan deskripsi disinkronkan dengan keputusan naskah; CTA paket membuka WhatsApp dengan pesan sesuai pilihan.
- Validasi dilakukan melalui inspeksi source dan pembaruan terarah; uji browser, responsivitas aktual, dan hasil GitHub Actions belum diverifikasi pada sesi ini.


## Koreksi homepage — 2026-11-07
- Permintaan koreksi: desain halaman utama harus kembali menggunakan desain editorial yang telah ada sebelumnya; tulisan “TEMPLATE UI PREVIEW” hanya menjadi label kecil pada kartu portofolio, bukan dasar untuk mengubah desain kartu atau keseluruhan halaman.
- Branch sasaran tetap `local`; `index.html` dibangun kembali dari struktur homepage sebelumnya dan menggunakan `css/style-studio.css`. Konten final yang telah disetujui tetap dipakai.
- Pratinjau portofolio, lima kartu, susunan halaman, dan gaya visual editorial dipertahankan. Label `TEMPLATE UI PREVIEW` diterapkan pada lima kartu.
- Memulihkan stylesheet dan aset pendukung homepage yang diperlukan: `css/style-studio.css`, `assets/fonts/fonts.css`, `assets/fonts/Telma-Light.otf`, `data/hero-text.js`, `js/hero-typewriter.js`, `js/touch-ripple.js`, dan `js/skeleton-loading.js`.
- Menambahkan kembali tiga tahapan proses pengerjaan dengan gaya kartu yang sama seperti bagian keunggulan.
- Validasi source: tujuh section utama tersedia, lima iframe portofolio dan lima label ditemukan, file JavaScript berhasil diparse, dan tidak ada referensi ke stylesheet redesign pada homepage. Uji browser dan hasil GitHub Actions belum diperiksa.
