# Instruksi Kerja Harian — Direktori Otomatis

## Tujuan
Jalankan pekerjaan repository NFShark secara bertahap berdasarkan daftar tugas di `kerjaan.md`. Instruksi ini menjadi titik awal wajib setiap kali pekerjaan harian dimulai.

## Tingkat pengerjaan
Setiap tugas menggunakan salah satu dari tiga tingkat berikut. Tingkat ini menentukan urutan pemilihan dan kehati-hatian pengerjaan, bukan janji durasi.

| Tingkat | Kriteria | Perlakuan |
|---|---|---|
| **Biasa** | Perubahan kecil, ruang lingkup jelas, risiko rendah, dan tidak mengubah alur utama atau data pelanggan. | Dapat dipilih setelah tugas tingkat Prioritas dan Sedang yang siap dikerjakan. Tetap wajib diuji sesuai perubahan. |
| **Sedang** | Melibatkan beberapa file/halaman, perubahan interaksi atau tampilan lintas perangkat, atau membutuhkan koordinasi beberapa komponen. | Dikerjakan setelah tugas Prioritas yang siap. Periksa dampak lintas halaman dan dependensi sebelum mulai. |
| **Prioritas** | Berkaitan dengan keamanan/privasi, data, ketentuan pelanggan, informasi harga/layanan yang keliru, tautan atau alur pemesanan utama, kerusakan publik, atau penghambat pekerjaan lain. | Didahulukan jika seluruh dependensi dan informasi sudah tersedia. Jika terhambat, catat hambatan dan pilih tugas siap berikutnya sesuai aturan satu tugas. |

### Aturan penentuan tingkat dan pemilihan
- Setiap tugas di `kerjaan.md` wajib mencantumkan satu tingkat: **Biasa**, **Sedang**, atau **Prioritas**.
- Pilih satu tugas siap dengan urutan tingkat **Prioritas → Sedang → Biasa**.
- Tugas yang belum memenuhi dependensi, menunggu keputusan pemilik, atau tidak dapat diverifikasi tidak dianggap siap; jangan memaksakan pengerjaannya.
- Jika beberapa tugas dalam tingkat yang sama siap, pilih berdasarkan dependensi, dampak terhadap pelanggan/website, dan urutan antrean. Jangan mengabaikan tugas yang lebih awal tanpa alasan yang dicatat.
- Tingkat dapat diubah hanya jika ruang lingkup atau risiko tugas berubah; catat alasan perubahan pada daftar tugas.
- Tingkat pengerjaan bukan izin untuk memperluas ruang lingkup. Batas satu tugas per hari tetap berlaku.

## Pemisahan pekerjaan harian dan audit mingguan
- Daftar `Otomatis/kerjaan.md` hanya untuk pekerjaan implementasi harian; tetap maksimal satu tugas per hari.
- Audit berkala **Audit Repository NFShark** dijalankan melalui jadwal otomatis mingguan tersendiri, bukan dipilih sebagai tugas harian. Ikuti `Otomatis/Daftar Pemeriksaan Mingguan Audit Repository NFShark.md`.
- Audit mingguan bersifat read-only untuk seluruh repository, dengan pengecualian terbatas: hanya `llms.txt`, `sitemap.txt`, dan `robots.txt` yang boleh disinkronkan jika ditemukan ketidaksesuaian terverifikasi. Tidak boleh mengubah file website atau file lain dalam rangka sinkronisasi.

## Urutan wajib
1. Baca file ini (`Otomatis/Intruksi.md`) sampai selesai.
2. Baca seluruh isi `Otomatis/kerjaan.md`.
3. Periksa bagian **Belum Dikerjakan** dan **Sudah Dikerjakan**.
4. Periksa tingkat pengerjaan dan dependensi setiap tugas. Pilih tepat **satu tugas siap** berdasarkan urutan **Prioritas → Sedang → Biasa**. Ikuti tautan/nama file spesifikasi yang tercantum pada tugas.
5. Baca file spesifikasi yang dirujuk sampai selesai. Jika file tersebut mengarahkan ke file lain, ikuti rujukan itu dan baca seluruh instruksi terkait sebelum mengubah apa pun.
6. Telusuri file website/repository yang relevan untuk memahami kondisi saat ini. Jangan mengasumsikan implementasi belum ada hanya karena dokumen menyebut rancangan; periksa kode terlebih dahulu.
7. Kerjakan hanya ruang lingkup tugas terpilih dan patuhi semua instruksi repository yang relevan. Jangan mengerjakan tugas lain pada hari yang sama.
8. Uji atau verifikasi hasil sesuai jenis perubahan. Jika tugas tidak dapat diselesaikan karena informasi, akses, atau keputusan penting belum tersedia, jangan menebak dan jangan tandai selesai.
9. Setelah berhasil, pindahkan tugas dari **Belum Dikerjakan** ke **Sudah Dikerjakan** di `kerjaan.md`. Tambahkan ringkasan hasil dan tanggal penyelesaian. Catat file yang diubah, dibuat, atau dihapus sesuai aturan dokumentasi repository.
10. Kirim laporan di chat setelah pekerjaan selesai. Laporan harus menyebut tugas, hasil, verifikasi, dan daftar file yang diubah/dibuat/dihapus.

## Jika tidak ada tugas
Jika bagian **Belum Dikerjakan** kosong:
- Jangan membuat pekerjaan baru sendiri.
- Jangan mengubah file website atau kebijakan.
- Jangan mengulang pekerjaan yang sudah selesai.
- Kirim pesan: **"Pemeriksaan pekerjaan selesai. Tidak ada tugas untuk melakukan perubahan yang diperintahkan di file kerjaan.md. Saya beristirahat."**

## Jika tugas terhambat
- Jangan menandai tugas sebagai selesai.
- Biarkan tugas tetap berada di **Belum Dikerjakan** dan tambahkan catatan hambatan singkat.
- Laporkan hambatan di chat dan sebutkan keputusan/informasi yang benar-benar diperlukan.

## Batasan dan keselamatan
- Satu tugas per hari; jangan mengambil tugas berikutnya setelah menyelesaikan satu tugas.
- Dokumen dalam direktori `Otomatis` adalah spesifikasi pekerjaan. Ikuti dokumen yang dirujuk oleh tugas, termasuk rujukan berantai.
- Jangan mengubah harga, identitas, kontak yang belum ditentukan, kebijakan pelanggan, atau hak/kewajiban pelanggan berdasarkan asumsi.
- Jangan menghapus file atau fitur penting tanpa dasar instruksi yang jelas.
- Pertahankan struktur, gaya, dan pendekatan teknis website yang sudah digunakan.
- Jika ada pertentangan antar dokumen, cari keputusan yang paling baru dan terdokumentasi. Jangan diam-diam menerapkan aturan yang bertentangan; catat konflik dan biarkan tugas tertunda bila dampaknya material.
- Jangan mengklaim perubahan telah dipublikasikan atau deployment berhasil tanpa verifikasi.
- Jangan membuat commit atau mengubah branch selain `main`, kecuali instruksi repository secara eksplisit mengharuskannya.

## Pencatatan
Setiap pekerjaan yang selesai harus dicatat di `kerjaan.md` dengan tanggal dan ringkasan. Laporan chat harus konsisten dengan perubahan aktual pada repository.
