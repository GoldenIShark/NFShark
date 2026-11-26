# Daftar Pekerjaan Harian NFShark

Daftar ini menjadi sumber pemilihan pekerjaan implementasi harian untuk mengikuti `Otomatis/Intruksi.md`. Kerjakan maksimal satu tugas per hari. Setiap tugas wajib memiliki tingkat pengerjaan **Biasa**, **Sedang**, atau **Prioritas**; pemilihan mengikuti urutan Prioritas → Sedang → Biasa setelah dependensi diperiksa. Audit mingguan `Audit Repository NFShark` berjalan melalui otomasi terjadwal terpisah dan menggunakan checklist `Daftar Pemeriksaan Mingguan Audit Repository NFShark.md`; audit tersebut tidak dihitung sebagai tugas implementasi harian.

## Belum Dikerjakan

- [ ] **Tugas 7 — [Sedang] Implementasi navigasi Jelajahi pada halaman studio.** Ganti container informasi Minimalist Editorial dengan navigasi responsif Jelajahi. Terapkan geser horizontal pada HP dan satu baris dengan tombol Tampilan semua pada layar lebih lebar; tampilkan grid saat diminta. Fokus fitur baru tahap awal adalah Langganan Website. Hubungkan Pesan Website ke halaman Brief yang sudah ada, pindahkan Paket Website ke halaman terpisah, dan gunakan menu lain hanya jika halaman tujuannya tersedia. Untuk tujuan halaman terpisah yang belum dibuat, gunakan `#` sebagai placeholder sementara atau tunda aktivasi tautannya sampai halaman terkait tersedia; jangan membuat URL fiktif. Cari ikon konsisten dari Flaticon/FreeIcons atau sumber permisif lain, verifikasi lisensi tiap aset, dan dokumentasikan atribusi. Ikuti seluruh pemeriksaan aksesibilitas dan pengujian responsif dalam spesifikasi.
  Spesifikasi: [Rancangan dan Arahan Navigasi Jelajahi NFShark.md](./Rancangan%20dan%20Arahan%20Navigasi%20Jelajahi%20NFShark.md)

- [ ] **Tugas 9 — [Sedang] Membuat halaman Harga Paket Pembuatan Website setelah Tugas 7 selesai.** Buat file HTML terpisah untuk informasi paket. Header mengikuti gaya halaman utama tetapi hanya berisi tombol **⟨ Kembali ke halaman** di sisi kiri dan sejajar vertikal di tengah, tanpa logo maupun elemen header lain. Di bawahnya tampilkan tabel paket dengan bentuk dan isi yang sama seperti tabel pada halaman utama; pertahankan desainnya. Gunakan nama resmi **Ringan, Populer, Premium, dan Custom** dari `data/packages.json`. Tambahkan konten pendukung yang relevan dan footer konsisten dengan halaman utama. Setelah halaman siap, hubungkan menu Paket Website ke URL aktual halaman baru. Tugas ini baru boleh dikerjakan setelah Tugas 7 selesai dan diverifikasi.
  Spesifikasi: [Rancangan Halaman Paket Website NFShark.md](./Rancangan%20Halaman%20Paket%20Website%20NFShark.md)


- [ ] **Tugas 3 — [Prioritas] Implementasi kebijakan pengembalian dana.** Periksa halaman S&K, FAQ, dan informasi layanan yang relevan. Selaraskan penjelasan kondisi refund, dasar perhitungan, tahapan progres, kompensasi, serta target waktu sesuai dokumen. Pastikan rumus dan simulasi konsisten sebelum dipublikasikan.
  Spesifikasi: [KEBIJAKAN PENGEMBALIAN DANA (REFUND) NFSHARK.md](./KEBIJAKAN%20PENGEMBALIAN%20DANA%20(REFUND)%20NFSHARK.md)
  Catatan hambatan (2026-11-26): rumus menghasilkan Rp300.000 pada progres 5% (D=Rp300.000; P=0,05), sedangkan tabel simulasi mencantumkan Rp285.000. Diperlukan keputusan apakah rumus atau nilai simulasi 5% yang menjadi acuan sebelum kebijakan refund diterapkan.

