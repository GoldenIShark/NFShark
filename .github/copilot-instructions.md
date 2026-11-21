# Petunjuk Copilot untuk repository HOME

## Konteks proyek
- Ini adalah situs NFShark berbahasa Indonesia. Halaman utama berada di `index.html`; interaksi di `script.js`; gaya di `style.css`; aset situs utama berada di `assets/`.
- `portofolio/` berisi situs-situs portofolio yang dapat memiliki struktur dan aset masing-masing. Perlakukan setiap subfolder situs sebagai proyek mandiri dan periksa struktur aktual sebelum mengubahnya.
- Deliverable utama adalah website statis/display-only yang cocok di-hosting pada static hosting. Gunakan HTML, CSS, dan Vanilla JavaScript; pertahankan implementasi situs yang ada.
- Jangan memakai framework atau library besar kecuali benar-benar diperlukan untuk memenuhi kebutuhan yang dinyatakan. Jelaskan kebutuhan tersebut dan dapatkan persetujuan sebelum menambahkannya; jangan menambahkan paket, dependensi, backend, atau build step secara otomatis.

## Prioritas pengerjaan
1. Penuhi tujuan pengguna dan kebutuhan audiens terlebih dahulu; kejelasan, kegunaan, aksesibilitas, dan kepercayaan lebih penting daripada dekorasi.
2. Pertahankan identitas dan konten yang sudah ada. Jangan mengarang klaim bisnis, testimoni, harga, data, atau tautan. Tanyakan atau tandai informasi yang belum tersedia.
3. Buat perubahan sekecil mungkin pada file yang relevan. Jangan mengubah situs utama ketika permintaan hanya menyasar situs di `portofolio/`, atau sebaliknya.
4. Utamakan pendekatan mobile-first, performa ringan, HTML semantik, interaksi keyboard yang dapat digunakan, serta pengalaman yang konsisten pada berbagai ukuran layar.
5. Jangan menghapus atau mengganti aset asli sebelum pengganti dan semua referensinya tervalidasi. Pertahankan nama, struktur, dan path relatif yang bekerja.

## Cara bekerja
- Sebelum mengedit, baca file dan pola di area sasaran; periksa status Git agar perubahan yang sudah ada tidak tertimpa. Jangan mengedit `.git/`.
2. Baca `history/README.md` dan riwayat `history/changes.jsonl` yang relevan sebelum mengubah file; gunakan Git diff/commit untuk detail teknis.
3. Untuk website baru atau perombakan besar, pahami proyek dan susun rencana sebelum mulai coding. Pengecualian: perubahan kecil yang terfokus pada situs yang sudah ada boleh langsung dikerjakan setelah memeriksa konteks dan dampaknya.
4. Tentukan tujuan halaman, audiens, CTA, hierarki konten, dan batasan sebelum menyusun atau merombak antarmuka.
5. Gunakan skill yang paling relevan dari `.github/skills/daftar-file.md`; baca seluruh `SKILL.md` skill tersebut sebelum menerapkannya. Untuk permintaan lintas bidang, kombinasikan skill yang diperlukan, bukan semuanya secara otomatis.
6. Pertahankan bahasa Indonesia pada antarmuka dan dokumentasi bila sesuai konteks situs. Gunakan label, instruksi, dan pesan kesalahan yang lugas dan konsisten.
7. Jangan mengubah file di luar lingkup, menambah dependensi, atau melakukan perubahan destruktif tanpa izin. Jangan mengklaim pengujian telah dilakukan jika belum.
8. Setelah perubahan, jalankan validasi paling relevan yang tersedia tanpa instalasi dependensi baru; periksa diff dan pastikan hanya file yang dimaksud berubah. Laporkan keterbatasan pengujian secara jujur.

## Peta skill
- Perencanaan dan struktur halaman: `website-planning`
- Implementasi HTML/CSS/JavaScript: `frontend-development`
- Hierarki visual, estetika, dan UX: `human-ui-design`
- Layout lintas viewport: `responsive-web`
- Transisi dan gerak: `web-animation`
- Copywriting dan struktur pesan: `website-content`
- Gambar, ikon, dan berkas visual: `asset-management`
- Metadata, semantik, dan aksesibilitas: `seo-accessibility`
- Kecepatan dan bobot halaman: `performance`
- Pemeriksaan perilaku dan regresi: `website-testing`
- Operasi Git/GitHub dan tinjauan perubahan: `github-management`
- Pemeliharaan, audit, dan perbaikan bertahap: `website-maintenance`
- Pembuatan/penambahan skill dan tooling otomatis baru: `skill-creator`

