# Daftar Pemeriksaan Mingguan — Audit Repository NFShark

## Identitas dan jadwal
- Repository: `GoldenIShark/NFShark`
- Branch: `main`
- Frekuensi: setiap Sabtu, sekitar pukul 14.00–15.00 WIB (jadwal otomasi menggunakan waktu fleksibel).
- Tujuan: audit kualitas repository dan memastikan informasi website selaras dengan tiga file crawler.

## A. Persiapan dan cakupan
- [ ] Pastikan repository dan branch `main` dapat diakses; catat commit SHA yang diperiksa.
- [ ] Baca instruksi repository yang berlaku, termasuk `AGENTS.md`, instruksi khusus, dan dokumen terkait.
- [ ] Tinjau seluruh file yang relevan, perubahan sejak audit sebelumnya, konfigurasi build/deployment, serta halaman publik.
- [ ] Bedakan sumber informasi resmi dari rancangan, catatan lama, arsip, atau fitur yang belum diterapkan.

## B. Audit kualitas website dan repository
- [ ] Fungsi dan bug: periksa JavaScript, navigasi, formulir, interaksi, tautan internal, dan perilaku halaman.
- [ ] Konten: periksa typo, inkonsistensi istilah/identitas, informasi kedaluwarsa, harga, layanan, tanggal, dan kebijakan.
- [ ] Tautan dan aset: periksa tautan internal/eksternal, path aset, gambar, ikon, font, dan lisensi/atribusi yang diwajibkan.
- [ ] Responsivitas: periksa layout mobile, tablet, desktop, overflow, ukuran teks, dan elemen interaktif.
- [ ] Aksesibilitas dasar: periksa struktur heading, label formulir, alt text, fokus keyboard, kontras, dan semantik.
- [ ] Struktur dan konfigurasi: periksa path file, duplikasi, konfigurasi build, workflow, dependensi, dan file wajib.
- [ ] Keamanan dan privasi: cari API key, token, password, kredensial, private key, rahasia konfigurasi, data pribadi, atau identitas yang tidak semestinya dipublikasikan. Jangan menyalin nilai sensitif ke laporan. Bedakan kontak bisnis resmi yang memang dipublikasikan dari kebocoran.

## C. Sinkronisasi tiga file crawler (wajib setiap audit)

### 1. `llms.txt`
- [ ] Cocokkan nama/identitas NFShark, deskripsi layanan, fokus teknologi, dan batasan teknis dengan website serta implementasi aktual.
- [ ] Cocokkan daftar layanan, paket/fitur yang benar-benar tersedia, alur brief/pemesanan, pemeliharaan, dan status fitur.
- [ ] Cocokkan tanggal rencana operasional, informasi penting, kontak resmi, dan tautan halaman dengan sumber terbaru yang sah.
- [ ] Pastikan tidak ada klaim backend, database, autentikasi, API, server, dashboard, pembayaran otomatis, atau fitur lain yang belum tersedia/disepakati.
- [ ] Pastikan semua URL halaman dalam dokumen masih benar dan mengarah ke halaman publik yang tepat.

### 2. `sitemap.txt`
- [ ] Inventarisasi halaman HTML publik yang benar-benar tersedia pada branch `main` dan domain produksi.
- [ ] Pastikan setiap URL kanonis yang layak diindeks tercantum satu kali.
- [ ] Periksa URL yang hilang, duplikat, salah eja, salah domain, path usang, redirect, dan halaman yang tidak semestinya diindeks.
- [ ] Jangan masukkan file aset, halaman error, halaman uji, halaman privat, atau halaman yang tidak dimaksudkan untuk indeks mesin pencari.
- [ ] Gunakan URL absolut HTTPS pada domain kanonis NFShark.

### 3. `robots.txt`
- [ ] Periksa aturan User-agent, Allow/Disallow, dan pastikan tidak ada aturan yang tanpa sengaja menghalangi halaman publik penting.
- [ ] Pastikan baris Sitemap menunjuk tepat ke `https://nfshark.web.id/sitemap.txt`.
- [ ] Pastikan robots.txt tidak digunakan sebagai pengganti autentikasi/keamanan dan tidak mengungkap path privat yang tidak perlu.
- [ ] Pastikan aturan perayapan konsisten dengan halaman yang dicantumkan dalam sitemap.

### 4. Keputusan dan batas sinkronisasi
- [ ] Gunakan halaman website dan sumber resmi repository yang sudah diterapkan sebagai sumber kebenaran; jangan menyimpulkan fitur hanya dari nama file atau rancangan.
- [ ] Jika ditemukan ketidaksesuaian yang dapat dibuktikan, perbaiki hanya `llms.txt`, `sitemap.txt`, dan/atau `robots.txt`.
- [ ] Jangan mengubah halaman website, kebijakan pelanggan, harga, konfigurasi deployment, atau file repository lain dalam tahap sinkronisasi.
- [ ] Jika sumber kebenaran bertentangan atau tidak jelas, jangan menebak; catat sebagai keputusan yang diperlukan.
- [ ] Catat perubahan per file dan alasan spesifiknya.

## D. Verifikasi
- [ ] Validasi format dan isi ketiga file setelah perubahan.
- [ ] Bandingkan ulang URL pada sitemap dengan halaman aktual.
- [ ] Periksa referensi Sitemap pada robots.txt.
- [ ] Periksa apakah pipeline build menyalin ketiga file ke root artefak GitHub Pages dan memiliki pemeriksaan keberadaan file.
- [ ] Jika ada perubahan, commit hanya file crawler yang berubah ke branch `main` setelah verifikasi. Jangan memasukkan file audit umum ke commit.
- [ ] Jangan menyatakan perubahan sudah live sebelum workflow deployment sukses dan URL publik diperiksa.

## E. Format laporan
- [ ] Ringkasan kondisi dan commit SHA yang diperiksa.
- [ ] Daftar area yang telah diperiksa.
- [ ] Temuan terkonfirmasi: path/baris, bukti yang disamarkan, dampak, prioritas (kritis/tinggi/sedang/rendah), dan mitigasi.
- [ ] Hal yang membutuhkan pemeriksaan manual atau keputusan pemilik.
- [ ] Hasil sinkronisasi per file: tidak berubah / diperbarui / tertunda, beserta alasannya.
- [ ] Commit dan status workflow/deployment bila ada perubahan.
- [ ] Jika tidak ada temuan, jelaskan cakupan pemeriksaan dan nyatakan tidak ditemukan masalah; jangan hanya menyebut “aman” tanpa bukti cakupan.

## Batasan
Audit umum tetap read-only. Satu-satunya pengecualian adalah sinkronisasi terbatas pada tiga file crawler di atas. Jangan pernah menampilkan nilai rahasia dalam laporan, commit, atau log. Jangan mengarang hasil pemeriksaan yang tidak benar-benar dilakukan.
