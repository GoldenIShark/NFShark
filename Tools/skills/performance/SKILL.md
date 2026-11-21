---
name: performance
description: "Gunakan saat mendiagnosis atau mengoptimalkan waktu muat, gambar, aset, CSS/JavaScript, rendering, layout shift, atau responsivitas runtime website."
---

# Performa Website

## Ukur sebelum mengoptimalkan
- Tentukan halaman dan gejala: muat awal lambat, gambar terlambat, animasi tersendat, layout bergeser, atau interaksi lambat.
- Catat baseline atau gunakan pengukuran yang tersedia; jangan menebak penyebab dan jangan menambah dependensi atau layanan analitik tanpa izin.
- Prioritaskan perbaikan yang terlihat pengguna dan sesuai lingkup, bukan skor tanpa konteks.

## Tindakan berisiko rendah
- Periksa ukuran, dimensi, format, kualitas, dan penggunaan nyata setiap gambar; optimalkan aset yang tepat tanpa merusak kualitas atau animasi.
- Hindari file font/media berlebihan, skrip sinkronisasi yang tidak perlu, duplikasi CSS/JS, permintaan eksternal yang tak dibutuhkan, dan kode/efek yang tak digunakan.
- Tentukan dimensi atau rasio media untuk mengurangi layout shift; gunakan strategi pemuatan sesuai posisi konten dan kebutuhan awal.
- Jaga JavaScript sederhana, hindari pekerjaan berulang pada scroll/resize, dan gunakan animasi yang tidak memicu layout mahal.
- Jangan menambahkan caching, CDN, bundler, kompresor, atau konfigurasi server yang tidak tersedia/diminta.

## Validasi
Bandingkan ukuran aset dan hasil pengukuran sebelum/sesudah bila tersedia; cek kualitas visual, path, konsol, pemuatan konten utama, layout shift, dan perilaku pada jaringan/perangkat yang dapat diuji. Jangan melaporkan peningkatan kuantitatif tanpa data. Untuk konversi aset, ikuti `asset-management`; untuk animasi, gunakan `web-animation`.
