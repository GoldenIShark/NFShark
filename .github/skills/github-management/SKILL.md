---
name: github-management
description: "Gunakan saat memeriksa status dan diff Git, memilih file untuk staging, membuat commit, atau menyiapkan dan meninjau perubahan GitHub."
---

# Manajemen Git dan GitHub

## Keselamatan dan alur
- Sebelum bertindak, periksa root repository, `git status --short`, dan konvensi yang relevan. Bedakan perubahan yang dibuat untuk tugas ini dari perubahan lokal sebelumnya.
- Jangan pernah mengedit `.git/`. Jangan memakai operasi destruktif seperti reset keras, clean, checkout yang menimpa, force push, atau penulisan ulang riwayat.
- Tinjau `git diff -- <file>` untuk file lingkup; stage hanya file yang memang berubah untuk tugas ini. Jangan menyertakan rahasia, keluaran build, dependensi, atau perubahan orang lain.
- Gunakan pesan commit yang menjelaskan hasil dan mengikuti format/kebijakan repository. Jangan commit atau push tanpa diminta atau tanpa konvensi repository yang secara eksplisit mensyaratkannya.
- Sebelum menyiapkan pull request, tinjau diff, tujuan perubahan, pemeriksaan, risiko, dan kebutuhan reviewer; jangan mengklaim pemeriksaan yang belum dijalankan.

## Bila ada hambatan
Jika status tidak dapat diperiksa, konflik menyentuh file sasaran, identitas Git tidak tersedia, atau konvensi commit tidak jelas, hentikan tindakan berisiko dan jelaskan masalahnya. Jangan menyamarkan perubahan awal dengan staging luas. Setelah commit, verifikasi referensi/hasil commit dan laporkan identifier hanya jika memang dibuat.
