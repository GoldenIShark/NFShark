# Proposal Digital — NFShark

Template website proposal untuk menawarkan layanan desain dan pengembangan website. Dibuat dengan HTML, CSS, dan Vanilla JavaScript; tidak membutuhkan framework, build step, atau dependensi tambahan.

## Menjalankan website

Sajikan folder ini sebagai static website melalui static hosting atau server HTTP lokal. Contoh:

```powershell
cd proposal
python -m http.server 8000
```

Buka `http://localhost:8000/`. Memuat `index.html` langsung lewat `file://` tidak didukung karena browser memblokir pembacaan data paket JSON lokal.

## Menyesuaikan sebelum proposal dibagikan

1. Ganti `[[NAMA KLIEN]]`, `[[Nama Klien]]`, `[[namaKlien]]`, `[[Industri]]`, `[[Jenis bisnis]]`, `[[Target audiens]]`, `[[Jenis website]]`, `[[TAGLINE BISNIS]]`, dan field `[[...]]` lain di `index.html`.
2. Perbarui ringkasan profil serta butir tantangan setelah mendiskusikan fakta proyek dengan calon klien. Daftar tantangan sekarang merupakan bahan diskusi, bukan diagnosis bisnis klien.
3. Periksa susunan halaman, fitur, hasil proyek, timeline, dan catatan. Ubah isi agar mengikuti kesepakatan aktual—terutama batas revisi, materi, estimasi, dan biaya.
4. Periksa kembali nama demo dan tautan di bagian selected work. Kartu preview adalah ilustrasi CSS dari proyek yang ditautkan, bukan screenshot proyek.
5. Ganti `whatsappNumber` di `script.js` jika nomor kontak berubah. Gunakan kode negara dan angka saja tanpa tanda `+`, spasi, atau tanda hubung.
6. Perbarui tautan sosial, email, dan website di bagian footer `index.html` jika kontak bisnis berubah.

## Paket harga

`data/packages.json` adalah **salinan lokal** dari `data/packages.json` utama saat template ini dibuat. Data harga, estimasi, badge, dan fitur di dalamnya dapat diedit di file tersebut. Salinan lokal sengaja membuat proposal tetap portable saat dipindah atau disalin; perubahan berikutnya pada sumber utama tidak otomatis diterapkan. Cocokkan kembali harga dan cakupan dengan sumber utama sebelum membagikan setiap proposal.

Informasi harga dan estimasi ditampilkan sesuai data saat ini, bukan janji tetap. Selaraskan ruang lingkup serta estimasi dengan kebutuhan dan kesepakatan klien.

## Struktur folder

```text
proposal/
├── index.html
├── style.css
├── script.js
├── README.md
├── data/
│   └── packages.json
└── assets/
    ├── images/
    └── icons/
```

Ilustrasi browser dan preview portofolio dibuat dengan CSS; folder aset disediakan untuk gambar atau ikon ringan yang mungkin diperlukan untuk proposal klien. Tidak ada gambar eksternal yang diminta untuk memuat situs.

## Perhatian

- Tautan pada kartu portofolio dan GitHub Pages membuka situs publik eksternal; periksa tujuan dan kepemilikan URL sebelum membagikan proposal, lalu perbarui jika alamat tujuan berubah.
- Fitur di daftar hasil merupakan bahan konfirmasi. Backend/server, sistem login, dashboard admin, database, API, pembayaran daring, atau sistem kompleks tidak termasuk cakupan otomatis.
- Placeholder dan konten contoh harus ditinjau sebelum proposal dikirim kepada klien.
