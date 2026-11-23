# Perbaikan Publikasi llms.txt dan sitemap.txt

## Tujuan
Memastikan file `llms.txt` dan `sitemap.txt` yang berada di root repository ikut diterbitkan pada root website GitHub Pages.

## Temuan awal
`.github/scripts/prepare_pages.py` hanya menyalin file root yang tercantum pada `ROOT_STATIC_FILES`. Kedua file crawler tidak ada dalam daftar tersebut, sehingga tidak masuk ke direktori build `site/`.

## Perubahan
1. Tambahkan `llms.txt` dan `sitemap.txt` ke `ROOT_STATIC_FILES`.
2. Tambahkan pemeriksaan keberadaan `site/llms.txt` dan `site/sitemap.txt` pada langkah verifikasi artefak di workflow.
3. Pertahankan isi kedua dokumen dan aturan deployment lain tanpa perubahan.

## Kriteria verifikasi
- Skrip build berhasil dijalankan.
- Kedua file muncul di root direktori `site/` dengan isi yang sama seperti sumber.
- Workflow memeriksa keberadaan kedua file sebelum artefak diunggah.
- URL publik baru dinyatakan pulih hanya setelah deployment sukses dan respons URL diperiksa.

## Batasan
Perubahan source tidak dengan sendirinya membuktikan file sudah tersedia di domain produksi. Status publikasi harus menunggu workflow GitHub Actions dan pemeriksaan URL setelah deployment.
