var express = require('express');
var inf = require('../services/infoService');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index',
    {
      title: 'My Personal Website',
      version: inf.getVersion(),
      dependencies: inf.getDependencies(),
    });
});

module.exports = router;
