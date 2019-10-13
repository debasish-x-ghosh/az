var express = require('express');
var router = express.Router();
const fs = require('fs')
/* GET home page. */
router.get('/', function(req, res, next) {
  var model = {
    title: 'Hola ninos ..  This is My favorite Azure',
    message: process.env.MESSAGE || "This is development -esta es una MAGIC ....."
  };
  res.render('index', model);
});

module.exports = router;
