var express = require('express');
var inf = require('../class/infoService');
var db  = require('../class/dbService');
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

router.get('/db',  function (req, res, next){
    try {
        db.queryDB(res);
    } catch (err) {
        res.status(500).send('Error retrieving projects data');
    }
})

module.exports = router;
