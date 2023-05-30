import express from "express";
import jwt from "jsonwebtoken";
import multer from "multer";
import {
  loginId,
  regis,
  beranda,
  loginAdmin,
  postSoal,
  getSoal,
  putSoal,
  deleteSoal,
  getQuran,
  getDaftar,
  getProfil,
} from "./routes/al-quran-routes.js";
import login,{me} from "./routes/auth-routes.js";

const app = express();

app.use(express.static("public"));
app.use(express.json());

function auth(req, res, next) {
  if (req.headers.authorization) {
    // untuk menghilangkan fecht 500
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "rahasia", async (err, decoded) => {
      if (!err) {
        req.account = decoded;
        next();
      } else {
        res.status(401).send("Token salah.");
      }
    });
  } else {
    res.send("Token belum dimasukkan");
  }
}
const upload = multer({ dest: "public/photos" });

app.post("/api/login", login); // dipakek
app.post("/api/registrasi", upload.single("photo"), regis); // dipakek

app.use(auth);

app.get("/api/registrasi/:id", getProfil);
app.get("/api/beranda", beranda);
app.get("/api/admin", loginAdmin);
app.post("/api/admin/soal", postSoal);
app.put("/api/admin/edit", putSoal);
app.delete("/api/admin/delete", deleteSoal);
app.get("/api/soal", getSoal);
app.get("/api/me", loginId);
app.get("/api/get/suroh", getDaftar);
app.get("/api/user/al-qur1an/:id", getQuran);
app.get("/api/me", me);
app.listen(3000);
