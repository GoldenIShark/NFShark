# Riwayat Perubahan NFShark

## Tujuan

File `changes.jsonl` adalah indeks ringkas konteks perubahan agar AI/agents dapat memahami keputusan dan perubahan sebelumnya tanpa membaca seluruh catatan naratif. Git tetap menjadi sumber kebenaran untuk isi file, diff, dan urutan commit.

## Format

- Format: JSON Lines (JSONL), UTF-8.
- **Satu baris = satu rangkaian perubahan logis** dari satu tugas/permintaan. Jika satu tugas mengubah beberapa file, masukkan semua path dalam satu entri; jangan membuat satu entri per file.
- Setiap baris harus berupa satu objek JSON valid, tanpa pretty-print atau line break di dalam objek.
- Tambahkan entri baru di akhir file. Jangan mengubah atau menghapus entri lama; koreksi penting dicatat sebagai entri baru yang merujuk ID sebelumnya.

## Skema entri

| Field | Wajib | Keterangan |
|---|---|---|
| `date` | Ya | Tanggal perubahan, format `YYYY-MM-DD`. |
| `id` | Ya | ID unik berurutan, misalnya `CHG-001`. |
| `type` | Ya | Kategori singkat: `feature`, `fix`, `design`, `refactor`, `docs`, `config`, atau `maintenance`. |
| `summary` | Ya | Ringkasan perubahan dalam satu kalimat. |
| `files.added` | Ya | Array path file yang dibuat. |
| `files.modified` | Ya | Array path file yang diubah. |
| `files.deleted` | Ya | Array path file yang dihapus. |
| `files.renamed` | Ya | Array objek `{from,to}` untuk file yang dipindahkan/di-rename. Jika Git tidak mengenali rename, catat path lama pada `deleted` dan path baru pada `added`. |
| `impact` | Ya | Dampak terhadap website, tooling, dokumentasi, atau workflow. |
| `verification` | Ya | Pemeriksaan yang benar-benar dilakukan dan batas yang belum diuji. |
| `commit` | Tidak | SHA commit Git jika tersedia. Jangan mengarang SHA. |
| `related` | Tidak | ID perubahan terkait jika diperlukan. |

## Aturan penulisan

1. Catat hanya perubahan yang benar-benar dilakukan, bukan ide, rencana, atau usulan yang belum diimplementasikan.
2. Gabungkan perubahan yang saling berkaitan dalam satu tugas menjadi satu entri. Tugas terpisah mendapat entri terpisah.
3. Gunakan path relatif dari root repository dan daftar semua file yang benar-benar ditambah, diubah, dihapus, atau dipindahkan.
4. Ringkas alasan/keputusan dan dampak; jangan menyalin diff, isi file, output terminal panjang, data pribadi, atau informasi rahasia.
5. Status verifikasi harus faktual. Bedakan pemeriksaan source, validasi otomatis, dan uji browser/runtime.
6. Jika tidak ada file yang berubah, jangan menambahkan entri.
7. Log dicatat setelah seluruh perubahan dan pemeriksaan selesai agar daftar file dan status verifikasi akurat.

## Cara AI/agents membaca

1. Baca file ini terlebih dahulu.
2. Baca sekitar 20 entri terakhir untuk konteks terkini.
3. Cari entri lama berdasarkan path, ID, nama fitur, atau kata kunci yang relevan bila diperlukan.
4. Gunakan ringkasan untuk menemukan konteks, lalu periksa source aktual dan Git diff/commit sebelum mengambil keputusan.
5. Jangan membaca seluruh file jika pencarian terarah sudah cukup. Jangan menganggap ringkasan sebagai pengganti pemeriksaan source.

## Hubungan dengan file lain

- `history/changes.jsonl`: log aktif ringkas untuk AI/agents.
- Git: riwayat lengkap perubahan kode dan diff.
- `list/`: inventaris kondisi fitur, masalah, dan rencana; hanya diperbarui saat data inventaris benar-benar berubah.
- `catatan.md` dan `catatan-vN.md`: arsip riwayat dengan format lama. Pertahankan sebagai arsip, jangan tambahkan entri baru.
