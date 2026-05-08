# 🌿 Panduan Kontribusi — Penghijauan GitHub

Selamat datang di project kolaborasi **Penghijauan GitHub**! Dokumen ini berisi aturan dan panduan kontribusi yang wajib diikuti oleh seluruh peserta agar project berjalan dengan rapi dan terstruktur.

---

## 📋 Daftar Isi

- [Alur Kontribusi](#alur-kontribusi)
- [Aturan Branch](#aturan-branch)
- [Aturan Commit](#aturan-commit)
- [Cara Membuat Pull Request](#cara-membuat-pull-request)
- [Aturan Review & Merge](#aturan-review--merge)
- [Hal yang Dilarang](#hal-yang-dilarang)
- [Pertanyaan & Bantuan](#pertanyaan--bantuan)

---

## 🔄 Alur Kontribusi

Setiap peserta **wajib** mengikuti alur berikut setiap kali ingin menambahkan fitur atau style baru:

```
Fork / Clone repo → Buat branch baru → Kerjakan perubahan → Commit → Push → Buat Pull Request → Tunggu Review → Merge
```

> ⚠️ **DILARANG** melakukan push langsung ke branch `main`. Semua perubahan harus melalui Pull Request.

---

## 🌿 Aturan Branch

### Penamaan Branch

Gunakan format berikut saat membuat branch baru:

```
nama-fitur/deskripsi-singkat
```

**Contoh:**
```
feature/navbar-responsive
style/warna-tombol-utama
fix/layout-mobile-broken
```

### Cara Membuat Branch Baru

```bash
# Pastikan branch main kamu sudah up-to-date
git checkout main
git pull origin main

# Buat branch baru
git checkout -b feature/nama-fiturmu
```

---

## ✏️ Aturan Commit

### Format Pesan Commit

Gunakan format berikut agar riwayat commit mudah dibaca:

```
[tipe]: deskripsi singkat perubahan
```

**Tipe yang tersedia:**
| Tipe | Digunakan untuk |
|------|----------------|
| `feat` | Menambahkan fitur baru |
| `style` | Perubahan tampilan/CSS (bukan style code) |
| `fix` | Memperbaiki bug atau error |
| `docs` | Mengubah dokumentasi |
| `refactor` | Merapikan kode tanpa mengubah fungsi |

**Contoh pesan commit yang baik:**
```
feat: tambah fitur dark mode di halaman utama
style: ubah warna background header menjadi biru navy
fix: perbaiki tombol login yang tidak responsif di mobile
```

**Contoh pesan commit yang BURUK ❌:**
```
update
coba-coba
asdfjkl
fix stuff
```

---

## 📬 Cara Membuat Pull Request

1. **Push branch kamu** ke repository:
   ```bash
   git push origin feature/nama-fiturmu
   ```

2. **Buka GitHub**, lalu klik tombol **"Compare & pull request"**

3. **Isi deskripsi PR** dengan format berikut:

   ```
   ## Apa yang diubah?
   [Jelaskan secara singkat apa yang kamu tambahkan atau perbaiki]

   ## Screenshot (jika ada perubahan tampilan)
   [Tempelkan screenshot sebelum & sesudah jika ada]

   ## Catatan tambahan (opsional)
   [Hal lain yang perlu diketahui reviewer]
   ```

4. **Pilih reviewer** — tag salah satu maintainer proyek
5. Klik **"Create Pull Request"** ✅

---

## 🔍 Aturan Review & Merge

- Setiap PR **wajib di-review** oleh minimal **1 maintainer** sebelum di-merge
- Maintainer berhak meminta revisi jika kode tidak memenuhi standar
- PR yang sudah disetujui akan di-merge oleh maintainer, **bukan oleh contributor sendiri**
- Jika PR tidak ada update selama **3 hari**, maintainer berhak menutupnya

---

## 🚫 Hal yang Dilarang

- ❌ Push langsung ke branch `main`
- ❌ Menghapus atau mengubah file inti proyek tanpa diskusi terlebih dahulu di grup WA
- ❌ Meng-upload file yang tidak relevan (video, musik, file pribadi, dll.)
- ❌ Melakukan spam commit (commit banyak tanpa perubahan yang berarti)
- ❌ Menggunakan kode hasil copy-paste tanpa memahaminya — pelajari dulu ya! 😊
- ❌ Merge PR milik sendiri tanpa persetujuan maintainer

---

## ❓ Pertanyaan & Bantuan

Jika kamu mengalami kesulitan atau ada yang ingin didiskusikan:

- 💬 Tanyakan di **grup WhatsApp** proker
- 🐛 Buat **Issue** di GitHub jika menemukan bug
- 📩 Hubungi langsung salah satu **maintainer** proyek

---

> Dibuat dengan ❤️ oleh Panitia Penghijauan GitHub — HMPS
> 
> _"Kode yang rapi mencerminkan programmer yang rapi."_
