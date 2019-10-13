var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var model = {
    title: 'My favorite Azure',
    mesage: process.env.MESSAGE || "This is development .. and you are watching a MAGIC"
  };
  res.render('index', model);
});

module.exports = router;