- [ ] **Tugas 4 — [Sedang] Implementasi persetujuan publikasi portofolio.** Periksa formulir brief, alur penyerahan, dan halaman portofolio. Terapkan persetujuan terpisah untuk tampilan website, nama proyek/bisnis, dan tautan publik; jangan publikasikan komponen yang belum diizinkan.
  Spesifikasi: [KEBIJAKAN PUBLIKASI PORTOFOLIO NFSHARK.md](./KEBIJAKAN%20PUBLIKASI%20PORTOFOLIO%20NFSHARK.md)

- [ ] **Tugas 6 — [Sedang] Dokumentasi tanggal publikasi dan daftar perubahan S&K.** Periksa halaman S&K dan halaman `daftar-perubahan-S&K.html` (atau struktur aktual yang menggantikannya). Terapkan tanggal publikasi, perhitungan tanggal efektif setelah 7 hari kalender, ringkasan bagian yang berubah, serta pemberitahuan perubahan sesuai kategorinya. Jangan membuat tanggal publikasi historis atau menyatakan perubahan berlaku tanpa dasar.
  Spesifikasi: [Tanggal Publikasi dan Dokumentasi Perubahan S&K NFShark.md](./Tanggal%20Publikasi%20dan%20Dokumentasi%20Perubahan%20S%26K%20NFShark.md)

- [ ] **Tugas 10 — [Prioritas] Penyelarasan nama paket terbaru di seluruh bagian website aktif.** Gunakan nama resmi **Ringan, Populer, Premium, dan Custom**. Periksa sumber data, fallback JavaScript, formulir Brief, FAQ, teks, selector CSS, metadata, dan pesan otomatis. Jadikan `data/packages.json` sebagai sumber data utama; jangan menganggap data proposal/portofolio atau arsip sebagai sumber aktif tanpa verifikasi. Selaraskan referensi aktif tanpa mengubah harga, fitur, estimasi, atau ketentuan. Referensi lama di `history/` boleh dipertahankan sebagai arsip.
  Spesifikasi: [Penyelarasan Nama Paket Website NFShark.md](./Penyelarasan%20Nama%20Paket%20Website%20NFShark.md)

- [ ] **Tugas 12 — [Prioritas] Membuat halaman Harga Langganan Pemeliharaan Website tersendiri.** Buat halaman setelah Tugas 7 selesai dan gunakan header/footer aktual dari halaman Paket Website setelah Tugas 9 tersedia. Tampilkan perbandingan layanan Ringan, Populer, Premium, dan Custom. Untuk Custom, tampilkan keterangan ramah pelanggan bahwa tarif langganan mengikuti harga pembuatan website: sampai dengan Rp100.000 mengikuti Ringan (Rp10.000/bulan); di atas Rp100.000 sampai dengan Rp225.000 mengikuti Populer (Rp15.000/bulan); di atas Rp225.000 sampai dengan Rp500.000 mengikuti Premium (Rp20.000/bulan); di atas Rp500.000 dibahas dan disepakati langsung dengan NFShark. Jelaskan bahwa cakupan dan batas pekerjaan Custom tetap berdasarkan kesepakatan. Jika pelanggan masih bingung, sarankan secara opsional bertanya kepada AI seperti Google Gemini atau ChatGPT untuk penjelasan tambahan, serta arahkan ke kanal bantuan NFShark untuk konfirmasi tarif dan cakupan. Ikuti seluruh tarif, kuota, ketentuan, batas teknis, dan verifikasi pada spesifikasi serta kebijakan. Setelah halaman siap, hubungkan item Langganan Website pada navigasi Jelajahi ke URL aktual.
  Spesifikasi: [Rancangan Halaman Langganan Website NFShark.md](./Rancangan%20Halaman%20Langganan%20Website%20NFShark.md)

- [ ] **Tugas 11 — [Prioritas] Penataan ulang direktori halaman dan aset pendukung website.** Kelompokkan halaman HTML aktif ke direktori berdasarkan jenis/fiturnya dan pindahkan CSS/JavaScript khusus halaman ke direktori halaman terkait. Rencana awal mencakup `paket/` untuk layanan paket dan `langganan/` untuk layanan langganan. Tugas ini baru dikerjakan setelah Tugas 9 dan Tugas 12 selesai serta URL keduanya sudah final; pertahankan URL publik dan aset bersama.
  Spesifikasi: [Rancangan Penataan Direktori Website NFShark.md](./Rancangan%20Penataan%20Direktori%20Website%20NFShark.md)

