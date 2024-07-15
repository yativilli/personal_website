const mariadb = require('mariadb');
const dbhost = 'localhost';
const dbuser = 'root';
const dbpassword = '';
const dbconnectionLimit = 5;


class dbService {

  static async getProjects(res) {
    const pool = mariadb.createPool({ host: dbhost, user: dbuser, password: dbpassword, connectionLimit: dbconnectionLimit })
    try {
      const result = await pool.query('SELECT * FROM personal_website.projects');
      console.log(result);
      res.send(result);
    } finally {
      pool.end();
    }
  }

  static async getProjectById(id, res) {
    const pool = mariadb.createPool({ host: dbhost, user: dbuser, password: dbpassword, connectionLimit: dbconnectionLimit })
    try {
      const result = await pool.query('SELECT * FROM personal_website.projects WHERE id=' + id.toString());
      console.log(result);
      res.send(result);
    } catch (err) {
      console.log(err)
    }
    finally {
      pool.end();
    }
  }
}

module.exports = dbService