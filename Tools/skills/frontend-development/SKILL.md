---
name: frontend-development
description: "Gunakan saat membangun, memperbaiki, atau mengubah HTML, CSS, JavaScript, navigasi, komponen, formulir, maupun perilaku antarmuka website."
---

# Pengembangan Frontend

## Prinsip implementasi
- Periksa file, struktur direktori, pola kelas, breakpoint, dan perilaku yang sudah ada sebelum mengedit. Pertahankan stack serta konvensi proyek.
- Situs utama menggunakan HTML/CSS/JavaScript biasa. Jangan menambah framework, library, build step, atau dependensi baru tanpa kebutuhan dan persetujuan eksplisit.
- Batasi diff pada kebutuhan. Gunakan elemen HTML sesuai fungsi: heading, section, nav, button, link, form, label, dan landmark semantik.
- Jaga logika sederhana dan defensif: periksa elemen sebelum memasang event listener, hindari duplikasi handler dan manipulasi DOM rapuh, serta pertahankan perilaku aman untuk keyboard.
- Gunakan class dan custom properties yang sudah tersedia; hindari inline style berulang, selector global yang terlalu luas, dan override CSS yang tidak perlu.
- Pertahankan path relatif yang benar dari root situs yang sedang dikerjakan. Jangan membuat path yang mengasumsikan server atau sistem operasi tertentu.

## Alur
1. Tentukan hasil yang harus dapat dilihat/dilakukan pengunjung dan file minimum yang mengaturnya.
2. Periksa kaitan HTML-CSS-JavaScript dan semua state yang terpengaruh.
3. Implementasikan markup yang bermakna, styling konsisten, dan JavaScript minimum yang diperlukan.
4. Periksa tampilan responsif, kondisi fokus/hover, keadaan kosong/error/sukses, serta perilaku tanpa interaksi mouse bila relevan.
5. Validasi syntax, konsol, link dan aset, lalu tinjau diff untuk regresi.

## Kriteria selesai
Perubahan bekerja pada struktur halaman yang sesungguhnya, tidak memutus interaksi yang sudah ada, tidak menyuntikkan konten yang tidak tepercaya, dan tetap dapat dipahami serta digunakan. Untuk tugas khusus, ikuti pula `responsive-web`, `seo-accessibility`, `website-testing`, atau skill lain yang relevan.
