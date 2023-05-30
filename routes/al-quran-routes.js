import conn from "../koneksi-db.js";

export async function loginId(req, res) {
  res.send(req.account);
}

export async function regis(req, res) {
  await conn.query(
    `INSERT INTO login_masuk VALUES
      (NULL,"${req.body.nama}","${req.body.email}","${req.file.filename}","${req.body.username}","${req.body.password}")`
  );
  res.send("data berhasil di tampah");
}

export async function beranda(_req, res) {
  const rows = await conn.query("select * from informasi_beranda");
  res.send(rows);
}

export async function loginAdmin(_req, res) {
  const rows = await conn.query("select * from admin_alquan");
  res.send(rows);
}
export async function postSoal(req, res) {
  await conn.query(
    `INSERT INTO soal VALUES("${req.body.nomor}","${req.body.soal}","${req.body.pilihA}","${req.body.pilihB}","${req.body.pilihC}","${req.body.pilihD}","${req.body.jawaban}")`
  );
  res.send("Soal Berhasil Di tambahkan");
}
export async function getSoal(_req, res) {
  const rows = await conn.query("select * from soal");
  res.send(rows);
}

export async function putSoal(req, res) {
  const q = `UPDATE soal SET soal =" ${req.body.soal}",pilihan_A = "${req.body.pilihA}",pilihan_B = "${req.body.pilihB}",pilihan_C = "${req.body.pilihC}",pilihan_D = "${req.body.pilihD}",jawaban = "${req.body.jawaban}" WHERE nomor = "${req.body.kode}"`;
  await conn.query(q);
  res.send(`Edit soal berhasil`);
}

export async function deleteSoal(req, res) {
  const data = parseInt(req.body.nomor);
  await conn.query(`DELETE FROM soal WHERE nomor = ${data}`);
  res.send("data berhasil di hapus");
}
export async function getQuran(req, res) {
  const data = await conn.query(`SELECT suroh_alquran.*,ayat_alquran.*
  FROM suroh_alquran 
  INNER JOIN ayat_alquran 
  ON suroh_alquran.suroh = ayat_alquran.nomor_suroh && suroh_alquran.suroh = "${req.params.id}"`);
  res.send(data);
}

export async function getDaftar(req, res) {
  const data = await conn.query("select * From suroh_alquran");
  res.send(data);
}

export async function getProfil(req,res) {
  const data = await conn.query(`select * from login_masuk where id = ${req.params.id} `);
  res.send(data);
}