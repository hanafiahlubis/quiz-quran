CREATE DATABASE quran;
USE quran;

CREATE OR REPLACE TABLE login_masuk (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nama_lengkap VARCHAR(30),
	email VARCHAR (50),
	photo TEXT,
	username VARCHAR(30),
	PASSWORD VARCHAR(100)
);
ALTER TABLE login_masuk CHANGE PASSWORD PASSWORD VARCHAR(1000)

CREATE OR REPLACE TABLE informasi_beranda (
	id INT AUTO_INCREMENT PRIMARY KEY,
	gambar VARCHAR(100),
	judul VARCHAR(100),
	hadis_arab VARCHAR(100),
	arti VARCHAR(250)		
); 

INSERT INTO informasi_beranda VALUES
("","/photos/makan.JPEG","Ingat Sebelum Makan membaca doa Makan","الَّلهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا، وَقِنَا عَذَابَ النَّارِ","Dengan nama Alloh yang Maha Pengasih,Maha Penyayang. ya Alloh, berkahilah rezaki yang Engkau berikan kepada kami, dan karuniakanlah rezaki yang baik dari itu dan perilihara kami dari siksa api neraka."),
("","/photos/setelah_makan.JPG","Ingat setelah makan jangan lupa membaca","الْحَمْدُ لِلَّهِ الَّذِى أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ","Segala puji bagi Allah yang memberi kami makan dan minum serta menjadikan kami orang-orang yang berserah diri."),
("","/photos/bangun.JPG","Mari kita setalah bangun tidur membaca","الْحَمْدُ للهِ الَّذِى أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُوْرُ", " Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami dan kepada-Nyalah kami kembali."),
("","/photos/tidur.JPEG","Sebelum tidur sebaik nya membaca ","بِسْمِكَ االلّٰهُمَّ اَحْيَا وَبِاسْمِكَ اَمُوْتُ","“Dengan menyebut nama-Mu, Ya Allah, aku hidup dan dengan menyebut nama-Mu aku mati”.");

CREATE OR REPLACE TABLE admin_alquran(
	id INT AUTO_INCREMENT PRIMARY KEY,
	username VARCHAR(30),
	PASSWORD VARCHAR(100)
);
ALTER TABLE admin_alquran CHANGE PASSWORD PASSWORD VARCHAR(1000);

INSERT INTO admin_alquran VALUES("","Ganteng","123");

CREATE OR REPLACE TABLE soal(
	nomor INT PRIMARY KEY ,
	soal TEXT,
	pilihan_A TEXT,
	pilihan_B TEXT,
	pilihan_C TEXT,
	pilihan_D TEXT,
	jawaban TEXT
	);  
CREATE OR REPLACE TABLE suroh_alquran (
	suroh INT AUTO_INCREMENT PRIMARY KEY,
	nama_suroh VARCHAR(100)
);
CREATE  OR REPLACE TABLE ayat_alquran(
	ayat INT,
	isi_ayat TEXT,
	arti TEXT,
	nomor_suroh INT,
	FOREIGN KEY (nomor_suroh) REFERENCES suroh_alquran (suroh)
);
INSERT INTO suroh_alquran VALUES("","AL-Ikhlas"),("","AL-falaq");

INSERT INTO ayat_alquran VALUES
(1,"قُلۡ هُوَ اللّٰهُ اَحَدٌ‌",'1. Katakanlah (Muhammad), "Dialah Allah, Yang Maha Esa.',1),
(2,"اَللّٰهُ الصَّمَدُ‌","2. Allah tempat meminta segala sesuatu." ,1),
(3,"لَمۡ يَلِدۡ ۙ وَلَمۡ يُوۡلَدۡ","3. (Allah) tidak beranak dan tidak pula diperanakkan.",1),
(4,"وَلَمۡ يَكُنۡ لَّهٗ كُفُوًا اَحَدٌ‌","4. Dan tidak ada sesuatu yang setara dengan Dia.",1),
(1,"قُلۡ اَعُوۡذُ بِرَبِّ الۡفَلَقِۙ",'1. Katakanlah, "Aku berlindung kepada Tuhan yang menguasai subuh (fajar),',2),
(2,"مِنۡ شَرِّ مَا خَلَقَۙ‌","2. dari kejahatan (makhluk yang) Dia ciptakan,",2),
(3,"وَمِنۡ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ‌","3. dan dari kejahatan malam apabila telah gelap gulita,",2),
(4,"وَمِنۡ شَرِّ النَّفّٰثٰتِ فِى الۡعُقَدِۙ","4. dan dari kejahatan (perempuan-perempuan) penyihir yang meniup pada buhul-buhul (talinya),",2),
(5,"وَمِنۡ شَرِّ حَاسِدٍ اِذَا حَسَدَ",'5. dan dari kejahatan orang yang dengki apabila dia dengki.',2);

