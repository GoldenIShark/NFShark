---
name: website-structure
description: "Gunakan saat menentukan atau memeriksa struktur website berdasarkan kategorinya: isi header, navbar, hero, section, dan footer. Berlaku untuk situs utama dan situs portofolio."
---

# Struktur Website per Kategori

## Tujuan
Menentukan elemen apa saja yang ada di header, navbar, dan footer, serta urutan section di halaman utama, sesuai kategori website. Skill ini dipakai sebelum membuat halaman, dan sebagai acuan saat memeriksa halaman yang sudah ada.

## Aturan dasar
1. **Tentukan kategori dulu.** Pilih satu kategori utama dari daftar di bawah. Jika cocok dengan dua kategori, pilih yang tujuan utamanya paling kuat, lalu catat kategori kedua sebagai pelengkap.
2. **Pakai komponen wajib dulu.** Komponen wajib harus ada. Komponen opsional hanya ditambahkan jika ada isinya.
3. **Jangan mengarang isi.** Kontak, alamat, harga, testimoni, logo klien, jumlah proyek, dan sertifikasi hanya ditampilkan jika informasinya tersedia dari brief atau sumber proyek. Jika belum ada, tandai "perlu konfirmasi", jangan diisi.
4. **Navbar maksimal 7 item.** Item lebih dari itu dikelompokkan atau dipindah ke halaman lain.
5. **Setiap item navbar harus punya halaman tujuan atau anchor yang nyata.** Jangan menambah item navigasi untuk halaman yang belum dibuat.
6. **Satu tindakan utama per halaman.** Tombol CTA utama hanya satu. CTA sekunder boleh, tetapi harus jelas bedanya.
7. **Gunakan label yang dipahami pengunjung.** Contoh: "Layanan", "Proyek", "Harga", "Hubungi Kami". Hindari istilah internal.

## Komponen umum
Berlaku untuk semua kategori kecuali disebutkan lain.

**Header**
- Wajib: logo atau nama situs, navbar.
- Opsional: tombol CTA singkat (misalnya "Hubungi Kami").

**Navbar**
- Wajib: tautan ke halaman utama, dan tautan ke halaman inti kategori.
- Opsional: tombol CTA, pencarian (hanya jika konten cukup banyak).
- Di layar kecil: menu harus bisa dibuka dan ditutup, dengan status yang jelas.

**Footer**
- Wajib: nama situs, hak cipta, tautan navigasi utama.
- Opsional: kontak, media sosial, tautan kebijakan (jika sudah ada halamannya).
- Jangan mencantumkan kebijakan privasi atau syarat layanan jika halamannya belum tersedia.

## Kategori

### 1. Bisnis jasa
Untuk: layanan profesional, agensi, konsultan, bengkel, klinik, dan sejenisnya.
- **Navbar**: Beranda, Layanan, Tentang, Proyek atau Contoh Kerja (jika ada), Kontak.
- **Section halaman utama** (urutan):
  1. Hero: nilai utama layanan dan satu CTA.
  2. Layanan: daftar layanan utama dengan penjelasan singkat.
  3. Keunggulan atau cara kerja: tiga sampai lima poin yang didukung informasi nyata.
  4. Bukti kepercayaan: contoh kerja, klien, atau testimoni, jika tersedia.
  5. Ajakan bertindak: CTA kedua yang mengarah ke kontak.
  6. Kontak atau formulir singkat.
- **Footer**: kontak dasar, jam layanan (jika ada), tautan layanan.

### 2. Portofolio
Untuk: pribadi atau tim yang menampilkan karya.
- **Navbar**: Beranda, Karya atau Proyek, Tentang, Kontak.
- **Section halaman utama**:
  1. Hero: nama, peran, dan satu kalimat tentang keahlian.
  2. Karya pilihan: tampilkan proyek terbaik lebih dulu.
  3. Tentang: latar belakang singkat.
  4. Kontak.
