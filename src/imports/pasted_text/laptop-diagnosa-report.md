

LAPORAN PROGRESS PROYEK
KECERDASAN BUATAN


Sistem Pakar Diagnosa Kerusakan Laptop Menggunakan Metode Forward Chaining



Disusun oleh:
Nama	NIM
Pandu Pradana Putra	2400018246
Galuh Aprijal Al Atho	2400018276






PROGRAM STUDI INFORMATIKA
FAKULTAS TEKNOLOGI INDUSTRI
UNIVERSITAS AHMAD DAHLAN
2026


BAB I PENDAHULUAN
1.1 Latar Belakang
Perkembangan teknologi informasi membuat penggunaan laptop semakin penting dalam kegiatan belajar, bekerja, dan komunikasi. Namun, banyak pengguna masih mengalami kesulitan dalam mengenali penyebab kerusakan laptop secara awal. Gejala seperti laptop mati total, baterai tidak mengisi, layar gelap, laptop cepat panas, atau keyboard tidak berfungsi sering membuat pengguna bingung sebelum membawa laptop ke teknisi.
Berdasarkan permasalahan tersebut, dibuat rancangan aplikasi sistem pakar yang dapat membantu pengguna melakukan diagnosa awal kerusakan laptop. Sistem pakar merupakan salah satu bidang kecerdasan buatan yang meniru cara berpikir seorang pakar dalam menyelesaikan masalah tertentu. Pada proyek ini, metode yang digunakan adalah Forward Chaining, yaitu penalaran yang dimulai dari fakta atau gejala yang dipilih pengguna, kemudian dicocokkan dengan aturan untuk menghasilkan kesimpulan kerusakan.
1.2 Rumusan Masalah
1. Bagaimana merancang aplikasi sistem pakar untuk mendiagnosis kerusakan laptop?
2. Bagaimana menerapkan metode Forward Chaining dalam proses diagnosa kerusakan laptop?
3. Bagaimana sistem dapat memberikan hasil diagnosa dan saran penanganan berdasarkan gejala yang dipilih pengguna?
1.3 Tujuan
1. Membuat rancangan aplikasi sistem pakar diagnosa kerusakan laptop.
2. Menerapkan metode Forward Chaining untuk menarik kesimpulan dari gejala yang dipilih pengguna.
3. Membantu pengguna mengetahui kemungkinan kerusakan laptop secara awal serta memberikan saran penanganan sederhana.
1.4 Manfaat
1. Memudahkan pengguna dalam mengenali kerusakan laptop secara awal.
2. Menjadi media pembelajaran penerapan sistem pakar dalam bidang kecerdasan buatan.
3. Membantu pengguna menentukan tindakan awal sebelum membawa laptop ke teknisi.
BAB II RANCANGAN PROYEK
2.1 Identitas Proyek
Judul Proyek : Sistem Pakar Diagnosa Kerusakan Laptop Menggunakan Metode Forward Chaining
Tema/Bidang AI : Sistem Pakar
Nama Aplikasi : LaptopCare AI
2.2 Deskripsi Aplikasi
LaptopCare AI adalah aplikasi sistem pakar yang dirancang untuk membantu pengguna mendiagnosis kerusakan laptop berdasarkan gejala yang dialami. Pengguna memilih gejala yang tersedia pada aplikasi, kemudian sistem akan memproses gejala tersebut menggunakan aturan IF-THEN. Hasil akhir dari sistem berupa kemungkinan kerusakan laptop dan saran penanganan awal.
Aplikasi ini bersifat sebagai diagnosa awal, bukan sebagai pengganti teknisi. Hasil yang ditampilkan dapat membantu pengguna memahami kemungkinan masalah sebelum melakukan pemeriksaan lebih lanjut.
2.3 Metode yang Digunakan
Metode yang digunakan dalam proyek ini adalah Forward Chaining. Forward Chaining bekerja dengan cara memulai proses dari fakta awal yang diberikan oleh pengguna. Fakta tersebut berupa gejala kerusakan laptop. Selanjutnya sistem mencocokkan fakta dengan aturan yang tersedia. Jika syarat pada aturan terpenuhi, maka sistem akan menghasilkan kesimpulan berupa jenis kerusakan.
Alur sederhana metode Forward Chaining pada aplikasi ini adalah:
1. Pengguna memilih gejala kerusakan laptop.
2. Sistem membaca gejala sebagai fakta awal.
3. Sistem mencocokkan fakta dengan aturan IF-THEN.
4. Sistem menentukan kemungkinan kerusakan.
5. Sistem menampilkan hasil diagnosa dan saran penanganan.
2.4 Basis Pengetahuan
Daftar gejala yang digunakan:
• G1 = Laptop mati total
• G2 = Lampu indikator tidak menyala
• G3 = Baterai tidak mengisi
• G4 = Layar gelap
• G5 = Laptop menyala tetapi tidak tampil gambar
• G6 = Laptop cepat panas
• G7 = Kipas berbunyi keras
• G8 = Keyboard tidak berfungsi
• G9 = Laptop sering restart sendiri
• G10 = Bunyi beep saat dinyalakan
Daftar kerusakan yang dapat didiagnosis:
• K1 = Adaptor atau charger rusak
• K2 = Baterai laptop rusak
• K3 = LCD atau layar bermasalah
• K4 = Overheating
• K5 = Keyboard bermasalah
• K6 = RAM bermasalah
2.5 Aturan IF-THEN
R1: IF G1 AND G2 THEN K1
R2: IF G3 THEN K2
R3: IF G4 AND G5 THEN K3
R4: IF G6 AND G7 THEN K4
R5: IF G8 THEN K5
R6: IF G9 AND G10 THEN K6
Keterangan aturan:
• R1 digunakan untuk mendiagnosis adaptor atau charger rusak.
• R2 digunakan untuk mendiagnosis baterai laptop rusak.
• R3 digunakan untuk mendiagnosis LCD atau layar bermasalah.
• R4 digunakan untuk mendiagnosis overheating.
• R5 digunakan untuk mendiagnosis keyboard bermasalah.
• R6 digunakan untuk mendiagnosis RAM bermasalah.
2.6 Rancangan Fitur Aplikasi
1. Splash Screen: menampilkan logo dan nama aplikasi LaptopCare AI.
2. Halaman Beranda: menampilkan menu mulai diagnosa, riwayat diagnosa, daftar gejala, dan tentang aplikasi.
3. Halaman Pilih Gejala: pengguna memilih gejala kerusakan laptop melalui checklist.
4. Halaman Hasil Diagnosa: menampilkan kemungkinan kerusakan, gejala yang cocok, dan saran penanganan.
5. Halaman Riwayat Diagnosa: menampilkan daftar hasil diagnosa yang pernah dilakukan.
6. Halaman Tentang Aplikasi: menjelaskan tujuan aplikasi, tema sistem pakar, dan metode Forward Chaining.
BAB III LAPORAN PROGRESS
3.1 Progress yang Sudah Dikerjakan
1. Menentukan judul proyek, yaitu Sistem Pakar Diagnosa Kerusakan Laptop Menggunakan Metode Forward Chaining.
2. Menentukan tema proyek, yaitu Sistem Pakar.
3. Menentukan nama aplikasi, yaitu LaptopCare AI.
4. Membuat konsep aplikasi diagnosa kerusakan laptop.
5. Menentukan daftar gejala dan jenis kerusakan.
6. Membuat aturan IF-THEN sebagai basis pengetahuan.
7. Membuat rancangan fitur dan alur kerja aplikasi.
3.2 Progress yang Belum Dikerjakan
1. Membuat desain tampilan aplikasi secara lengkap.
2. Mengimplementasikan aturan Forward Chaining ke dalam program.
3. Membuat database gejala dan kerusakan.
4. Melakukan pengujian sistem.
5. Membuat video presentasi proyek.
3.3 Rencana Selanjutnya
1. Menyelesaikan desain UI aplikasi menggunakan Figma.
2. Membuat halaman input gejala dan halaman hasil diagnosa.
3. Membuat logika Forward Chaining berdasarkan aturan IF-THEN.
4. Melakukan uji coba dengan beberapa contoh kasus kerusakan laptop.
5. Menyusun video presentasi setelah aplikasi dan laporan selesai.
3.4 Contoh Alur Diagnosa
Contoh kasus: pengguna memilih gejala laptop mati total dan lampu indikator tidak menyala.
Fakta awal : G1 dan G2
Aturan cocok: R1 = IF G1 AND G2 THEN K1
Kesimpulan : K1 = Adaptor atau charger rusak
Saran      : Periksa kabel charger, coba gunakan charger lain, dan cek port charging laptop.
BAB IV PENUTUP
4.1 Kesimpulan
Proyek yang dirancang adalah aplikasi LaptopCare AI dengan judul Sistem Pakar Diagnosa Kerusakan Laptop Menggunakan Metode Forward Chaining. Aplikasi ini termasuk dalam tema sistem pakar karena menggunakan aturan IF-THEN untuk menentukan kemungkinan kerusakan berdasarkan gejala yang dipilih pengguna. Progress saat ini berada pada tahap penentuan judul, tema, konsep aplikasi, daftar gejala, daftar kerusakan, aturan, dan rancangan fitur. Selanjutnya proyek akan dikembangkan ke tahap desain tampilan, implementasi sistem, pengujian, dan pembuatan video presentasi.
4.2 Saran
Aplikasi ini masih dapat dikembangkan dengan menambahkan lebih banyak gejala, jenis kerusakan, dan tingkat keyakinan hasil diagnosa. Selain itu, aplikasi juga dapat dilengkapi fitur rekomendasi tempat servis atau riwayat diagnosa agar lebih bermanfaat bagi pengguna.