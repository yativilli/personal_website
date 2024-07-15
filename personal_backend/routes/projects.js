var express = require('express');
var db  = require('../services/dbService');
var router = express.Router();

/* GET users listing. */
router.get('/all',  function (req, res, next){
  try {
      db.getProjects(res);
  } catch (err) {
      res.status(500).send('Error retrieving projects data');
  }
})

router.get('/:uid',  function (req, res, next){
  try {
      db.getProjectById(req.params.uid, res);
  } catch (err) {
      res.status(500).send('Error retrieving projects data');
  }
})

router.get('/:uid', function (req, res, next) {
  res.send(req.params.uid);
});


module.exports = router;
