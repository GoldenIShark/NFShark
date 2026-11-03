# Daftar Komponen UI & UX — NFShark

Dokumen ini memuat katalog seluruh komponen UI, token desain, dan kelas CSS yang tersedia di repositori NFShark (`css/common.css`, `css/ui-components.css`, dan modul template editorial).

---

## 1. Sistem Token & Variabel CSS (`:root`)

### A. Palet Warna Utama & Brand (Classic NFShark)
| Variabel | Nilai | Keterangan |
|---|---|---|
| `--bg-primary` | `#071114` | Latar belakang dasar gelap |
| `--bg-secondary` | `#0b191d` | Latar sekunder gelap |
| `--bg-card` | `#102329` | Latar belakang kartu standar |
| `--green` | `#20c997` | Aksen hijau toska |
| `--green-dark` | `#14966f` | Aksen hijau gelap |
| `--sea-blue` | `#1597b8` | Aksen biru laut |
| `--sea-blue-dark` | `#0d6078` | Biru laut gelap |
| `--white` | `#f5fafa` | Teks putih / terang |
| `--text-primary` | `#f5fafa` | Warna teks utama |
| `--text-secondary` | `#a8bcbf` | Warna teks pendukung |
| `--border` | `rgba(255, 255, 255, 0.08)` | Garis pembatas halus |
| `--ui-grass` | `#39b54a` | Hijau rumput solid (Solid Press) |
| `--ui-sea` | `#087e8b` | Biru laut solid (Solid Press) |
| `--ui-white` | `#ffffff` | Putih solid |

### B. Palet Minimalist Editorial (Digital Studio)
| Variabel | Nilai | Keterangan |
|---|---|---|
| `--color-dark` | `#091915` | Hijau gelap studio (latar utama) |
| `--color-dark-surface` | `#102621` | Latar permukaan kartu gelap |
| `--color-dark-border` | `rgba(45, 212, 191, 0.16)` | Border halus tema gelap |
| `--color-cream` | `#f6f3eb` | Krem terang editorial (latar alternatif) |
| `--color-cream-surface` | `#ede8dc` | Latar permukaan kartu krem |
| `--color-cream-border` | `rgba(17, 26, 24, 0.12)` | Border halus tema krem |
| `--color-mint` | `#2dd4bf` | Hijau mint segar (penekanan teks & fokus) |
| `--color-lime` | `#bef264` | Kuning lime cerah (CTA fokus & badge penting) |
| `--color-dark-text` | `#111a18` | Teks gelap di atas latar krem |
| `--color-light-text` | `#f5fbf8` | Teks terang di atas latar gelap |
| `--color-muted` | `#839993` | Teks pendukung / muted |

### C. Tipografi, Radius & Transisi
| Variabel | Nilai | Keterangan |
|---|---|---|
| `--font-serif` | `"Playfair Display", Georgia, serif` | Tipografi headline editorial |
| `--font-sans` | `"Times New Roman", Times, serif` | Tipografi teks umum dan antarmuka |
| `--radius-sm` | `6px` | Radius kecil (input, badge, tombol) |
| `--radius-md` | `12px` | Radius sedang (kartu, panel) |
| `--radius-lg` | `18px` | Radius besar (modal, mockup) |
| `--button-min-height`| `48px` | Target sentuh aksesibel minimum |
| `--transition-smooth`| `0.2s cubic-bezier(0.16, 1, 0.3, 1)` | Easing halus anti-layout-shift |

---

## 2. Kategori Komponen UI

### A. Tombol (Buttons)
1. **Solid Press & Global (`css/common.css` & `css/ui-components.css`)**:
   - `.btn`: Tombol dasar dengan min-height 48px, radius 10-12px, font-weight 700.
   - `.btn-primary` / `.ui-btn--primary` / `.ui-btn--solid`: Tombol utama warna hijau rumput (`--ui-grass`), teks putih.
   - `.btn-secondary`: Tombol sekunder transparan dengan border putih, berubah saat hover/active.
   - `.ui-btn--outline`: Tombol outline tanpa background.
   - `.ui-btn--icon`: Tombol aksi berbentuk lingkaran / kotak untuk ikon.
2. **Editorial Digital Studio (`css/common.css`)**:
   - `.btn-lime`: Tombol utama kuning lime kontras tinggi (`#bef264`) dengan teks gelap.
   - `.btn-outline-editorial`: Tombol outline transparan berbingkai dengan transisi warna mint saat interaksi.
