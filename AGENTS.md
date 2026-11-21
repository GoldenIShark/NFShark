# Instruksi Pengembangan Website nfshark

## 1. Identitas Proyek

Nama proyek: nfshark
Domain: [https://nfshark.web.id](https://nfshark.web.id)

Proyek ini merupakan layanan pembuatan website yang berfokus pada desain antarmuka dan front-end.

## 2. Teknologi

- HTML untuk struktur halaman.
- CSS untuk desain dan responsivitas.
- JavaScript untuk interaksi.
- Git dan GitHub untuk version control.
- GitHub Pages sebagai hosting website statis.

Jangan menggunakan React, framework tambahan, backend, atau layanan server khusus tanpa persetujuan.

## 3. Standar Pengembangan

- Terapkan pendekatan mobile-first.
- Pastikan website responsif pada HP, tablet, dan desktop.
- Gunakan kode yang sederhana, ringan, dan mudah dipelihara.
- Pisahkan HTML, CSS, dan JavaScript jika sesuai dengan struktur proyek.
- Gunakan gambar WebP untuk aset gambar apabila sesuai.
- Hindari dependensi yang tidak diperlukan.
- Gunakan elemen HTML semantik dan perhatikan aksesibilitas.

## 4. Standar Desain

- Gunakan kombinasi hijau rumput, biru laut, dan putih.
- Hindari gradient kecuali diminta secara khusus.
- Pertahankan konsistensi komponen, tombol, input, border, dan jarak.
- Gunakan animasi seperlunya.
- Hindari loading animation atau scroll animation yang tidak diminta.
- Utamakan tampilan yang jelas, ringan, dan nyaman digunakan di perangkat mobile.

## 5. Aturan Sebelum Mengubah Kode

1. Periksa struktur repository dan file terkait terlebih dahulu.
2. Baca instruksi proyek yang tersedia.
3. Identifikasi dampak perubahan terhadap halaman lain.
4. Jangan menulis ulang file secara keseluruhan jika perubahan kecil sudah cukup.
5. Jangan menghapus fitur, aset, atau konfigurasi yang masih digunakan.
6. Jangan mengubah domain, konfigurasi deployment, atau struktur Git tanpa izin.
7. Jangan melakukan commit, push, atau merge tanpa instruksi.

## 6. Alur Kerja Agent

Untuk tugas yang memiliki dampak luas:

1. Analisis kebutuhan.
2. Periksa kode yang sudah ada.
3. Ajukan rencana perubahan.
4. Tunggu persetujuan jika perubahan besar atau berisiko.
5. Implementasikan perubahan.
6. Jalankan pemeriksaan yang tersedia.
7. Laporkan file yang diubah, hasil pengujian, dan masalah yang belum terselesaikan.

Untuk tugas kecil dan jelas, kerjakan langsung dengan tetap mengikuti aturan proyek.

## 7. Pelaporan

Setelah menyelesaikan tugas, jelaskan:

- Ringkasan perubahan.
- Daftar file yang diubah.
- Hasil pengujian.
- Risiko atau keterbatasan yang ditemukan.
- Langkah lanjutan jika diperlukan.

Jangan menyatakan pengujian berhasil apabila pengujian tersebut belum benar-benar dilakukan.

## 8. Prinsip Penulisan Kode

- Saat menulis kode, usahakan kode sesingkat, seefisien, dan serapi mungkin; hindari kode bertele‑tele, gunakan sintaks singkat, dan pertahankan keterbacaan.

## Riwayat perubahan (JSONL)

- Sumber ringkasan perubahan adalah `history/changes.jsonl`. Baca `history/README.md` untuk skema dan aturan lengkap.
- Sebelum pekerjaan yang berpotensi mengubah file, baca panduan lalu telusuri entri terbaru dan cari entri yang terkait dengan file/fitur sasaran. Tidak perlu membaca seluruh log: gunakan 20 entri terakhir dan pencarian berdasarkan path, ID, atau kata kunci bila tersedia.
- Setelah satu tugas/perubahan logis selesai, tambahkan **tepat satu baris JSON valid** untuk satu rangkaian perubahan tersebut. Satu baris dapat mencantumkan beberapa file yang berubah dalam tugas yang sama. Jangan membuat satu baris per file dan jangan memecah satu tugas menjadi banyak entri.
- Catat hanya perubahan yang benar-benar terjadi. Kelompokkan path ke `added`, `modified`, `deleted`, dan `renamed`; sertakan ringkasan, dampak, dan status verifikasi singkat. Jangan menyimpan dump diff, seluruh isi file, atau daftar command yang panjang.
- Jangan membuat log untuk tugas read-only atau jika tidak ada file yang berubah. Jangan mencatat rencana sebagai implementasi.
- Git commit/diff tetap menjadi sumber kebenaran untuk detail teknis. Jangan menyalin seluruh diff ke JSONL. Jika SHA commit tersedia, cantumkan; jika tidak, hilangkan.
- `catatan.md` dan `catatan-vN.md` adalah arsip format lama. Pertahankan sebagai riwayat lama; jangan menambahkan entri baru ke sana.

## Sinkronisasi inventaris `list/`

- Baca `list/index.json` dan hanya dokumen yang relevan ketika pekerjaan menyentuh fitur, bug, rencana, atau data inventaris.
- Perbarui dokumen `list/` hanya jika fakta yang dicatat di dalamnya benar-benar berubah: fitur ditambah/diubah/dihapus, masalah ditemukan/statusnya berubah, atau rencana/progres berubah.
- Perubahan kosmetik kecil, typo, refactor internal, atau perubahan dokumentasi yang tidak mengubah inventaris **tidak mewajibkan** pembaruan `list/`.
- Jika dokumen relevan memiliki `updatedAt` lebih dari 14 hari dan datanya diperlukan untuk mengambil keputusan, cocokkan bagian terkait dengan source aktual. Jangan mengubah tanggal tanpa verifikasi.
- Jangan membuat fitur, masalah, progres, atau hasil pengujian fiktif. Perbarui hanya kategori yang benar-benar terdampak.
- Jika pekerjaan hanya read-only, cukup laporkan file yang diperiksa dan temuan; jangan membuat log atau mengubah inventaris.

## Pelaporan file

Setiap laporan setelah perubahan wajib memisahkan file yang **ditambahkan**, **diubah**, **dihapus**, dan **dipindahkan/di-rename**. Tulis `Tidak ada` untuk kategori yang kosong.

## 11. Pemeriksaan Read-Only

- Jika tugas hanya meminta pemeriksaan, pembacaan, pencarian, audit struktur, atau penelusuran isi file dan **tidak ada file yang ditambah, diubah, atau dihapus**, agent tidak perlu menambahkan entri ke `history/changes.jsonl` atau memperbarui `list/`.
- Agent tetap wajib melaporkan area/file yang diperiksa, temuan, dan batas pemeriksaan secara akurat.
- Jika selama tugas read-only ditemukan masalah, cukup laporkan temuannya; jangan mengubah file atau mencatatnya sebagai perubahan.
- Jika tugas kemudian berlanjut menjadi perubahan file, tambahkan satu entri JSONL setelah perubahan selesai sesuai aturan riwayat di atas.
