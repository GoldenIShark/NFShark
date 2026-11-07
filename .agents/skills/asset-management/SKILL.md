---
name: asset-management
description: "Gunakan saat memilih, menambah, menamai, mengoptimalkan, mengonversi, mengganti, atau memperbaiki path gambar, ikon, font, video, dan aset website."
---

# Manajemen Aset Website

## Temukan cakupan dengan tepat
- Identifikasi root situs yang benar dan telusuri referensi HTML, CSS, serta JavaScript sebelum memindah atau mengganti aset.
- Untuk situs utama, aset berada di `assets/`. Untuk situs portofolio, periksa hanya `portofolio/<kategori>/<website>/assets/`, atau `portofolio/<kategori>/assets/` bila situs langsung berada di kategori.
- Jangan mengubah `assets/` situs utama saat bekerja pada situs portofolio kecuali diminta khusus.
- Pada situs portofolio, baca `.github/skills/convert-images-to-webp/SKILL.md` dan ikuti aturan konversi khususnya jika optimasi gambar relevan.

## Pilih dan atur
- Gunakan media yang relevan, legal digunakan, berkualitas memadai, dan mendukung isi serta identitas situs; jangan hotlink atau menyalin aset tanpa izin.
- Gunakan nama file deskriptif dan konsisten, hindari spasi serta nama sementara, dan pertahankan struktur/nama dasar bila memungkinkan.
- Pilih format sesuai fungsi dan dukungan: SVG untuk vektor yang aman, WebP atau format raster modern untuk foto, serta format sumber animasi yang mempertahankan gerak.
- Hindari konversi SVG otomatis, hilangnya animasi GIF, perubahan favicon tanpa alasan, atau kompresi yang merusak kualitas/fungsi.

## Prosedur aman
1. Catat file sumber, penggunaan, dimensi, dan ukuran; pastikan gambar benar-benar dipakai.
2. Buat kandidat aset baru tanpa lebih dulu menghapus aslinya.
3. Periksa hasil visual, dimensi, transparansi/animasi, ukuran berkas, dan path dari root situs.
4. Perbarui seluruh referensi; cari ulang nama lama dan validasi target baru benar-benar ada.
5. Hapus sumber hanya setelah semua referensi tervalidasi dan penghapusan memang diminta/layak.

Pertahankan rasio, teks alternatif yang bermakna, dan perilaku loading yang sesuai. Laporkan aset yang diubah dan keterbatasan validasi; gunakan `performance` untuk prioritas optimasi dan `seo-accessibility` untuk media aksesibel.
