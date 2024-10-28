var express = require('express');
var inf = require('../services/infoService');
const { version } = require('mariadb');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({title: "Personal Website", version: inf.getVersion(), author: inf.getAuthor()})) 
});

router.get('/mysql', function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({host: process.env.SQL_HOST, port: process.env.SQL_PORT, db: process.env.SQL_DB, user: process.env.SQL_USR, pass: process.env.SQL_PASS})) 
})

module.exports = router;
