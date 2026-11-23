# Rancangan dan Arahan Navigasi Jelajahi NFShark

## Tujuan
Menambahkan navigasi ringkas bernama **Jelajahi** pada halaman `/studio` sebagai pengganti container informasi yang saat ini berisi:
- Minimalist Editorial
- Website yang dirancang mengikuti kebutuhan Anda.
- Fleksibel dalam desain, nyaman digunakan, dan responsif di berbagai perangkat.
- Desain Fleksibel
- Performa Ringan

Dokumen ini merupakan spesifikasi untuk implementasi. Jangan mengubah website sebelum tugas ini dipilih melalui `Otomatis/kerjaan.md` dan kondisi kode saat ini diperiksa.

## Keputusan desain

### Judul
Gunakan judul **Jelajahi**.

### Tata letak responsif
- **Layar HP:** navigasi berupa deretan item yang dapat digeser horizontal. Jangan memaksa seluruh item masuk ke lebar layar. Sembunyikan scrollbar hanya jika petunjuk bahwa konten dapat digeser tetap cukup jelas.
- **Layar lebih lebar:** gunakan satu baris item yang ringkas. Letakkan tombol/tautan **Tampilan semua** di kanan atas.
- Saat **Tampilan semua** dipilih, tampilkan seluruh item dalam grid dua baris atau lebih sesuai lebar layar. Pada ukuran menengah, grid boleh menyesuaikan jumlah kolom agar tidak sesak.
- Gunakan jarak, ukuran ikon, dan tinggi item yang konsisten. Hindari deskripsi panjang, kartu besar, bayangan berlebihan, dekorasi, dan animasi berat.
- Pertahankan gaya visual, tipografi, warna, radius, dan pola interaksi yang sudah berlaku pada website NFShark. Gunakan desain mobile-first.

### Menu dan tujuan
Urutan menu yang direncanakan:
1. **Langganan Website** — menuju halaman informasi dan alur layanan langganan website. Ini adalah fitur baru yang menjadi fokus tahap awal.
2. **Pesan Website** — menuju halaman Brief yang sudah ada; jangan membuat formulir pemesanan duplikat.
3. **Paket Website** — menuju halaman khusus paket website. Informasi/section paket yang saat ini berada di halaman studio harus dipindahkan ke halaman tersendiri, bukan ditampilkan ganda.
4. **FAQ** — menuju halaman FAQ yang sudah ada.
5. **Bantuan** — menuju halaman bantuan/kontak pelanggan yang sudah ada.
6. **Syarat & Ketentuan** — menuju halaman syarat dan ketentuan yang sudah ada.

Catatan ruang lingkup: penambahan fitur baru tahap awal adalah **Langganan Website**. Menu lain hanya ditampilkan apabila tujuan halamannya memang sudah tersedia dan dapat diverifikasi. Jangan membuat halaman baru untuk menu yang belum siap hanya demi memenuhi daftar. Jika ada tujuan yang belum tersedia, catat sebagai hambatan/pekerjaan lanjutan dan jangan membuat tautan mati.

### Perilaku
- Setiap item harus berupa tautan atau kontrol yang jelas dan dapat diakses dengan keyboard.
- Tombol **Tampilan semua** membuka/menutup tampilan grid lengkap; statusnya harus dapat dipahami oleh teknologi bantu (misalnya `aria-expanded`).
- Navigasi geser HP harus mendukung sentuhan dan trackpad/mouse, serta tidak mengganggu scroll vertikal halaman.
- Berikan indikator fokus yang terlihat, label yang jelas, dan ukuran target sentuh yang memadai.
- Hormati preferensi `prefers-reduced-motion`; transisi hanya ringan dan tidak wajib.
- Jangan menambahkan backend, akun pelanggan, pembayaran otomatis, dashboard, atau otomasi server. NFShark saat ini berfokus pada website front-end statis.

## Arahan ikon dan lisensi

