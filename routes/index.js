var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/generic', function (req, res, next) {
  res.render('generic')
})

router.get('/elements', function (req, res, next) {
  res.render('elements')
})

module.exports = router;
