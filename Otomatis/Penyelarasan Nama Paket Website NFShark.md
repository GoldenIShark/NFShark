# Penyelarasan Nama Paket Website NFShark

## Nama paket yang berlaku
Nama resmi paket website NFShark saat ini adalah:
1. **Ringan**
2. **Populer**
3. **Premium**
4. **Custom**

Nama **Basic** dan **Popular** adalah istilah lama untuk paket aktif dan tidak boleh digunakan lagi pada tampilan, formulir, pesan otomatis, atau dokumentasi layanan aktif. Gunakan **Ringan** sebagai pengganti Basic dan **Populer** sebagai pengganti Popular. Nama Premium dan Custom tetap.

## Sumber data utama
- `data/packages.json` adalah sumber data utama untuk paket website NFShark yang aktif.
- Jangan mengambil nama, harga, fitur, atau ketentuan paket dari `portofolio/proposal/data/packages.json` atau data demo/proposal lain tanpa memastikan konteksnya. File tersebut dapat merupakan data proyek contoh dan bukan sumber resmi layanan NFShark.
- Periksa fallback JavaScript. Jika pemuatan JSON gagal, nama paket dan pesan status fallback tetap harus menggunakan nama resmi terbaru dan tidak boleh menampilkan informasi lama.
- Jangan mengubah harga, fitur, estimasi, durasi pemeliharaan, atau ketentuan saat tugas ini hanya menyelaraskan nama. Perubahan substansi memerlukan keputusan terpisah.

## Cakupan pemeriksaan
Periksa semua halaman dan aset aktif, termasuk namun tidak terbatas pada:
- Data paket utama dan komponen yang merender paket.
- Fallback/error state JavaScript.
- Formulir Brief dan nilai pilihan paket serta query parameter.
- FAQ, halaman informasi, teks penjualan, dan pesan WhatsApp/email otomatis.
- Selector/kelas CSS yang terikat pada nama paket.
- Metadata, structured data, sitemap/llms bila memuat nama paket.
- Dokumentasi operasional yang menjelaskan paket.
- Referensi lintas halaman dan pengujian/workflow yang mengharuskan nama tertentu.

## Arsip dan proyek contoh
- Jangan mengubah catatan historis di `history/` hanya untuk mengganti istilah, karena arsip harus tetap merepresentasikan versi pada masanya.
- Jangan mengubah nama paket yang terdapat di website portofolio klien atau proposal demo apabila itu memang nama produk milik contoh tersebut.
- Catat setiap temuan lama yang sengaja dipertahankan beserta alasan dan pastikan file tersebut tidak menjadi sumber untuk halaman layanan NFShark aktif.

## Verifikasi wajib
1. Cari istilah lama `Basic` dan `Popular` di seluruh repository.
2. Klasifikasikan temuan menjadi halaman aktif, data aktif, proyek contoh/portofolio, dokumentasi, dan arsip.
3. Pastikan semua referensi aktif menggunakan Ringan, Populer, Premium, dan Custom secara konsisten.
4. Uji pemilihan paket pada Brief dan pesan otomatis untuk tiap paket.
5. Uji kondisi fallback ketika `data/packages.json` gagal dimuat.
6. Pastikan nama kelas CSS dan selector cocok dengan data yang dirender.
7. Jalankan pemeriksaan JSON, JavaScript, tautan, dan workflow yang relevan.
8. Catat temuan yang tetap dipertahankan di arsip/proyek contoh; jangan menyatakan semua istilah lama hilang jika memang sengaja disimpan.

## Batasan
- Jangan mengubah harga, fitur, cakupan, estimasi, durasi pemeliharaan, atau syarat layanan.
- Jangan menghapus data proyek contoh dan arsip.
- Jangan membuat alias nama paket yang membingungkan pelanggan.
- Ikuti `Otomatis/Intruksi.md` dan catat hasil di `Otomatis/kerjaan.md`.
