# Convert Images to WebP

## Kapan digunakan

Gunakan skill ini setiap kali menyiapkan atau memelihara website di `HOME/portofolio/`, terutama saat menambahkan gambar baru atau mengaudit asset yang sudah ada. Skill berlaku untuk setiap kategori dan setiap website portfolio di dalamnya.

## Folder yang diperiksa

Periksa hanya folder asset milik website yang sedang dikerjakan, yaitu:

```text
HOME/portofolio/<kategori>/<website>/assets/
```

Jika website tersebut menjadi root langsung kategori, gunakan:

```text
HOME/portofolio/<kategori>/assets/
```

Jangan memakai atau mengubah asset website utama di `HOME/assets/` kecuali diminta secara khusus.

## Format yang boleh dikonversi

- Konversi gambar raster statis seperti `.jpg`, `.jpeg`, `.png`, `.bmp`, dan `.gif` statis jika WebP sesuai dengan kebutuhan visual.
- Jangan mengonversi SVG secara otomatis karena SVG adalah format vector.
- Jangan mengubah GIF animasi menjadi WebP statis jika animasinya digunakan. Pertahankan GIF animasi atau pilih solusi animasi yang tetap mempertahankan perilaku tersebut.
- Jangan mengubah favicon atau icon yang memerlukan format khusus tanpa alasan yang jelas.

## Menentukan apakah konversi diperlukan

1. Identifikasi semua gambar raster non-WebP di folder asset website.
2. Periksa apakah gambar benar-benar digunakan oleh HTML, CSS, atau JavaScript.
3. Bandingkan kualitas visual dan ukuran hasil WebP dengan file sumber.
4. Konversi bila hasilnya tetap sesuai kebutuhan visual dan memberi ukuran file yang lebih efisien.
5. Jangan konversi file yang tidak cocok, tidak digunakan, atau berisiko kehilangan fungsi penting.

## Aturan nama file

Pertahankan nama dasar file jika memungkinkan. Contoh:

- `hero.jpg` menjadi `hero.webp`
- `food-1.png` menjadi `food-1.webp`

Simpan hasil di folder asset yang sama dan pertahankan struktur subfolder seperti `assets/images/` atau `assets/images/gallery/`.

## Prosedur aman

1. Buat versi WebP terlebih dahulu.
2. Pastikan file WebP berhasil dibuat, dapat dibaca, dan kualitasnya memadai.
3. Perbarui referensi di HTML, CSS, dan JavaScript agar menggunakan path `.webp` relatif yang benar.
4. Cari ulang referensi file lama dan pastikan tidak ada referensi aktif yang tertinggal.
5. Jangan menghapus file asli sebelum versi WebP berhasil dibuat dan semua referensi sudah dipindahkan.
6. Setelah validasi berhasil, file asli yang sudah tidak digunakan boleh dihapus bila sesuai kebutuhan proyek. Jangan menghapus asset yang masih diperlukan.

## Tool Pembantu Otomatis (Python)

Folder skill ini dilengkapi skrip Python pembantu reusable: `convert_to_webp.py`.
Gunakan skrip ini saat perlu mengonversi satu gambar atau satu direktori gambar raster ke WebP secara cepat dan aman:

```bash
# Konversi satu file (file asli tetap disimpan secara default)
python .github/skills/convert-images-to-webp/convert_to_webp.py portofolio/<kategori>/<website>/assets/images/foto.jpg

# Konversi seluruh gambar dalam direktori
python .github/skills/convert-images-to-webp/convert_to_webp.py portofolio/<kategori>/<website>/assets/images/

# Opsi kualitas (default: 85) dan rekursif subfolder (-r)
python .github/skills/convert-images-to-webp/convert_to_webp.py portofolio/<kategori>/assets/ -q 80 -r
```

## Validasi setelah konversi

- Periksa path gambar pada HTML, CSS, dan JavaScript dari root website yang bersangkutan.
- Pastikan tidak ada broken image dan setiap target file benar-benar ada.
- Pastikan website tetap dapat dibuka dari `HOME/portofolio/<kategori>/` dengan path relatifnya.
- Periksa console untuk error JavaScript dan uji tampilan responsive di desktop serta HP.
- Prioritaskan gabungan kualitas visual yang baik, ukuran file kecil, dan performa loading yang cepat.

