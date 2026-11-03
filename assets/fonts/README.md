# NFShark — Font Assets

## Daftar font dan penggunaannya

| Font | Kategori | Penggunaan | Status |
|---|---|---|---|
| **Telma Light** | Display / judul | H1–H6, judul section, heading editorial | Font judul utama; file WOFF2 perlu berada di folder ini |
| **Times New Roman** | Serif / teks umum | Paragraf, navigasi, tombol, label, formulir, UI | Fallback sistem, tidak perlu file font |
| **Rosaline** | Script / dekoratif | Aksen pendek dan ornamen tipografi | Dimuat dari Fontshare |
| **System monospace** | Monospace | URL preview, kode, dan informasi teknis | Font sistem; tidak perlu file tambahan |

## Telma Light (font judul utama)

- Nama internal: `Telma Light`
- File web: `Telma-Light.woff2`
- Bobot: 300 (Light)
- Penggunaan: menggantikan Bespoke Serif/Playfair Display sebagai font judul.
- Sumber file asli: font TTF yang diberikan untuk proyek NFShark.
- CSS: `@font-face` di `fonts.css`.

Letakkan file `Telma-Light.woff2` di folder `assets/fonts/`. File TTF yang diberikan telah dikonversi ke WOFF2 agar lebih efisien untuk web.

## Times New Roman

Times New Roman adalah font sistem. Tidak perlu mengunggah TTF/WOFF. CSS memakai fallback `Times` dan `serif` jika font tidak tersedia pada perangkat.

## Rosaline

- Sumber: [Fontshare — Rosaline](https://www.fontshare.com/fonts/rosaline)
- Penggunaan: aksen script pendek saja, bukan paragraf atau teks informasi.
- Dimuat menggunakan CSS resmi Fontshare.

## System monospace

Menggunakan `ui-monospace, SFMono-Regular, Consolas, monospace` untuk konten teknis. Browser memilih font monospace yang tersedia pada perangkat.

## Penggunaan CSS

Semua halaman aktif yang memuat `assets/fonts/fonts.css` dapat menggunakan token berikut:

```css
body { font-family: var(--font-times-new-roman); }
h1, h2, h3, h4, h5, h6 { font-family: var(--font-telma); }
.text-accent { font-family: var(--font-rosaline); }
.code, .technical-label { font-family: var(--font-mono); }
```

## Catatan halaman

- Font judul NFShark Studio menggunakan Telma Light.
- Font teks umum tetap Times New Roman.
- Rosaline hanya untuk aksen yang memang memerlukan gaya script.
- UI teknis dapat memakai monospace.
- Halaman lama di folder `history/` dikecualikan dari perubahan sistem tipografi.
- Website demo di `portofolio/` dapat memiliki tipografi mandiri sesuai desain masing-masing dan tidak otomatis mengikuti sistem font halaman utama.

## Catatan lisensi

Pastikan lisensi font Telma mengizinkan penggunaan pada website publik/komersial sebelum deployment produksi. File sumber diberikan oleh pemilik proyek; informasi lisensi tidak disimpulkan dari nama file.