## Riwayat perubahan (JSONL)

- Sumber ringkasan perubahan adalah `history/changes.jsonl`. Baca `history/README.md` untuk skema dan aturan lengkap.
- Sebelum pekerjaan yang berpotensi mengubah file, baca panduan lalu telusuri entri terbaru dan cari entri yang terkait dengan file/fitur sasaran. Tidak perlu membaca seluruh log: gunakan 20 entri terakhir dan pencarian berdasarkan path, ID, atau kata kunci bila tersedia.
- Setelah satu tugas/perubahan logis selesai, tambahkan **tepat satu baris JSON valid** untuk satu rangkaian perubahan tersebut. Satu baris dapat mencantumkan beberapa file yang berubah dalam tugas yang sama. Jangan membuat satu baris per file dan jangan memecah satu tugas menjadi banyak entri.
- Catat hanya perubahan yang benar-benar terjadi. Kelompokkan path ke `added`, `modified`, `deleted`, dan `renamed`; sertakan ringkasan, dampak, dan status verifikasi singkat. Jangan menyimpan dump diff, seluruh isi file, atau daftar command yang panjang.
- Jangan membuat log untuk tugas read-only atau jika tidak ada file yang berubah. Jangan mencatat rencana sebagai implementasi.
- Git commit/diff tetap menjadi sumber kebenaran untuk detail teknis. Jangan menyalin seluruh diff ke JSONL. Jika SHA commit tersedia, cantumkan; jika tidak, hilangkan.
- `catatan.md` dan `catatan-vN.md` adalah arsip format lama. Pertahankan sebagai riwayat lama; jangan menambahkan entri baru ke sana.

## Sinkronisasi inventaris `list/`

- Baca `list/index.json` dan hanya dokumen yang relevan ketika pekerjaan menyentuh fitur, bug, rencana, atau data inventaris.
- Perbarui dokumen `list/` hanya jika fakta yang dicatat di dalamnya benar-benar berubah: fitur ditambah/diubah/dihapus, masalah ditemukan/statusnya berubah, atau rencana/progres berubah.
- Perubahan kosmetik kecil, typo, refactor internal, atau perubahan dokumentasi yang tidak mengubah inventaris **tidak mewajibkan** pembaruan `list/`.
- Jika dokumen relevan memiliki `updatedAt` lebih dari 14 hari dan datanya diperlukan untuk mengambil keputusan, cocokkan bagian terkait dengan source aktual. Jangan mengubah tanggal tanpa verifikasi.
- Jangan membuat fitur, masalah, progres, atau hasil pengujian fiktif. Perbarui hanya kategori yang benar-benar terdampak.
- Jika pekerjaan hanya read-only, cukup laporkan file yang diperiksa dan temuan; jangan membuat log atau mengubah inventaris.

## Pelaporan file

Setiap laporan setelah perubahan wajib memisahkan file yang **ditambahkan**, **diubah**, **dihapus**, dan **dipindahkan/di-rename**. Tulis `Tidak ada` untuk kategori yang kosong.

## Aturan khusus aset portofolio
Untuk pekerjaan gambar pada situs di `portofolio/`, gunakan skill `asset-management` dan patuhi `Tools/skills/convert-images-to-webp/SKILL.md` (beserta tool Python `convert_to_webp.py`) bila konversi relevan. Periksa hanya folder aset situs yang sedang dikerjakan (`portofolio/<kategori>/<website>/assets/`, atau `portofolio/<kategori>/assets/` jika situs berada langsung di kategori). Jangan mengubah `assets/` situs utama kecuali diminta. Jangan mengonversi SVG secara otomatis atau meratakan GIF animasi.



## Sinkronisasi inventaris `list/`

Perbarui dokumen `list/` hanya jika fakta inventaris yang dicatat benar-benar berubah (fitur, masalah/status, rencana/progres). Perubahan kosmetik kecil, typo, refactor internal, dan dokumentasi yang tidak mengubah inventaris tidak mewajibkan pembaruan. Baca `list/index.json` dan dokumen yang relevan saat pekerjaan menyentuh inventaris; jika `updatedAt` lebih dari 14 hari dan data diperlukan, cocokkan bagian terkait dengan source aktual. Jangan mengarang status atau hasil uji.

## Indeks skills
Sebelum memilih skill, baca `.github/skills/daftar-file.md` untuk menemukan sumber skill di `Tools/skills/<nama-skill>/SKILL.md`. Baca file sumber yang relevan secara lengkap; jangan mencari SKILL.md pada direktori skills lama.
