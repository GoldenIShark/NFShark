---
name: skill-creator
description: "Gunakan saat membuat, merancang, menulis, memperbarui, menguji, atau merapikan skill baru agar instruksi agent dapat digunakan secara konsisten dan terpelihara."
---

# Skill Creator

## Tujuan

Membuat dan memelihara skill yang spesifik, dapat ditemukan, mudah diikuti agent, dan sesuai struktur repository NFShark. Skill adalah panduan kerja untuk jenis tugas tertentu; skill bukan pengganti instruksi global, agent, atau dokumentasi sumber kebenaran proyek.

## Kapan digunakan

Gunakan skill ini ketika diminta untuk:
- Membuat skill baru.
- Mengubah tujuan, pemicu, alur, atau aturan skill yang sudah ada.
- Menggabungkan, memecah, memindahkan, atau mengarsipkan skill.
- Memeriksa kelengkapan, konsistensi, dan keterpakaian skill.
- Menambahkan tool/script pendukung yang secara khusus diperlukan oleh sebuah skill.

Jangan gunakan untuk perubahan website biasa yang hanya memerlukan skill implementasi lain.

## Sumber dan lokasi

1. Baca indeks skill terlebih dahulu: `.github/skills/daftar-file.md` atau `.agents/skills/daftar-file.md`, sesuai lingkungan agent.
2. Gunakan `Tools/skills/<nama-skill>/SKILL.md` sebagai lokasi sumber skill.
3. Jangan membuat atau menghidupkan kembali lokasi lama seperti `.github/skills/<nama-skill>/` atau `.agents/skills/<nama-skill>/`.
4. Sebelum membuat skill, periksa indeks dan direktori skill yang ada untuk menghindari duplikasi nama atau fungsi.
5. Jika kedua indeks tersedia, jaga daftar dan urutan isinya tetap sinkron.

## Proses pembuatan

1. **Tentukan kebutuhan**
   - Rumuskan pekerjaan spesifik yang dibantu skill.
   - Identifikasi pengguna/agent sasaran, konteks, batasan, dan hasil yang diharapkan.
   - Pastikan kebutuhan tidak sudah tercakup secara memadai oleh skill yang tersedia.
   - Jika cakupan terlalu luas, pecah menjadi beberapa skill yang memiliki tanggung jawab jelas.

2. **Tentukan nama dan pemicu**
   - Gunakan nama direktori huruf kecil, deskriptif, dan dipisahkan tanda hubung.
   - Nama harus singkat, unik, dan menggambarkan kemampuan, bukan nama agent atau nama pengguna.
   - Tulis deskripsi metadata yang menjelaskan kapan skill harus digunakan, dengan kata kerja dan pemicu tugas yang konkret.
   - Hindari deskripsi umum seperti "membantu pengembangan" tanpa konteks.

3. **Susun isi**
   - Buat `Tools/skills/<nama-skill>/SKILL.md`.
   - Awali dengan frontmatter YAML yang valid dan memuat `name` serta `description`.
   - Gunakan judul dan bagian yang ringkas, instruksi berbentuk tindakan, serta urutan kerja yang dapat diikuti.
   - Masukkan hanya informasi yang diperlukan saat skill dipakai; hindari menyalin instruksi global atau isi skill lain.
   - Jelaskan kapan skill digunakan dan kapan tidak digunakan.
   - Sertakan proses kerja, aturan keputusan, batasan/larangan, keluaran yang diharapkan, dan kriteria verifikasi jika relevan.
   - Gunakan bahasa Indonesia yang jelas dan konsisten dengan dokumentasi NFShark.
   - Jangan mengarang tool, path, script, API, dependensi, atau kemampuan lingkungan. Verifikasi keberadaannya sebelum dirujuk.
   - Jika skill merujuk skill lain, pastikan nama dan path-nya terdaftar pada indeks.

4. **Kelola sumber pendukung**
   - Tambahkan file pendukung hanya jika benar-benar diperlukan untuk menjalankan alur skill.
   - Simpan contoh, template, atau referensi tambahan di direktori skill yang sama dengan nama yang jelas.
   - Script harus memiliki tujuan, cara penggunaan, prasyarat, dan cara validasi yang dijelaskan.
   - Jangan menambahkan dependensi atau menjalankan tindakan eksternal/destruktif tanpa persetujuan yang sesuai.
   - Jangan menyalin rahasia, token, data pribadi, atau kredensial ke dalam skill.

5. **Daftarkan skill**
   - Tambahkan satu baris pada tabel skill di kedua indeks:
     - `.github/skills/daftar-file.md`
     - `.agents/skills/daftar-file.md`
   - Gunakan path sumber `Tools/skills/<nama-skill>/SKILL.md` dan tautan relatif yang benar dari masing-masing indeks.
   - Pastikan kedua indeks memiliki daftar yang sama.

6. **Periksa integrasi**
   - Cari instruksi aktif, agent, dan skill lain yang menyebut kemampuan terkait.
   - Perbarui referensi hanya jika memang diperlukan; jangan menyebarkan nama skill ke semua agent secara otomatis.
   - Jika instruksi agent menyatakan bahwa pencarian skill harus melalui indeks, pertahankan aturan tersebut.
   - Periksa tidak ada rujukan aktif yang masih menunjuk ke lokasi skill lama.

## Format minimum skill

Setiap skill minimal memiliki:
- Frontmatter YAML: `name` dan `description`.
- Judul utama yang menjelaskan fungsi.
- Bagian tujuan dan kapan digunakan.
- Proses kerja yang berurutan.
- Batasan dan aturan keputusan yang relevan.
- Hasil yang diharapkan atau kriteria selesai.

Tambahkan bagian lain hanya jika membantu penggunaan nyata.

## Verifikasi sebelum selesai

- Periksa nama direktori, nama metadata, dan path file agar konsisten.
- Validasi struktur frontmatter YAML secara manual atau dengan parser yang tersedia.
- Pastikan Markdown memiliki heading, daftar, dan code span yang terbaca.
- Pastikan semua path, skill terkait, script, dan tool yang dirujuk benar-benar tersedia.
- Pastikan kedua indeks memuat satu entri yang sama dan tidak ada duplikasi.
- Cari referensi lama yang masih aktif.
- Tinjau diff agar hanya file dalam ruang lingkup yang berubah.
- Jangan menyatakan skill telah diuji dalam penggunaan agent nyata jika hanya dilakukan pemeriksaan statis.

## Kriteria selesai

Skill dapat ditemukan melalui kedua indeks, menjelaskan pemicu dan batas penggunaannya, memberi langkah yang dapat dijalankan tanpa asumsi yang tidak terverifikasi, dan tidak bertentangan dengan instruksi global NFShark.
