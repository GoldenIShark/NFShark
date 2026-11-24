# Rancangan Halaman Harga Langganan Pemeliharaan Website NFShark

## Penamaan halaman
- Judul/nama halaman publik: **Harga Langganan Pemeliharaan Website**.
- Istilah singkat dalam navigasi boleh **Langganan Website**, tetapi isi halaman harus menegaskan bahwa ini adalah biaya pemeliharaan website, bukan harga pembuatan website.
- Hindari frasa ambigu seperti “Langganan Harga Paket”.

## Status dan tujuan
Dokumen ini memuat rencana tampilan awal halaman Langganan Website. Fokus tahap pertama adalah struktur yang jelas dan konsisten dengan halaman Paket Website; penyempurnaan visual dapat dilakukan kemudian tanpa mengubah isi kebijakan.
Halaman ini menjadi tujuan menu Langganan Website pada navigasi Jelajahi, bukan sekadar anchor ke homepage.

## Dependensi
- Implementasi halaman tetap menunggu Tugas 7 (navigasi Jelajahi) selesai dan diverifikasi.
- Halaman Paket Website (Tugas 9) juga direncanakan memiliki header/footer acuan yang sama. Saat Tugas 12 dikerjakan, periksa hasil aktual Tugas 9 dan gunakan komponen serta gaya yang sama, bukan menebak atau membuat versi berbeda.
- Gunakan `Otomatis/KEBIJAKAN LAYANAN PEMELIHARAAN BULANAN NFSHARK.md` sebagai sumber isi layanan dan tarif.
- Jangan mengubah tarif, durasi, cakupan, batas permintaan, waktu respons, atau ketentuan tanpa keputusan baru yang terdokumentasi.

## Rencana tampilan awal

### 1. Header
- Samakan tampilan dan perilaku header dengan halaman Paket Website.
- Header hanya berisi satu tombol/tautan **⟨ Kembali ke halaman**, di sisi kiri dan sejajar vertikal di tengah.
- Tidak menampilkan logo, nama merek, navbar, atau elemen header lain.
- Tombol kembali menuju halaman studio/utama yang menjadi asal navigasi; gunakan URL aktual setelah Tugas 7 diperiksa.
- Pertahankan ukuran target sentuh, fokus keyboard yang terlihat, dan label aksesibel.

### 2. Pengantar
- Judul utama: **Langganan Website**.
- Jelaskan secara ringkas bahwa layanan ini menyediakan pemeliharaan website pelanggan setelah masa pemeliharaan gratis dari paket pembuatan website berakhir.
- Hindari klaim bahwa layanan berjalan otomatis atau bahwa seluruh gangguan selalu selesai dalam batas waktu respons.

### 3. Tabel paket langganan
Tampilkan tabel perbandingan empat tingkat layanan. Nama tingkat mengikuti paket website yang dimiliki pelanggan: **Ringan, Populer, Premium, dan Custom**. Tarif dibedakan berdasarkan tingkat layanan; Custom mengikuti cakupan dan kesepakatan.

| Fitur layanan | Ringan | Populer | Premium | Custom |
|---|---|---|---|---|
| Tarif | Rp10.000/bulan | Rp15.000/bulan | Rp20.000/bulan | Sesuai kesepakatan |
| Pemeriksaan website berkala | Termasuk | Termasuk | Termasuk | Sesuai kesepakatan |
| Perbaikan bug ringan | Termasuk | Termasuk | Termasuk | Sesuai kesepakatan |
| Perbaikan tautan/tampilan bermasalah | Termasuk | Termasuk | Termasuk | Sesuai kesepakatan |
| Permintaan pekerjaan yang termasuk langganan | Maks. 1 permintaan/bulan | Maks. 3 permintaan/bulan | Maks. 5 permintaan/bulan | Sesuai kesepakatan |
| Optimasi performa | — | — | Termasuk | Sesuai kesepakatan |
| Pemeriksaan responsivitas dan kompatibilitas | — | — | Termasuk | Sesuai kesepakatan |

Catatan wajib yang menyertai tabel:
- Tarif langganan pemeliharaan adalah Rp10.000/bulan untuk Ringan, Rp15.000/bulan untuk Populer, dan Rp20.000/bulan untuk Premium. Tarif Custom ditentukan berdasarkan cakupan layanan dan kesepakatan.
- Biaya langganan pemeliharaan terpisah dari harga pembuatan website. Perubahan harga pembuatan website tidak otomatis mengubah tarif langganan.
- Batas total permintaan per bulan adalah Ringan 1, Populer 3, dan Premium 5. Premium mewarisi seluruh layanan Populer, tetapi kuotanya tetap 5 permintaan total, bukan penjumlahan kuota antarlevel.
- Permintaan perubahan website di luar kuota atau di luar cakupan paket harus dikonsultasikan langsung kepada NFShark. Harga dan ruang lingkup pekerjaan tambahan dibahas serta disepakati sebelum pengerjaan.
- Perbaikan bug dan masalah teknis yang termasuk cakupan pemeliharaan tidak mengurangi kuota permintaan.
- Cakupan, batas pekerjaan, dan tarif Custom ditentukan melalui kesepakatan dengan pelanggan.
- Jangan menyamakan paket pembuatan website dengan paket langganan terpisah. Kolom di atas menunjukkan tingkat pemeliharaan yang mengikuti paket website pelanggan.

