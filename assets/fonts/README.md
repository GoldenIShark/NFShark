# NFShark — Font Assets

Folder ini berisi konfigurasi pemanggilan font web yang telah dipilih dari arsip `Font.zip`. Berkas font mentah tidak disalin ke repository; font yang dipilih dimuat melalui CSS resmi Fontshare.

## Font terpilih

### Bespoke Serif
- Desainer: Jeremie Hornus, Theo Guillard, Morgane Pambrun, Alisa Nowak, Joachim Vu.
- Sumber: [Fontshare — Bespoke Serif](https://www.fontshare.com/fonts/bespoke-serif)
- Fungsi: judul, heading, dan elemen editorial.
- Bobot yang diminta: 300, 400, 500, 700, 800.

### Rosaline
- Desainer: Jérémie Hornus.
- Sumber: [Fontshare — Rosaline](https://www.fontshare.com/fonts/rosaline)
- Fungsi: aksen script/dekoratif. Jangan digunakan untuk paragraf atau teks UI.
- Bobot yang diminta: 400.

## Cara menggunakan

Tambahkan stylesheet ini pada halaman yang membutuhkan font:

```html
<link rel="stylesheet" href="assets/fonts/fonts.css">
```

Gunakan variabel font:

```css
.heading-editorial {
  font-family: var(--font-bespoke-serif);
}

.signature-accent {
  font-family: var(--font-rosaline);
}
```

Font diambil dari API/CDN Fontshare. Halaman memerlukan koneksi internet untuk memuat font; jika layanan eksternal tidak tersedia, browser menggunakan fallback Georgia atau cursive.

## Hasil pemeriksaan arsip

- Arsip memuat beberapa format font yang sama (OTF, TTF, WOFF, WOFF2). Tidak perlu menambahkan semua duplikat ke website.
- Bespoke Serif dan Rosaline dipilih sebagai kandidat web font karena arsip menyediakan file web WOFF2 dan CSS sumber.
- File `ShalyzeCln-Regular.otf` diberi label **PERSONAL USE ONLY**, sehingga tidak dimasukkan untuk website jasa komersial.
- Catatan lisensi `Mrs. Monster` menyebut penggunaan gratis hanya untuk non-komersial; penggunaan komersial memerlukan lisensi dari pembuatnya. Font ini tidak dimasukkan.
- Someday, Roman New Times, dan file lain tanpa keterangan lisensi yang memadai tidak dimasukkan.
- Fontshare memiliki ketentuan lisensi per keluarga font. Periksa panel lisensi keluarga font di situs resmi sebelum pemakaian produksi, khususnya bila cara distribusi atau penggunaan berubah. Konfigurasi ini menggunakan stylesheet resmi Fontshare dan tidak mengunggah ulang file font mereka.

## Keputusan penggunaan

Font ini belum menggantikan font global website NFShark. Terapkan hanya pada elemen yang memang membutuhkan karakter editorial/script setelah dilakukan pemeriksaan visual pada halaman terkait.
