# Catatan Teknis Lintas Agent

Tanggal: 2026-10-25

## Area
- Tahap 2 Perombakan: Pembuatan `index-studio.html` & `css/style-studio.css` (Minimalist Editorial Digital Studio) serta perombakan UI pada `faq.css` dan `feedback.css`.

## Fakta dan keputusan
- File asli `index.html` dan `css/style.css` dipertahankan 100% utuh tanpa perubahan (tidak diganti/ditimpa).
- Dibuat `index-studio.html` dan `css/style-studio.css` yang mewujudkan seluruh ketentuan desain Digital Studio / Web Design Studio:
  1. Tata letak 9 bagian: Navbar sticky (Escape & focus return), Hero dengan mockup terukur, Profil studio 2 kolom (45/55), Layanan latar krem dengan accordion ARIA, Portofolio grid 2 kolom dengan rasio WebP konsisten, Keunggulan 3 kolom, Tabel paket harga semantik latar krem, CTA kontak WhatsApp/Brief latar hijau gelap, dan Footer.
  2. Palet warna alternasi: Hijau Gelap Studio (`#091915`), Krem Terang Editorial (`#f6f3eb`), Mint (`#2dd4bf`), dan Lime (`#bef264`).
  3. Tipografi editorial Playfair Display (Serif) dan Plus Jakarta Sans (Sans-serif) dengan `font-display: swap`.
  4. Seluruh target anchor memiliki `scroll-margin-top: 84px` agar tidak tertutup header sticky.
- Halaman `faq.html` dan `feedback.html` dirombak UI/UX-nya melalui `css/faq.css` dan `css/feedback.css`:
  - Input teks, select, dan textarea diperbarui dengan transisi fokus halus dan ring fokus warna mint (`--color-mint`).
  - Kategori filter dan tombol tautan beranda diperbarui dengan efek hover dan transisi fluid.
  - Struktur HTML, logika fungsional, dan desain asli halaman FAQ & Feedback tetap utuh tanpa perubahan destruktif.
- Seluruh folder `portofolio/` tidak disentuh.

## Dampak
- Halaman utama memiliki varian baru berstandar Digital Studio modern yang siap dipratinjau secara berdampingan tanpa mengorbankan file asli.
- Seluruh formulir dan input pada FAQ dan Feedback kini selaras dengan sentuhan UI/UX modern NFShark.

## Status
- `index-studio.html`, `css/style-studio.css`, `css/faq.css`, dan `css/feedback.css` selesai divalidasi dan bebas error sintaks.

## Command dan batasan
- Penulisan file dilakukan secara atomik melalui tooling workspace.

---


Tanggal: 2026-10-25

## Area
- Dokumentasi UI & Halaman Pratinjau: Pembuatan `Daftar-UI.md` dan restrukturisasi `ui-preview.html`.

## Fakta dan keputusan
- Dibuat file `Daftar-UI.md` yang memuat katalog lengkap komponen UI & UX:
  1. Sistem Token & Variabel CSS (`:root`) untuk warna brand classic, tema Minimalist Editorial, dan tipografi/radius.
  2. Kategori Tombol: Solid Press, Glass Press, dan Editorial (`.btn-lime`, `.btn-outline-editorial`).
  3. Kategori Kartu & Permukaan: `.card-editorial`, `.card-editorial-dark`, `.card-editorial-cream`, `.card-interactive`.
  4. Kategori Formulir & Input: `.form-group-editorial`, `.label-editorial`, `.input-editorial`, `.textarea-editorial`, serta status validasi native.
  5. Kategori Badge, Accordion ARIA, Media Frame (Anti-CLS), Header, dan Footer.
- Halaman `ui-preview.html` diperbarui menjadi pusat katalog visual interaktif yang menampilkan seluruh kategori komponen UI beserta label kelas CSS yang digunakan.
- Ditambahkan skrip interaksi ringan native untuk demonstrasi fungsional accordion pada `ui-preview.html`.

## Dampak
- Pengembang dan pengarah proyek memiliki referensi dokumentasi markdown terpusat (`Daftar-UI.md`) dan halaman visual (`ui-preview.html`) untuk memeriksa seluruh kelas komponen CSS tanpa harus menebak nama selector.

## Status
- `Daftar-UI.md` dan `ui-preview.html` selesai dibuat dan divalidasi. Tidak ada error sintaks.

## Command dan batasan
- Penulisan file dilakukan secara atomik melalui tooling workspace.

---


Tanggal: 2026-10-25

## Area
- Desain Sistem Global: Deklarasi Template UI/UX & Token Minimalist Editorial (`css/common.css`).