### 4. Ketentuan langganan
Tampilkan setelah tabel dalam bagian ringkas yang mudah dipindai:
- Masa pemeliharaan gratis dari paket pembuatan website berlaku terlebih dahulu.
- Pelanggan dapat memilih durasi langganan sampai bulan tertentu; kebijakan tidak menetapkan satu durasi tetap.
- Pembayaran dilakukan di awal periode.
- Langganan tidak diperpanjang otomatis.
- Pelanggan bebas berhenti setelah masa langganan berakhir tanpa biaya pembatalan.
- Respons awal maksimal 1 × 24 jam pada hari kerja. Respons awal berarti konfirmasi penerimaan, informasi awal masalah, pemeriksaan kesesuaian cakupan, dan perkiraan pengerjaan bila diperlukan; bukan jaminan pekerjaan selesai dalam 24 jam.
- Permintaan pada akhir pekan atau hari libur mulai dihitung pada hari kerja berikutnya.
- Pengerjaan menyesuaikan tingkat kesulitan dan antrean. Masalah kritis seperti website tidak dapat diakses atau fungsi utama rusak mendapat prioritas.
- Pemberitahuan masa berakhir: saat langganan berakhir, satu bulan setelahnya, dan dua bulan setelahnya.
- Setelah tiga bulan tidak diperpanjang, website dapat dinonaktifkan sementara. Sampaikan sebagai ketentuan yang pelaksanaannya bergantung pada sistem hosting tiap website, bukan sebagai otomatisasi yang sudah tersedia. File dan hasil pekerjaan tidak langsung dihapus; website dapat ditampilkan kembali setelah langganan diaktifkan sesuai ketentuan NFShark.

### 5. Cara berlangganan dan bantuan
- Jelaskan hanya alur konsultasi, konfirmasi cakupan, pembayaran, dan aktivasi yang benar-benar telah ditetapkan atau dapat dilakukan.
- Jangan menambahkan checkout, pembayaran otomatis, dashboard pelanggan, login, formulir baru, atau otomasi server.
- Tautkan FAQ/bantuan hanya jika tujuan dan URL aktualnya tersedia serta telah diperiksa. Jika belum tersedia, jangan membuat tautan placeholder di halaman publik.

### 6. Footer
- Samakan struktur, gaya, isi, dan perilaku footer dengan halaman Paket Website yang dibuat pada Tugas 9.
- Gunakan tautan footer yang benar-benar tersedia dan verifikasi URL-nya.
- Jangan menambahkan tautan kebijakan atau kanal yang belum tersedia.

## Arah visual dan responsif
- Kategori halaman: halaman informasi layanan untuk bisnis jasa.
- Pertahankan identitas NFShark: hijau rumput, biru laut, dan putih; tanpa gradient kecuali diminta khusus.
- Gunakan sistem tipografi, tombol, border, radius, jarak, dan latar yang sama dengan halaman Paket Website.
- Utamakan tabel yang terbaca di layar kecil. Pada mobile, pilih pola responsif yang paling sesuai dengan implementasi tabel halaman Paket Website (misalnya scroll tabel terkontrol atau susunan alternatif yang tetap mempertahankan seluruh informasi); jangan memaksakan tabel sempit hingga teks sulit dibaca.
- Tablet dan desktop menampilkan perbandingan kolom secara jelas dengan lebar konten yang nyaman.
- Tidak memerlukan animasi khusus. Hormati prefers-reduced-motion bila komponen bersama memiliki gerakan.
- Pastikan keyboard, fokus, kontras, heading semantik, dan target sentuh tetap memadai.

## Arahan implementasi
- Gunakan HTML, CSS, dan JavaScript statis; jangan menambahkan backend, login pelanggan, pembayaran otomatis, dashboard, atau otomasi server.
- Gunakan CSS umum NFShark; CSS/JS khusus halaman dipisahkan dari aset bersama mengikuti struktur repository saat tugas dikerjakan.
- Periksa apakah data kebijakan memiliki sumber data terstruktur yang sudah digunakan. Hindari duplikasi yang dapat membuat angka dan cakupan berbeda.
- Jangan mengubah isi paket pembuatan website Ringan, Populer, Premium, dan Custom.
- Setelah halaman selesai, hubungkan item Langganan Website pada navigasi Jelajahi ke URL aktual.
- URL bersih harus mengikuti konvensi GitHub Pages dan konfigurasi repository yang berlaku saat implementasi.

## Verifikasi
- Uji tampilan pada viewport 320, 375, 390, 414, 768, 1024, dan 1280 px atau lebih; catat ukuran yang benar-benar diuji.
- Uji tautan kembali dan tautan pendukung, keyboard, fokus, target sentuh, serta reduced motion.
- Cocokkan tarif, durasi, cakupan, batas permintaan, waktu respons, jadwal pemberitahuan, dan ketentuan penonaktifan dengan dokumen kebijakan.
- Pastikan tidak ada klaim bahwa penonaktifan/pengaktifan berjalan otomatis sebelum sistem hosting mendukungnya.
- Jalankan build/workflow dan pemeriksaan tautan serta aset yang relevan.
- Catat file dan hasil verifikasi di `Otomatis/kerjaan.md` setelah implementasi benar-benar selesai.

## Batasan
- Jangan mulai implementasi sebelum Tugas 7 selesai dan diverifikasi.
- Gunakan halaman Paket Website Tugas 9 sebagai acuan header/footer setelah hasilnya tersedia.
- Rencana tampilan ini adalah rancangan awal; peningkatan estetika berikutnya tidak boleh mengubah substansi kebijakan tanpa persetujuan.
- Ikuti `AGENTS.md`, agent Website Developer, skills yang relevan, dan `Otomatis/Intruksi.md`.