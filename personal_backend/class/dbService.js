const mariadb = require('mariadb');

class dbService {

  static async queryDB(res){
    const pool = mariadb.createPool({
      host: 'localhost',
      user: 'root',
      password: '',
      connectionLimit: 5,
  })
  try {
    const result = await pool.query('SELECT * FROM personal_website.projects');
    console.log(result);
    res.send(result);
   } finally {
    pool.end();
   }
  }
}

module.exports = dbService