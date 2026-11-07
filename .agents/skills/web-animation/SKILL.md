---
name: web-animation
description: "Gunakan saat menambahkan atau mengaudit transisi, animasi, reveal saat scroll, gerak hover, atau umpan balik visual interaktif pada website."
---

# Animasi Web

## Prinsip
Gerak harus menjelaskan sebab-akibat, memberi umpan balik, atau membantu orientasi—bukan sekadar dekorasi. Pilih animasi singkat dan halus yang tidak menghalangi pembacaan, input, navigasi, atau akses konten.

## Implementasi aman
- Pertahankan pendekatan dan teknologi yang sudah ada; jangan menambah library animasi hanya untuk efek kecil.
- Animasikan properti yang efisien bila memungkinkan, seperti `transform` dan `opacity`; hindari menggerakkan layout terus-menerus dengan animasi berat.
- Pastikan konten tetap terlihat dan fungsi tetap dapat digunakan jika JavaScript, animasi, atau pemicu scroll tidak berjalan.
- Hormati preferensi `prefers-reduced-motion: reduce`; hentikan atau sederhanakan gerak nonesensial.
- Jangan memicu gerakan berulang tanpa kontrol, kedipan cepat, zoom agresif, atau paralaks yang menyebabkan mual/disorientasi.
- Gunakan state interaksi yang jelas; hover bukan satu-satunya umpan balik, dan fokus keyboard harus sama jelasnya.

## Verifikasi
Uji pemicu, waktu, interupsi, state selesai, scroll, navigasi keyboard, serta perilaku reduced motion. Pastikan animasi tidak menutupi teks, menimbulkan layout shift, atau mengurangi performa mobile. Gunakan `performance` dan `website-testing` bila perubahan berdampak pada beban atau perilaku halaman.
