var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user', {
    layout: 'layout.html',
    title: 'this is user page',
    name: 'default'
  });
});

module.exports = router;
