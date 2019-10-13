var express = require('express');
var router = express.Router();
const fs = require('fs')
/* GET home page. */
router.get('/', function(req, res, next) {
  var model = {
    title: 'My favorite Azure',
    mesage: process.env.MESSAGE || "Hola ... hiiiiiiiiii  esta es una MAGIC ....."
  };
  res.render('index', model);
});

module.exports = router;
