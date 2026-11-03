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

## 9. Batas Arsip `catatan.md`

- Saat `catatan.md` mencapai 500 baris atau 50 KB (mana yang lebih dulu), arsipkan seluruh isinya tanpa kehilangan riwayat sebagai `catatan-vN.md` dengan nomor versi berikutnya yang belum digunakan.
- Setelah arsip dibuat, mulai log aktif baru di `catatan.md` dan sertakan rujukan yang jelas ke arsip.
- Jika masih di bawah kedua ambang, jangan memecah atau mengarsipkan catatan.

## 10. Sinkronisasi Wajib dengan Data `list/` (Semua Agent)

Setiap pekerjaan yang mengubah website—baik diminta langsung oleh pemilik maupun dikerjakan sebagai tindak lanjut agent—WAJIB terhubung dengan dokumentasi data di folder `list/`. Aturan ini berlaku sebelum dan sesudah perubahan, tanpa perlu pengingat tambahan.

1. **Pemeriksaan sebelum perubahan:** baca `list/index.json`, pilih dokumen yang paling relevan dengan halaman/fitur yang akan disentuh, lalu baca dokumen tersebut. Jangan hanya mengandalkan `catatan.md`.
2. **Pemeriksaan usia data 14 hari:** periksa tanggal `updatedAt` pada dokumen data yang dipilih (atau tanggal pembaruan terakhir yang tersedia). Jika data terakhir lebih dari 14 hari, lakukan pencocokan ulang terhadap source terkait sebelum mengubah website; perbarui status/isi yang sudah tidak sesuai berdasarkan bukti aktual. Jangan mengubah tanggal agar tampak baru tanpa pemeriksaan.
3. **Pembaruan otomatis setelah perubahan:** setelah perubahan website selesai, agent WAJIB memperbarui sekurang-kurangnya satu dokumen `list/` yang paling relevan, meskipun pemilik tidak secara khusus meminta pembaruan dokumentasi. Lakukan juga bila pemilik meminta perubahan secara langsung. Perbarui `updatedAt` dan entri/status/rujukan file yang terdampak berdasarkan hasil nyata.
4. **Pilih dokumen yang tepat:** gunakan `daftar-fitur.json` untuk fitur/kemampuan yang ditambah, diubah, atau dihapus; `daftar-masalah.json` untuk bug/temuan dan status penyelesaiannya; `daftar-rencana.json` untuk rencana, progres, atau pekerjaan lanjutan. Gunakan dokumen lain dalam katalog jika dampak perubahan memang berada pada domain dokumen tersebut. Perbarui lebih dari satu jika beberapa kategori benar-benar terdampak.
5. **Jaga akurasi:** jangan mencatat fitur sebagai tersedia hanya karena direncanakan; bedakan pemeriksaan source dengan uji browser/runtime; jangan mengarang hasil pengujian, tanggal, data pelanggan, atau status. Jika tidak ada perubahan substantif pada inventaris, tetap catat pembaruan relevan yang menjelaskan dampak pemeliharaan dan file yang berubah tanpa membuat fitur fiktif.
6. **Catatan perubahan tetap wajib:** selain dokumen `list/`, catat semua file yang ditambah/diubah/dihapus di `catatan.md` sesuai aturan pencatatan yang berlaku.
7. **Pelaporan:** sebutkan dokumen `list/` yang diperiksa dan diperbarui, alasan pemilihannya, serta apakah data berusia lebih dari 14 hari dan perlu direkonsiliasi. Jika akses atau kemampuan edit tidak tersedia, nyatakan dengan jelas dan jangan mengklaim sinkronisasi selesai.

Agent perencana juga wajib membaca dokumen `list/` yang relevan saat menyusun rencana dan memasukkan instruksi pembaruan data `list/` serta `catatan.md` ke prompt agent pelaksana.
