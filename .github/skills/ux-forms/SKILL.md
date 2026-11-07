---
name: ux-forms
description: "Gunakan saat membuat atau memperbaiki formulir kontak, pendaftaran, pemesanan, atau input lain di website. Berlaku untuk situs utama dan situs portofolio."
---

# Formulir

## Tujuan
Buat formulir yang mudah diisi, mudah dipahami, dan membuat pengguna berhasil mengirimkannya.

## Aturan utama
1. **Minta hanya yang dibutuhkan.** Setiap field tambahan mengurangi jumlah pengiriman. Tanyakan: "Apakah kita benar-benar memerlukan data ini?"
2. **Gunakan label yang terlihat.** Jangan hanya mengandalkan placeholder. Placeholder hilang saat diketik, jadi tidak cukup sebagai label.
3. **Satu kolom lebih mudah dipindai** daripada dua kolom untuk formulir panjang.
4. **Beri tanda field wajib dengan jelas.** Tulis "wajib" atau gunakan tanda yang dijelaskan di awal form. Jangan hanya memakai warna.
5. **Pilih input yang sesuai.** Gunakan tipe input yang tepat, misalnya email, telepon, tanggal, atau pilihan ganda.
6. **Tombol kirim menjelaskan tindakannya.** Contoh: "Kirim pesan", bukan "Submit" atau "Klik di sini".

## Validasi dan pesan kesalahan
- Tampilkan kesalahan setelah pengguna selesai mengisi field, bukan saat masih mengetik.
- Pesan kesalahan harus menjelaskan masalah dan cara memperbaikinya.
  - Baik: "Alamat email harus memiliki tanda @."
  - Hindari: "Input tidak valid."
- Letakkan pesan di dekat field yang salah, dan hubungkan secara programatik ke field tersebut.
- Jangan menghapus isian pengguna saat terjadi kesalahan.
- Jika ada beberapa kesalahan, tampilkan semuanya sekaligus, dan fokuskan pengguna ke kesalahan pertama.

## Status
- **Sukses**: tampilkan pesan yang jelas dan langkah berikutnya, misalnya "Pesan Anda sudah terkirim. Kami membalas dalam 2 hari kerja." Hanya tulis waktu balasan jika memang benar.
- **Gagal karena jaringan atau server**: tampilkan pesan yang menjelaskan kejadiannya dan izinkan pengguna mencoba lagi tanpa mengulang isian.
- **Sedang mengirim**: nonaktifkan tombol sementara agar tidak terkirim dua kali, dan tampilkan status loading.

## Aksesibilitas
- Setiap input punya label yang terhubung.
- Formulir bisa diisi sepenuhnya dengan keyboard.
- Urutan fokus mengikuti urutan visual.
- Pesan kesalahan dapat dibaca oleh teknologi bantu.

Detail teknis aksesibilitas ada di `seo-accessibility`. Untuk pengujian formulir, gunakan `website-testing`.

## Periksa sebelum selesai
- Semua field punya label.
- Field wajib jelas.
- Validasi berjalan dan pesan kesalahan spesifik.
- Data yang sudah diisi tidak hilang saat terjadi kesalahan.
- Pesan sukses dan gagal sudah diuji.
- Formulir berfungsi di layar kecil.
