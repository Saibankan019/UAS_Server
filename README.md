#UJIAN AKHIR SEMESTER - PEMROGRAMAN SISI SERVER
## 1. Identitas  
  
| ![User Icon](https://img.icons8.com/ios-filled/50/000000/user.png) | **Nama**: Muhammad Fadhlan Hakim |  
|:---------------------------------------------------------------:|:----------------------------------:|  
| ![ID Card Icon](https://img.icons8.com/ios-filled/50/000000/id-card.png) | **NIM**: A11.2022.14619           |  
| ![Course Icon](https://img.icons8.com/ios-filled/50/000000/book.png) | **Mata Kuliah**: Pemrograman Sisi Server |  
| ![University Icon](https://img.icons8.com/ios-filled/50/000000/university.png) | **Universitas**: Dian Nuswantoro |  
  
---  
  
## 2. Penjelasan Program  
  
UAS Server adalah aplikasi backend yang dibangun menggunakan **Node.js**, **Express**, dan **PostgreSQL**. Aplikasi ini dirancang untuk mengelola pengumuman, kursus, dan interaksi pengguna dalam konteks pendidikan. Dengan menggunakan **Prisma** sebagai ORM (Object-Relational Mapping), aplikasi ini memudahkan pengelolaan basis data dan interaksi dengan data yang tersimpan.  
  
### Fitur Utama  
  
1. **Manajemen Profil Pengguna**  
   - **Register**: Memungkinkan calon pengguna untuk mendaftar dengan mengisikan biodata dan data login.  
   - **Show Profile**: Menampilkan profil lengkap pengguna tertentu, termasuk nama depan, nama belakang, email, handphone, deskripsi, foto profil, daftar kursus yang diikuti, dan daftar kursus yang dibuat.  
   - **Edit Profil**: Memungkinkan pengguna untuk mengedit data profil mereka sendiri.  
  
2. **Course Announcements**  
   - **Create Announcement**: Menambahkan pengumuman pada kursus tertentu (hanya guru yang dapat membuat pengumuman).  
   - **Show Announcement**: Menampilkan semua pengumuman pada kursus tertentu (guru dan siswa dapat melihat pengumuman).  
   - **Edit Announcement**: Mengedit pengumuman (hanya guru yang dapat mengedit).  
   - **Delete Announcement**: Menghapus pengumuman (hanya guru yang dapat menghapus).  
  
3. **Content Completion Tracking**  
   - **Add Completion Tracking**: Siswa dapat menandai konten yang sudah diselesaikan.  
   - **Show Completion**: Siswa dapat menampilkan daftar konten yang telah diselesaikan pada kursus yang diikuti.  
   - **Delete Completion**: Siswa dapat menghapus data penyelesaian mereka sendiri.  
  
4. **Course Feedback**  
   - **Add Feedback**: Menambahkan umpan balik pada kursus tertentu.  
   - **Show Feedback**: Menampilkan semua umpan balik pada kursus tertentu.  
   - **Edit Feedback**: Siswa dapat mengedit umpan balik yang telah ditulis.  
   - **Delete Feedback**: Siswa dapat menghapus umpan balik yang telah ditulis.  
  
5. **Content Bookmarking**  
   - **Add Bookmarking**: Siswa dapat membuat bookmark pada konten kursus untuk referensi di masa mendatang.  
   - **Show Bookmark**: Menampilkan semua bookmark yang dibuat oleh siswa, termasuk konten dan kursusnya.  
   - **Delete Bookmark**: Menghapus bookmark yang pernah dibuat oleh siswa.  
  
6. **Course Categories Management**  
   - **Add Category**: Membuat kategori baru.  
   - **Show Category**: Menampilkan semua kategori yang pernah dibuat oleh semua pengguna.  
   - **Delete Category**: Menghapus kategori yang pernah dibuat oleh pengguna tersebut.  
   - **Add Category Column to Course**: Menambahkan kolom kategori pada saat membuat dan mengedit kursus, yang bersifat opsional (boleh null).  
  
---  
  
## 3. Penjelasan Endpoint yang Dipilih  
  
Berikut adalah beberapa endpoint utama yang disediakan oleh aplikasi ini:  
  
### Pengguna  
  
- **POST /register**: Mendaftar pengguna baru.  
- **GET /profile/:id**: Menampilkan profil pengguna berdasarkan ID.  
- **PUT /profile**: Mengedit profil pengguna yang sedang login.  
  
### Pengumuman  
  
- **POST /announcements**: Membuat pengumuman baru.  
- **GET /announcements/course/:courseId**: Menampilkan semua pengumuman pada kursus tertentu.  
- **PUT /announcements/:id**: Mengedit pengumuman berdasarkan ID.  
- **DELETE /announcements/:id**: Menghapus pengumuman berdasarkan ID.  
  
### Penyelesaian Konten  
  
- **POST /completion**: Menandai konten yang sudah diselesaikan.  
- **GET /completion/course/:courseId**: Menampilkan daftar penyelesaian untuk kursus tertentu.  
- **DELETE /completion/:id**: Menghapus data penyelesaian berdasarkan ID.  
  
### Umpan Balik  
  
- **POST /feedback**: Menambahkan umpan balik pada kursus tertentu.  
- **GET /feedback/course/:courseId**: Menampilkan semua umpan balik pada kursus tertentu.  
- **PUT /feedback/:id**: Mengedit umpan balik berdasarkan ID.  
- **DELETE /feedback/:id**: Menghapus umpan balik berdasarkan ID.  
  
### Bookmark  
  
- **POST /bookmark**: Menambahkan bookmark pada konten kursus.  
- **GET /bookmark**: Menampilkan semua bookmark yang dibuat oleh pengguna.  
- **DELETE /bookmark/:id**: Menghapus bookmark berdasarkan ID.  
  
### Kategori  
  
- **POST /categories**: Menambahkan kategori baru.  
- **GET /categories**: Menampilkan semua kategori.  
- **DELETE /categories/:id**: Menghapus kategori berdasarkan ID.  
  
---  
  
## 4. Cara Menjalankan Proyek  
  
Berikut adalah langkah-langkah untuk menjalankan proyek ini menggunakan Docker:  
  
### Prasyarat  
  
- Pastikan Anda telah menginstal [Docker](https://www.docker.com/) dan [Docker Compose](https://docs.docker.com/compose/).  
  
### Langkah-langkah  
  
1. **Klon repositori**:
   
     git clone https://github.com/Saibankan019/UAS_Server.git  
   cd UAS_Server

2. **Jalankan aplikasi menggunakan Docker:**

      docker-compose up --build
     
3. **Mengakses Prisma Studio:**
Setelah aplikasi berjalan, Anda dapat melihat data pengguna dan tabel lainnya dengan menjalankan perintah berikut di terminal baru:

   npx prisma studio  


