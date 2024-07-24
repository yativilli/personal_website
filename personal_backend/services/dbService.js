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
      res.send(result);
    } finally {
      pool.end();
    }
  }

  static async getProjectById(id, res) {
    const pool = mariadb.createPool({ host: dbhost, user: dbuser, password: dbpassword, connectionLimit: dbconnectionLimit })
    try {
      const result = await pool.query('SELECT * FROM personal_website.projects WHERE id=' + id.toString());
      res.send(result);
    } catch (err) {
      console.log(err)
    }
    finally {
      pool.end();
    }
  }

  static async addProject(project, res) {
    if (typeof project == "Project") {
      var projectString = project.id + "," + project.name + "," + project.description + "," + project.repository + "," + project.image + "," + project.in_collaboration_with +
      "," + project.technology + "," + project.purpose + "," + project.status;
      const pool = mariadb.createPool({ host: dbhost, user: dbuser, password: dbpassword, connectionLimit: dbconnectionLimit })
      try {
        const result = await pool.query('INSERT INTO personal_website.projects (id, name, description, repository, image, in_collaboration_with, technology, purpose, status) VALUES' +
          '(' + projectString + ');'
        );
        res.send(result);
      } catch (err) {
        console.log(err)
      }
      finally {
        pool.end();
      }
    }
  }

  static async updateProject(project, res) {
    if (typeof project == "Project") {
      var projectString = "id=" + project.id + ", name=" + project.name + ", description=" + project.description + ", repository=" + project.repository 
      + ", image=" + project.image + ", in_collaboration_with=" + project.in_collaboration_with +
      ", technology=" + project.technology + ", purpose=" + project.purpose + ", status=" + project.status;
      const pool = mariadb.createPool({ host: dbhost, user: dbuser, password: dbpassword, connectionLimit: dbconnectionLimit })
      try {
        const result = await pool.query('UPDATE personal_website.projects SET ' + projectString + 'WHERE id=' + project.id.toString());
        res.send(result);
      } catch (err) {
        console.log(err)
      }
      finally {
        pool.end();
      }
    }
  }

  static async deleteProject(id, res) {
    const pool = mariadb.createPool({ host: dbhost, user: dbuser, password: dbpassword, connectionLimit: dbconnectionLimit })
    try {
      const result = await pool.query('DELETE FROM personal_website.projects WHERE id=' + id.toString());
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