3. **Glass Press (`css/ui-components.css`)**:
   - `.ui-btn--glass`: Tombol permukaan kaca transparan dengan fallback alpha saat blur tidak didukung.

### B. Kartu & Panel (Cards & Surfaces)
1. **Editorial Kit (`css/common.css`)**:
   - `.card-editorial`: Pembungkus kartu dasar dengan padding 1.75rem dan radius sedang.
   - `.card-editorial-dark`: Kartu hijau gelap dengan border mint halus.
   - `.card-editorial-cream`: Kartu krem terang dengan border gelap tipis untuk seksi kontras.
   - `.card-interactive`: Kartu dengan animasi angkat halus (`translateY(-3px)`) dan highlight border saat hover.
2. **Classic & UI Components (`css/ui-components.css`)**:
   - `.ui-card`: Kartu dengan bayangan dan border untuk pengelompokan konten.
   - `.ui-panel`: Panel catatan dengan penanda tepi aksen dan teks kontras.
   - `.ui-glass-board`: Papan pembungkus efek glassmorphism untuk pengujian latar gelap (`.ui-surface--sea`) dan terang (`.ui-surface--light`).

### C. Input & Formulir (Forms & Inputs)
1. **Formulir Editorial Minimalis (`css/common.css`)**:
   - `.form-group-editorial`: Wadah tata letak vertikal untuk label dan input.
   - `.label-editorial`: Label teks dengan bobot semi-bold dan kontras jelas.
   - `.input-editorial`: Input teks/email dengan tinggi 48px dan ring fokus warna mint.
   - `.textarea-editorial`: Input area teks multi-baris yang dapat diubah tingginya secara vertikal.
2. **Formulir Terstandar & Status Validasi (`css/ui-components.css`)**:
   - `.ui-form`: Pembungkus formulir terstruktur.
   - `.ui-field`: Baris field input dengan helper text.
   - `.ui-label`: Label input native.
   - `.ui-input`: Input teks dengan state normal, fokus, dan error.
   - `.ui-select`: Dropdown pilihan native dengan padding sentuh 44px+.
   - `.ui-textarea`: Textarea standar.
   - `.ui-helper`: Teks petunjuk berwarna netral.
   - `.ui-error`: Pesan kesalahan aksesibel (`aria-invalid="true"`).
   - `.ui-success`: Pesan konfirmasi keberhasilan input.
   - `.ui-check-group`: Kumpulan checkbox atau radio.
   - `.ui-check`, `.ui-checkbox`, `.ui-radio`: Kontrol centang dan radio yang mudah disentuh.

### D. Badge & Label Status
- `.badge-editorial`: Komponen pill/kapsul kecil dengan teks uppercase berjarak letter-spacing rapi.
- `.badge-mint`: Badge hijau mint dengan background transparan untuk kategori fitur.
- `.badge-lime`: Badge kuning lime untuk penanda paket rekomendasi (*Featured / Paling Populer*).

### E. Accordion Aksesibel (ARIA)
- `.accordion-editorial`: Kontainer accordion dengan garis pemisah tipis.
- `.accordion-item`: Elemen baris accordion.
- `.accordion-trigger`: Tombol interaktif `<button>` dengan `aria-expanded` dan ikon `+` yang berotasi otomatis 45 derajat (menjadi `×`) saat terbuka.
- `.accordion-panel`: Panel konten dengan transisi CSS Grid (`grid-template-rows: 0fr -> 1fr`) yang mulus dan bebas layout-shift.
- `.accordion-panel-inner`: Wadah teks isi accordion.

### F. Media & Mockup Frames
- `.frame-editorial`: Wadah media responsif dengan rasio aspek terkunci 16:10 (`aspect-ratio: 16 / 10`) untuk mencegah *Cumulative Layout Shift* (CLS).
- `.browser-window`: Bingkai mockup browser dengan header dots untuk preview proyek.
- `.browser-bar`, `.browser-content`: Struktur internal mockup antarmuka web.

### G. Navigasi & Header
- `.site-header`: Header sticky dengan latar tembus pandang ber-filter blur.
- `.header-inner`: Kontainer penyeimbang logo dan tautan navigasi.
- `.logo`, `.logo-accent`: Penataan identitas brand NFShark.
- `.main-nav`: Daftar navigasi desktop & panel drawer mobile.
- `.menu-toggle`: Tombol hamburger responsif dengan target sentuh $\ge 46\text{ px}$.

### H. Footer
- `.site-footer`: Penutup halaman dengan pemisah border tipis.
- `.footer-inner`, `.footer-brand`, `.footer-nav`: Tata letak multi-kolom informatif.
