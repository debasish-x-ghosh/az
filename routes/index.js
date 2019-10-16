var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
var model = {
  title: 'Fine Azure Express',
  message: process.env.MESSAGE || "Super - This is development"
 };

  res.render('index', model);
});

module.exports = router;
