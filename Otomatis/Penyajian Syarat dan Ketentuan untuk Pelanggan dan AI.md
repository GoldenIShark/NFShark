# Penyajian Syarat dan Ketentuan untuk Pelanggan dan AI

## Tujuan
Memisahkan cara penyajian dokumen Syarat dan Ketentuan NFShark:
- Pelanggan membaca ketentuan melalui halaman HTML yang dirancang sebagai tampilan resmi website.
- File `persetujuan.md` dipertahankan sebagai sumber teks Markdown yang mudah diproses crawler dan sistem AI, termasuk Gemini.

## Keputusan dan batasan penting
1. `persetujuan.md` tetap menjadi sumber isi utama (single source of truth). Jangan membuat salinan ketentuan yang dikelola manual secara terpisah.
2. `persetujuan.html` harus menampilkan isi ketentuan secara langsung di HTML hasil deployment (server/build-rendered), bukan hanya placeholder yang menunggu JavaScript mengambil Markdown.
3. File Markdown tidak perlu ditampilkan sebagai tautan atau menu pada antarmuka pelanggan. Jangan menambahkan tautan langsung ke `persetujuan.md` di halaman HTML.
4. File Markdown tetap berada pada URL publik agar crawler yang diizinkan dapat mengambilnya. URL publik tidak dapat dibuat eksklusif untuk Gemini: manusia atau crawler lain yang mengetahui alamatnya juga dapat membukanya. Jangan mengklaim akses eksklusif.
5. Jangan menambahkan `persetujuan.md` ke `sitemap.txt`; sitemap berisi URL halaman yang ditujukan sebagai halaman website untuk pengunjung dan mesin pencari. Referensi Markdown ditempatkan di `llms.txt`.
6. Jangan mengubah substansi, tanggal berlaku, tanggal pembaruan, hak, kewajiban, harga, cakupan layanan, atau kebijakan dalam `persetujuan.md` pada tugas teknis ini. Jika ditemukan konflik isi, catat dan minta keputusan terpisah.

## Ruang lingkup implementasi
1. Periksa seluruh isi `persetujuan.md`, `persetujuan.html`, CSS/JavaScript halaman, dan workflow GitHub Pages sebelum mengubah kode.
2. Pertahankan desain, struktur navigasi, gaya editorial, tombol, dan perilaku responsif halaman `persetujuan.html`.
3. Buat proses build yang menghasilkan konten HTML dari `persetujuan.md` secara otomatis. Pilih alat yang sudah tersedia atau dependensi build yang ringan dan dipatok versinya; jangan menambahkan pustaka runtime browser yang berat hanya untuk membaca Markdown.
4. Pastikan hasil build menyisipkan seluruh isi dokumen sebagai HTML semantik yang sudah dihasilkan sebelum deployment. Pertahankan hierarki heading, daftar bernomor/bersarang, tautan, paragraf, dan format tebal.
5. Sanitasi atau batasi konversi ke elemen Markdown yang diperlukan agar konten tidak dapat menyisipkan skrip atau markup berbahaya. Jangan menggunakan `innerHTML` terhadap konten tak tepercaya tanpa sanitasi.
6. Hapus ketergantungan utama halaman pada fetch runtime ke GitHub Raw, CDN Markdown, dan placeholder loading. Jika JavaScript tetap digunakan untuk peningkatan progresif, halaman harus tetap lengkap dan dapat dibaca tanpa JavaScript.
7. Pastikan proses build/deployment menyalin `persetujuan.md` ke root publik dengan nama yang sama, sehingga URL `https://nfshark.web.id/persetujuan.md` tersedia sebagai teks Markdown.
8. Perbarui `llms.txt` dengan entri khusus yang menjelaskan bahwa `persetujuan.html` adalah tampilan pelanggan dan `persetujuan.md` adalah representasi Markdown dari isi yang sama untuk pemrosesan mesin/AI. Cantumkan kedua URL secara jelas di bagian yang sesuai.
9. Periksa `robots.txt`. Pastikan Googlebot diizinkan mengakses halaman HTML dan Google-Extended tidak diblokir jika kebijakan yang dimaksud adalah mengizinkan penggunaan konten oleh sistem Gemini. Aturan wildcard `Allow: /` sudah mencakup crawler yang tidak dibatasi aturan lebih spesifik; jangan menambahkan aturan yang saling bertentangan.
10. Jangan menambahkan `persetujuan.md` ke `sitemap.txt`; pastikan `persetujuan.html` tetap tercantum.
11. Jangan memasang `noindex` atau aturan lain yang mencegah halaman HTML diindeks, kecuali ada keputusan baru dari pemilik website.
12. Jangan mengklaim bahwa robots.txt memberi akses eksklusif kepada Gemini atau menjamin dokumen pasti dipakai/dikutip Gemini. Jelaskan bahwa robots.txt menyatakan preferensi crawler, bukan kontrol akses; pengindeksan dan pemakaian aktual tetap ditentukan layanan Google.

## Verifikasi wajib
- Jalankan workflow/build yang relevan dan pastikan hasil build memuat seluruh konten S&K dalam HTML tanpa membutuhkan JavaScript.
- Bandingkan hasil teks hasil render HTML dengan isi `persetujuan.md`; pastikan tidak ada bagian, butir, atau tanggal yang hilang/berubah.
- Periksa bahwa `persetujuan.md` disalin ke paket deployment dan URL publik mengembalikan isi Markdown, bukan 404 atau HTML halaman fallback.
- Periksa URL `persetujuan.html` mengembalikan konten S&K langsung dalam source HTML.
- Periksa `llms.txt`, `robots.txt`, dan `sitemap.txt` konsisten dengan keputusan di atas.
- Uji halaman S&K pada desktop dan mobile serta pastikan navigasi dan gaya yang sudah ada tidak rusak.
- Bedakan hasil pemeriksaan source/build dari verifikasi URL live dan status indeks Google. Jangan mengklaim Gemini sudah membaca dokumen tanpa bukti yang dapat diamati.

## Batasan perubahan
- Fokus hanya pada penyajian dokumen S&K dan akses crawler yang terkait.
- Jangan mengubah isi kebijakan S&K, halaman lain, atau pengaturan crawler umum di luar kebutuhan tugas.
- Catat semua file yang diubah dan hasil verifikasi.
