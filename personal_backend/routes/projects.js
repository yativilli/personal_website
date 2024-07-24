var express = require('express');
var db = require('../services/dbService');
var router = express.Router();

/* Read Projects from Database */
router.get('/all', function (req, res, next) {
  try {
    db.getProjects(res);
  } catch (err) {
    res.status(500).send('Error retrieving projects data');
  }
})

router.get('/:uid', function (req, res, next) {
  var id = req.params.uid;
  try {
    db.getProjectById(id, res);
  } catch (err) {
    res.status(500).send('Error retrieving projects data');
  }
})

/* Create Project */
router.post('/new', function (req, res, next) {
  var project = req.body;
  db.addProject(project, res);
});

/* Edit Project */
router.patch('/:uid', function (req, res, next) {
  var id = req.params.uid;
  var project = req.body;
    db.updateProject(id, project, res);
});

/* Delete Project */
router.delete('/:id', function (req, res, next) {
  var id = req.params.id;
  db.deleteProject(id, res);
});

module.exports = router;
