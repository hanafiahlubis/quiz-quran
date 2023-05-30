import conn from "../koneksi-db.js";

import jwt from "jsonwebtoken";

export default async function login(req, res) {
  let rows = await conn.query(
    `SELECT * FROM login_masuk WHERE username = '${req.body.username}'`
  );
  if (rows.length === 0) {
    rows = await conn.query(
      `SELECT * FROM admin_alquran WHERE username = "${req.body.username}"`
    );
  }

  if (rows.length > 0) {
    if (
      req.body.password === rows[0].password &&
      req.body.username === rows[0].username
    ) {
      const token = jwt.sign(rows[0], "rahasia");
      if (rows[0].email) {
        res.send({
          token: token,
          role: "user",
        });
      } else {
        res.send({
          token: token,
          role: "admin",
        });
      }
    } else {
      res.status(401).send("akun tidak di temukan.");
    }
  } else {
    res.status(401).send("Nama pengguna tidak ditemukan.");
  }
}

export function me(req, res) {
  res.send(req.user);
}
