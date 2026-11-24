# Daftar Pekerjaan Harian NFShark

Daftar ini menjadi sumber pemilihan pekerjaan implementasi harian untuk mengikuti `Otomatis/Intruksi.md`. Kerjakan maksimal satu tugas per hari. Audit mingguan `Audit Repository NFShark` berjalan melalui otomasi terjadwal terpisah dan menggunakan checklist `Daftar Pemeriksaan Mingguan Audit Repository NFShark.md`; audit tersebut tidak dihitung sebagai tugas implementasi harian.

## Belum Dikerjakan

- [ ] **Tugas 7 — Implementasi navigasi Jelajahi pada halaman studio.** Ganti container informasi Minimalist Editorial dengan navigasi responsif Jelajahi. Terapkan geser horizontal pada HP dan satu baris dengan tombol Tampilan semua pada layar lebih lebar; tampilkan grid saat diminta. Fokus fitur baru tahap awal adalah Langganan Website. Hubungkan Pesan Website ke halaman Brief yang sudah ada, pindahkan Paket Website ke halaman terpisah, dan gunakan menu lain hanya jika halaman tujuannya tersedia. Untuk tujuan halaman terpisah yang belum dibuat, gunakan `#` sebagai placeholder sementara atau tunda aktivasi tautannya sampai halaman terkait tersedia; jangan membuat URL fiktif. Cari ikon konsisten dari Flaticon/FreeIcons atau sumber permisif lain, verifikasi lisensi tiap aset, dan dokumentasikan atribusi. Ikuti seluruh pemeriksaan aksesibilitas dan pengujian responsif dalam spesifikasi.
  Spesifikasi: [Rancangan dan Arahan Navigasi Jelajahi NFShark.md](./Rancangan%20dan%20Arahan%20Navigasi%20Jelajahi%20NFShark.md) 

- [ ] **Tugas 9 — Membuat halaman Paket Website setelah Tugas 7 selesai.** Buat file HTML terpisah untuk informasi paket. Header mengikuti gaya halaman utama tetapi hanya berisi tombol **⟨ Kembali ke halaman** di sisi kiri dan sejajar vertikal di tengah, tanpa logo maupun elemen header lain. Di bawahnya tampilkan tabel paket dengan bentuk dan isi yang sama seperti tabel pada halaman utama; pertahankan desainnya. Tambahkan konten pendukung yang relevan seperti navigasi bantuan atau informasi penting mengenai layanan paket, lalu footer konsisten dengan halaman utama. Setelah halaman siap, hubungkan menu Paket Website pada navigasi Tugas 7 ke URL aktual halaman baru. Tugas ini baru boleh dikerjakan setelah Tugas 7 selesai dan diverifikasi.
  Spesifikasi: [Rancangan Halaman Paket Website NFShark.md](./Rancangan%20Halaman%20Paket%20Website%20NFShark.md)


- [ ] **Tugas 2 — Implementasi kebijakan pemeliharaan bulanan.** Periksa halaman, informasi paket, dan komponen terkait. Terapkan ketentuan tarif, cakupan tiap paket, batas permintaan, waktu respons, masa berlangganan, serta pemberitahuan hanya sejauh didukung sistem website. Jangan menjanjikan otomasi hosting yang belum tersedia.  
  Spesifikasi: [KEBIJAKAN LAYANAN PEMELIHARAAN BULANAN NFSHARK.md](./KEBIJAKAN%20LAYANAN%20PEMELIHARAAN%20BULANAN%20NFSHARK.md)

- [ ] **Tugas 3 — Implementasi kebijakan pengembalian dana.** Periksa halaman S&K, FAQ, dan informasi layanan yang relevan. Selaraskan penjelasan kondisi refund, dasar perhitungan, tahapan progres, kompensasi, serta target waktu sesuai dokumen. Pastikan rumus dan simulasi konsisten sebelum dipublikasikan.  
  Spesifikasi: [KEBIJAKAN PENGEMBALIAN DANA (REFUND) NFSHARK.md](./KEBIJAKAN%20PENGEMBALIAN%20DANA%20%28REFUND%29%20NFSHARK.md)