### Sumber pencarian utama
- [Flaticon](https://www.flaticon.com/)
- [FreeIcons](https://freeicons.io/)

Kedua situs tersebut adalah sumber pencarian, bukan jaminan bahwa semua asetnya bebas atribusi atau bebas batasan. Periksa lisensi pada halaman setiap aset sebelum mengunduh dan menggunakan.

### Prioritas pemilihan
1. Utamakan aset yang secara eksplisit mengizinkan penggunaan komersial pada website.
2. Pilih unduhan gratis dengan atribusi apabila syaratnya dapat dipenuhi secara wajar. Jangan menghapus kredit yang diwajibkan.
3. Jika tersedia pilihan setara, prioritaskan lisensi permisif yang tidak mewajibkan atribusi (misalnya CC0/public domain) dan tetap verifikasi asal serta lisensinya.
4. Jangan menggunakan aset editorial-only, aset berlabel premium untuk pengguna gratis, atau aset yang lisensinya tidak jelas.
5. Jangan menyimpulkan bahwa aset bebas lisensi hanya karena tombol unduhnya gratis.
6. Jika persyaratan atribusi atau format unduhan membuat aset tidak sesuai, cari alternatif lain; jangan membeli langganan atau menggunakan aset premium tanpa persetujuan.
7. Jangan hotlink file dari situs sumber. Simpan aset yang sah digunakan di repository agar website tidak bergantung pada URL eksternal.

### Format dan konsistensi visual
- Utamakan SVG yang bersih dan ringan. Jika SVG tidak tersedia secara gratis dengan lisensi yang sesuai, evaluasi PNG transparan beresolusi cukup atau sumber alternatif yang lebih sesuai.
- Gunakan satu keluarga/gaya ikon yang konsisten (misalnya outline seluruhnya atau filled seluruhnya). Jangan mencampur gaya secara acak.
- Ikon harus tetap terbaca pada ukuran kecil, memiliki bentuk sederhana, dan tidak mengandung teks dekoratif.
- Warna ikon sebaiknya dapat diselaraskan dengan sistem warna NFShark tanpa merusak atribusi atau ketentuan lisensi.
- Jangan menggunakan emoji sebagai pengganti ikon final.

### Konsep ikon yang dicari
| Menu | Konsep pencarian ikon |
|---|---|
| Langganan Website | repeat, refresh-cw, recurring, cycle |
| Pesan Website | message-square, messages, file-pen-line |
| Paket Website | layers, package, layout-grid |
| FAQ | circle-help, help-circle |
| Bantuan | life-buoy, headset, messages-square |
| Syarat & Ketentuan | file-text, clipboard-list, scale |

### Dokumentasi aset wajib
Untuk setiap ikon yang dipakai, catat:
- Nama aset dan nama pembuat/kontributor.
- URL halaman aset asli.
- Nama lisensi dan URL ketentuan lisensi yang berlaku.
- Apakah penggunaan komersial diizinkan.
- Teks atribusi persis yang diwajibkan dan lokasi kredit pada website.
- Format dan lokasi file di repository.
- Tanggal unduh/pemeriksaan lisensi.

Jangan menulis klaim lisensi yang tidak didukung halaman aset atau ketentuan resminya. Simpan catatan atribusi di tempat yang mudah ditemukan, misalnya halaman kredit atau bagian kredit yang sesuai, tanpa membuat tampilan utama navigasi menjadi ramai.

## Pemeriksaan sebelum implementasi
1. Baca dokumen ini dan semua instruksi repository yang relevan.
2. Periksa halaman studio, halaman Brief, halaman paket, FAQ, bantuan, dan S&K yang benar-benar ada. Pastikan URL tujuan tidak ditebak.
3. Periksa container yang akan diganti dan identifikasi CSS/JS yang terkait agar tidak menghapus fungsi lain.
4. Cari ikon pada sumber yang ditentukan, periksa lisensi per aset, lalu pilih satu gaya ikon yang konsisten.
5. Simpan metadata lisensi dan atribusi setiap ikon.
6. Implementasikan navigasi sesuai perilaku responsif di atas. Jangan mengerjakan isi/mesin layanan langganan di luar kebutuhan tautan dan tampilan navigasi.
7. Pindahkan informasi paket ke halaman tersendiri dan perbarui tautan terkait tanpa duplikasi konten.
8. Uji HP, tablet, desktop, horizontal scroll, tombol Tampilan semua, keyboard, fokus, tautan, dan kondisi reduced motion.
9. Pastikan tidak ada tautan mati, ikon tanpa catatan lisensi, kesalahan konsol yang relevan, atau regresi pada halaman studio.
10. Catat file yang berubah dan hasil verifikasi sesuai prosedur `Otomatis/Intruksi.md`.

## Referensi lisensi yang perlu diperiksa ulang saat memilih aset
- Flaticon Terms: https://www.flaticon.com/legal
- Flaticon pricing/download formats: https://www.flaticon.com/pricing
- FreeIcons: https://freeicons.io/
- Informasi atribusi FreeIcons yang ditampilkan pada situs: https://freeicons.io/

Ketentuan dapat berubah. Pemeriksaan pada tanggal pengunduhan dan halaman lisensi spesifik aset tetap menjadi acuan utama.
