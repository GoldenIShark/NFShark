---
name: responsive-web
description: "Gunakan saat membangun atau mengaudit tampilan mobile, tablet, dan desktop, breakpoint, navigasi kecil, overflow, target sentuh, atau perilaku layout adaptif."
---

# Website Responsif

## Pendekatan
- Mulai dari konten dan layar sempit, lalu perluas layout saat ruang tersedia. Jangan menganggap breakpoint perangkat tertentu sebagai satu-satunya ukuran.
- Periksa CSS yang ada sebelum menambah media query. Pilih breakpoint ketika konten mulai sesak atau komposisi perlu berubah, bukan berdasarkan daftar perangkat.
- Gunakan grid/flex yang lentur, ukuran relatif dan batas lebar yang masuk akal; hindari lebar/tinggi tetap yang memotong konten.
- Pastikan gambar menyusut dengan rasio benar, teks dapat membungkus, kontrol tidak bertumpuk, dan tidak ada scroll horizontal yang tidak disengaja.
- Navigasi mobile harus mudah ditemukan, dapat dibuka/ditutup, menyampaikan state dengan tepat (misalnya `aria-expanded`), serta tidak menjebak fokus.
- Beri jarak dan ukuran target sentuh yang nyaman. Jangan mengandalkan hover untuk mengungkap informasi penting.

## Pemeriksaan lintas viewport
Uji seluruh lebar viewport berikut, bukan hanya satu ukuran representatif: **320, 375, 390, 414, 768, 1024, dan 1280 px atau lebih**. Periksa perubahan breakpoint dan lebar di antara ukuran tersebut bila layout atau konten menunjukkan titik rawan. Pada setiap ukuran, tinjau:
- navbar/navigasi (termasuk menu terbuka dan tertutup), hero, serta urutan/keterbacaan konten;
- tipografi dan heading panjang, kartu, grid, gambar/media, tombol, formulir, modal/dialog bila ada, dan footer;
- ukuran target sentuh, jarak tepi, wrapping, fokus, serta state interaksi;
- overflow horizontal atau clipping, rasio media, konsistensi visual, dan fungsi penting yang mungkin tersembunyi.

Catat viewport yang benar-benar diperiksa dan keterbatasan alat/pratinjau; jangan menyatakan semua ukuran telah diuji bila pemeriksaan tidak dilakukan pada seluruh daftar. Gunakan `website-testing` untuk validasi perilaku.