- [ ] **Tugas 4 — Implementasi persetujuan publikasi portofolio.** Periksa formulir brief, alur penyerahan, dan halaman portofolio. Terapkan persetujuan terpisah untuk tampilan website, nama proyek/bisnis, dan tautan publik; jangan publikasikan komponen yang belum diizinkan.  
  Spesifikasi: [KEBIJAKAN PUBLIKASI PORTOFOLIO NFSHARK.md](./KEBIJAKAN%20PUBLIKASI%20PORTOFOLIO%20NFSHARK.md)

- [ ] **Tugas 5 — Penyelarasan aturan perubahan S&K.** Bandingkan dokumen Masalah 5 dengan keputusan terbaru pada Masalah 7. Gunakan Masalah 7 sebagai acuan terbaru: tanpa nomor versi, tanggal publikasi sebagai patokan, masa transisi 7 hari kalender, serta pemberitahuan dan persetujuan untuk perubahan besar yang berdampak pada pelanggan. Selaraskan dokumen/halaman website yang relevan tanpa menghilangkan ketentuan yang masih berlaku.  
  Spesifikasi: [Perubahan dan Pembaruan Syarat dan Ketentuan NFShark.md](./Perubahan%20dan%20Pembaruan%20Syarat%20dan%20Ketentuan%20NFShark.md) dan [Tanggal Publikasi dan Dokumentasi Perubahan S&K NFShark.md](./Tanggal%20Publikasi%20dan%20Dokumentasi%20Perubahan%20S%26K%20NFShark.md)

- [ ] **Tugas 6 — Dokumentasi tanggal publikasi dan daftar perubahan S&K.** Periksa halaman S&K dan halaman `daftar-perubahan-S&K.html` (atau struktur aktual yang menggantikannya). Terapkan tanggal publikasi, perhitungan tanggal efektif setelah 7 hari kalender, ringkasan bagian yang berubah, serta pemberitahuan perubahan sesuai kategorinya. Jangan membuat tanggal publikasi historis atau menyatakan perubahan berlaku tanpa dasar.  
  Spesifikasi: [Tanggal Publikasi dan Dokumentasi Perubahan S&K NFShark.md](./Tanggal%20Publikasi%20dan%20Dokumentasi%20Perubahan%20S%26K%20NFShark.md)

## Sudah Dikerjakan

- [x] **Tugas 1 — Keselarasan identitas dan kontak NFShark.** Selesai pada 2026-11-23. Alamat Gmail, pembagian kanal komunikasi, serta pesan otomatis konsultasi, pemesanan, brief, dan revisi diselaraskan. Nomor WhatsApp yang telah ada dan akun Instagram @shark.studio22 dipertahankan tanpa perubahan.

- [x] **Tugas 8 — Pemisahan tampilan S&K pelanggan dan dokumen Markdown untuk AI.** Selesai pada 2026-11-24. `persetujuan.md` menjadi sumber isi tunggal; build menghasilkan seluruh isi sebagai HTML semantik langsung pada `persetujuan.html` dan rute `/persetujuan/` tanpa fetch runtime, serta menyalin Markdown ke root publik. `llms.txt` memuat kedua URL dan menjelaskan bahwa keduanya bersifat publik. Aturan wildcard robots tetap mengizinkan crawler; sitemap tetap memuat halaman HTML tanpa Markdown. Build, kesamaan teks, paket deployment, dan deployment GitHub Pages berhasil diverifikasi. URL live tidak dapat diperiksa langsung melalui alat web pada sesi ini; pengindeksan atau penggunaan oleh Gemini tidak diklaim. Isi kebijakan tidak diubah.
## Aturan pembaruan daftar
- Setelah satu tugas benar-benar selesai dan diverifikasi, pindahkan hanya tugas tersebut dari **Belum Dikerjakan** ke **Sudah Dikerjakan**.
- Tambahkan tanggal penyelesaian dan ringkasan singkat pada entri di **Sudah Dikerjakan**.
- Jika tugas terhambat atau belum tuntas, biarkan di **Belum Dikerjakan** dan tambahkan catatan hambatan.
- Jangan menghapus riwayat tugas yang sudah dikerjakan.
