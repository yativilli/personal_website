var express = require('express');
var inf = require('../services/infoService');
var router = express.Router();

/* GET General Info page. */
router.get('/', function (req, res, next) {
   res.send(inf.getInfo());
});

router.get('/name', function (req, res, next) {
    res.send(inf.getName());
});

router.get('/v/app', function (req, res, next) {
    res.send(inf.getVersion());
});

router.get('/v/express', function (req, res, next) {
    res.send(inf.getExpressVersion());
});

router.get('/v/jade', function (req, res, next) {
    res.send(inf.getJadeVersion());
});

module.exports = router;
