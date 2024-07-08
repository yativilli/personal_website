var express = require('express');
var package = require('../package.json');
var router = express.Router();

/* GET General Info page. */
router.get('/', function (req, res, next) {
    var obj = {
        "name": package.name,
        "version": package.version,
    }
    res.send(obj);
});

router.get('/version', function (req, res, next) {
    res.send(package.version);
});

router.get('/name', function (req, res, next) {
    res.send(package.name);
});

router.get('/v/express', function (req, res, next) {
    res.send(package.dependencies.express.toString().replace("^", ""));
});

router.get('/v/jade', function (req, res, next) {
    res.send(package.dependencies.jade.toString().replace("^", ""));
});

module.exports = router;