- **Halaman detail proyek** (jika ada): judul, peran, konteks, hasil, dan gambar. Setiap gambar harus merujuk ke proyek yang benar.
- **Footer**: nama, tautan ke karya, kontak.

### 3. Toko atau produk
Untuk: penjualan produk fisik atau digital.
- **Navbar**: Beranda, Produk atau Katalog, Kategori (jika banyak produk), Keranjang atau Pesan (jika ada fungsinya), Bantuan.
- **Section halaman utama**:
  1. Hero: produk atau promo utama dan tombol lihat produk.
  2. Kategori produk.
  3. Produk unggulan.
  4. Keunggulan belanja: pengiriman, pembayaran, pengembalian, hanya jika informasinya ada.
  5. Pertanyaan umum singkat.
- **Footer**: tautan bantuan, kebijakan pengiriman dan pengembalian (jika ada), kontak.
- Catatan: fitur keranjang dan pembayaran memerlukan layanan di luar lingkup front-end. Tandai sebagai "perlu konfirmasi" jika diminta.

### 4. Landing page
Untuk: satu tujuan spesifik, misalnya pendaftaran, unduhan, atau pemesanan.
- **Navbar**: boleh tidak ada. Jika ada, hanya logo dan satu CTA.
- **Section halaman utama**:
  1. Hero: satu pesan utama dan satu CTA.
  2. Masalah atau kebutuhan pengunjung.
  3. Solusi dan manfaat.
  4. Bukti kepercayaan, jika tersedia.
  5. CTA penutup yang sama dengan CTA hero.
- **Footer**: minimal, nama dan tautan kebijakan jika ada.
- Hindari tautan navigasi yang mengalihkan pengunjung dari tujuan utama.

### 5. Blog atau konten
Untuk: artikel, tulisan, atau kanal informasi yang diperbarui berkala.
- **Navbar**: Beranda, Artikel atau Tulisan, Kategori (jika ada), Tentang, Kontak.
- **Section halaman utama**:
  1. Artikel terbaru.
  2. Kategori atau topik.
  3. Artikel pilihan.
  4. Langganan atau kontak (hanya jika fiturnya ada).
- **Halaman artikel**: judul, tanggal, penulis, isi, dan artikel terkait.
- **Footer**: tautan kategori, tautan tentang, kontak.

### 6. Organisasi atau komunitas
Untuk: yayasan, komunitas, sekolah, atau kelompok kegiatan.
- **Navbar**: Beranda, Tentang, Kegiatan atau Program, Berita (jika ada), Kontak atau Bergabung.
- **Section halaman utama**:
  1. Hero: nama dan tujuan organisasi.
  2. Program atau kegiatan utama.
  3. Cara terlibat atau bergabung.
  4. Berita atau kegiatan terbaru.
  5. Kontak.
- **Footer**: alamat dan kontak (jika ada), tautan media sosial (jika ada), tautan kebijakan.

## Kategori tidak dikenal
Jika kategori tidak ada dalam daftar, gunakan komponen umum dan tanyakan struktur yang diinginkan sebelum menambahkan section khusus.

## Kombinasi kategori
Ambil navbar dari kategori utama. Section tambahan dari kategori pelengkap hanya dipakai jika tujuannya mendukung tujuan utama. Batasi total section halaman utama maksimal 7.

## Pemeriksaan sebelum selesai
- Kategori sudah dipilih dan dicatat.
- Semua komponen wajib ada.
- Tidak ada item navbar yang tidak punya tujuan nyata.
- Navbar tidak lebih dari 7 item.
- Tidak ada konten yang dikarang.
- Hanya satu CTA utama di halaman.
- Struktur tetap bisa dipakai di layar kecil.

Untuk isi teks, gunakan `website-content`. Untuk paket dan ruang lingkup, gunakan `website-planning`. Untuk tampilan, gunakan `human-ui-design` dan `responsive-web`.
