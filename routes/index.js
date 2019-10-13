var express = require('express');
var router = express.Router();
const fs = require('fs')
/* GET home page. */
router.get('/', function(req, res, next) {
  var model = {
    title: 'BR000000 ---> This is My favorite Azure',
    mesage: process.env.MESSAGE || "Hola ... hiiiiiiiiii  esta es una MAGIC ....."
  };
  res.render('index', model);
});

module.exports = router;
