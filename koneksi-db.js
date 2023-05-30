import mariadb from 'mariadb';

const pool = mariadb.createPool({
    host : "localhost",
    user : "root",
    database : "quran"
});

const conn = await pool.getConnection();
export default conn;
