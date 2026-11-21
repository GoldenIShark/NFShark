# Konteks tambahan GitHub Copilot — NFShark

> Baca `AGENTS.md` terlebih dahulu. Semua aturan global repository berada di sana dan tetap menjadi acuan utama. Dokumen ini hanya menyediakan konteks tambahan untuk membantu GitHub Copilot memahami tata letak repository; jangan menyalin atau mengesampingkan aturan global.

## Peta repository

- Situs utama berada di root repository. File inti yang umum digunakan adalah `index.html`, `style.css`, dan `script.js`; aset situs utama berada di `assets/`. Periksa struktur aktual sebelum mengubah file.
- `portofolio/` berisi situs portofolio yang dapat memiliki struktur dan aset masing-masing. Perlakukan setiap subfolder situs sebagai proyek mandiri dan batasi perubahan pada situs yang diminta.
- Skill kanonis berada di `Tools/skills/<nama-skill>/SKILL.md`. Sebelum memilih skill, baca indeks yang sesuai: `.github/skills/daftar-file.md` untuk agent GitHub Copilot. Ikuti prosedur pemilihan skill di `AGENTS.md`.

## Aturan khusus pengelolaan aset portofolio

Untuk pekerjaan gambar pada situs di `portofolio/`, gunakan skill `asset-management` dan patuhi `Tools/skills/convert-images-to-webp/SKILL.md` beserta tool `convert_to_webp.py` bila konversi relevan. Periksa hanya folder aset situs yang sedang dikerjakan (`portofolio/<kategori>/<website>/assets/`, atau `portofolio/<kategori>/assets/` jika situs berada langsung di kategori). Jangan mengubah `assets/` situs utama kecuali diminta. Jangan mengonversi SVG secara otomatis atau meratakan GIF animasi.
