# NFShark — Font Assets

Folder ini menyimpan konfigurasi pemanggilan font yang sudah ditinjau dari arsip `Font.zip`.

## Font yang disetujui untuk penggunaan website

### Bespoke Serif
- Desainer: Jeremie Hornus, Theo Guillard, Morgane Pambrun, Alisa Nowak, Joachim Vu.
- Sumber: [Fontshare — Bespoke Serif](https://www.fontshare.com/fonts/bespoke-serif)
- Lisensi: ITF Free Font License dari Fontshare.
- Penggunaan: font serif display untuk heading, judul, atau elemen editorial.
- Bobot yang diminta: 300, 400, 500, 700, 800.

### Rosaline
- Desainer: Jérémie Hornus.
- Sumber: [Fontshare — Rosaline](https://www.fontshare.com/fonts/rosaline)
- Lisensi: Fontshare; periksa ketentuan lisensi keluarga font di sumber resmi sebelum penggunaan.
- Penggunaan: aksen script/dekoratif seperlunya, bukan teks isi.

## Cara menggunakan

Tambahkan stylesheet berikut pada halaman yang membutuhkan font ini:

```html
<link rel="stylesheet" href="assets/fonts/fonts.css">
```

Kemudian gunakan variabel CSS:

```css
.heading-editorial {
  font-family: var(--font-bespoke-serif);
}

.signature-accent {
  font-family: var(--font-rosaline);
}
```

Font dimuat dari API resmi Fontshare agar file font tidak didistribusikan ulang melalui repository publik. Website memerlukan koneksi internet ketika font pertama kali dimuat.

## Font yang tidak dimasukkan

- **Shalyze Cln** — arsip menyebut PERSONAL USE ONLY; tidak cocok untuk layanan komersial.
- **Mrs. Monster** — catatan di arsip membatasi penggunaan gratis untuk non-komersial; penggunaan komersial memerlukan lisensi.
- **Someday** dan **Roman New Times** — arsip tidak menyertakan keterangan lisensi yang cukup.
- File font lain yang hanya tersedia sebagai OTF/TTF tanpa informasi lisensi yang jelas juga tidak dimasukkan.

## Catatan teknis

- Arsip berisi duplikasi format desktop dan web (OTF, TTF, WOFF, WOFF2).
- Untuk web, WOFF2 umumnya paling efisien; namun file asli tidak disalin ke repository ini.
- Jangan mengubah atau mengonversi file font Fontshare tanpa memeriksa lisensi dan memperoleh izin yang diperlukan.
- Font ini belum dijadikan font global NFShark. Pemakaian harus ditentukan per halaman/komponen setelah uji visual.
