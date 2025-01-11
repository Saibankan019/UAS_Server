# UJIAN AKHIR SEMESTER  
## Pemrograman Sisi Server  
  
### 1. Identitas  
🧑‍💻 **Nama**: Muhammad Fadhlan Hakim    
🆔 **NIM**: A11.2022.14619    
📘 **Mata Kuliah**: Pemrograman Sisi Server    
🏫 **Universitas**: Dian Nuswantoro    
  
---  
  
### 2. Penjelasan Program  
UAS Server adalah aplikasi backend yang dibangun menggunakan **Node.js**, **Express**, dan **PostgreSQL**. Aplikasi ini dirancang untuk memudahkan pengelolaan pengumuman, kursus, dan interaksi pengguna di dunia pendidikan. Dengan bantuan **Prisma** sebagai ORM (Object-Relational Mapping), pengelolaan data menjadi lebih efisien dan mudah.  
  
#### Fitur Utama  
- **Manajemen Profil Pengguna**  
  - Pendaftaran pengguna baru.  
  - Menampilkan dan mengedit profil pengguna.  
    
- **Pengelolaan Pengumuman**  
  - Membuat, menampilkan, mengedit, dan menghapus pengumuman kursus.  
    
- **Pelacakan Penyelesaian Konten**  
  - Siswa dapat menandai konten yang selesai, menampilkan daftar penyelesaian, atau menghapus tanda penyelesaian.  
    
- **Feedback pada Kursus**  
  - Menambahkan, melihat, mengedit, dan menghapus umpan balik pada kursus tertentu.  
    
- **Bookmark Konten**  
  - Menambahkan, melihat, dan menghapus bookmark pada konten kursus.  
    
- **Manajemen Kategori Kursus**  
  - Membuat, melihat, dan menghapus kategori kursus.  
  
---  
  
### 3. Penjelasan Endpoint  
  
#### Pengguna  
- **POST /register**: Mendaftar pengguna baru.  
- **GET /profile/:id**: Menampilkan profil pengguna.  
- **PUT /profile**: Mengedit profil pengguna.  
  
#### Pengumuman  
- **POST /announcements**: Membuat pengumuman baru.  
- **GET /announcements/course/:courseId**: Melihat pengumuman pada kursus tertentu.  
- **PUT /announcements/:id**: Memperbarui pengumuman.  
- **DELETE /announcements/:id**: Menghapus pengumuman.  
  
#### Pelacakan Penyelesaian  
- **POST /completion**: Menandai konten selesai.  
- **GET /completion/course/:courseId**: Melihat daftar penyelesaian konten.  
- **DELETE /completion/:id**: Menghapus tanda penyelesaian.  
  
#### Feedback  
- **POST /feedback**: Menambahkan umpan balik.  
- **GET /feedback/course/:courseId**: Menampilkan semua umpan balik pada kursus tertentu.  
- **PUT /feedback/:id**: Memperbarui umpan balik.  
- **DELETE /feedback/:id**: Menghapus umpan balik.  
  
#### Bookmark  
- **POST /bookmark**: Membuat bookmark pada konten kursus.  
- **GET /bookmark**: Menampilkan semua bookmark.  
- **DELETE /bookmark/:id**: Menghapus bookmark.  
  
#### Kategori  
- **POST /categories**: Membuat kategori baru.  
- **GET /categories**: Menampilkan semua kategori.  
- **DELETE /categories/:id**: Menghapus kategori.  
  
---  
  
### 4. Cara Menjalankan Proyek  
  
#### Prasyarat  
Pastikan Anda telah menginstal:  
- **Node.js**  
- **Docker**  
- **Docker Compose**  
  
#### Langkah-Langkah  
1. **Klon repositori**:  

```
git clone https://github.com/Saibankan019/UAS_Server.git
cd UAS_Server
```

2.  **Jalankan aplikasi menggunakan Docker**:

```
docker-compose up --build
```

3. **Akses Prisma Studio**:  
   Untuk memanipulasi data secara visual, jalankan perintah berikut:

```
npx prisma studio
```
