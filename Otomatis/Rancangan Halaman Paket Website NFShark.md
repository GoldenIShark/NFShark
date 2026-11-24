# Rancangan Halaman Paket Website NFShark

## Status dan ketergantungan
Dokumen ini adalah spesifikasi untuk tugas lanjutan setelah **Tugas 7 — Implementasi navigasi Jelajahi pada halaman studio** benar-benar selesai dan diverifikasi. Jangan mulai implementasi halaman ini sebelum Tugas 7 selesai. Tugas ini hanya disiapkan sebagai pekerjaan berikutnya.

## Tujuan
Memindahkan informasi Paket Website dari halaman studio/utama ke halaman HTML tersendiri, dengan tetap mempertahankan bentuk tabel paket yang sudah digunakan pada halaman utama. Halaman baru menjadi tempat pelanggan melihat dan memahami paket website NFShark.

## Struktur halaman

### 1. Header
- Gunakan gaya visual header yang sama dengan halaman utama NFShark: warna, latar, tipografi, jarak, radius, dan perilaku responsif mengikuti sistem desain yang sudah ada.
- Header hanya berisi satu tombol/tautan kembali. Jangan tampilkan logo, nama merek, navigasi lain, ikon tambahan, atau konten header lainnya.
- Teks tombol: **⟨ Kembali ke halaman**.
- Tempatkan tombol pada sisi kiri area header dan posisikan secara vertikal di tengah, dengan jarak tepi yang konsisten dengan header halaman utama.
- Tombol mengarah kembali ke halaman studio/utama yang menjadi asal navigasi Paket Website. Gunakan URL aktual setelah memeriksa struktur dan URL hasil Tugas 7; jangan menebak path.
- Pastikan tombol dapat digunakan dengan keyboard, memiliki fokus terlihat, target sentuh memadai, dan label aksesibel.

### 2. Konten utama — tabel paket
- Tampilkan tabel paket yang saat ini digunakan pada halaman utama/studio.
- Pertahankan bentuk, susunan kolom, urutan paket, isi, gaya visual, dan pola responsif tabel yang sudah ada. Jangan mendesain ulang tabel atau mengubah isi paket tanpa instruksi/keputusan terpisah.
- Setelah Tugas 7 memindahkan data paket, gunakan sumber data dan komponen yang benar-benar ada di repository agar tidak terjadi duplikasi atau perbedaan informasi.
- Pastikan tabel tetap terbaca pada smartphone, tablet, dan desktop. Jika tabel saat ini memiliki perilaku responsif khusus, pertahankan perilaku tersebut.
- Jangan mengubah harga, cakupan, estimasi, atau ketentuan paket pada tugas ini.

### 3. Konten pendukung
- Di sekitar tabel, sediakan area konten tambahan yang ringkas dan relevan untuk membantu pelanggan memahami halaman Paket Website.
- Konten dapat berisi navigasi bantuan atau informasi penting terkait layanan paket, misalnya cara memilih paket, hal yang perlu disiapkan sebelum memesan, penjelasan bahwa kebutuhan khusus dapat dibicarakan melalui konsultasi/brief, atau tautan menuju FAQ dan bantuan yang memang sudah tersedia.
- Pilih hanya informasi yang benar dan telah didukung halaman/dokumen NFShark. Jangan membuat kebijakan, harga, janji waktu pengerjaan, jaminan, atau fitur baru.
- Gunakan tautan hanya ke halaman yang sudah tersedia dan verifikasi URL-nya. Jika halaman bantuan terkait belum tersedia, jangan membuat tautan mati; catat sebagai pekerjaan lanjutan atau tampilkan informasi teks tanpa tautan.

### 4. Footer
- Gunakan footer yang konsisten dengan footer halaman utama NFShark.
- Pertahankan informasi, gaya, tata letak, tautan, dan perilaku responsif footer yang relevan.
- Pastikan semua tautan footer mengarah ke tujuan yang tersedia dan benar.

## Arahan implementasi
1. Setelah Tugas 7 selesai, baca instruksi repository dan periksa hasil implementasi navigasi serta file/komponen paket yang dipindahkan.
2. Tentukan nama dan lokasi file HTML baru mengikuti konvensi repository; jangan membuat path sebelum memeriksa struktur aktual.
3. Gunakan CSS umum NFShark dan stylesheet halaman khusus hanya untuk kebutuhan yang belum tercakup oleh gaya umum.
4. Hindari menyalin tabel atau data paket secara manual jika dapat menggunakan sumber data/komponen yang sama. Pastikan hanya ada satu sumber data paket yang dipelihara.
5. Jangan menambahkan backend, autentikasi, pembayaran otomatis, atau layanan server.
6. Jangan menambahkan tautan navigasi palsu. URL tombol kembali dan tautan pendukung harus diperiksa dari struktur aktual.
7. Pertahankan aksesibilitas, performa ringan, pemisahan HTML/CSS/JavaScript, dan desain mobile-first.
8. Jangan mengubah halaman studio lebih jauh dari yang diperlukan untuk menghubungkan menu Paket Website ke halaman baru.

## Verifikasi wajib
- Periksa halaman baru pada smartphone, tablet, dan desktop.
- Pastikan header hanya berisi tombol **⟨ Kembali ke halaman**, tanpa logo atau elemen header lain.
- Pastikan tombol kembali berada di sisi kiri dan sejajar vertikal di tengah, serta menuju halaman asal yang benar.
- Bandingkan tabel halaman baru dengan tabel asal: bentuk, urutan, data, dan tampilannya tetap sama.
- Pastikan konten pendukung akurat dan semua tautannya valid.
- Pastikan footer konsisten dengan halaman utama.
- Periksa keyboard, fokus, target sentuh, console, tautan lokal, dan tidak ada regresi pada halaman utama/studio.
- Jalankan pemeriksaan build/workflow repository dan catat hasil yang benar-benar terverifikasi.
- Setelah halaman baru siap, ganti placeholder `#` atau tautan yang ditunda pada navigasi Tugas 7 dengan URL halaman Paket Website yang sebenarnya.

## Batasan
- Tugas ini baru boleh dikerjakan setelah Tugas 7 selesai.
- Pertahankan isi dan bentuk tabel paket; jangan melakukan redesign.
- Jangan mengubah substansi paket atau kebijakan layanan tanpa persetujuan terpisah.
- Catat semua file yang diubah dan hasil verifikasi sesuai prosedur `Otomatis/Intruksi.md`.