## Sudah Dikerjakan

- [x] **Perbaikan langsung — Konsistensi tata letak section Layanan pada mobile.** Selesai pada 2026-11-25. Memperbaiki lebar kontainer agar memiliki jarak tepi yang konsisten dan memperkuat aturan grid/accordion pada breakpoint mobile. Perubahan ini tidak menandai Tugas 7, 9, atau 12 sebagai selesai.


- [x] **Tugas 2 — [Prioritas] Implementasi kebijakan pemeliharaan bulanan.** Selesai pada 2026-11-25. FAQ kini menjelaskan tarif, cakupan, kuota permintaan, waktu respons, pembayaran dan penghentian langganan, jadwal pemberitahuan, serta keterbatasan hosting. Informasi paket homepage mengarahkan pengunjung ke FAQ Pemeliharaan. Masa pemeliharaan gratis tetap berlaku terlebih dahulu; tidak ada klaim otomasi pembayaran, notifikasi, atau penonaktifan hosting. Syarat dan Ketentuan tidak diubah karena penyelarasan formalnya tercatat pada Tugas 5 dan 6.

- [x] **Tugas 5 — [Prioritas] Penyelarasan aturan perubahan S&K.** Selesai pada 2026-11-26. Dokumen Masalah 5 dan bagian 24 pada `persetujuan.md` diselaraskan dengan keputusan terbaru Masalah 7: tanpa nomor versi, tanggal publikasi sebagai patokan, masa transisi 7 hari kalender (tanggal publikasi dihitung sebagai hari pertama), tanggal efektif pada hari ke-8, pengumuman perubahan kecil, serta pemberitahuan langsung dan persetujuan untuk perubahan besar yang berdampak pada hak atau kewajiban pelanggan. Pembaruan bagian 24 dipublikasikan 26 November 2026 dan dijadwalkan efektif 3 Desember 2026. Halaman daftar perubahan tetap menjadi ruang lingkup Tugas 6.

- [x] **Tugas 1 — [Sedang] Keselarasan identitas dan kontak NFShark.** Selesai pada 2026-11-23. Alamat Gmail, pembagian kanal komunikasi, serta pesan otomatis konsultasi, pemesanan, brief, dan revisi diselaraskan. Nomor WhatsApp yang telah ada dan akun Instagram @shark.studio22 dipertahankan tanpa perubahan.

- [x] **Tugas 8 — [Sedang] Pemisahan tampilan S&K pelanggan dan dokumen Markdown untuk AI.** Selesai pada 2026-11-24. `persetujuan.md` menjadi sumber isi tunggal; build menghasilkan seluruh isi sebagai HTML semantik langsung pada `persetujuan.html` dan rute `/persetujuan/` tanpa fetch runtime, serta menyalin Markdown ke root publik. `llms.txt` memuat kedua URL dan menjelaskan bahwa keduanya bersifat publik. Aturan wildcard robots tetap mengizinkan crawler; sitemap tetap memuat halaman HTML tanpa Markdown. Build, kesamaan teks, paket deployment, dan deployment GitHub Pages berhasil diverifikasi. URL live tidak dapat diperiksa langsung melalui alat web pada sesi ini; pengindeksan atau penggunaan oleh Gemini tidak diklaim. Isi kebijakan tidak diubah.

## Aturan pembaruan daftar
- Setelah satu tugas benar-benar selesai dan diverifikasi, pindahkan hanya tugas tersebut dari **Belum Dikerjakan** ke **Sudah Dikerjakan**.
- Tambahkan tanggal penyelesaian dan ringkasan singkat pada entri di **Sudah Dikerjakan**.
- Jika tugas terhambat atau belum tuntas, biarkan di **Belum Dikerjakan** dan tambahkan catatan hambatan.
- Jangan menghapus riwayat tugas yang sudah dikerjakan.
