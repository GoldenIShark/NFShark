# Rancangan Penataan Direktori Website NFShark

## Tujuan
Menata repository agar halaman HTML aktif dan file pendukungnya tidak terus menumpuk di root. Setiap jenis/fitur halaman ditempatkan dalam direktori yang jelas, sementara aset bersama tetap dapat digunakan lintas halaman. Penataan harus menjaga website statis GitHub Pages, URL publik, tautan internal, dan workflow.

## Dependensi dan waktu pengerjaan
- Tugas ini baru boleh dimulai setelah halaman Paket Website dan Langganan Website benar-benar dibuat, diuji, dan tujuan tautannya sudah final.
- Jangan memindahkan file saat Tugas 7, Tugas 9, atau pekerjaan pembuatan halaman Langganan masih mengandalkan path root yang sedang berubah.
- Sebelum migrasi, audit seluruh HTML aktif, CSS, JavaScript, gambar/font, JSON, manifest, sitemap, robots, llms, workflow, dan tautan yang merujuk path lama.
- Arsip `history/` dan setiap website proyek/portofolio klien tidak termasuk migrasi umum ini kecuali ada instruksi khusus.

## Bentuk struktur yang dituju
Struktur berikut adalah arah awal, bukan alasan untuk memaksakan pemindahan sebelum audit dependensi:

```text
/
├── index.html                 # beranda/studio atau entry point utama yang dipertahankan
├── paket/
│   ├── index.html             # halaman layanan Paket Website
│   ├── css/
│   │   └── paket.css          # CSS khusus halaman paket
│   └── js/
│       └── paket.js           # JS khusus halaman paket bila diperlukan
├── langganan/
│   ├── index.html             # halaman Langganan Website
│   ├── css/
│   │   └── langganan.css
│   └── js/
│       └── langganan.js
├── brief/
│   ├── index.html
│   ├── css/                   # hanya jika ada CSS khusus Brief
│   └── js/                    # hanya jika ada JS khusus Brief
├── faq/
│   ├── index.html
│   ├── css/
│   └── js/
├── feedback/
│   ├── index.html
│   ├── css/
│   └── js/
├── persetujuan/
│   └── index.html
├── css/                       # stylesheet bersama/global
├── js/                        # JavaScript bersama/global
├── assets/                    # gambar, font, ikon, dan aset bersama
├── data/                      # sumber data bersama yang dipakai lintas halaman
├── portofolio/                # proyek/website contoh; dikelola terpisah
├── history/                   # arsip versi lama; tidak dimigrasikan
└── Otomatis/
```

## Aturan penempatan
1. Halaman layanan paket berada di direktori `paket/` dengan entry point `paket/index.html`.
2. Halaman langganan berada di direktori `langganan/` dengan entry point `langganan/index.html`.
3. Halaman aktif lain dapat dipindahkan ke direktori berdasarkan fungsi/jenisnya setelah pemetaan path dan dampaknya disetujui melalui audit tugas ini. Pertahankan URL publik yang telah digunakan jika memungkinkan.
4. CSS/JavaScript khusus satu halaman ditempatkan dalam subdirektori halaman tersebut, misalnya `paket/css/`, `paket/js/`, `langganan/css/`, dan `langganan/js/`.
5. CSS/JavaScript yang dipakai bersama oleh beberapa halaman tetap berada di direktori global `css/` dan `js/`; jangan menggandakan file umum ke setiap direktori.
6. Aset gambar, font, ikon, dan data bersama tetap terpusat di `assets/` dan `data/` kecuali ada alasan teknis yang terdokumentasi untuk aset khusus halaman.
7. Jangan membuat direktori atau file kosong hanya demi mengikuti contoh struktur. Buat subdirektori CSS/JS hanya jika memang ada file khusus halaman.
8. Nama direktori gunakan huruf kecil, tanpa spasi, dan konsisten dengan URL bersih. Hindari nama ganda atau ejaan yang berubah-ubah.

## Kompatibilitas URL dan GitHub Pages
- Periksa konfigurasi GitHub Pages, workflow build/deploy, file `.nojekyll`, redirect, dan mekanisme URL bersih sebelum memindahkan halaman.
- Direktori dengan `index.html` dapat menjadi rute bersih, tetapi semua path relatif di HTML/CSS/JS harus diperbarui secara benar.
- Pertahankan URL lama yang telah dipublikasikan melalui redirect/compatibility page yang sesuai bila memungkinkan; jangan menghapus rute lama tanpa pengganti yang diuji.
- Perbarui seluruh tautan internal, canonical URL, Open Graph, metadata, sitemap, llms, manifest, preload, import, fetch, dan referensi aset sesuai struktur baru.
- Pastikan halaman tetap bekerja saat diakses langsung melalui URL dalam, bukan hanya setelah masuk dari homepage.
- Jangan mengandalkan root-relative URL sebelum memeriksa base path dan konfigurasi domain GitHub Pages.

## Tahapan implementasi
1. Buat inventaris semua halaman aktif dan peta dependensi path lama → path baru.
2. Tentukan kelompok halaman serta file pendukung khusus dan bersama.
3. Identifikasi risiko URL publik, SEO, workflow, dan tautan eksternal.
4. Migrasikan satu kelompok halaman dalam perubahan terkontrol; jangan memindahkan seluruh repository secara serentak tanpa pengujian bertahap.
5. Perbarui referensi path dan konfigurasi yang terdampak.
6. Jalankan build dan workflow, pemeriksaan tautan lokal, validasi aset, serta pengujian langsung setiap rute.
7. Periksa tampilan dan fungsi pada HP, tablet, desktop, keyboard, serta reduced motion untuk halaman yang terdampak.
8. Pastikan tidak ada file aktif tertinggal atau terduplikasi tanpa alasan. Pertahankan arsip dan proyek portofolio.
9. Catat struktur akhir, peta URL, file yang dipindahkan, redirect/kompatibilitas, dan hasil verifikasi.

## Batasan
- Website tetap statis/front-end; jangan menambahkan backend atau server.
- Jangan mengubah desain, isi layanan, harga, atau kebijakan sebagai bagian dari migrasi direktori.
- Jangan menghapus arsip atau file proyek portofolio.
- Jangan memulai sebelum dependensi halaman Paket dan Langganan selesai.
- Ikuti `Otomatis/Intruksi.md`; satu tugas implementasi per hari.