## Fakta dan keputusan
- Ditambahkan token warna editorial ke `:root` di `css/common.css`: `--color-dark` (#091915), `--color-dark-surface` (#102621), `--color-cream` (#f6f3eb), `--color-mint` (#2dd4bf), `--color-lime` (#bef264), dan token tipografi fluid tanpa menghapus variabel lama.
- Ditambahkan modul template UI & UX siap pakai:
  1. Card Components: `.card-editorial`, `.card-editorial-dark`, `.card-editorial-cream`, `.card-interactive`.
  2. Button & Badge: `.btn-lime`, `.btn-outline-editorial`, `.badge-editorial`, `.badge-mint`, `.badge-lime`.
  3. Form & Input: `.form-group-editorial`, `.label-editorial`, `.input-editorial`, `.textarea-editorial` (target sentuh 48px, fokus mint).
  4. Accordion Aksesibel: `.accordion-editorial`, `.accordion-trigger` (dengan rotasi ikon & ARIA state), `.accordion-panel` (transisi grid-template-rows zero-layout-shift).
  5. Frame Media: `.frame-editorial` (aspect-ratio 16/10 anti-CLS).
- Tidak ada kelas atau variabel lama yang dihapus sehingga halaman pendukung (`brief.html`, `faq.html`, `feedback.html`) tetap berfungsi normal.

## Dampak
- Seluruh komponen antarmuka untuk perombakan halaman utama (dan halaman lainnya) kini memiliki standar kelas modular yang konsisten, aksesibel, dan terisolasi.

## Status
- `css/common.css` berhasil diperbarui dan divalidasi melalui `git diff`. Tidak ditemukan error sintaks.

## Command dan batasan
- Skrip pembantu pembaruan dijalankan secara lokal via python tanpa dependensi eksternal.

---


Tanggal: 2026-10-25

## Area
- Konfigurasi native Antigravity workspace: `.agents/` (`.agents/skills/` dan `.agents/agents/`).

## Fakta dan keputusan
- Direktori native `.agents/` dibuat di root repository sesuai standar Antigravity Customization Discovery.
- Seluruh skill dari `.github/skills/` disalin ke `.agents/skills/`.
- Seluruh definisi agent dari `.github/agents/` disalin ke `.agents/agents/`.
- File asli di `.github/` dan kode website tidak diubah sama sekali.

## Dampak
- Antigravity kini dapat langsung mendeteksi dan memuat skills serta agents melalui jalur discovery native workspace `.agents/`.

## Status
- Struktur `.agents/skills/` dan `.agents/agents/` lengkap dan terverifikasi via PowerShell.

## Command dan batasan
- `Copy-Item -Path ".github\skills" -Destination ".agents\skills" -Recurse -Force` dan `Copy-Item -Path ".github\agents" -Destination ".agents\agents" -Recurse -Force` berhasil dieksekusi.
- `Get-ChildItem -Path .agents -Recurse` mengonfirmasi seluruh 12 folder skill dan 4 file agent tersalin dengan utuh.

---

Tanggal: 2026-10-24

## Area
- Judul kartu demo pada bagian Portofolio halaman utama (`index.html`).

## Fakta dan keputusan
- Lima judul kartu disamakan dengan identitas demo dan kategori paket: Aura Rasa — Basic, Ruang Rasa — Popular, NAYA SUPPLY — Premium, SMA Cakrawala Nusa — Premium, dan NEXORA Business — Popular.
- Judul aksesibel pada iframe pratinjau juga diperbarui. Path demo dan urutan kartu dipertahankan.

## Dampak
- Pengunjung dapat mengenali nama demo dan kategori paket pada daftar portofolio beranda.

## Status
- Pemeriksaan DOM browser lulus untuk kelima judul, judul aksesibel iframe, path pratinjau, dan tautan langsung.

## Command dan batasan
- `git status --short` sebelum edit tidak menampilkan perubahan lokal.
- Nama dan tujuan demo dicocokkan dengan file HTML masing-masing di `portofolio/`.
- Pemeriksaan PowerShell dengan pencocokan literal Unicode menghasilkan false negative; pemeriksaan ulang melalui DOM browser lulus untuk seluruh lima kartu.

---

Tanggal: 2026-10-24

## Area
- Website demo restoran `portofolio/restoran-basic/` (HTML, CSS, JavaScript, README).

## Fakta dan keputusan
- Alur halaman disusun menjadi Beranda, Tentang, Menu, Galeri, Lokasi/Kontak, dan Footer; navigasi menggunakan anchor internal.
- Nama Aura Rasa dipertahankan sebagai identitas demo yang tertera pada README. Harga, hidangan, cerita, alamat, jam buka, nomor WhatsApp, dan URL peta lama dihapus karena tidak memiliki sumber terverifikasi.
- Satu-satunya gambar, `assets/images/preview.webp` (10.720 byte), adalah ilustrasi abstrak NFShark, bukan foto restoran. Slot hero dan galeri ditandai perlu materi; aset tidak diubah.
- Palet hangat dan font sistem bersifat sementara; font eksternal dan tautan layanan yang tidak valid dihapus. Tidak ada dependensi atau backend baru.

## Dampak
- Pengunjung dapat menavigasi semua section dan melihat dengan jelas informasi restoran yang masih menunggu konfirmasi, tanpa klaim bisnis atau CTA eksternal palsu.
- Menu mobile menyampaikan state aksesibel dan dapat ditutup dengan Escape atau setelah tautan dipilih.

## Status
- Selesai. Browser lokal menguji lebar 320, 375, 390, 414, 768, 1024, dan 1280 px tanpa horizontal overflow.
- Navigasi diuji dengan keyboard: Enter membuka, Escape menutup dan mengembalikan fokus, tautan menutup menu serta menuju anchor yang benar. Tidak ada console error atau request eksternal.
- Satu `h1`, semua target anchor, metadata halaman, dan status reduced motion terverifikasi. Rasio kontras label aksen terhadap latar terang 5,52:1.
- Foto tidak dapat diverifikasi karena tidak ada foto restoran tersedia; halaman memakai placeholder berlabel materi dan tidak memiliki elemen gambar yang rusak.

## Command dan batasan
- Status Git sebelum edit bersih. `Get-Item` mengonfirmasi aset `preview.webp` berukuran 10.720 byte.
- `node --check portofolio/restoran-basic/script.js` lulus. Pemeriksaan browser dilakukan pada file lokal `index.html`.
- Belum ada data restoran maupun foto autentik yang dapat dimasukkan; materi tersebut tetap perlu dikonfirmasi pemilik.

---

Tanggal: 2026-10-23

## Area
- Kartu portofolio situs restoran Basic di halaman utama (`index.html`).

## Fakta dan keputusan
- Demo `portofolio/restoran-basic/index.html` ditambahkan sebagai kartu tersendiri setelah demo restoran yang sudah ada.
- Kartu mengikuti struktur portofolio beranda: pratinjau iframe, deskripsi, dan tautan langsung. Toggle tidak perlu diubah karena batas tampilnya 10 kartu.

## Dampak
- Pengunjung dapat melihat pratinjau dan membuka demo Aura Rasa dari bagian Portofolio halaman utama.

## Status
- Implementasi selesai; `portofolio/restoran-basic/index.html` terverifikasi ada, dengan satu pratinjau iframe dan satu tautan langsung pada beranda.

## Command dan batasan
- `git status --short` dijalankan sebelum edit dan tidak menampilkan perubahan lokal.
- Pemeriksaan PowerShell `Test-Path` dan pencocokan pola pada `index.html` lulus. Pemeriksaan tampilan browser belum dilakukan.
- `git -c core.whitespace=cr-at-eol diff --check` lulus; pemeriksaan standar menandai CRLF file sebagai trailing whitespace.

## Area
- Pengaturan instruksi repository `.github/copilot-instructions.md`.
- Penambahan skill & tooling baru di `.github/skills/skill-creator/` dan `.github/skills/convert-images-to-webp/`.
- Pemisahan portofolio restoran:
  - `portofolio/restoran/`: Dikembalikan ke versi asli (Ruang Rasa - gaya Popular/Premium dengan animasi, filter menu, dan lightbox).
  - `portofolio/restoran-basic/`: Dibuat folder baru khusus untuk demo Paket Basic NFShark (Aura Rasa).

## Fakta dan keputusan
- Folder `portofolio/restoran/` (Ruang Rasa) dipertahankan 100% utuh tanpa perubahan sedikit pun dari versi asli repository (`git checkout HEAD`).
- Folder baru `portofolio/restoran-basic/` (Aura Rasa) resmi ditambahkan khusus untuk mendemonstrasikan **Paket Basic NFShark**:
  - Struktur 1 halaman fokus, cepat, dan responsif.
  - Slogan performa NFShark: *"Website Cepat, Ringan & Responsif — Mengutamakan Performa untuk Bisnis Nyata"*.
  - Palet warna: Biru Gelap Luar Angkasa (`#0B1325`), Hijau Segar (`#10B981`), Biru Langit (`#38BDF8`), dengan 3 warna pelengkap: Mint Ice (`#F0FDF4`), Slate Gray (`#94A3B8`), dan Soft White (`#F8FAFC`).
  - Gambar produk menggunakan satu gambar pratinjau tunggal teroptimasi WebP seragam: `preview.webp` (~10 KB).
  - Vanilla JS ultra-ringan tanpa library berat, ramah aksesibilitas keyboard (Escape & fokus).
- Tooling otomatis WebP: Tersedia script Python CLI yang reusable (`.github/skills/convert-images-to-webp/convert_to_webp.py`).
- Skill Creator: Panduan pembuatan skill baru didokumentasikan di `.github/skills/skill-creator/SKILL.md`.
- Aturan pencatatan file: Setiap perubahan file di repository wajib dicatat di `/catatan.md`.

## Dampak
- Folder portofolio asli `restoran/` tetap aman dan tidak mengalami modifikasi.
- Portofolio baru `restoran-basic/` tersedia mandiri sebagai representasi akurat website Paket Basic NFShark.

## Status
- `git diff portofolio/restoran/` bersih tanpa perubahan (0 diff).
- `node --check portofolio/restoran/script.js` dan `node --check portofolio/restoran-basic/script.js` lulus validasi sintaks.
- Script python `convert_to_webp.py` terverifikasi.

## Command dan batasan
- `git checkout HEAD -- portofolio/restoran/` sukses memulihkan seluruh file asli `portofolio/restoran/`.
- `git status --short` mengonfirmasi `portofolio/restoran/` tidak termodifikasi, dan `portofolio/restoran-basic/` telah ditambahkan.

---

Tanggal: 2026-10-18

## Area
- Situs utama NFShark: fondasi UI, pratinjau portofolio, dan pemuatan paket.
- Instruksi repository dan pemeriksaan teknis sesi ini.

## Fakta dan keputusan
- Stack situs utama tetap HTML, CSS, dan Vanilla JavaScript; tidak ada dependensi baru.
- Pengingat: jika ditanya apa saja yang diminta untuk diingat, ingatkan bahwa pratinjau portofolio bukan lewat tombol, melainkan melalui elemen gambar seperti pada lampiran (`div.portfolio-image` pada kartu portofolio).
- `css/common.css` menjadi fondasi token, reset, container, header/nav, tombol, footer, serta kontrol bersama. `css/common-animasi.css` memuat gerak ulang pakai; animasi paket dan layout beranda tetap di `css/style.css`.
- Tombol primary root memakai fill grass; secondary root transparan dengan border putih dan berubah grass saat interaksi. Preview `ui-components.css` memakai fill grass dan border putih untuk secondary/outline serta glass pada permukaan terang agar kontrasnya terjaga; markup `ui-preview.html` tetap terisolasi.
- Halaman utama, FAQ, Brief, dan Feedback memuat stylesheet dalam urutan `common.css`, `common-animasi.css`, lalu stylesheet halaman.
- Pratinjau demo memakai dialog native. `iframe` hanya menerima `src` setelah tombol pratinjau ditekan; event `load` tidak dipakai sebagai bukti keberhasilan dan tautan langsung tetap tersedia.
- Daftar paket memberikan status loading dan fallback Basic pada kegagalan. Skeleton tidak dipakai karena jeda fetch yang berarti belum dibuktikan.
- CSS reveal beranda progresif: item hanya disembunyikan setelah observer melaporkan item tidak terlihat. Tanpa JavaScript, `IntersectionObserver`, atau saat reduced motion aktif, konten tetap terlihat.
- Folder `portofolio/`, markup `ui-preview.html`, URL/kontak/akun, dan monogram demo tidak diubah. Pada tugas warna tombol, `css/ui-components.css` hanya diubah untuk varian tombol.

## Dampak
- Empat halaman utama sekarang berbagi fondasi CSS; komponen dan animasi khusus halaman tetap di stylesheet pemiliknya.
- Dialog pratinjau dapat dihentikan saat ditutup, memberi timeout dan pesan yang tidak mengklaim status demo, serta mempertahankan fallback buka langsung.
- Animasi bersama menghormati `prefers-reduced-motion` tanpa selector universal atau override `!important`.

## Status
- Implementasi selesai. Pemeriksaan editor dan `node --check js/script.js` tidak menemukan error.
- Empat halaman utama diperiksa pada lebar 320, 375, 390, 414, 768, 1024, dan 1280 px. Semua stylesheet termuat dalam urutan yang dimaksud dan tidak ditemukan overflow horizontal atau error console pada halaman utama.
- Dialog diuji dengan aktivasi keyboard, Escape, tombol tutup, pemulihan fokus, fallback link, pemuatan lokal, route gagal, timeout 12 detik, dan buka-tutup cepat. Dialog tidak overflow pada ketujuh lebar yang diuji.
- Fetch paket diuji sukses dan gagal; masing-masing mengakhiri `aria-busy=false`, dengan empat paket atau fallback Basic. Reduced motion, menu keyboard, screenshot beranda desktop 1280 px, dan modal mobile 375 px juga diperiksa.
- Warna tombol diperiksa pada halaman root: primary hijau; secondary transparan dengan teks/border putih; hover/active hijau. Preview terisolasi diuji untuk secondary, outline, hover, pressed, glass terang, dan disabled.
- Server lokal mencatat 404 untuk permintaan otomatis browser ke `/favicon.ico`; tidak ada referensi favicon yang ditambahkan dalam tugas ini dan temuan tersebut tidak diubah karena di luar file sasaran.
- Skeleton sengaja tidak ditambahkan karena latensi fetch yang bermakna belum terukur.

## Command dan batasan
- `git status --short --branch`, `git diff --stat`, dan `git diff --name-only` tersedia dan berhasil dijalankan sebelum edit.
- Perubahan lokal yang teramati sebelum tugas: `.github/agents/website-developer.agent.md` berubah; `css/ui-components.css` dan `ui-preview.html` belum dilacak. CSS preview kemudian diubah hanya untuk warna tombol sesuai permintaan; markup preview dan semua demo portofolio dipertahankan.
- `node --check js/script.js` tersedia dan berhasil. `git diff --check` default melaporkan karakter CR pada akhir baris file CRLF; pemeriksaan read-only `git -c core.whitespace=cr-at-eol diff --check` selesai tanpa temuan.
- Tidak ada command yang diblokir atau tidak tersedia pada sesi ini. Jika command kelak tidak tersedia, gunakan pemeriksaan read-only editor/VS Code dan catat sebagai keterbatasan, bukan sebagai command yang gagal.

---

Tanggal: 2026-11-01

## Area
- Halaman error utama NFShark: `404.html`, `error.html`, serta halaman baru `403.html` dan `500.html`.
- Sistem animasi bersama: `css/error-animation.css`, `js/error-animation.js`, dan `assets/image/nfshark-error-shark.svg`.

## Fakta dan keputusan
- Sebelum perubahan, worktree sudah memuat modifikasi pada `404.html` dan `error.html` serta file animasi dan SVG yang belum dilacak. Perubahan tersebut diperiksa dan dikembangkan, bukan dibuang.
- Halaman berbagi satu controller Vanilla JavaScript, stylesheet, dan karakter SVG; konfigurasi kode 404/403/500 tetap terpisah dari sistem animasi. Konten HTML statis tetap dapat dibaca bila script atau aset gagal.
- SVG lokal menggunakan bagian kepala, badan, mata, mulut, sirip, dan ekor yang dapat dikendalikan. Tidak ada aset pihak ketiga atau dependensi baru.
- SVG dimuat saat stage terlihat, maksimal tiga percobaan dengan jeda satu detik; retry, observer, timer, gelombang, dan frame intro dibersihkan saat halaman ditinggalkan. Jika gagal, hiu disembunyikan dan halaman tetap berfungsi.
- Gerakan inti tetap aktif pada pengaturan reduce-motion sesuai spesifikasi; efek pendukung seperti trail, gelombang sentuh, dan animasi judul dikurangi.
- `403.html` dan `500.html` tersedia sebagai halaman statis. Pemetaan respons HTTP 403/500 tidak diatur dalam repository ini; hosting statis yang digunakan perlu konfigurasi tersendiri untuk menyajikannya sebagai respons error.

## Dampak
- Halaman 404 dan fallback `error.html` memakai animasi bersama; halaman 403 dan 500 memakai konfigurasi dan perilaku yang sama.
- Hiu dapat bergerak acak, berganti arah, menyusuri tepi stage, mencari dekor digital, bereaksi terhadap klik/keyboard, dan menampilkan efek gelombang pointer yang tidak menghalangi kontrol.
- Perubahan terbatas pada empat halaman error, satu stylesheet, satu script, satu SVG, dan catatan ini. Situs utama selain halaman error tidak diubah.

## Status
- Pemeriksaan sintaks `node --check js\error-animation.js` lulus.
- Pemeriksaan Python `HTMLParser` memverifikasi struktur empat halaman, kode error, stylesheet/script bersama, dan path lokal; `ElementTree` memverifikasi SVG.
- Smoke test runtime Node memverifikasi pemuatan berhasil, konfigurasi 500, interaksi, retry tiga kali, fallback/logging, dan pembersihan resource pada `pagehide`.
- Pemeriksaan struktur CSS, kebijakan reduce-motion, dan `git -c core.whitespace=cr-at-eol diff --check` lulus.
- Pratinjau browser dan pemeriksaan viewport visual tidak dilakukan pada sesi ini; hasil smoke test bukan pengganti pengujian visual lintas perangkat.

## Command dan batasan
- `git status --short`; `rg -n "shark\.png|nfshark-error-shark\.svg|error-content|scaleX\(" 403.html 404.html 500.html error.html css/error-animation.css js/error-animation.js assets/image/nfshark-error-shark.svg`.
- `node --check js/error-animation.js`.
- Python inline (`HTMLParser` dan `ElementTree`) memeriksa halaman, referensi lokal, SVG/XML, bagian ilustrasi, dan invariant CSS/JS.
- `git diff --check` (CRLF ditandai oleh konfigurasi default) serta `git -c core.whitespace=cr-at-eol diff --check` dan `git -c core.whitespace=cr-at-eol diff --cached --check`.
- Pemeriksaan browser, console, dan visual lintas viewport tidak dilakukan.

---

Tanggal: 2026-11-01

## Ilustrasi dan lapisan hiu pada halaman error

### Area
- `css/error-animation.css`
- `js/error-animation.js`
- `assets/image/nfshark-error-shark.svg`
- `catatan.md`
- Perilaku bersama berlaku pada `403.html`, `404.html`, `500.html`, dan `error.html`; markup halaman dan perubahan lokal yang telah ada dipertahankan.

### Fakta dan keputusan teknis
- SVG original digambar menghadap ke kiri, dengan badan teal panjang, perut pucat, sirip dorsal/pectoral, ekor bercabang, mata, insang, dan garis mulut bergigi. Aset raster `shark.png` maupun watermark tidak digunakan.
- Nama bagian SVG `tail`, `body`, `fin`, `inspection-fin`, `head`, `eye`, dan `mouth` dipertahankan. Poros animasi ekor disesuaikan ke pangkal ekor; controller tetap memakai gerak viewport 2D, membalik SVG dasar kiri hanya untuk gerak ke kanan (`scaleX(-facing)`), dan mengompensasi arah tatapan horizontal saat mirror.
- `.error-content` tetap berada di atas hiu dengan permukaan gelap semi-transparan 78% agar hiu tampak melintas di belakang teks. Lapisan teks melewatkan pointer ke maskot dan tautan tetap interaktif. Stacking context stage tidak mengurung tombol agar ring fokus keyboard di atas konten tetap terlihat.
- Ilustrasi dimuat sebagai SVG lokal oleh sistem maskot yang sudah ada; tidak ada hiu duplikat, perubahan HTML, framework, dependensi, atau aset eksternal.

### Dampak
- Hiu tampak bergerak melalui area `.error-content` di bawah konten tanpa kehilangan gerak dua dimensi, mirror flip, animasi mata/mulut/ekor, atau interaksi klik/keyboard.
- CTA tetap dapat digunakan dan kontras konten ditopang lapisan permukaan gelap; empat halaman error tetap memakai satu maskot bersama.

### Status verifikasi
- `node --check js/error-animation.js` lulus.
- Python `HTMLParser` memeriksa empat halaman dan semua referensi lokal (termasuk `/` ke `index.html`); `ElementTree` membaca SVG sebagai XML dan memverifikasi bagian ilustrasi. Pemeriksaan CSS/JS memverifikasi lapisan konten, pointer CTA, poros ekor, serta transformasi arah.
- Uji arah 2D dan tatapan dengan `node -e` mengonfirmasi mirror untuk empat kombinasi gerak serta tatapan layar yang konsisten pada kedua orientasi.
- `git -c core.whitespace=cr-at-eol diff --check` dan pemeriksaan staged dengan opsi yang sama lulus. `git diff --check` tanpa opsi menandai CRLF pada perubahan lokal `catatan.md`; file sumber dan perubahan tersebut tetap dipertahankan.
- Pemeriksaan visual/browser, console, dan viewport perangkat tidak dilakukan; validasi statis bukan pengganti tinjauan visual.

### Command dan batasan
- `node --check js/error-animation.js`; `node -e` memeriksa arah transformasi untuk empat kombinasi dx/dy dan kompensasi tatapan.
- Python inline (`HTMLParser` dan `ElementTree`) memeriksa halaman, referensi lokal, SVG/XML, bagian ilustrasi, dan invariant CSS/JS.
- `git status --short`; `rg -n "shark\.png|nfshark-error-shark\.svg|error-content|scaleX\(" 403.html 404.html 500.html error.html css/error-animation.css js/error-animation.js assets/image/nfshark-error-shark.svg`.
- `git diff --check` (CRLF ditandai konfigurasi default), `git -c core.whitespace=cr-at-eol diff --check`, dan `git -c core.whitespace=cr-at-eol diff --cached --check`.
- Pemeriksaan browser, console, dan visual lintas viewport tidak dilakukan.
---

Tanggal: 2026-11-01

## Tindak lanjut posisi kaca pembesar dan trail hiu

### Area
- `css/error-animation.css` dan `catatan.md`; SVG, HTML, dan JavaScript dipertahankan.

### Keputusan teknis dan dampak
- Kaca pembesar diposisikan pada `left: 12%; top: 32%`; offset mode investigasi yang sudah ada (`translate(5px, -12px)`) dipertahankan. Geometri SVG kiri menempatkan lingkaran kaca di dekat mata setelah offset aktif.
- Trail memakai anchor lokal `left: 82%` di sisi ekor SVG. Seluruh tombol, termasuk `::after`, mengikuti transformasi mirror dari controller untuk `data-facing="-1"` dan `data-facing="1"`; karena itu CSS tidak memerlukan perubahan JS atau cabang arah yang keliru. Animasi/keyframe dan pengaturan gerak lainnya tidak diubah.
- Tidak ada HTML, aset, dependensi, atau file lain yang diubah.

### Status verifikasi
- `node --check js/error-animation.js` lulus.
- Pemeriksaan Python inline memverifikasi deklarasi posisi lensa, offset investigasi yang tetap, kedekatan posisi lingkaran lensa dengan mata pada geometri SVG, brace CSS, serta penggunaan `dataset.facing` dan mirror controller untuk trail.
- `git -c core.whitespace=cr-at-eol diff --check` dan `git -c core.whitespace=cr-at-eol diff --cached --check` lulus.
- Validator invariant awal dikoreksi agar memeriksa properti `dataset.facing` yang benar; pemeriksaan yang dikoreksi lulus.
- Visual browser, console, dan viewport tidak dilakukan.

### Command dan batasan
- `node --check js/error-animation.js`.
- PowerShell inline Python (`python -`) untuk invariant CSS/SVG/JS dan perkiraan posisi aktif lensa.
- `git -c core.whitespace=cr-at-eol diff --check`; `git -c core.whitespace=cr-at-eol diff --cached --check`.
- `git status --short`; `git --no-pager diff -- catatan.md`.

---

Tanggal: 2026-11-01

## Area
- Aturan lintas-agent untuk sinkronisasi dokumentasi data website di folder `list/`.
- Instruksi pusat repository, Copilot, Website Developer, dan Pengembangan Agent.

## Fakta dan keputusan
- Ditambahkan kewajiban membaca `list/index.json` dan dokumen data paling relevan sebelum setiap perubahan website.
- Ditetapkan pemeriksaan usia data 14 hari berdasarkan `updatedAt`; data yang lebih lama wajib direkonsiliasi dengan source aktual sebelum implementasi.
- Setiap perubahan website wajib diikuti pembaruan otomatis sekurang-kurangnya satu dokumen `list/`, meskipun pengguna tidak meminta pembaruan dokumentasi.
- Pemetaan dokumen ditetapkan: `daftar-fitur.json` untuk inventaris fitur, `daftar-masalah.json` untuk bug/temuan, dan `daftar-rencana.json` untuk progres/rencana. Beberapa dokumen diperbarui bila beberapa kategori terdampak.
- Kewajiban pencatatan seluruh file di `catatan.md` tetap berlaku dan tidak digantikan oleh dokumen `list/`.
- Agent perencana wajib meneruskan aturan sinkronisasi ini ke prompt agent pelaksana.

## Dampak
- Dokumentasi `list/` menjadi bagian dari alur wajib setiap perubahan website, baik perubahan dilakukan setelah instruksi eksplisit maupun sebagai tindak lanjut agent tanpa pengingat.
- Data yang berusia lebih dari 14 hari tidak boleh dianggap mutakhir tanpa pencocokan ulang dengan source.

## Status
- Instruksi diperbarui melalui GitHub. Pemeriksaan isi setelah penulisan perlu dilakukan; tidak ada klaim uji website karena perubahan ini hanya menyentuh dokumentasi/instruksi agent.

## Command dan batasan
- File dibaca melalui GitHub `fetch_file` dan diperbarui melalui GitHub `update_file`.
- Tidak ada command terminal atau pengujian browser yang dijalankan.


---

Tanggal: 2026-11-01

## Area
- Perbaikan navigasi atas halaman Syarat & Ketentuan: `persetujuan.html` dan `css/persetujuan.css`.
- Sinkronisasi temuan pada `list/daftar-masalah.json`.

## Fakta dan keputusan
- Sebelum perubahan, katalog `list/index.json` diperiksa dan dokumen `list/daftar-masalah.json` dipilih sebagai catatan temuan tata letak.
- Data daftar masalah terakhir bertanggal 2026-10-10 (lebih dari 14 hari), sehingga source `persetujuan.html` dan stylesheet terkait diperiksa ulang sebelum implementasi.
- Aset logo pada header diganti dari `LogoFull.webp` ke `Logo.webp` agar simbol logo tidak menampilkan varian logo penuh dalam ruang ikon; teks merek tetap berupa teks HTML.
- Pada viewport <=767px, header halaman ketentuan diatur menjadi baris horizontal: logo/simbol di atas teks NFShark pada sisi kiri, tautan “Kembali ke brief” di sisi kanan. Area tautan memiliki tinggi minimum 44px.
- Temuan dicatat sebagai MAS-002 dengan status selesai pada pemeriksaan source; verifikasi visual browser/perangkat belum dilakukan.

## Dampak
- Susunan navigasi atas halaman ketentuan pada aturan CSS mobile mengikuti permintaan: simbol logo di atas nama merek dan tautan kembali berada di samping kelompok merek.
- Perubahan dibatasi pada halaman ketentuan; header halaman lain tidak disentuh.

## Status
- Perubahan source dan dokumentasi dikirim ke branch `main`.
- Belum ada uji browser atau pemeriksaan visual perangkat nyata; tidak diklaim lulus.

## Command dan batasan
- Source dan dokumentasi dibaca melalui GitHub `fetch_file`; pembaruan dilakukan melalui GitHub `update_file`.
- Tidak ada command terminal, lint, atau pengujian browser yang dijalankan.


---

Tanggal: 2026-11-02

## Area
- Intro loading halaman utama NFShark: `index.html` dan `css/style-studio.css`.
- Sinkronisasi inventaris fitur dan rencana: `list/daftar-fitur.json` dan `list/daftar-rencana.json`.

## Fakta dan keputusan teknis
- Loading screen menggunakan logo lokal `assets/Logo/Logo.webp`, nama `nfshark`, teks `Preparing your experience`, serta progress bar dan persentase 0–100%.
- Urutan animasi: FadeIn 0,5 detik; progress 3,5 detik; fade-out konten loading 1 detik; circular reveal 1 detik. Total durasi sekitar 6 detik.
- Warna progress diinterpolasi dari `#303A33` (hitam kehijauan) ke `#43B65C` (hijau rumput).
- Circular reveal memakai radial mask transparan yang membesar dari titik tengah viewport; halaman utama berada di bawah lapisan loading sehingga terlihat melalui area lingkaran.
- Intro dijalankan sekali per tab session menggunakan `sessionStorage`; bila penyimpanan sesi tidak tersedia, animasi tetap dijalankan. Tidak ada library atau dependensi baru.
- Inventaris fitur ditambahkan sebagai FIT-018 dan rencana pengembangan dicatat sebagai REN-014. Data sebelumnya bertanggal 2026-10-10 (lebih dari 14 hari); source halaman utama dan stylesheet diperiksa ulang sebelum sinkronisasi.

## Dampak
- Pengunjung tab baru melihat intro sebelum halaman utama; navigasi ulang dalam tab yang sama tidak mengulang intro.
- Perubahan kode dibatasi pada halaman utama dan stylesheet khusus halaman utama; dokumen inventaris/rencana serta catatan repository diperbarui.

## Status verifikasi
- Source markup, CSS, dan JavaScript diperiksa setelah perubahan melalui pembacaan file GitHub.
- Pengujian runtime browser, console, dan viewport visual belum dilakukan; belum diklaim lulus.

## Command dan batasan
- File dibaca dan diperbarui melalui GitHub connector (`fetch_file` dan `update_file`).
- Branch yang tersedia dan digunakan: `main`; branch `utama` tidak ditemukan saat pemeriksaan.
- Tidak ada command terminal atau pengujian browser yang dijalankan.


---

Tanggal: 2026-11-03

## Area
- Revisi transisi akhir intro loading halaman utama: `index.html` dan `css/style-studio.css`.
- Sinkronisasi inventaris fitur dan rencana: `list/daftar-fitur.json` dan `list/daftar-rencana.json`.

## Perubahan
- Circular reveal dan radial mask dihapus.
- Setelah progress mencapai 100%, seluruh konten loading (logo, nama merek, caption, label persentase, dan progress bar) melakukan transformasi membesar (`scale(1.7)`) sambil memudar selama 1 detik.
- Latar loading berubah menjadi transparan pada waktu yang sama, sehingga halaman utama terlihat tanpa efek lingkaran.
- Durasi FadeIn 0,5 detik dan progress 3,5 detik tetap dipertahankan; durasi total intro sekitar 5 detik.

## Status verifikasi
- Source HTML, CSS, dan JavaScript diperbarui melalui GitHub.
- Pengujian runtime browser dan pemeriksaan visual belum dilakukan; belum diklaim lulus.
