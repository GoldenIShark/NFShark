---
name: website-maintenance
description: "Gunakan saat mengaudit, mendiagnosis, memperbaiki bug, merapikan, atau memelihara website yang telah ada tanpa mengubah perilaku yang tidak terkait."
---

# Pemeliharaan Website

## Diagnosis dahulu
- Temukan root situs dan file sumber yang benar; baca dokumentasi/pola yang ada, status perubahan, serta laporan bug atau langkah reproduksi.
- Bedakan masalah yang terbukti dari dugaan. Reproduksi dan catat kondisi kegagalan sebelum mengedit bila memungkinkan.
- Cari referensi silang HTML, CSS, JavaScript, aset, dan path agar perbaikan tidak meninggalkan penggunaan yang rusak.
- Pertahankan fungsi dan tampilan yang sudah benar. Hindari penulisan ulang besar ketika perbaikan lokal cukup.

## Perbaikan bertahap
1. Definisikan perilaku yang seharusnya dan kasus uji/regresi.
2. Terapkan perubahan minimum yang memperbaiki akar masalah tanpa menambah dependensi atau mengubah data/fakta.
3. Periksa lintas halaman dan ukuran layar yang terdampak; pertahankan bahasa, identitas, aksesibilitas, dan performa.
4. Hapus kode/aset usang hanya jika pemakaian telah dilacak dan penghapusan aman serta termasuk lingkup.
5. Jalankan pengujian terarah, cek error konsol/path aset, lalu tinjau diff untuk perubahan tak terkait.

## Pemeliharaan rutin
Audit konsistensi navigasi, konten, metadata, formulir/kontak, broken links, aset, responsivitas, aksesibilitas, dan performa berdasarkan kebutuhan. Prioritaskan isu berdampak tinggi; jangan melakukan “pembersihan” spekulatif. Laporkan temuan, perbaikan, validasi, risiko, dan keterbatasan. Gunakan `website-testing` dan skill bidang terkait untuk verifikasi.
