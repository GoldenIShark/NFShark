---
name: website-testing
description: "Gunakan saat memvalidasi halaman, layout, tautan, aset, navigasi, formulir, JavaScript, aksesibilitas dasar, atau memastikan tidak ada regresi setelah perubahan."
---

# Pengujian Website

## Rencana uji terarah
1. Hubungkan setiap perubahan dengan hasil yang diharapkan dan kemungkinan regresi.
2. Periksa hanya halaman dan perilaku yang terdampak, lalu uji alur kritis end-to-end yang relevan.
3. Jalankan validasi statis/sintaks yang tersedia tanpa menambah dependensi.
4. Jika tersedia, buka situs/pratinjau dan periksa console serta network untuk error baru.

## Daftar periksa

### Fungsional
- Uji navigasi/navbar, buka/tutup menu, link internal dan eksternal, tombol, CTA, serta tujuan akhirnya.
- Uji seluruh interaksi JavaScript yang terdampak; formulir dengan input valid/tidak valid, validasi dan status sukses/error; serta modal/dialog bila ada (buka, tutup, fokus, dan tombol Escape bila sesuai).
- Pastikan elemen native dan interaksi utama dapat digunakan dengan keyboard, urutan fokus masuk akal, fokus terlihat, label serta state aksesibel tepat, dan preferensi reduced motion dihormati bila gerak digunakan.

### Visual dan responsif
- Periksa keterbacaan, hierarki/urutan konten, konsistensi styling, teks terpotong, layout shift yang terlihat, wrapping, target sentuh, dan overflow/clipping.
- Uji pada **320, 375, 390, 414, 768, 1024, dan 1280 px atau lebih**; catat ukuran yang benar-benar diuji. Untuk masing-masing ukuran, tinjau navbar, hero, tipografi, cards/kartu, grids, gambar/media, tombol, formulir, modal/dialog bila ada, dan footer.

### Teknis
- Jalankan pemeriksaan syntax HTML/CSS/JavaScript atau validasi statis yang tersedia; periksa console dan network untuk error baru jika pratinjau tersedia.
- Pastikan semua link dan path target benar, semua aset yang dirujuk tersedia dan dapat dimuat, tidak ada broken image, serta tidak ada permintaan/error baru yang tidak diharapkan.
- Periksa tampilan dan interaksi di halaman yang terdampak serta regresi pada fungsi terkait; catat lingkungan/browser yang benar-benar digunakan.

### SEO
- Periksa title dan meta description yang relevan/akurat, bahasa dokumen, heading dan struktur semantik, URL/link deskriptif, teks alternatif media informatif, serta tidak ada metadata duplikat atau klaim tanpa dukungan.

### Performa
- Periksa ukuran dan pemuatan gambar/aset, gambar tanpa dimensi yang dapat memicu layout shift, script atau request yang tidak perlu, console/network error, serta kelancaran interaksi utama bila dapat diamati.
- Bandingkan ukuran atau metrik sebelum/sesudah hanya jika benar-benar diukur; jangan menyatakan perbaikan kuantitatif tanpa bukti.

- Pastikan tidak ada perubahan tak sengaja pada halaman, file, atau interaksi di luar lingkup.

## Pelaporan
Bedakan pemeriksaan yang benar-benar dilakukan dari saran yang belum diuji. Catat browser/perangkat/viewport dan keterbatasan penting. Jika pemeriksaan gagal, laporkan reproduksi dan hasilnya; perbaiki regresi lingkup pekerjaan lalu jalankan ulang uji yang terdampak. Hindari klaim “semua berfungsi” dari pemeriksaan visual saja.
