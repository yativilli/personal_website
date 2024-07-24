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
    }catch(err){
      console.log(err);
      res.sendStatus(400);
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
      res.sendStatus(400)
    }
    finally {
      pool.end();
    }
  }

  static async addProject(project, res) {
    if (project.id != null || project.id != undefined) {
      var projectString = "'" + project.name.toString() + "','" + project.description.toString() + "','" + project.repository.toString() + "','" + project.image.toString() 
      + "','" + project.in_collaboration_with.toString() + "','" + project.technology.toString() + "','" + project.purpose.toString() + "','" + project.status.toString() + "'";
      const pool = mariadb.createPool({ host: dbhost, user: dbuser, password: dbpassword, connectionLimit: dbconnectionLimit })
      try {
        
        const result = await pool.query('INSERT INTO personal_website.projects (name, description, repository, image, in_collaboration_with, technology, purpose, status) VALUES' +
          "(" + projectString + ");"
        );
        res.sendStatus(200);
      } catch (err) {
        console.log(err)
        res.sendStatus(500)
      }
      finally {
        pool.end();
      }
   }else{
    res.sendStatus(400)
   }
  }

  static async updateProject(id, project, res) {
    if (project.id != null || project.id != undefined) {
      var projectString = "name='" + project.name + "', description='" + project.description + "', repository='" + project.repository 
      + "', image='" + project.image + "', in_collaboration_with='" + project.in_collaboration_with +
      "', technology='" + project.technology + "', purpose='" + project.purpose + "', status='" + project.status + "'";
      const pool = mariadb.createPool({ host: dbhost, user: dbuser, password: dbpassword, connectionLimit: dbconnectionLimit })
      try {
        const result = await pool.query('UPDATE personal_website.projects SET ' + projectString + 'WHERE id="' + id.toString() + '";');
        res.sendStatus(200);
      } catch (err) {
        console.log(err)
        res.sendStatus(500)
      }
      finally {
        pool.end();
      }
    } else{
      res.sendStatus(400)
    }
  }

  static async deleteProject(id, res) {
    const pool = mariadb.createPool({ host: dbhost, user: dbuser, password: dbpassword, connectionLimit: dbconnectionLimit })
    try {
      const result = await pool.query('DELETE FROM personal_website.projects WHERE id="' + id.toString()+ '";');
      res.sendStatus(200);
    } catch (err) {
      console.log(err)
      res.sendStatus(500)
    }
    finally {
      pool.end();
    }
  }
}

module.exports = dbService